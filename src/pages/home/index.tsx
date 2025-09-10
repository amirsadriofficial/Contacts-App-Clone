import ContactItem from "../../components/contact-item";
import { mockContacts } from "../../constants/MOCK_DATA";
import Add from "./../../assets/add.svg?react";
import Search from "./../../assets/search.svg?react";

function HomePage() {
  return (
    <main>
      <section className="flex items-center justify-between bg-white mb-2 py-2 px-4">
        <div className="flex items-center gap-2">
          <p className="text-2xl font-semibold">Contacts</p>
          <p>({mockContacts?.length})</p>
        </div>
        <Add width={36} height={36} />
      </section>
      <section className="flex items-center gap-2 mb-2 p-2 bg-white">
        <Search width={24} height={24} />
        <input
          type="search"
          placeholder="Search Contact..."
          className="h-8 w-full border-none"
        />
      </section>
      <section className="divide-y-[1px] divide-gray-300 bg-white">
        {mockContacts?.map((item) => (
          <ContactItem contact={item} />
        ))}
      </section>
    </main>
  );
}

export default HomePage;
