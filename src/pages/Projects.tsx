import { CiCircleList } from "react-icons/ci";
import { TbCards, TbNumbers } from "react-icons/tb";
import { GiTicTacToe } from "react-icons/gi";

interface Project {
  id: number;
  title: string;
  description: string;
  icon?: React.ReactNode;
  imageUrl?: string;
  demoLink?: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: 'To Do-List',
    description: ['A simple To Do List application for adding new tasks and deleting old ones.', 'Built with: HTML, CSS & JavaScript'],
    icon: <CiCircleList size={80} color="#A78BFA" />,
    demoLink: 'https://paulybe.github.io/todolist/',
  },
  {
    id: 2,
    title: 'Card Game',
    description: ['A card game to get to know people better, that displays random cards from a deck, with three different levels.', 'Built with: React, Tailwind CSS & TypeScript'],
    icon: <TbCards size={80} color="lightblue" />,
    demoLink: 'https://1000questions.site/',
  },
  {
    id: 3,
    title: 'Tic-Tac-Toe',
    description: ['The classic Tic-Tac-Toe game, where two players set "X" and "O" after each other, to get three in a row.', 'Built with: HTML, CSS & JavaScript'],
    icon: <GiTicTacToe size={80} color="grey" />,
    demoLink: 'https://paulybe.github.io/tictactoe/',
  },
  {
    id: 4,
    title: 'Number Guesser',
    description: ['A simple game, where you have to guess a number between 1 and 100.', 'Built with: HTML, CSS & JavaScript'],
    icon: <TbNumbers size={80} color="rgb(107, 167, 139)" />,
    demoLink: 'https://paulybe.github.io/numberguesser/',
  },
];

const Contact = () => {
  return (
    <section className="min-h-screen flex items-center justify-center background-paper pb-16 px-4 sm:px-6 lg:px-8 pt-24">
      <div className="max-w-6xl mx-auto pb-14">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          Websites
        </h2>
        <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-16">
          Here are some of the websites I built for other people. I removed personal information and solely kept the frontend.
        </p>

        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-16 pb-14">
          <div className="bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden
                         transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col">
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hairdresser Website</h3>
                <p className="text-gray-700 text-base mb-4">A website I built for a client, that is a hairdresser. I decided to go for a single-page approach. The website should display some information about the shop, the employees and have its social media channels linked; as well as a form to book an appointment.</p>
                <p className="text-gray-700 text-base mb-4 font-bold">The website is built in React with TypeScript and Tailwind CSS</p>
                <div className="text-center pt-10">
                <a
                      href="https://paulybe.github.io/hairdresser_website/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-8 py-4 border text-base font-bold rounded-full shadow-lg text-gray-800 border-solid border-gray-800 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2"
                    >
                      Check it out
                    </a>
                </div>
              </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-16 pb-14">
          <div className="bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden
                         transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col">
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Billing Website</h3>
                <p className="text-gray-700 text-base mb-4">A website I built for a client, that offers billing services. The client wanted a website with several pages with information about his business. Furthermore, the website should have a contact form. I created a website with informational sections, set up the contact form and optimized it for mobile use.</p>
                <p className="text-gray-700 text-base mb-4 font-bold">The website is built with HTML, CSS and JavaScript</p>
                <div className="text-center pt-10">
                <a
                      href="https://paulybe.github.io/billing_website/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-8 py-4 border text-base font-bold rounded-full shadow-lg text-gray-800 border-solid border-gray-800 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2"
                    >
                      Check it out
                    </a>
                </div>
              </div>
          </div>
        </div>

        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12 pt-24">
          Personal Projects
        </h2>
        <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-16">
          Here are some of the projects I have been working on, to improve my coding skills.
        </p>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden
                         transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col"
            >
              <div className="w-full h-40 flex items-center justify-center border-b border-gray-200 bg-gray-50">
                {project.icon ? (
                  project.icon
                ) : project.imageUrl ? (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="h-24"
                    onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x300/CCCCCC/000000?text=Picture+not+found'; }}
                  />
                ) : null}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-700 text-base mb-4">{project.description[0]}</p>
                 <div className="mt-auto">
                  <p className="text-gray-700 text-base mb-4 font-bold">{project.description[1]}</p>
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border text-base font-bold text-gray-800 border-solid border-gray-800 rounded-full
                                 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 shadow-md w-full justify-center"
                     >
                       Check it out
                     </a>
                     )}
                 </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;