import React from "react";
import { toast } from "react-toastify";
import Edit from "../../assets/edit.svg?react";
import FileUploader from "../file-uploader";

interface ISetAvatarProps {
  avatar: string | null;
  setAvatar: (img: string | null) => void;
}

function SetAvatar({ avatar, setAvatar }: ISetAvatarProps) {
  const notify = () =>
    toast("Image uploaded!", {
      type: "success",
      theme: "colored",
    });
  function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result as string;
      setAvatar(base64);
      notify();
    };
    reader.readAsDataURL(file);
  }

  return (
    <div className="relative max-w-fit">
      {avatar ? (
        <img
          src={avatar}
          alt="uploaded"
          className="rounded-full !h-[128px] !w-[128px] object-cover"
        />
      ) : (
        <div className="rounded-full !h-[128px] !w-[128px] bg-green-500 flex items-center justify-center text-white">
          No Avatar
        </div>
      )}
      <FileUploader
        className="flex justify-center items-center rounded-[8px] bg-white absolute bottom-0 right-0 box-shadow-3 h-[40px] w-[40px]"
        onChange={handleFileUpload}
      >
        <Edit width={20} height={20} />
      </FileUploader>
    </div>
  );
}

export default SetAvatar;
