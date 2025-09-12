import Back from "@assets/back.svg?react";
import Phone from "@assets/phone.svg?react";
import User from "@assets/user.svg?react";
import { useNavigate } from "react-router-dom";
import SetAvatar from "../../components/set-avatar";

function MyProfilePage() {
  const navigate = useNavigate();
  const myFullName = "AmirAbbas Sadri";
  const myPhone = 9120075897;

  return (
    <main className="flex flex-col items-center gap-4 p-4">
      <div className="flex items-start justify-between w-full">
        <Back
          width={32}
          height={32}
          onClick={() => navigate(-1)}
          className="cursor-pointer"
        />
        <SetAvatar avatar={"" as string} />
        <button
          type="button"
          className="cursor-pointer text-blue-500 font-semibold"
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
            value={myFullName}
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
            value={myPhone}
            readOnly
          />
        </div>
        <div className="bg-white flex flex-col px-4 rounded-lg divide-y-[1px] divide-gray-300 text-blue-500">
          <p className="py-2 cursor-pointer">Share</p>
          <p className="py-2 cursor-pointer">All Contacts</p>
          <p className="py-2 cursor-pointer">Emergency Contacts</p>
          <p className="py-2 cursor-pointer">Favorite List</p>
          <p className="py-2 cursor-pointer">Groups</p>
          <p className="py-2 cursor-pointer">Manage Contacts</p>
        </div>
        <div className="bg-white flex flex-col px-4 rounded-lg divide-y-[1px] divide-gray-300 text-red-500">
          <p className="py-2 cursor-pointer">Trash</p>
          <p className="py-2 cursor-pointer">Blocked Contacts</p>
        </div>
      </section>
    </main>
  );
}

export default MyProfilePage;
