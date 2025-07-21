import React from 'react';

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "d224d5b8-7fd7-4b2f-a3c2-154e06b333e7");

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
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-green-100 pt-30 pb-16 px-4 sm:px-6 lg:px-8 pt-20">
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
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Your Email"
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          name="message"
          required
          placeholder="Your Message"
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 min-h-[120px]"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md"
        >
          Submit Form
        </button>
      </form>
      <span>{result}</span>
    </div>
    </div>
    </section>
  );
}