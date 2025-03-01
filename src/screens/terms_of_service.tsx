import { useEffect } from "react";
import { useLocation } from "react-router";

function TermsOfService() {
  const location = useLocation();
  useEffect(() => {
    document.title = "Terms Of Service | TabFlow";
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col h-screen items-center">
      <h1 className="text-center text-3xl lg:text-4xl mt-10 font-extrabold text-gray-800">
        Terms Of Service for <span className="text-green-600">TabFlow</span>
      </h1>
      <section className="rounded-xl mt-6 mx-4 lg:mx-60 px-6 py-6 ">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
          <p className="mb-4">
            By using TabFlow, you agree to these Terms of Service. If you do not
            agree, please do not use the extension.
          </p>

          <h2 className="text-2xl font-semibold mb-4">License & Usage</h2>
          <ul className="list-disc ml-6 mb-4">
            <li>
              You are granted a{" "}
              <span className="font-semibold">
                non-transferable, non-exclusive license
              </span>{" "}
              to use TabFlow.
            </li>

            <li>
              You may not distribute, resell, or modify the extension without
              permission.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">User Responsibilities</h2>
          <ul className="list-disc ml-6 mb-4">
            <li>
              You are responsible for your data saved within the extension.
            </li>

            <li>
              Do not use the extension for illegal or unauthorized purposes.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Updates & Support</h2>
          <ul className="list-disc ml-6 mb-4">
            <li>We may provide updates to improve features and security.</li>

            <li>
              Basic support is provided via email for troubleshooting issues.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">
            Limitation of Liabilitys
          </h2>
          <p className="mb-4">
            TabFlow is provided "as is" without warranties. We are not liable
            for any loss of data, damages, or issues caused by the use of this
            extension.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Termination</h2>
          <p className="mb-4">
            We reserve the right to terminate or suspend access if users violate
            these terms.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
          <p className="mb-4">
            These terms are governed by{" "}
            <span className="font-semibold">Egypt’s laws</span>.
          </p>
        </div>
      </section>
    </div>
  );
}

export default TermsOfService;
