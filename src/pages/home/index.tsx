import Add from "@assets/add.svg?react";
import MyProfile from "@assets/my-profile.svg?react";
import Search from "@assets/search.svg?react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ContactItem from "../../components/contact-item";
import { mockContacts } from "../../constants/MOCK_DATA";
import type { IContactItem } from "../../types";

function HomePage() {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState<IContactItem[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    const stored = localStorage.getItem("contacts");
    if (stored) {
      setContacts(JSON.parse(stored));
    } else {
      localStorage.setItem("contacts", JSON.stringify(mockContacts));
      setContacts(mockContacts);
    }
  }, []);
  const filteredContacts = contacts.filter((contact) =>
    contact?.fullName?.toLowerCase()?.includes(searchQuery?.toLowerCase())
  );
  const handleContactsChange = () => {
    const stored = JSON.parse(localStorage.getItem("contacts") || "[]");
    setContacts(stored);
  };

  return (
    <main>
      <section className="flex items-center justify-between bg-white mb-2 py-2 px-4">
        <MyProfile
          width={32}
          height={32}
          onClick={() => navigate("/my-profile")}
          className="cursor-pointer font-bold"
        />
        <p className="text-xl font-semibold">Contacts</p>
        <Add
          width={32}
          height={32}
          onClick={() => navigate("/add-contact")}
          className="cursor-pointer"
        />
      </section>
      <section className="px-2">
        <div className="bg-white flex items-center gap-2 p-2 rounded-lg">
          <Search width={24} height={24} />
          <input
            type="search"
            placeholder="Search Contact..."
            className="h-8 w-full border-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </section>
      <section className="flex flex-col gap-2 p-2">
        {!searchQuery && (
          <p className="pl-2 pt-2">All Contacts ({contacts.length})</p>
        )}
        {filteredContacts.length > 0 ? (
          filteredContacts.map((contact) => (
            <ContactItem
              key={contact.id}
              contact={contact}
              onContactsChange={handleContactsChange}
            />
          ))
        ) : (
          <p className="text-gray-500 text-center mt-10 text-xl">
            No contacts found
          </p>
        )}
      </section>
    </main>
  );
}

export default HomePage;
