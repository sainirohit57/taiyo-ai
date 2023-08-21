import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import SingleContact from "./SingleContact";

type Props = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const ContactList = ({ setModal }: Props) => {
  const contacts = useSelector((state: RootState) => state.contact.contacts);

  const renderContacts = (): JSX.Element[] => {
    return contacts.map((contact) => {
      return (
        <SingleContact key={contact.id} contact={contact} setModal={setModal} />
      );
    });
  };

  return (
    <div className="grid grid-cols-12 gap-4 mt-12">{renderContacts()}</div>
  );
};

export default ContactList;
