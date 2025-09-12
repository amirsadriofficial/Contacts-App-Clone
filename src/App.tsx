import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AddContactPage from "./pages/add-contact";
import ContactPage from "./pages/contact";
import EditContactPage from "./pages/edit-contact";
import HomePage from "./pages/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-contact" element={<AddContactPage />} />
        <Route path="/edit-contact/:id" element={<EditContactPage />} />
        <Route path="/contact/:id" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
