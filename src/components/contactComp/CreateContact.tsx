import { Button, Modal, Radio, Label, TextInput } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import {
  addContact,
  editContact,
  setContactId,
} from "../../features/contact/contactSlice";
import { Contact } from "../../models/contact.model";
import { RootState } from "../../app/store";

type Props = {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const ContactModal = ({ modal, setModal }: Props) => {
  const contacts = useSelector((state: RootState) => state.contact.contacts);
  const contactId = useSelector((state: RootState) => state.contact.contactId);
  const initialContact = contacts.find((contact) => contact.id === contactId);
  const dispatch = useDispatch();

  // handleSubmit for create new contact and edit contact
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      firstName: { value: string };
      lastName: { value: string };
      status: { value: string };
    };

    // new contact data
    const newContact: Contact = {
      id: initialContact?.id || new Date().toString(),
      firstName: target.firstName.value,
      lastName: target.lastName.value,
      status: target.status.value,
    };

    if (initialContact) {
      dispatch(editContact(newContact));
    } else {
      dispatch(addContact(newContact));
    }

    dispatch(setContactId(null));
    setModal(false);
  };

  // handleCancel for close modal
  const handleCancel = (): void => {
    dispatch(setContactId(null));
    setModal(false);
  };
  return (
    <>
      <Button onClick={() => setModal(true)} className="m-auto">
        Create Contact
      </Button>
      <Modal show={modal} onClose={handleCancel}>
        <Modal.Header>
          {initialContact ? "Edit" : "Create"} Contact
        </Modal.Header>
        <form className="flex flex-col gap-4" onSubmit={(e) => handleSubmit(e)}>
          <Modal.Body className="space-y-6">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="firstName" value="First Name" />
              </div>
              <TextInput
                id="firstName"
                name="firstName"
                placeholder="John"
                required
                type="text"
                defaultValue={initialContact?.firstName}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="lastName" value="Last Name" />
              </div>
              <TextInput
                id="lastName"
                placeholder="Weak"
                required
                type="text"
                defaultValue={initialContact?.lastName}
              />
            </div>
            <fieldset className="flex max-w-md flex-col gap-4" id="radio">
              <legend className="mb-4 dark:text-gray-300 font-medium text-gray-900 text-sm">
                Status
              </legend>
              <div className="flex items-center gap-2">
                <Radio
                  defaultChecked={initialContact?.status === "Active"}
                  id="active"
                  name="status"
                  value="Active"
                  required
                />
                <Label htmlFor="active">Active</Label>
              </div>
              <div className="flex items-center gap-2">
                <Radio
                  defaultChecked={initialContact?.status === "Inactive"}
                  id="inactive"
                  name="status"
                  value="Inactive"
                />
                <Label htmlFor="inactive">Inactive</Label>
              </div>
            </fieldset>
          </Modal.Body>
          <Modal.Footer className="justify-between">
            <Button color="gray" onClick={handleCancel}>
              Cancel
            </Button>
            <Button type="submit"> {initialContact ? "Edit" : "Create"}</Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default ContactModal;
