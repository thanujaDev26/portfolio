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
import Blogs from "./components/Blogs/Blogs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogDetails from "./components/Blogs/BlogDetails";
import BlogSection from "./components/Blogs/BlogModal";
import Testimonial from "./components/Reviews/Testimonial";
import BackendBlogs from "./components/Blogs/BackendBlogs";

function App() {
    return (
        <div className="font-poppins">
            <Navbar />
            <Profile />
            <About />
            <Experience />
            {/* <Projects /> */}
            <None/>
            {/* <Testimonial/> */}
            {/*<BlogSection/>*/}
            <BackendBlogs/>
            {/*<Blogs/>*/}
            {/*<AddSectionOne/>*/}
            <Contact />
            <Footer />
        </div>
    );
}

export default App;

//export PATH=$PATH:/Users/thanujadev26/.npm-global/bin
//npm run build, firebase login(if not logged in), then firebase deploy