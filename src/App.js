import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import About from "./components/About/About";
import Experience from "./components/Exp/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import None from "./components/Projects/None";
import AddSectionOne from "./components/Addvertisements/AddSectionOne";

function App() {
    return (
        <div className="font-poppins">
            <Navbar />
            <Profile />
            <About />
            <Experience />
            {/*<Projects />*/}
            <None/>
            <AddSectionOne/>
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
