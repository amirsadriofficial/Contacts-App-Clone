import Delete from "../../assets/delete.svg?react";
import Edit from "../../assets/edit.svg?react";

import type { IContactItem } from "../../types";

interface IContactItemProps {
  contact: IContactItem;
}

function ContactItem({ contact }: IContactItemProps) {
  return (
    <div className="p-2 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img
          src={contact.image}
          alt="avatar"
          className="w-8 h-8 rounded-full"
        />
        <p>{contact?.title}</p>
      </div>
      <div className="flex items-center gap-4">
        <Edit width={20} height={20} />
        <Delete width={20} height={20} fill="#f6f6f6" />
      </div>
    </div>
  );
}

export default ContactItem;
