"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/submitForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await res.json();
      if (res.ok) {
        setResponseMessage("Delighted to have you onboard for our newsletter!");
        setEmail(""); // Reset the input field after successful submission
      } else {
        setResponseMessage(
          result.message || "Something went wrong, please try again."
        );
      }
    } catch (error) {
      setResponseMessage("Error submitting form.");
      console.log(error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setResponseMessage(""), 5000);
    }
  };

  return (
    <div>
      <footer className="bg-white dark:bg-zinc-900 pb-10">
        <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-md">
            <strong className="block text-center text-xl font-bold text-gray-900 sm:text-3xl dark:text-white">
              Sign Up for the SHARE newsletter
            </strong>

            <form onSubmit={handleSubmit} className="mt-6">
              <div className="relative max-w-lg">
                <label htmlFor="email" className="sr-only">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  placeholder="Your Email Address"
                  required
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-emerald-700"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>

              <div className="text-center mt-4">
                {responseMessage && (
                  <p className="text-center text-emerald-500 mt-4">
                    {responseMessage}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
          <div className="mx-auto max-w-sm lg:max-w-none">
            <div className="mt-4 text-center text-gray-500 lg:text-left lg:text-lg dark:text-gray-400">
              Unlock opportunities with our student-run organization
              specializing in{" "}
              <div className="text-emerald-500 text-3xl font-bold">
                Finance, Consulting and Product Management
              </div>{" "}
              Join us and access our expert-driven services!
            </div>

            <div className="mt-6 flex justify-center gap-4 lg:justify-start">
              <a
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Facebook </span>

                <svg
                  className="size-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              <a
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Instagram </span>

                <svg
                  className="size-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              {/* Threads Icon */}
              <a
                className="text-gray-700 dark:text-white"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only">Threads</span>
                <svg
                  className="size-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.45 7.02c-2.4-2.4-6.29-2.4-8.69 0l-1.76 1.76c-.48.48-.48 1.26 0 1.74.48.48 1.26.48 1.74 0l1.76-1.76c1.44-1.44 3.78-1.44 5.22 0 1.44 1.44 1.44 3.78 0 5.22l-3.53 3.53c-1.44 1.44-3.78 1.44-5.22 0-.48-.48-1.26-.48-1.74 0-.48.48-.48 1.26 0 1.74 2.4 2.4 6.29 2.4 8.69 0l3.53-3.53c2.4-2.4 2.4-6.29 0-8.69z" />
                  <path d="M11.93 12.07c-.48-.48-1.26-.48-1.74 0l-1.76 1.76c-1.44 1.44-3.78 1.44-5.22 0-1.44-1.44-1.44-3.78 0-5.22l3.53-3.53c1.44-1.44 3.78-1.44 5.22 0 .48.48 1.26.48 1.74 0 .48-.48.48-1.26 0-1.74-2.4-2.4-6.29-2.4-8.69 0l-3.53 3.53c-2.4 2.4-2.4 6.29 0 8.69 2.4 2.4 6.29 2.4 8.69 0l1.76-1.76c.48-.48.48-1.26 0-1.74z" />
                </svg>
              </a>

              {/* X (Twitter) Icon */}
              <a
                className="text-gray-700 dark:text-white"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only">X (Twitter)</span>
                <svg
                  className="size-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left">
            <div>
              <strong className="font-bold text-gray-900 dark:text-white text-xl">
                Explore
              </strong>

              <ul className="mt-6 space-y-1">
                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                    href="/projects"
                  >
                    Projects
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                    href="/team"
                  >
                    Team
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                    href="/contact"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Footer), { ssr: false });
