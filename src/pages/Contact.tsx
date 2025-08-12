import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "d224d5b8-7fd7-4b2f-a3c2-154e06b333e7"); // Public key

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      (event.target as HTMLFormElement).reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center background-paper pt-24 px-2">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          Contact Me
        </h2>
        <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-16">
          Feel free to reach out to me and send me a message.
        </p>
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Your Email"
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
        />
        <textarea
          name="message"
          required
          placeholder="Your Message"
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
        ></textarea>
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center px-8 py-2 border text-base font-bold rounded-full shadow-lg text-gray-800 border-solid border-gray-800 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2"
        >
          Submit Form
        </button>
      </form>
      <span>{result}</span>
    </div>
      <div className="pt-20 pb-44 flex gap-4 justify-center md:pt-44">
            <a
              href="https://github.com/PaulyBe"
              target="_blank" // New tab
              rel="noopener noreferrer" // Security
              className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-white flex items-center justify-center shadow-md transition-transform duration-200 hover:scale-110 hover:bg-gray-600">
                <span className="block md:hidden"><FaGithub size={48} color="black"/></span>
                <span className="hidden md:block"><FaGithub size={70} color="black"/></span>
              </a>
              <a
              href="https://www.linkedin.com/in/paul-bellmann/"
              target="_blank" // New tab
              rel="noopener noreferrer" // Security
              className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-white flex items-center justify-center shadow-md transition-transform duration-200 hover:scale-110 hover:bg-gray-600">
                <span className="block md:hidden"><FaLinkedin size={48} color="black"/></span>
                <span className="hidden md:block"><FaLinkedin size={70} color="black"/></span>
              </a>
              <a
              href="mailto:paul.bellmann@gmail.com"
              target="_blank" // New tab
              rel="noopener noreferrer" // Security
              className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-white flex items-center justify-center shadow-md transition-transform duration-200 hover:scale-110 hover:bg-gray-600">
                <span className="block md:hidden"><CiMail size={48} color="black"/></span>
                <span className="hidden md:block"><CiMail size={70} color="black"/></span>
              </a>
      </div>
    </div>
    </section>
  );
}