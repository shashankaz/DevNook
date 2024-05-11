import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="md:px-[100px] px-[30px] py-6 bg-gray-50">
      <div className="flex flex-wrap justify-between">
        <div className="w-[250px] text-base">
          <ul>
            <li className="font-[600] text-lg py-2 pt-4">Useful Links</li>
            <li>
              <Link to={"/privacy"}>Privacy Policy</Link>
            </li>
            <li>
              <Link to={"/terms"}>Terms of Service</Link>
            </li>
            <li>
              <Link to={"/copyright"}>Copyright Info</Link>
            </li>
          </ul>
        </div>
        <div className="w-[250px] text-base">
          <ul>
            <li className="font-[600] text-lg py-2 pt-4">Follow Us</li>
            <li>
              <Link to={"https://www.facebook.com/"} target="_blank">
                Facebook
              </Link>
            </li>
            <li>
              <Link to={"https://www.instagram.com/"} target="_blank">
                Instagram
              </Link>
            </li>
            <li>
              <Link to={"https://twitter.com/"} target="_blank">
                X (Twitter)
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-[250px] text-base">
          <ul>
            <li className="font-[600] text-lg py-2 pt-4">Contact Us</li>
            <li>
              <p>
                New Delhi, India <br /> Delhi 10001 <br /> Email:
                info@devnook.com <br /> Phone: (123) 456-7890
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center text-base py-4">
        <p>© 2024 DevNook. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
