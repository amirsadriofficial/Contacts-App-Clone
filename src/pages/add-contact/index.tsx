import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SetAvatar from "../../components/set-avatar";
import Phone from "./../../assets/phone.svg?react";
import User from "./../../assets/user.svg?react";

function AddContactPage() {
  // State for contact data (not persisted yet)
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState<string | null>(null);
  const [fullName, setFullName] = useState("");
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
    setAvatar(null);
    setFullName("");
    setPhone("");
    notify();
    navigate(-1);
  };
  // Cancel handler → just clear everything
  const handleCancel = () => {
    setAvatar(null);
    setFullName("");
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
