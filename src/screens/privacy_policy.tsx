import { useEffect } from "react";
import { useLocation } from "react-router";

function PrivacyPolicy() {
  const location = useLocation();
  useEffect(() => {
    document.title = "Privacy Policy | TabFlow";
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col h-screen items-center">
      <h1 className="text-center text-3xl lg:text-4xl mt-10 font-extrabold text-gray-800">
        Privacy Policy for <span className="text-green-600">TabFlow</span>
      </h1>
      <section className="rounded-xl mt-6 mx-4 lg:mx-60 px-6 py-6 ">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="mb-4">
            TabFlow ("we," "us," or "our") is committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, and
            safeguard your information when you use our Chrome extension.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Information We Collect
          </h2>
          <p className="mb-4">
            TabFlow does not collect personal data. However, we may store your
            tab sessions and settings locally on your device or in your Chrome
            Sync storage.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            How We Use Your Information
          </h2>
          <ul className="list-disc ml-6 mb-4">
            <li>To store and restore your tab sessions.</li>
            <li>To improve user experience and functionality.</li>
            <li>
              To sync your tabs across devices if you enable this feature.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
          <p className="mb-4">
            We prioritize security and do not share or sell your data. Chrome
            Sync ensures secure storage and encryption.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
          <p className="mb-4">
            TabFlow does not integrate third-party tracking tools. However, it
            relies on Chrome Sync for cloud-based storage.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
          <ul className="list-disc ml-6 mb-4">
            <li>You can delete your saved tab sessions anytime.</li>
            <li>You can uninstall the extension to remove all stored data.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">
            Chnages to This Policy
          </h2>
          <p className="mb-4">
            We may update this Privacy Policy from time to time. Changes will be
            reflected in the extension’s settings page.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>
            If you have questions, email us at{" "}
            <a
              href="mailto:ahmed.sleem1206@gmail.com"
              className="text-primary underline "
            >
              ahmed.sleem1206@gmail.com
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}

export default PrivacyPolicy;
