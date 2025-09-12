import Delete from "@assets/delete.svg?react";
import Edit from "@assets/edit.svg?react";
import { useMemo, useState } from "react";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import type { IContactItem } from "../../types";
import DeleteConfirmation from "../delete-confirmation";

interface IContactItemProps {
  contact: IContactItem;
  onContactsChange?: () => void;
}

function ContactItem({ contact, onContactsChange }: IContactItemProps) {
  const navigate = useNavigate();
  const [imgError, setImgError] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const notify = () =>
    toast("Contact deleted!", {
      type: "success",
      theme: "colored",
    });
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
    const index = contact?.fullName?.charCodeAt(0) % colors.length;
    return colors[index];
  }, [contact.fullName]);
  // Handle delete inside the component
  const handleDelete = () => {
    const storedContacts: IContactItem[] = JSON.parse(
      localStorage.getItem("contacts") || "[]"
    );
    const updated = storedContacts.filter((item) => item.id !== contact.id);
    localStorage.setItem("contacts", JSON.stringify(updated));
    notify();
    setShowConfirm(false);
    if (onContactsChange) onContactsChange();
  };

  return (
    <div className="p-2 flex items-center justify-between rounded-lg bg-white">
      <div className="flex items-center gap-2">
        {contact.avatar && !imgError ? (
          <img
            src={contact.avatar}
            alt="avatar"
            className="w-8 h-8 rounded-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold ${bgColor}`}
          >
            {contact.fullName?.[0]?.toUpperCase() || "?"}
          </div>
        )}
        <p>{contact?.fullName}</p>
      </div>
      <div className="flex items-center gap-4">
        <Edit
          width={20}
          height={20}
          onClick={() => navigate(`/edit-contact/${contact?.id}`)}
        />
        <Delete
          width={20}
          height={20}
          className="cursor-pointer"
          onClick={() => setShowConfirm(true)}
        />
      </div>
      <DeleteConfirmation
        isOpen={showConfirm}
        onClose={() => setShowConfirm(false)}
        onConfirm={handleDelete}
      />
    </div>
  );
}

export default ContactItem;
