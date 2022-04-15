import { Contact } from '@prisma/client';
import Image from 'next/image';

interface ContactCardProps {
  contact: Contact;
}

export default function ContactCard(props: ContactCardProps) {
  return (
    <div className="flex p-4 border rounded-lg outline-dashed bg-gradient-to-tl from-gray-700 via-gray-900 to-black">
      <div className="my-auto">
        <Image
          src={props.contact.avatar}
          alt="Avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
      <div className="ml-4">
        <p className="text-xl text-white">
          {props.contact.firstName} {props.contact.lastName}
        </p>
        <p className="text-gray-200">{props.contact.email}</p>
      </div>
    </div>
  );
}