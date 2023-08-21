import { Button, Card } from "flowbite-react";
import { useDispatch } from "react-redux";
import { Contact } from "../../models/contact.model";
import {
  deleteContact,
  setContactId,
} from "../../features/contact/contactSlice";

type Props = {
  contact: Contact;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const SingleContact = ({ contact, setModal }: Props) => {
  const dispatch = useDispatch();

  // handleEditContact for open modal and set ContactId
  const handleEditContact = (contactId: string): void => {
    dispatch(setContactId(contactId));
    setModal(true);
  };

  return (
    <div className="mb-3 col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
      <Card className="max-w-sm h-full">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {contact.firstName} {contact.lastName}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <p>{contact.status}</p>
        </p>
        <Button
          color="gray"
          type="button"
          onClick={() => handleEditContact(contact.id)}
        >
          Edit
        </Button>
        <Button
          type="button"
          className="bg-red-900"
          onClick={() => dispatch(deleteContact(contact.id))}
        >
          Delete
        </Button>
      </Card>
    </div>
  );
};

export default SingleContact;
