import { Card } from "flowbite-react";

type Props = {};

const NoContact = (props: Props) => {
  return (
    <Card className="max-w-sm text-center m-auto mt-16">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <p>No Contact</p>
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        <p>No Contact fount Please add contact from Create Contact Button</p>
      </p>
    </Card>
  );
};

export default NoContact;
