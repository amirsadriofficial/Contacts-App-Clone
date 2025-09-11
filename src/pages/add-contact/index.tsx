import type { FormEvent } from "react";
import EditAvater from "../../components/edit-avater";
import Phone from "./../../assets/phone.svg?react";
import User from "./../../assets/user.svg?react";

function AddContactPage() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <main className="flex flex-col items-center gap-4 p-4">
      <EditAvater image={""} />
      <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
        <div className="bg-white flex items-center gap-2 p-4 rounded-lg">
          <User width={24} height={24} />
          <input
            type="text"
            placeholder="Full Name"
            className="h-8 w-full border-none"
          />
        </div>
        <div className="bg-white flex items-center gap-2 p-4 rounded-lg">
          <Phone width={24} height={24} />
          <input
            type="number"
            placeholder="Phone Number"
            className="h-8 w-full border-none"
          />
        </div>
        <div className="flex items-center gap-2 absolute left-0 bottom-4 w-full">
          <button type="button" className="w-full">
            Cancle
          </button>
          <button type="submit" className="w-full">
            Save
          </button>
        </div>
      </form>
    </main>
  );
}

export default AddContactPage;
