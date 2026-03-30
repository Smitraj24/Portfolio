import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0614] text-white">
      <Navbar />
      <Home />
      <Footer />
      <Chatbot />
    </div>
  );
}
