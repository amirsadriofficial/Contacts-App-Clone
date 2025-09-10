import "./App.css";
import ContactItem from "./components/contact-item";
import { mockContacts } from "./constants/MOCK_DATA";

function App() {
  return (
    <main>
      <section className="divide-y-[1px] divide-gray-300">
        {mockContacts?.map((item) => (
          <ContactItem contact={item} />
        ))}
      </section>
    </main>
  );
}

export default App;
