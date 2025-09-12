import { useEffect } from "react";

interface DeleteConfirmationProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

function DeleteConfirmation({
  isOpen,
  onClose,
  onConfirm,
}: DeleteConfirmationProps) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [isOpen]);
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-40 transition-opacity duration-300"
        onClick={onClose}
      />
      {/* Desktop modal */}
      <div className="hidden md:flex fixed inset-0 z-50 items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg p-6 w-96 animate-fadeIn">
          <h2 className="text-lg font-semibold mb-4">Delete Contact</h2>
          <p className="mb-6">Are you sure you want to delete this contact?</p>
          <div className="flex justify-end gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-gray-300"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="px-4 py-2 rounded-lg bg-red-500 text-white"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      {/* Mobile bottom sheet */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-50 animate-slideUp">
        <div className="bg-white rounded-t-2xl p-6 shadow-lg">
          <h2 className="text-lg font-semibold mb-4">Delete Contact</h2>
          <p className="mb-6">Are you sure you want to delete this contact?</p>
          <div className="flex justify-end gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-gray-300 w-1/2"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="px-4 py-2 rounded-lg bg-red-500 text-white w-1/2"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeleteConfirmation;
