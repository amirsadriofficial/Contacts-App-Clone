// src/components/contact/ContactForm.tsx
import Email from "@assets/email.svg?react";
import Phone from "@assets/phone.svg?react";
import User from "@assets/user.svg?react";
import { type FormEvent } from "react";
import InputField from "../input-field";
import SetAvatar from "../set-avatar";

interface IContactFormProps {
  avatar?: string;
  setAvatar?: (val: string | undefined) => void;
  fullName: string;
  setFullName: (val: string) => void;
  phone: string | number;
  setPhone: (val: string | number) => void;
  email: string;
  setEmail: (val: string) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onCancel: () => void;
}

function ContactForm({
  avatar,
  setAvatar,
  fullName,
  setFullName,
  phone,
  setPhone,
  email,
  setEmail,
  onSubmit,
  onCancel,
}: IContactFormProps) {
  return (
    <main className="flex flex-col items-center gap-4 p-4">
      <SetAvatar avatar={avatar} setAvatar={setAvatar} />
      <form className="flex flex-col gap-4 w-full" onSubmit={onSubmit}>
        <InputField
          icon={<User width={24} height={24} />}
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <InputField
          icon={<Phone width={24} height={24} />}
          type="number"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <InputField
          icon={<Email width={24} height={24} />}
          type="email"
          placeholder="Add Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="flex items-center gap-2 absolute left-0 bottom-4 w-full">
          <button
            type="button"
            className="w-full cursor-pointer"
            onClick={onCancel}
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

export default ContactForm;
