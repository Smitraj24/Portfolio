import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0614] text-white">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}
