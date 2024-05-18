import { RouterProvider } from "react-router-dom";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { router } from "./utils/router/routes";
import { NavBar } from "./components/navbar/Navbar";
import { ContactUsFloatingButton } from "./components/floatingButtons/ContactUs";
import { Footer } from "./components/footer/Footer";

function App() {

  return (
    <main className="p-relative">
      <NavBar />
      <RouterProvider router={router} />
      <ContactUsFloatingButton />
      <Footer />
    </main>
  )
}

export default App
