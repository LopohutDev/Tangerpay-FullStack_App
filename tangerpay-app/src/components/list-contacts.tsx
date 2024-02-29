import React from "react";
import { Card } from "./ui/card";
import { ArrowRight } from "lucide-react";
import { ContactDetail } from "../App";

const ListContacts = ({
  contactList,
  setSelectedId,
}: {
  contactList: ContactDetail[];
  setSelectedId: React.Dispatch<React.SetStateAction<string | undefined>>;
}) => {
  return (
    <Card className="flex flex-1">
      {/* <h1>No contacts yet, add new contact</h1> */}

      <div className="w-full">
        {contactList.length > 0 ? (
          contactList.map(({ name, id }) => (
            <button
              key={id}
              onClick={() => {
                setSelectedId(id);
              }}
              className="p-5 border-b hover:bg-gray-300 transition-all duration-200 border-gray-300 w-full flex justify-between items-center"
            >
              <div>
                <h2 className="font-semibold">Name</h2>
                <p className="text-sm">{name}</p>
              </div>
              <ArrowRight />
            </button>
          ))
        ) : (
          <h1 className="text-5xl text-gray-300 font-bold">Create A Contact</h1>
        )}
      </div>
    </Card>
  );
};

export default ListContacts;
