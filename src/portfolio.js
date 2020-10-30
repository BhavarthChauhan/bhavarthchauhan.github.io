
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Bhavarth Chauhan",
  title: "Hi all, I'm Bhavarth",
  subTitle: emoji("A passionate Software Developer 🚀 with an experience of building Web applications with Java / Reactjs / Typescript." +
      " I am currently exploring machine learning concepts and applying them to predict COVID-19 cases in the country."),
  resumeLink: "https://drive.google.com/file/d/1wMEEwrkoyc3SeS4GBBc2oJrR4d-vk5yi/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/BhavarthChauhan",
  linkedin: "https://www.linkedin.com/in/bhavarth-chauhan-8b809b89/",
  gmail: "bhavarth.chauhan95@gmail.com",
  facebook: "https://www.facebook.com/bhavarth.chauhan/"
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "About me",
  subTitle: "Currently, I am pursuing my Masters in Computer Science and working in the VAI Lab @Stony Brook." +
      " I have 2 years of experience as a full stack developer building robust applications",
  skills: [
    emoji("⚡ My current research is focused on creating info-graphic bar charts by displaying icons instead of bars by understanding the context of the data."),
    emoji("⚡ Prior to my masters I was working at Goldman Sachs where my team built an automation system to gather client data during the client" +
        " on-boarding/ rolling review."),
    emoji("⚡ I also worked on creating meta-data driven analysis tool to analyse trade reports sent to regulators and develop insights from the trades.")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName:"Java",
      fontAwesomeClassname:"fab fa-java"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },

    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "Stony Brook University",
      logo: require("./assets/images/SBU.jpg"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2019 - December 2020",
      desc: "",
      descBullets: [
          "Part of Visual Analytics and Imaging lab under Prof Klaus Muller",
        "Worked with Prof Praveen Tripathi as a part of my independent research to analyze the relation between COVID 19 cases and " +
        "mobility data provided by Google."
      ]
    },
    {
      schoolName: "Manipal Institute of Technology",
      logo: require("./assets/images/MIT.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2013 - June 2017",
      desc: "",
      descBullets: [
        "President of IEEE Student Branch Manipal, conducted events and workshops on campus in electrical and computer science domain.",
      ]
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",
      company: "Microsoft",
      companylogo: require("./assets/images/MSFT.png"),
      date: "May 2020 – August 2020",
      desc: "Tech Stack - Typescript, React",
      descBullets: [
        "Introduced the ability to customize dashboard by enabling drag and drop feature to add new widgets.\n",
        "Increased the accessibility of the dashboard, the feature was rolled into production by the end of the internship helping users to personalize their experience."
      ]
    },
    {
      role: "Software Development Engineer",
      company: "Goldman Sachs",
      companylogo: require("./assets/images/GS.jpg"),
      date: "June 2017 – July 2019",
      desc: "Tech Stack- Java, ReactJs, SQL",
       descBullets: [
       "Created a metadata-driven trade analysis tool using ReactJS and Elasticsearch which reduced user analysis time by 45%.",
       "Automated the process of gathering client data while onboarding of clients by downloading client documents through robotic process automation and applying natural language processing to read the data.",
       "The system built saved 2.5M$ by automating the work of 40 headcounts."
       ]
    },
      {
      role: "Software Development Engineer Intern",
      company: "Goldman Sachs",
      companylogo: require("./assets/images/GS.jpg"),
      date: "January 2017 – May 2017",
      desc: "Tech Stack- Java, ElasticSearch, GraphQL",
       descBullets: [
       "Created a testing tool to compare expected and calculated value trade report eligibility, reducing analysis time by 35%.",
       " The tool helped in reducing under-reporting scenarios by 15% by catching wrongly calculated trade eligibility values."
       ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "saadpasta", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      link: "http://saayahealth.com/"
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      link: "http://nextu.se/"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Projects"),
  subtitle: "Some cool stuff I have worked on during my masters.",

  achievementsCards: [
    {
      title: "Analyze relationship between COVID-19 and people movement",
      subtitle: "Analyzed and created a regression model to predict COVID cases in a county given the movement of people." +
          " Using the data provided by google, I found out if people are going to closed spaces or open spaces and also scrapped social distancing data from the internet." +
          " Created a neural network to predict the number of cases for a county given the movement of people and if they are following social distancing protocols.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
        { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
        { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    },
    {
      title: "Dashboard to analyze gun violence in USA",
      subtitle: "Using d3.js, built a dashboard to analyze gun violence in the country using chloropleth maps, time series analysis." +
          " Using brushing and linking techniques, created a responsive dashboard to give the user clear picture of the trend in various states." +
          " Implemented PCA analysis to reduce dimensions and create scatter plots to analyze the trend among states.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    },

    {
      title: "Analyze the effect of COVID-19 on California's air quality",
      subtitle: "Using concepts of hypothesis testing, we tried to find out if there is statistically significant affect for having better air quality in California due to shelter in place." +
          " Using tests like Wald's test, p-test we tried to find the significance. Using ARIMA time series analysis we predicted the air quality for next week given the COVID cases in the " +
          "state. ",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-631-418-5911",
  email_address: "bhavarth.chauhan95@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
