import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ContactForm from "../../components/contact-form";
import type { IContactItem } from "../../types";

function EditContactPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [contact, setContact] = useState<IContactItem | null>(null);
  const [avatar, setAvatar] = useState<string | undefined>(undefined);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState<string | number>("");
  useEffect(() => {
    const storedContacts: IContactItem[] = JSON.parse(
      localStorage.getItem("contacts") || "[]"
    );
    const found = storedContacts.find((item) => item.id === id);
    if (found) {
      setContact(found);
      setAvatar(found.avatar);
      setFullName(found.fullName);
      setEmail(found.email as string);
      setPhone(found.phone);
    }
  }, [id]);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contact) return;
    const storedContacts: IContactItem[] = JSON.parse(
      localStorage.getItem("contacts") || "[]"
    );
    const updatedContacts = storedContacts.map((item) =>
      item.id === contact.id
        ? { ...item, fullName, phone, avatar, email }
        : item
    );
    localStorage.setItem("contacts", JSON.stringify(updatedContacts));
    navigate("/");
  };

  if (!contact) return <p className="p-4">Contact not found!</p>;

  return (
    <ContactForm
      avatar={avatar}
      setAvatar={setAvatar}
      fullName={fullName}
      setFullName={setFullName}
      phone={phone}
      setPhone={setPhone}
      email={email}
      setEmail={setEmail}
      onSubmit={handleSubmit}
      onCancel={() => navigate(-1)}
    />
  );
}

export default EditContactPage;
