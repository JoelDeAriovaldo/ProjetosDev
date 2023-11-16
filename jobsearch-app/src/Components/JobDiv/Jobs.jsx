import { BiTimeFive } from "react-icons/bi";
import logo1 from "../../Assets/logo1.png";
import logo2 from "../../Assets/logo2.png";
import logo3 from "../../Assets/logo3.png";
import logo4 from "../../Assets/logo4.png";
import logo5 from "../../Assets/logo5.png";
import logo6 from "../../Assets/logo6.png";
import logo7 from "../../Assets/logo7.png";
import logo8 from "../../Assets/logo8.png";

const Data = [
  {
    id: 1,
    image: logo1,
    title: "Web Developer",
    time: "Agora",
    location: "Beira, Moçambique",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
    company: "Novac Linus Co.",
  },
  {
    id: 2,
    image: logo2,
    title: "Designer graphic",
    time: "Agora",
    location: "Tete, Moçambique",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
    company: "Spotify AB",
  },
  {
    id: 3,
    image: logo3,
    title: "Software engineer",
    time: "Agora",
    location: "California, USA",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
    company: "Netflix",
  },
  {
    id: 4,
    image: logo4,
    title: "UI Designer",
    time: "Agora",
    location: "Maputo, Moçambique",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
    company: "TOYOTA",
  },
  {
    id: 5,
    image: logo5,
    title: "Web Developer",
    time: "Agora",
    location: "London, UK",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
    company: "WhatsApp",
  },
  {
    id: 6,
    image: logo6,
    title: "Network engineer",
    time: "Agora",
    location: "Porto, Portugual",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
    company: "YouTube",
  },
  {
    id: 7,
    image: logo7,
    title: "UI/UX Designer",
    time: "Agora",
    location: "Moçambique",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
    company: "Telegram",
  },
  {
    id: 8,
    image: logo8,
    title: "Product Manager",
    time: "Agora",
    location: "Moçambique",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
    company: "Twitter",
  },
];

const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {Data.map(({ id, image, title, time, location, desc, company }) => {
          return (
            <div key={id} className="group group/item singleJob w-[250px] p-5 bg-white rounded 10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg"
            >
              <span className="flex justify-between items-center gap-4">
                <h1
                  className="text-[16px] font-semibold text-textColor
        group-hover:text-white"
                >
                 {title}
                </h1>
                <span className="flex items-center text-[#ccc] gap-1">
                  <BiTimeFive />
                  {time}
                </span>
              </span>
              <h6 className="text-[#ccc] ">{location}</h6>
              <p
                className="text-[13px] text-[#959595] pt-[20px] border-t-[2px]
      group-haver:text-white"
              >
                {desc}
              </p>

              <div className="company flex items-center gap-2">
                <img src={image} alt="Company logo" className="w-[10%]" />
                <span className="text-[14px] py-[1rem] block group-hover:text-white">
                  {company}
                </span>
              </div>

              <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white">
                Candidatar-se
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Jobs;
