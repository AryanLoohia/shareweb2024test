"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

const Page = () => {
  const [isSubmitted, setIsSubmitted] = useState(false); // Track submission status
  const [isLoading, setIsLoading] = useState(false); // Track loading state
  const formRef = useRef<HTMLFormElement | null>(null); // Ref to the form

  async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);

    setIsLoading(true); // Set loading state to true to show "Submitting"

    try {
      const response = await fetch("/api/submitForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true); // Set submission status to true
        if (formRef.current) {
          formRef.current.reset(); // Reset the form fields after successful submission
        }

        // Reset the button to "Submit" after a few seconds
        setTimeout(() => {
          setIsLoading(false);
          setIsSubmitted(false);
        }, 3000); // Change text back after 3 seconds
      } else {
        console.log(response);
        alert("Failed to submit the form.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsLoading(false); // Set loading state to false after the submission attempt
    }
  }

  return (
    <div>
      <section className="bg-white dark:bg-zinc-900 pt-10">
        <div className="lg:grid lg:min-h-[90vh] lg:grid-cols-12">
          <section className="relative flex h-32 items-end bg-zinc-900 lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt=""
              src="/office.jpg"
              className="absolute inset-0 h-full w-full object-cover opacity-30"
            />

            <div className="hidden lg:relative lg:block lg:p-12">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h1 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                  Get in Touch
                </h1>

                <p className="mt-4 leading-relaxed text-white/90">
                  Discover what our student analysts and consultants offer and
                  join an exciting project today
                </p>
              </motion.div>
            </div>
          </section>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <div className="relative -mt-16 block lg:hidden">
                <h1 className="mt-2 relative -top-4  text-2xl font-bold text-zinc-900 sm:text-3xl md:text-4xl dark:text-white">
                  Get in Touch
                </h1>

                <p className="mt-8 leading-relaxed text-zinc-500 dark:text-zinc-400">
                  Discover what our student analysts and consultants offer and
                  join an exciting project today
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <form
                  ref={formRef} // Reference the form element
                  onSubmit={handleFormSubmit}
                  action="#"
                  className="mt-8 grid grid-cols-6 gap-6"
                >
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="FirstName"
                      className="block text-sm font-medium text-zinc-700 dark:text-zinc-200"
                    >
                      First Name
                    </label>

                    <input
                      type="text"
                      id="FirstName"
                      name="first_name"
                      className="mt-1 w-full rounded-md border-zinc-200 bg-white text-sm text-zinc-700 shadow-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 focus:border-emerald-500"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="LastName"
                      className="block text-sm font-medium text-zinc-700 dark:text-zinc-200"
                    >
                      Last Name
                    </label>

                    <input
                      type="text"
                      id="LastName"
                      name="last_name"
                      className="mt-1 w-full rounded-md border-zinc-200 bg-white text-sm text-zinc-700 shadow-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
                    />
                  </div>

                  <div className="col-span-6">
                    <label
                      htmlFor="Email"
                      className="block text-sm font-medium text-zinc-700 dark:text-zinc-200"
                    >
                      Email
                    </label>

                    <input
                      type="email"
                      id="Email"
                      name="email"
                      className="mt-1 w-full rounded-md border-zinc-200 bg-white text-sm text-zinc-700 shadow-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
                    />
                  </div>
                  <div className="col-span-6">
                    <label
                      htmlFor="Phone"
                      className="block text-sm font-medium text-zinc-700 dark:text-zinc-200"
                    >
                      Phone No.
                    </label>

                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      className="mt-1 w-full rounded-md border-zinc-200 bg-white text-sm text-zinc-700 shadow-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
                    />
                  </div>
                  <div className="col-span-6">
                    <label
                      htmlFor="Message"
                      className="block text-sm font-medium text-zinc-700 dark:text-zinc-200"
                    >
                      Message
                    </label>

                    <textarea
                      id="Message"
                      name="message"
                      rows={4} // Controls height based on line count
                      className="mt-1 w-full rounded-md border-zinc-200 bg-white text-sm text-zinc-700 shadow-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 resize-none" // `resize-none` prevents resizing if undesired
                    />
                  </div>

                  <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                    <button
                      type="submit"
                      className="inline-block shrink-0 rounded-md border border-emerald-600 bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-emerald-600 focus:outline-none focus:ring active:text-emerald-500 dark:hover:bg-emerald-700 dark:hover:text-white"
                    >
                      {isLoading
                        ? "Submitting..."
                        : isSubmitted
                        ? "Submitted Successfully!"
                        : "Submit"}
                    </button>
                  </div>
                </form>
                <p className="pt-4">
                  Reach out to us at : kunal.patil.shareiitkgp@gmail.com
                </p>
              </motion.div>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default Page;
