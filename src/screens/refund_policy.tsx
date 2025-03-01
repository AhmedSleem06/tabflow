import { useEffect } from "react";
import { useLocation } from "react-router";

function RefundPolicy() {
  const location = useLocation();
  useEffect(() => {
    document.title = "Refund Policy | TabFlow";
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col h-screen items-center">
      <h1 className="text-center text-3xl lg:text-4xl mt-10 font-extrabold text-gray-800">
        Refund Policy for <span className="text-green-600">TabFlow</span>
      </h1>
      <section className="rounded-xl mt-6 mx-4 lg:mx-60 px-6 py-6 ">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">
            Eligibility for Refunds
          </h2>
          <p className="mb-4">
            As TabFlow is a digital product with a one-time purchase, refunds
            are available under the following conditions:
          </p>

          <ul className="list-disc ml-6  mb-4">
            <li className="mb-4">
              The extension fails to function as described, and we are unable to
              resolve the issue.
            </li>
            <li className="mb-4">
              You request a refund within{" "}
              <span className="font-semibold">30 days</span> of purchase.
            </li>
            <li className="mb-4">
              The extension has not been activated or used.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">
            How to Request a Refund
          </h2>
          <p className="mb-4">
            To request a refund, contact us at{" "}
            <a
              className="text-primary underline"
              href="mailto:ahmed.sleem1206@gmail.com"
            >
              ahmed.sleem1206@gmail.com
            </a>{" "}
            with proof of purchase and the reason for the refund request.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Processing Time</h2>
          <p className="mb-4">
            Refunds will be processed within{" "}
            <span className="font-semibold">5-7 business days</span> and will be
            credited to the original payment method.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Non-Refundable Cases</h2>
          <ul className="list-disc ml-6 mb-4">
            <li>
              If the refund request is made after{" "}
              <span className="font-semibold">30 days.</span>
            </li>
            <li>
              If the extension works as described but does not meet user
              preferences.
            </li>
            <li>If misuse or modifications by the user cause malfunction.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default RefundPolicy;
