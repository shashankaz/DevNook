import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="md:px-[100px] px-[30px] py-6 pt-[100px]">
      <div>
        <h1 className="md:text-3xl text-2xl font-[600] text-center py-6">
          Contact
        </h1>
      </div>
      <div className="flex flex-col gap-3 md:text-xl text-lg my-6">
        <p>
          Thank you for visiting DevNook. We value your feedback and inquiries.
          Please feel free to reach out to us using the contact information
          below:
        </p>
        <h3 className="md:text-2xl text-xl font-[500]">Technical Support</h3>
        <p>
          If you need technical assistance or have issues with our website or
          services, please contact our technical support team at
          <Link to="mailto:support@devnook.com"> support@devnook.com</Link>.
        </p>
        <h3 className="md:text-2xl text-xl font-[500]">Community Forums</h3>
        <p>
          Join our community forums to connect with other users, ask questions,
          share knowledge, and engage in discussions related to technology,
          productivity, and more. Visit our forums <Link to="/">here</Link>.
        </p>
        <h3 className="md:text-2xl text-xl font-[500]">Social Media</h3>
        <p>
          Follow us on social media for the latest updates, news, and
          announcements:
        </p>
        <ul className="list-disc pl-8">
          <li>
            Facebook:{" "}
            <Link to="https://www.facebook.com/" target="_blank">
              DevNook
            </Link>
          </li>
          <li>
            Instagram:{" "}
            <Link to="https://www.instagram.com/" target="_blank">
              @devnook
            </Link>
          </li>
          <li>
            X (Twitter):{" "}
            <Link to="https://twitter.com/home" target="_blank">
              @devnook
            </Link>
          </li>
        </ul>
        <p>
          We appreciate your interest in DevNook and look forward to hearing
          from you!
        </p>
      </div>
    </div>
  );
};

export default Contact;
