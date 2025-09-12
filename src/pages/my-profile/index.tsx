import Back from "@assets/back.svg?react";
import { useNavigate } from "react-router-dom";
import ContactDangrousDetail from "../../components/contact-dangrous-detail";
import ContactDetails from "../../components/contact-detail";
import ContactInfoDetail from "../../components/contact-info-detail";
import ItemDetailContainer from "../../components/item-detail-container";
import SetAvatar from "../../components/set-avatar";

function MyProfilePage() {
  const navigate = useNavigate();
  const myFullName = "AmirAbbas Sadri";
  const myPhone = 9120075897;
  const myEmail = "Amirsadriofficial@gmail.com";

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
        <ContactDetails fullName={myFullName} phone={myPhone} email={myEmail} />
        <ItemDetailContainer>
          <ContactInfoDetail title="Share" />
          <ContactInfoDetail title="All Contacts" />
          <ContactInfoDetail title="Emergency Contacts" />
          <ContactInfoDetail title="Manage Contacts" />
        </ItemDetailContainer>
        <ItemDetailContainer>
          <ContactDangrousDetail title="Trash" />
          <ContactDangrousDetail title="Blocked Contacts" />
        </ItemDetailContainer>
      </section>
    </main>
  );
}

export default MyProfilePage;
