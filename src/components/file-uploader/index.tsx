import { useRef } from "react";

interface FileUploaderProps {
  className?: string;
  children: React.ReactNode;
  onChange?: (file: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FileUploader({
  className,
  children,
  onChange,
}: FileUploaderProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <>
      <div
        className={`bg-white box-shadow-3 w-[40px] h-[40px] rounded-[8px] flex justify-center items-center ${
          className || ""
        }`}
        onClick={handleClick}
      >
        {children}
      </div>
      <input
        ref={inputRef}
        type="file"
        className="hidden"
        onChange={onChange}
      />
    </>
  );
}
