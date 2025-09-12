import Email from "@assets/email.svg?react";
import Phone from "@assets/phone.svg?react";
import User from "@assets/user.svg?react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SetAvatar from "../../components/set-avatar";
import type { IContactItem } from "../../types";

function EditContactPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [contact, setContact] = useState<IContactItem | null>(null);
  const [avatar, setAvatar] = useState<string | undefined>(undefined);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState<number | undefined>();
  // Load contact by ID
  useEffect(() => {
    const storedContacts: IContactItem[] = JSON.parse(
      localStorage.getItem("contacts") || "[]"
    );
    const found = storedContacts.find((item) => item.id === id);
    if (found) {
      setContact(found);
      setAvatar(found.avatar);
      setName(found.fullName);
      setPhone(found.phone || undefined);
    }
  }, [id]);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contact) return;
    const storedContacts: IContactItem[] = JSON.parse(
      localStorage.getItem("contacts") || "[]"
    );
    // update contact
    const updatedContacts = storedContacts.map((item) =>
      item.id === contact.id ? { ...item, fullName: name, phone, avatar } : item
    );
    localStorage.setItem("contacts", JSON.stringify(updatedContacts));
    navigate("/"); // go back home
  };
  const handleCancel = () => {
    navigate("/"); // discard changes
  };

  if (!contact) return <p className="p-4">Contact not found</p>;

  return (
    <main className="flex flex-col items-center gap-4 p-4">
      {/* Avatar */}
      <SetAvatar avatar={avatar || contact?.avatar} setAvatar={setAvatar} />
      {/* Form */}
      <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
        <div className="bg-white flex items-center gap-2 p-4 rounded-lg">
          <User width={24} height={24} />
          <input
            type="text"
            placeholder="Full Name"
            className="h-8 w-full border-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="bg-white flex items-center gap-2 p-4 rounded-lg">
          <Phone width={24} height={24} />
          <input
            type="number"
            placeholder="Phone Number"
            className="h-8 w-full border-none"
            value={phone}
            onChange={(e) => setPhone(Number(e.target.value))}
          />
        </div>
        <div className="bg-white flex items-center gap-2 p-4 rounded-lg">
          <Email width={24} height={24} />
          <input
            type="email"
            placeholder="Add Email"
            className="h-8 w-full border-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 absolute left-0 bottom-4 w-full">
          <button type="button" className="w-full" onClick={handleCancel}>
            Cancel
          </button>
          <button type="submit" className="w-full font-semibold text-black">
            Save
          </button>
        </div>
      </form>
    </main>
  );
}

export default EditContactPage;
