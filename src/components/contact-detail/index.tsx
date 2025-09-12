import Email from "@assets/email.svg?react";
import Phone from "@assets/phone.svg?react";
import User from "@assets/user.svg?react";
import InputField from "../input-field";

interface ContactDetailsProps {
  fullName: string;
  phone: string | number;
  email?: string;
  readOnly?: boolean;
}

function ContactDetails({
  fullName,
  phone,
  email,
  readOnly = true,
}: ContactDetailsProps) {
  return (
    <section className="flex flex-col gap-4 w-full">
      <InputField
        icon={<User width={24} height={24} />}
        value={fullName}
        readOnly={readOnly}
      />
      <InputField
        icon={<Phone width={24} height={24} />}
        value={phone}
        readOnly={readOnly}
      />
      <InputField
        icon={<Email width={24} height={24} />}
        value={email || "No Email"}
        readOnly={readOnly}
      />
    </section>
  );
}

export default ContactDetails;
