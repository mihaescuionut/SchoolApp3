import React from "react";
import iconPhone from "../../images/icon-phone.svg";
import iconEmail from "../../images/icon-email.svg";
import fbIcon from "../../images/facebook.svg";
import twitterIcon from "../../images/twitter.svg";
import instaIcon from "../../images/instagram.svg";

export default () => {
  return (
    <footer className="bg-darkBlue2">
      <div className="container mx-auto pt-12 px-5 pb-10">
        <div className="flex flex-col justify-between space-y-24 md:flex-row md:space-y-0">
          <div className="mt-10 space-y-6 mx-auto">
            <div className="flex items-center space-x-3 md:-mt-10 font-bold">
              <div className="w-6">
                <img src={iconPhone} alt="" className="scale-10" />
              </div>
              <div>+40 711 25 25 25</div>
            </div>
            <div className="flex items-center space-x-3 font-bold">
              <div className="w-6">
                <img src={iconEmail} alt="" className="scale-10" />
              </div>
              <div>example@gmail.com</div>
            </div>
          </div>

          <div className="flex flex-col space-y-10 mx-auto text-xl md:text-base md:space-x-20 md:space-y-0 md:flex-row">
            <div className="flex flex-col space-y-3">
              <a href="#" className="hover:text-accentCyan font-bold">About</a>
              <a href="#" className="hover:text-accentCyan font-bold">Jobs</a>
              <a href="#" className="hover:text-accentCyan font-bold">Press</a>
              <a href="#" className="hover:text-accentCyan font-bold">Blog</a>
            </div>
            <div className="flex flex-col space-y-3">
              <a href="#" className="hover:text-accentCyan font-bold">Contact Us</a>
              <a href="#" className="hover:text-accentCyan font-bold">Terms</a>
              <a href="#" className="hover:text-accentCyan font-bold">Privacy</a>
            </div>
          </div>

          <div className="flex justify-center pb-10 space-x-3">
            <div>
              <a href="#">
                <img
                  src={fbIcon}
                  alt=""
                  className="p-2 bg-darkBlue rounded-full ficon hover:scale-125"
                />
              </a>
            </div>
            <div>
              <a href="#">
                <img
                  src={twitterIcon}
                  alt=""
                  className="p-2 bg-darkBlue rounded-full ficon hover:scale-125"
                />
              </a>
            </div>
            <div>
              <a href="#">
                <img
                  src={instaIcon}
                  alt=""
                  className="p-2 bg-darkBlue rounded-full ficon hover:scale-125"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
