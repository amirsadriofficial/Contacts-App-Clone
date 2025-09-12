import Email from "@assets/email.svg?react";
import Phone from "@assets/phone.svg?react";
import User from "@assets/user.svg?react";
import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SetAvatar from "../../components/set-avatar";

function AddContactPage() {
  // State for contact data (not persisted yet)
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState<string>();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
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
  // Cancel handler → just clear everything
  const handleCancel = () => {
    setAvatar(undefined);
    setFullName("");
    setEmail("");
    setPhone("");
    navigate(-1);
  };

  return (
    <main className="flex flex-col items-center gap-4 p-4">
      {/* Avatar uploader gets setter */}
      <SetAvatar avatar={avatar} setAvatar={setAvatar} />
      <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
        <div className="bg-white flex items-center gap-2 p-4 rounded-lg">
          <User width={24} height={24} />
          <input
            required
            type="text"
            placeholder="Full Name"
            className="h-8 w-full border-none"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="bg-white flex items-center gap-2 p-4 rounded-lg">
          <Phone width={24} height={24} />
          <input
            required
            type="number"
            placeholder="Phone Number"
            className="h-8 w-full border-none"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
          <button
            type="button"
            className="w-full cursor-pointer"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-full cursor-pointer text-black font-semibold"
          >
            Save
          </button>
        </div>
      </form>
    </main>
  );
}

export default AddContactPage;
