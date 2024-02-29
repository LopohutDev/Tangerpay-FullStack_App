import React, { useEffect, useState } from "react";
import Header from "./layout/header";
import CreateContact from "./components/create-contact";
import ListContacts from "./components/list-contacts";
import axios from "axios";
import SelectedDetail from "./components/selected-detail";

export interface ContactDetail {
  name: string;
  phoneNumber: string;
  id: string;
}

function App() {
  const [refetch, setRefetch] = useState(false);
  const [contactList, setContactList] = useState<ContactDetail[]>([]);
  const [selectedId, setSelectedId] = useState<string | undefined>();

  const fetchAllContacts = async () => {
    try {
      const response = await axios(
        "http://localhost:8080/retrieveAllContactDetails"
      );

      setContactList(response.data);

      console.log(response);
    } catch (error) {}
  };

  useEffect(() => {
    fetchAllContacts();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setRefetch(false);
    }, 1000);

    if (refetch) fetchAllContacts();
  }, [refetch]);

  return (
    <div className="bg-gray-50 flex flex-col h-screen">
      <Header />
      <CreateContact setRefetch={setRefetch} />
      <div className="flex flex-1 gap-5">
        <ListContacts setSelectedId={setSelectedId} contactList={contactList} />
        <SelectedDetail id={selectedId} />
      </div>
    </div>
  );
}

export default App;
