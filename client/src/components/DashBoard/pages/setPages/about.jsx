import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const members = [
  {
    name: "Ahmed Rashad",
    title: "Back-end Developer",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nostrum ea natus architecto incidunt id corrupti quibusdam",
    flink: "#",
    tlink: "#",
    glink: "#",
    llink: "#",
  },
  {
    name: "Mohammed Khaled",
    title: "Front-end Developer",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nostrum ea natus architecto incidunt id corrupti quibusdam",
    flink: "#",
    tlink: "#",
    glink: "#",
    llink: "#",
  },
  {
    name: "Youssef Husien",
    title: "Front-end Developer",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nostrum ea natus architecto incidunt id corrupti quibusdam",
    flink: "#",
    tlink: "#",
    glink: "#",
    llink: "#",
  },
  {
    name: "Mostafa Ahmed",
    title: "Front-end Developer",
    info: " Hi, I am Mostafa Alsadawy, a Front-end developer from Egypt, I love to build websites that not only look great but deliver the best experience to the visitors.",
    flink: "#",
    tlink: "#",
    glink: "https://github.com/Mostafa-Alsadawy",
    llink: "https://www.linkedin.com/in/mostafa-ahmed-515473215/",
  },
];

const About = () => {
  return (
    <>
      <div className="p-4">
        <p className="text-center text-3xl font-bold text-gray-800 mb-4">Our team</p>
        <p className="text-center mb-8 text-xl font-normal text-gray-500">
          Meet the team members who worked on this project
        </p>
        <div className="grid grid-cols-1  gap-4 md:gap-8">
          {members.map((member, i) => (
            <TeamCard key={i} member={member} />
          ))}
        </div>
      </div>
    </>
  );
};

const TeamCard = (props) => {
  return (
    <div className="flex bg-white dark:bg-gray-800 rounded-lg shadow">
      <div className="block w-24 md:w-48  relative">
        {/* TODO Add your picture */}
        <img
          alt="profil"
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--xG1gcsyJ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/h68x0up43hmknl5tjcww.jpg"
          className=" w-full h-full object-cover"
        />
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow px-8 py-4 pt-8 grow">
        <div className="text-center">
          <p className="text-2xl text-gray-800 dark:text-white">
            {props.member.name}
          </p>
          <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
            {props.member.title}
          </p>
          <p className="text-md text-gray-500 w-60 dark:text-gray-400 mx-auto py-4 font-light">
            {props.member.info}
          </p>
        </div>
      </div>
      <div className="pt-8 flex flex-col border-t border-gray-200 w-40 mx-auto text-gray-500 items-center justify-around">
        <a href={props.member.flink}>
          <FaFacebookF
            className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
            size={30}
          />
        </a>
        <a href={props.member.tlink}>
          <FaTwitter
            className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
            size={30}
          />
        </a>
        <a href={props.member.glink}>
          <AiFillGithub
            className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
            size={30}
          />
        </a>
        <a href={props.member.llink}>
          <AiFillLinkedin
            className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
            size={30}
          />
        </a>
      </div>
    </div>
  );
};

export default About;
