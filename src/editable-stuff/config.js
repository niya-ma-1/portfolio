// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Niya",
  middleName: "",
  lastName: "Ma",
  message: "Software Engineer && Davidson College Student",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/niya-ma-1",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/niya-ma/",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/niya0w0/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/niyama.jpeg"),
  imageSize: 375,
  message:
    "My name is Niya. I’m a junior Computer Science and Mathematics double major at Davidson College. Some of my interests include competing in hackathons and working on open source projects. During my free time, I like lifting, hiking, and making good food.",
  resume: "https://docs.google.com/document/d/1OFb5jVPRLUe1R7rrh-FlU7suYRPkuzYkQyp_WwNsr9c/edit?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "niya-ma-1", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: [
    {
    name: "Shrüming",
    description: "As the carbon footprint skyrockets across the states, there is a pretty neat, tasty (and fun!) fix: mushrooms. Winner of 'Best ML Hack Using Carbon Footprint Data' at VTHacks X. ",
    repo: "https://github.com/niya-ma-1/vthacks2022",
    youtube: "https://www.youtube.com/embed/k9FvgGbsjzE",
    devpost: "https://devpost.com/software/shrooms-r-us",
    keywords: ["AI/ML", "Image Classification", "Carbon Footprint", "PyTorch", "React", "Google Maps API"]
    }, 
    {
      name: "Tutana AI",
      description: "TutanaAI is a website that allows students to write their college essays using the OpenAI davinci_003 model. Work-in-progress.",
      repo: "https://github.com/olsenbudanur/BisonHacks2022",
      youtube: "https://www.youtube.com/embed/5dIJss2OCpk",
      devpost: "https://https://devpost.com/software/waitfree-dmv.com/software/codeviolet",
      keywords: ["AI/ML", 'React', 'Firebase', 'Stripe',]
    }, 
    {
      name: "WaitFree DMV!",
      description: "Online DMV appointments made accessible, simple, and easy. 3rd Place at Bison Hacks 2022. ",
      repo: "https://github.com/olsenbudanur/BisonHacks2022",
      youtube: "https://www.youtube.com/embed/5dIJss2OCpk",
      devpost: "https://https://devpost.com/software/waitfree-dmv.com/software/codeviolet",
      keywords: ['Chromium', 'Firebase', 'Selenium', 'Twilio', 'Bash', 'React', 'Google Maps API']
    }, 
    {
      name: "BlockAide",
      description: "Lift Unjust Blockades with BlockAide, and Democratize the Crowdfunding Process For All! Winner of 'Designed for Security and Privacy' at VTHacks IX.",
      repo: "https://github.com/niya-ma-1/vthacks",
      youtube: "https://www.youtube.com/embed/0THBjjaEsEk",
      devpost: "https://devpost.com/software/initial-post",
      keywords: ['Auth0', 'React', "Ethereum", "Firebase", "MetaMask", "Solidity"]
    }, 
    {
      name: "B-LOT",
      description: "Ever wonder who won the lottery? B-LOT is here to publicize the lottery transaction. B-LOT is implemented with block-chain, firebase, and Nessi. Winner of 'Most Creative Use of Automation' at Pearl Hacks 2022",
      repo: "https://github.com/niya-ma-1/pearlhacks",
      youtube: "https://www.youtube.com/embed/TMr-uPn0_gQ",
      devpost: "https://devpost.com/software/b-lot",
      keywords: ['Capital One Nessi', 'Firebase', "React", "Stellar"]
    }, 
    {
      name: "CodeViolet",
      description: "Hackathon project for HackViolet 2022. Winner of 'Most Customer Focused' category.",
      repo: "https://github.com/niya-ma-1/hackviolet",
      youtube: "https://www.youtube.com/embed/aRbOfZL9ZO4",
      devpost: "https://devpost.com/software/codeviolet",
      keywords: ['Firebase', 'React Native']
    }, 
    {
      name: "Highlight of My Day",
      description: "Raspberry Pi project built using sensors and Python. Whenever the PIR(passive infrared) sensor detect motion, this device speaks a random compliment as well as the current weather.",
      repo: "https://github.com/niya-ma-1/PComp_Project1",
      youtube: "https://www.youtube.com/embed/MaI5Kzr2nR8",
      keywords: ['Raspberry Pi', 'Motion Sensor', 'DIY Amp', 'Google gTTS']
    }, 
    {
      name: "Home Security System",
      description: "Raspberry Pi project built using sensors and Python. When motion is detected, trigger an alarm system that plays an alarm audio, flashes LED light strip red, waits for password input (using a knock sensor), and sends a signal to another device that will trigger a nerf gun and take a photo of the intruder..",
      repo: "https://github.com/niya-ma-1/PComp_Project2",
      youtube: "https://www.youtube.com/embed/yhbOVKLq0LU",
      keywords: ['Raspberry Pi', 'Motion Sensor', 'Knock Sensor', 'Networking']
    }, 
  ]
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Leadership",
  message:[
    {
      name: "Hack@Davidson - President",
      link: "https://c-ca-davidson.wixsite.com/website",
      role: "Co-founded the first student-led hackathon at Davidson College with 90+ registrations and over $6k raised.",
    },
    {
      name: "Association for Women in Mathematics, Davidson College Chapter - President",
      link: "",
      role: "Hold monthly programs to promote equal opportunities for women and nonbinary students."
    }
  ]
    ,
  images: [
    {
      img: require("../assets/img/opening_ceremony.jpeg"), 
      label: "Hack@Davidson Opening Ceremony", 
      paragraph: "" 
    },
    { 
      img: require("../assets/img/Hack_Davidson_team.jpeg"), 
      label: "VTHacks X with CCAD Members", 
      paragraph: "" 
    },
    { 
      img: require("../assets/img/photo1.JPG"), 
      label: "VTHacks X with Hack@Davidson Members", 
      paragraph: "" 
    }
  ],
  imageSize: {
    width:"615",
    height:"500"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Technical Skills",
  hardSkills: [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg",
    "https://github.com/devicons/devicon/blob/v2.15.1/icons/raspberrypi/raspberrypi-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/julia/julia-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  ]
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "Reach me at",
  email: "niyama12321@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Software Development Engineering Intern',// Here Add Company Name
      companylogo: require('../assets/img/oracle_logo.jpg'),
      date: 'May 2023 - August 2023',
    },
    {
      role: 'Software Engineer Intern',// Here Add Company Name
      companylogo: require('../assets/img/qualtrics.png'),
      date: 'May 2022 - August 2022',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/piie.jpeg'),
      date: 'September 2021 - November 2021',
    },
  ]
}


export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
