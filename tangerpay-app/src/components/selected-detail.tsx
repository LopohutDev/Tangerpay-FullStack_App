import React, { useEffect, useState } from "react";
import { Card } from "./ui/card";
import axios from "axios";
import { ContactDetail } from "../App";

const SelectedDetail = ({ id }: { id?: string }) => {
  const [specificDetail, setSpecificDetail] = useState<ContactDetail>();

  useEffect(() => {
    const fetchSelectedContact = async () => {
      try {
        const newDetails = await axios(
          `http://localhost:8080/retrieveContactDetails/${id}`
        );

        setSpecificDetail(newDetails.data);
      } catch (error) {}
    };

    fetchSelectedContact();
  }, [id]);

  return (
    <Card className="flex flex-col flex-1 justify-center items-center p-5">
      {id ? (
        <div className="max-w-lg w-full">
          <div className="mb-5">
            <h2 className="font-semibold text-xl">Name:</h2>
            <p className="text-2xl">{specificDetail?.name}</p>
          </div>
          <div>
            <h2 className="font-semibold text-xl">Phone Number:</h2>
            <p className="text-2xl">{specificDetail?.phoneNumber}</p>
          </div>
        </div>
      ) : (
        <h1 className="text-5xl text-gray-300 font-bold">Select a Contact</h1>
      )}
    </Card>
  );
};

export default SelectedDetail;
