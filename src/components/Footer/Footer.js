import React from "react";

function Footer() {
  let date = new Date().getFullYear() 
  return (
    <>
      <footer className="py-8 text-center relative text-white">
        <div className="absolute inset-0 rounded-3xl text-white"></div>
        <p className="relative text-white text-md sm:text-lg md:text-xl lg:text-2xl xl:text-2xl">
          &copy; <span>
            {
              date
            }
          </span> Thanuja Priyadarshane. All Rights Reserved.
        </p>
      </footer>
    </>
  );
}

export default Footer;
