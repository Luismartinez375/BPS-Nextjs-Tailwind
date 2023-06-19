import React from "react";
const Contact = () => {
  const content = (
    <main className="mx-auto max-w-4xl p-4">
      <section
        id="contact"
        className="widescreen:section-min-height tallscreen:section-min-height my-12 scroll-mt-16 p-6"
      >
        <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
          Contact Us
        </h2>
        <form
          action=""
          className="items-left mx-auto flex max-w-4xl flex-col gap-4 text-2xl sm:text-3xl"
        >
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            minLength={3}
            maxLength={60}
            placeholder="Your Subject"
            className="w-full rounded-xl border border-solid border-slate-900 p-3 text-2xl text-black dark:border-none sm:text-3xl"
          />
          <label htmlFor="message">Message</label>
          <textarea
            name="mesage"
            id="message"
            cols={30}
            rows={10}
            placeholder="Your Message"
            required
            className="w-full rounded-xl border border-solid border-slate-900 p-3 text-2xl text-black dark:border-none sm:text-3xl"
          ></textarea>
          <button className="borderslate w-48 rounded-xl border-solid bg-teal-700 p-3 text-white hover:bg-teal-500">
            Submit
          </button>
        </form>
      </section>
      <hr className="mx-auto w-1/2 bg-black dark:bg-white" />
    </main>
  );
  return content;
};

export default Contact;
