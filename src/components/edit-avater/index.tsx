// import { uploadProfileImage } from "@src/utils/helpers/upload-profile";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Edit from "../../assets/edit.svg?react";
import FileUploader from "../file-uploader";

function EditAvater({ image }: { image?: string }) {
  const [media, setMedia] = useState<File | undefined>();
  const notify = () =>
    toast("Profile image updated successfully", {
      type: "success",
      theme: "colored",
    });
  useEffect(() => {
    if (!media) return;
    fetch("media")
      .then(() => {
        notify();
      })
      .catch((err) => {
        console.error("Media upload failed", err);
      });
  }, [media]);

  return (
    <div className="relative max-w-fit">
      {media || image ? (
        <img
          src={media?.name || image}
          alt="uploaded"
          className="rounded-full !h-[128px] !w-[128px] object-cover"
        />
      ) : (
        <div className="rounded-full !h-[128px] !w-[128px] bg-green-500" />
      )}
      <FileUploader
        className="flex justify-center items-center rounded-[8px] bg-white absolute bottom-0 right-0 box-shadow-3 h-[40px] w-[40px]"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          const files = event.target.files;
          if (files && files.length > 0) {
            const file = files?.[0];
            const formData = new FormData();
            formData.append("file", file);
            setMedia(file);
          }
        }}
      >
        <Edit width={20} height={20} />
      </FileUploader>
    </div>
  );
}

export default EditAvater;
