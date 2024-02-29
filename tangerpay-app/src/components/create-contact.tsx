import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, ZodType } from "zod";
import axios from "axios";

interface ContactData {
  name: string;
  phoneNumber: string;
}

const CreateContactSchema: ZodType<ContactData> = z.object({
  name: z.string().min(3, "Minimum of 3 letters"),
  phoneNumber: z.string().min(11, "Minimum is 11").max(11, "Maximum is 11"),
  // .regex(new RegExp("((^(+)(d){12}$)|(^d{11}$))"), "Must be PH number only."),
});

const CreateContact: React.FC<{
  setRefetch: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setRefetch }) => {
  const form = useForm<z.infer<typeof CreateContactSchema>>({
    resolver: zodResolver(CreateContactSchema),
  });

  const onSubmit = async (values: z.infer<typeof CreateContactSchema>) => {
    console.log(values);

    try {
      const response = await axios(
        "http://localhost:8080/recordContactDetails",
        {
          method: "POST",
          data: {
            name: values.name,
            phoneNumber: values.phoneNumber,
          },
        }
      );

      setRefetch(true);
    } catch (error) {}
  };

  return (
    <Card className="mb-5">
      <CardHeader>
        <CardTitle>Create Contact</CardTitle>
        <CardDescription>Input contact details here.</CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      id="name"
                      type="text"
                      placeholder="ex. Juan Dela Cruz"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      id="phoneNumber"
                      type="text"
                      placeholder="ex. 09123456789"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <div className="flex gap-5">
              <Button type="submit">Save</Button>
              <Button type="button" variant="outline" className="">
                Clear
              </Button>
            </div>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

export default CreateContact;
