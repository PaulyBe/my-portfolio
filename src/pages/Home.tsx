import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center background-paper py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
          <span className="block text-gray-800">Hello, I'm Paul.</span>
          <span className="block bg-gradient-to-r from-blue-800 to-green-700 bg-clip-text text-transparent leading-normal">
            I am a freelance
          </span>
          <span className="block bg-gradient-to-r from-blue-800 to-green-700 bg-clip-text text-transparent">
            Web Developer.
          </span>
        </h1>

        {/* Sub-heading / Introduction Paragraph */}
        <p className="mt-4 text-lg sm:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
          I am passionate about creating responsive web solutions through thoughtful UX/UI design. Feel free to check out some of my projects and send me a message.
        </p>

        {/* Button */}
        <div className="mt-10">
          <NavLink
            to="/about"
            className="inline-flex items-center justify-center px-8 py-4 border text-base font-bold rounded-full shadow-lg text-gray-800 border-solid border-gray-800 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2"
            onClick={() => {}}
          >
            About me
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Home;