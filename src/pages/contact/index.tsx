import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import DeleteConfirmation from "../../components/delete-confirmation";
import SetAvatar from "../../components/set-avatar";
import type { IContactItem } from "../../types";
import Back from "./../../assets/back.svg?react";
import Phone from "./../../assets/phone.svg?react";
import User from "./../../assets/user.svg?react";

function ContactPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [contact, setContact] = useState<IContactItem | undefined>(undefined);
  const [showConfirm, setShowConfirm] = useState(false);
  const notify = () =>
    toast("Contact deleted!", {
      type: "success",
      theme: "colored",
    });
  useEffect(() => {
    const storedContacts: IContactItem[] = JSON.parse(
      localStorage.getItem("contacts") || "[]"
    );
    const found = storedContacts.find((item) => item.id === id);
    if (found) {
      setContact(found);
    }
  }, [id]);
  const handleRedirectToEdit = () => {
    navigate(`/edit-contact/${contact?.id}`); // discard changes
  };
  const handleDelete = () => {
    const storedContacts: IContactItem[] = JSON.parse(
      localStorage.getItem("contacts") || "[]"
    );
    const updated = storedContacts.filter(
      (item) => item.id !== (contact as IContactItem).id
    );
    localStorage.setItem("contacts", JSON.stringify(updated));
    notify();
    setShowConfirm(false);
    navigate("/");
  };

  return (
    <main className="flex flex-col items-center gap-4 p-4">
      {/* Avatar uploader gets setter */}
      <div className="flex items-start justify-between w-full">
        <Back
          width={32}
          height={32}
          onClick={() => navigate(-1)}
          className="cursor-pointer"
        />
        <SetAvatar avatar={contact?.avatar as string} />
        <button
          type="button"
          className="cursor-pointer text-blue-500 font-semibold"
          onClick={handleRedirectToEdit}
        >
          Edit
        </button>
      </div>
      <section className="flex flex-col gap-4 w-full">
        <div className="bg-white flex items-center gap-2 p-2 rounded-lg">
          <User width={24} height={24} />
          <input
            required
            type="text"
            placeholder="Full Name"
            className="h-8 w-full border-none"
            value={contact?.fullName}
            readOnly
          />
        </div>
        <div className="bg-white flex items-center gap-2 p-2 rounded-lg">
          <Phone width={24} height={24} />
          <input
            required
            type="number"
            placeholder="Phone Number"
            className="h-8 w-full border-none"
            value={contact?.phone}
            readOnly
          />
        </div>
        <div className="bg-white flex flex-col px-4 rounded-lg divide-y-[1px] divide-gray-300 text-blue-500">
          <p className="py-2 cursor-pointer">Send Message</p>
          <p className="py-2 cursor-pointer">Share Contact</p>
          <p className="py-2 cursor-pointer">Add to Favorite</p>
        </div>
        <div className="bg-white flex flex-col px-4 rounded-lg divide-y-[1px] divide-gray-300 text-red-500">
          <p className="py-2 cursor-pointer">Block Contact</p>
          <p
            className="py-2 cursor-pointer"
            onClick={() => setShowConfirm(true)}
          >
            Delete Contact
          </p>
        </div>
      </section>
      <DeleteConfirmation
        isOpen={showConfirm}
        onClose={() => setShowConfirm(false)}
        onConfirm={handleDelete}
      />
    </main>
  );
}

export default ContactPage;
