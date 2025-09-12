import Back from "@assets/back.svg?react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ContactDangrousDetail from "../../components/contact-dangrous-detail";
import ContactDetails from "../../components/contact-detail";
import ContactInfoDetail from "../../components/contact-info-detail";
import DeleteConfirmation from "../../components/delete-confirmation";
import ItemDetailContainer from "../../components/item-detail-container";
import SetAvatar from "../../components/set-avatar";
import type { IContactItem } from "../../types";

function ContactPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [contact, setContact] = useState<IContactItem | undefined>(undefined);
  const [showConfirm, setShowConfirm] = useState(false);
  const notify = () =>
    toast("Contact deleted!", {
      type: "success",
      theme: "colored",
    });
  useEffect(() => {
    const storedContacts: IContactItem[] = JSON.parse(
      localStorage.getItem("contacts") || "[]"
    );
    const found = storedContacts.find((item) => item.id === id);
    if (found) {
      setContact(found);
    }
  }, [id]);
  const handleRedirectToEdit = () => {
    navigate(`/edit-contact/${contact?.id}`); // discard changes
  };
  const handleDelete = () => {
    const storedContacts: IContactItem[] = JSON.parse(
      localStorage.getItem("contacts") || "[]"
    );
    const updated = storedContacts.filter(
      (item) => item.id !== (contact as IContactItem).id
    );
    localStorage.setItem("contacts", JSON.stringify(updated));
    notify();
    setShowConfirm(false);
    navigate("/");
  };

  return (
    <main className="flex flex-col items-center gap-4 p-4">
      <div className="flex items-start justify-between w-full">
        <Back
          width={32}
          height={32}
          onClick={() => navigate(-1)}
          className="cursor-pointer"
        />
        <SetAvatar avatar={contact?.avatar as string} />
        <button
          type="button"
          className="cursor-pointer text-blue-500 font-semibold"
          onClick={handleRedirectToEdit}
        >
          Edit
        </button>
      </div>
      <section className="flex flex-col gap-4 w-full">
        <ContactDetails
          fullName={contact?.fullName as string}
          phone={contact?.phone as number}
          email={contact?.email}
        />
        <ItemDetailContainer>
          <ContactInfoDetail title="Send Message" />
          <ContactInfoDetail title="Share Contact" />
          <ContactInfoDetail title="Add to Favorite" />
        </ItemDetailContainer>
        <ItemDetailContainer>
          <ContactDangrousDetail
            title="Delete Contact"
            onClick={() => setShowConfirm(true)}
          />
          <ContactDangrousDetail title="Block Contact" />
        </ItemDetailContainer>
      </section>
      <DeleteConfirmation
        isOpen={showConfirm}
        onClose={() => setShowConfirm(false)}
        onConfirm={handleDelete}
      />
    </main>
  );
}

export default ContactPage;
