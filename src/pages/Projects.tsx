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
    description: 'A simple To Do List application, that allows users to add new tasks and delete old ones. Built with: HTML, CSS & JavaScript.',
    icon: <CiCircleList size={80} color="#A78BFA" />,
    demoLink: 'https://paulybe.github.io/todolist/', 
  },
  {
    id: 2,
    title: 'Card Game',
    description: 'A card game to get to know people better, that displays random cards from a deck, with three different levels. Built with: React, Tailwind CSS & TypeScript.',
    icon: <TbCards size={80} color="lightblue" />,
    demoLink: 'https://1000questions.site/',
  },
  {
    id: 3,
    title: 'Tic-Tac-Toe',
    description: 'The classic Tic-Tac-Toe game, where two players set "X" and "O" after each other, to get three in a row. Built with: HTML, CSS & JavaScript',
    icon: <GiTicTacToe size={80} color="grey" />,
    demoLink: 'https://paulybe.github.io/tictactoe/',
  },
  {
    id: 4,
    title: 'Number Guesser',
    description: 'A simple game, where you have to guess a number between 1 and 100. Built with: HTML, CSS & JavaScript',
    icon: <TbNumbers size={80} color="rgb(107, 167, 139)" />,
    demoLink: 'https://paulybe.github.io/numberguesser/',
  },
];

const Contact = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-100 pt-30 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          My Projects
        </h2>

        <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-16">
          Here are some of the projects I have been working on, to improve my coding skills.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden
                         transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col"
            >
              <div className="w-full h-48 flex items-center justify-center border-b border-gray-200 bg-gray-50">
                {project.icon ? (
                  project.icon
                ) : project.imageUrl ? (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="h-24"
                    onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x300/CCCCCC/000000?text=Bild+nicht+gefunden'; }}
                  />
                ) : null}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-700 text-base mb-4">{project.description}</p>
                <div className="flex-1"></div>
                {project.demoLink && (
                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-800 text-white text-sm font-medium rounded-full
                                 hover:bg-blue-700 transition-colors duration-200 shadow-md w-full justify-center"
                    >
                      Check it out
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>
    </section>
  );
};

export default Contact;