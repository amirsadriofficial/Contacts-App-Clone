import { useMemo, useState } from "react";
import Delete from "../../assets/delete.svg?react";
import Edit from "../../assets/edit.svg?react";

import type { IContactItem } from "../../types";

interface IContactItemProps {
  contact: IContactItem;
}

function ContactItem({ contact }: IContactItemProps) {
  const [imgError, setImgError] = useState(false);

  // Generate random background color for broken avatars
  const bgColor = useMemo(() => {
    const colors = [
      "bg-red-500",
      "bg-blue-500",
      "bg-green-500",
      "bg-yellow-500",
      "bg-purple-500",
      "bg-pink-500",
      "bg-indigo-500",
    ];
    const index = contact.title.charCodeAt(0) % colors.length;
    return colors[index];
  }, [contact.title]);

  return (
    <div className="p-2 flex items-center justify-between">
      <div className="flex items-center gap-2">
        {contact.image && !imgError ? (
          <img
            src={contact.image}
            alt="avatar"
            className="w-8 h-8 rounded-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold ${bgColor}`}
          >
            {contact.title?.[0]?.toUpperCase() || "?"}
          </div>
        )}
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
