import { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import NoContact from "../components/contactComp/NoContact";
import CreateContact from "../components/contactComp/CreateContact";
import ContactList from "../components/contactComp/ContactList";

type Props = {};

const Contacts = (props: Props) => {
  const contacts = useSelector((state: RootState) => state.contact.contacts);
  const [modal, setModal] = useState(false);
  return (
    <div className="mt-12">
      <CreateContact modal={modal} setModal={setModal} />
      {contacts.length === 0 && <NoContact />}
      <ContactList setModal={setModal} />
    </div>
  );
};

export default Contacts;
