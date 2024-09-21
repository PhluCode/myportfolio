import WeatPic from "../assets/projects/WeatPic.png";
import BmiPic from "../assets/projects/BmiPic.png";
import CurPic from "../assets/projects/CurPic.png";
import EngPic from "../assets/projects/EngPic.png";
import QuizPic from "../assets/projects/QuizPic.png";
import TicPic from "../assets/projects/TicPic.png";

export const HERO_CONTENT = `"I created this portfolio website using JavaScript, React, Tailwind CSS framework and the Framer Motion library. It’s designed to introduce myself, showcase my skills, and highlight the projects I’ve worked on."`;

export const ABOUT_TEXT = `My name is Suwanchai Chaisuwansri, but you can call me Phulu. I'm 18 years old, born on April 20, 2006, and I'm Thai. I live on Koh Phangan, Surat Thani, and am currently in my final year at Koh Phangan Suksa School, studying in the Science and Mathematics program. I have a deep interest in programming because of its complexity and the rewarding sense of accomplishment it brings when solving challenges. My main passion is web development, and I aspire to become a web developer in the future.`;

export const PROJECTS = [
  {
    title: "Weather App",
    image: WeatPic,
    description:
      "This website allows you to check the temperature, humidity, and wind speed for any country or city in the world.",
    technologies: ["HTML", "CSS", "React"],
    linktag: 'weather-app'
  },
  {
    title: "English Dictionary App",
    image: EngPic,
    description:
      "This website lets you find the meaning of any English word. It provides definitions for both noun and verb forms, along with synonyms for each word.",
    technologies: ["HTML", "CSS", "React"],
    linktag: 'english-dictionary'
  },
  {
    title: "Currency Converter App",
    image: CurPic,
    description:
      "This website allows you to check the exchange rates between currencies, helping you see how much your money is worth in the currency you’re interested in.",
    technologies: ["HTML", "CSS", "React"],
    linktag: 'currency-converter'
  },
  {
    title: "Quiz App",
    image: QuizPic,
    description:
      "This website lets you test your IT knowledge by taking a 10-question quiz.",
    technologies: ["HTML", "CSS", "React"],
    linktag: 'quiz-app'
  },
  {
    title: "TicTacToe Game",
    image: TicPic,
    description:
      "This website features a Tic Tac Toe game for two players, perfect for having fun and relieving stress.",
    technologies: ["HTML", "CSS", "React"],
    linktag: 'tic-tac-toe'
  },
  {
    title: "Bmi Calculator App",
    image: BmiPic,
    description:
      "This website helps you calculate your BMI and understand your health status. It also offers advice on how to improve and maintain your well-being based on your BMI value.",
    technologies: ["HTML", "CSS", "React"],
    linktag: 'bmi_cal'
  }
];

export const CONTACT = {
  address: "110/40 M.6 Bantai Koh-Phagan Surat-Thani 84280",
  phoneNo: "+66 064-628-8437",
  email: "phlugiezstudentz@gmail.com"
};
