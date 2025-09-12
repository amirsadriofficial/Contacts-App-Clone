import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ContactForm from "../../components/contact-form";

function AddContactPage() {
  // State for contact data (not persisted yet)
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState<string>();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState<string | number>("");
  // Toast
  const notify = () =>
    toast("Contact saved!", {
      type: "success",
      theme: "colored",
    });
  // Save handler
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newContact = {
      id: crypto.randomUUID(),
      fullName,
      phone,
      email,
      avatar,
    };
    // Get existing contacts
    const existing = JSON.parse(localStorage.getItem("contacts") || "[]");
    // Save new one
    localStorage.setItem("contacts", JSON.stringify([...existing, newContact]));
    // Reset after saving
    setAvatar(undefined);
    setFullName("");
    setEmail("");
    setPhone("");
    notify();
    navigate(-1);
  };

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

export default AddContactPage;
