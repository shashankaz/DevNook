import React from "react";

const Privacy = () => {
  return (
    <div className="md:px-[100px] px-[30px] py-6 pt-[100px]">
      <div>
        <h1 className="md:text-3xl text-2xl font-[600] pb-3">Privacy Policy</h1>
      </div>
      <div>
        <p>
          This Privacy Policy describes how DevNook ("we", "us", or "our")
          collects, uses, and shares personal information when you use our
          website and any associated services.
        </p>
        <h1 className="md:text-xl text-lg font-[400] py-3">Information We Collect</h1>
        <ul className="list-disc pl-8">
          <li>
            Personal Information: When you visit our website or use our
            services, we may collect personal information such as your name,
            email address, and contact details if you choose to provide them
            voluntarily.
          </li>
          <li>
            Usage Data: We may automatically collect information about your
            device and how you interact with our website, such as your IP
            address, browser type, pages visited, and timestamps.
          </li>
          <li>
            Cookies: We use cookies and similar tracking technologies to enhance
            your browsing experience, analyze usage patterns, and personalize
            content and ads.
          </li>
        </ul>
        <h1 className="md:text-xl text-lg font-[400] py-3">How We Use Your Information</h1>
        <ul className="list-disc pl-8">
          <li>
            We use the information we collect to provide and improve our
            services, personalize your experience, and communicate with you.
          </li>
          <li>
            We may use cookies for authentication, analytics, and targeted
            advertising purposes.
          </li>
        </ul>
        <h1 className="md:text-xl text-lg font-[400] py-3">Information Sharing</h1>
        <ul className="list-disc pl-8">
          <li>
            We do not sell or rent your personal information to third parties.
          </li>
          <li>
            We may share your information with trusted service providers who
            assist us in operating our website and providing services to you.
          </li>
        </ul>
        <h1 className="md:text-xl text-lg font-[400] py-3">Data Security</h1>
        <ul className="list-disc pl-8">
          <li>
            We implement security measures to protect your personal information
            and prevent unauthorized access or disclosure.
          </li>
        </ul>
        <h1 className="md:text-xl text-lg font-[400] py-3">Your Choices</h1>
        <ul className="list-disc pl-8">
          <li>
            You can choose to disable cookies or opt-out of targeted
            advertising.
          </li>
          <li>
            You may update or delete your personal information by contacting us.
          </li>
        </ul>
        <h1 className="md:text-xl text-lg font-[400] py-3">Third-Party Links</h1>
        <ul className="list-disc pl-8">
          <li>
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices or content of these websites.
          </li>
        </ul>
        <h1 className="md:text-xl text-lg font-[400] py-3">Updates to Privacy Policy</h1>
        <ul className="list-disc pl-8">
          <li>
            We may update this Privacy Policy from time to time. We will notify
            you of any significant changes.
          </li>
        </ul>
        <h1 className="md:text-xl text-lg font-[400] py-3">Contact Us</h1>
        <p>
          If you have any questions or concerns about our Privacy Policy, please
          contact us at info@devnook.com.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
