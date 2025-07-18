import buildingIcon from '../icons/building.png';
import vinylIcon from '../icons/vinyl.png';
import consultantIcon from '../icons/consultant.png';
import coderIcon from '../icons/coder.png';
import courseIcon from '../icons/online-learning.png';
import { FaHtml5, FaCss3Alt, FaGithub, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

interface TimelineItem {
  description: string;
  iconType: string;
}

const timelineData: TimelineItem[] = [
  {
    description: 'I moved to Vienna in 2020 to pursue my Master´s degree in International Business Administration at the University of Vienna. During my studies I started working in Consulting. For two years I worked at PwC in Risk Management.',
    iconType: 'building',
  },
  {
    description: 'During my studies and my time in consulting, I developed an interest in programming. Therefore, I decided to leave consulting to study web development.',
    iconType: 'consulting',
  },
  {
    description: 'I started doing an online program by Meta, called Meta Frontend Developer, which I completed in June 2024. The program focused on the basics of web development, especially with HTML, CSS and JavaScript. Furthermore, the course taught developing web applications in React.',
    iconType: 'onlinelearning',
  },
  {
    description: 'Since I completed the course, I have been working on several projects to improve my coding skills and to build a portfolio of my work.',
    iconType: 'coder',
  },
  {
    description: 'In my free time I love to play tennis, ride my motorcycle and collect old vinyls.',
    iconType: 'vinyl',
  },
];

const iconMap: Record<string, string> = {
  building: buildingIcon,
  vinyl: vinylIcon,
  consulting: consultantIcon,
  coder: coderIcon,
  onlinelearning: courseIcon,
};

const About = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-100 pt-30 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          About Me
        </h2>

        <div className="relative pt-4">

          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`flex items-center w-full my-8 ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
            >
              <div className={`flex items-center w-full ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Zeitleisten-Inhalt */}
                <div
                  className={`
                    w-full md:w-5/12 p-4 md:p-6 rounded-lg shadow-lg border-2 border-gray-200 bg-white mx-2
                    ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}
                  `}
                >
                  <p className="text-gray-700">{item.description}</p>
                </div>

                {/* Icon-Platzhalter */}
                <div className="relative flex-shrink-0 mx-2 md:mx-10">
                  {/* Kreis für das Icon */}
                  <div className="w-20 h-20 md:w-26 md:h-26 rounded-full bg-white flex items-center justify-center shadow-md">
                    <img
                      src={iconMap[item.iconType]}
                      alt={item.iconType}
                      className="w-12 h-12 md:w-16 md:h-16 object-contain"
                    />
                  </div>
                </div>
                {/* Positinierung Text und Icon */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12 pt-30">
          My Toolstack
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 pt-10 pb-30">
          {/* Toolstack Circles */}
          <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-white flex items-center justify-center shadow-md">
            <span className="block md:hidden"><FaHtml5 size={48} color="red"/></span>
            <span className="hidden md:block"><FaHtml5 size={70} color="red"/></span>
          </div>
          <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-white flex items-center justify-center shadow-md">
            <span className="block md:hidden"><FaCss3Alt size={48} color="blue"/></span>
            <span className="hidden md:block"><FaCss3Alt size={70} color="blue"/></span>
          </div>
          <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-white flex items-center justify-center shadow-md">
            <span className="block md:hidden"><IoLogoJavascript size={48} color="#d6da00"/></span>
            <span className="hidden md:block"><IoLogoJavascript size={70} color="#d6da00"/></span>
          </div>
          <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-white flex items-center justify-center shadow-md">
            <span className="block md:hidden"><SiTypescript size={48} color="#5280ff"/></span>
            <span className="hidden md:block"><SiTypescript size={70} color="#5280ff"/></span>
          </div>
          <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-white flex items-center justify-center shadow-md">
            <span className="block md:hidden"><RiTailwindCssFill size={48} color="#00c2f3"/></span>
            <span className="hidden md:block"><RiTailwindCssFill size={70} color="#00c2f3"/></span>
          </div>
          <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-white flex items-center justify-center shadow-md">
            <span className="block md:hidden"><FaReact size={48} color="darkblue"/></span>
            <span className="hidden md:block"><FaReact size={70} color="darkblue"/></span>
          </div>
          <a
          href="https://github.com/PaulyBe"
          target="_blank" // New tab
          rel="noopener noreferrer" // Security
          className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-white flex items-center justify-center shadow-md transition-transform duration-200 hover:scale-150 hover:bg-amber-50">
            <span className="block md:hidden"><FaGithub size={48} color="black"/></span>
            <span className="hidden md:block"><FaGithub size={70} color="black"/></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;