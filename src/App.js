import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./Components/Navbar";
import Login from "./pages/Login";
// import  CreateEvent  from './pages/CreateEvent';
import ShowEvents from "./pages/ShowEvents";
import CreateEventN from "./pages/CreateEventN";
import EventDetails from "./pages/EventDetails";
import PrivateRouts from "./Components/auth/PrivateRouts";
import MemberDetails from "./pages/MemberDetails";
import Gallery from "./pages/Gallery";
import ContactUs from "./pages/ContactUs";
// import MemberDetailsN from "./pages/MemberDetailsN";
// import About from "./pages/About";
import AboutN from "./pages/AboutN";
// import { ContactUsN } from "./pages/ContactUsN";

function App() {
  return (
    <div className=" w-full bg-gray-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/events/ShowEvent" element={<ShowEvents/>}></Route>
        <Route path="/events/gallery" element={<Gallery/>}></Route>
        <Route path="/contact" element={<ContactUs/>}></Route>
        <Route path="/about" element={<AboutN/>}></Route>
        <Route path="event/:eventId" element={<EventDetails />} />
        <Route path="member/:memberId" element={<MemberDetails/>} />
        {/* Private Route */}
        <Route path="/event/create" element={
          <PrivateRouts>
            <CreateEventN />
          </PrivateRouts>
        }></Route>
        <Route path="/event-edite/:eventId" element={
          <PrivateRouts>
            <CreateEventN />
          </PrivateRouts>
        }></Route>
        
      </Routes>
    </div>
  );
}

export default App;
