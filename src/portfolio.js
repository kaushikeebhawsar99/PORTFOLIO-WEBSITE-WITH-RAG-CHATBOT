/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hey!",
  title2: "Kaushikee",
  logo_name: "Kaushikee()",
  nickname: "Kaushikee",
  full_name: "Kaushikee Bhawsar",
  subTitle:
    "Web Developer, Generative AI Enthusiast, Quality Engineer. Always learning!",
  resumeLink:
    "https://drive.google.com/file/d/1PM88K9o7pbqSLCskQmmVt_UwkE_0Ute3/view?usp=drive_link",
  mail: "mailto:kaushikeebhawsar1999ca@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/kaushikeebhawsar99",
  linkedin: "https://www.linkedin.com/in/kaushikee-bhawsar-54127b177/",
  gmail: "kaushikeebhawsar1999ca@gmail.com",
  gitlab: " ",
  facebook: " ",
  twitter: "",
  instagram: "https://www.instagram.com/kaushikee_bhawsar/",
};

const skills = {
  data: [
    {
      title: "Front End Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using ReactJS and Angular",
        "⚡ Enhancing interactivity by integrating AI-based Chatbots",
        "⚡ User Experience optimization through intuitive design",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "BootStrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#6610f2",
          },
        },
        // {
        //   skillName: "PHP",
        //   fontAwesomeClassname: "simple-icons:php",
        //   style: {
        //     color: "#7377AD",
        //   },
        // },
        // {
        //   skillName: "Java",
        //   fontAwesomeClassname: "simple-icons:java",
        //   style: {
        //     color: "#f89820",
        //   },
        // },
        // {
        //   skillName: "Kotlin",
        //   fontAwesomeClassname: "simple-icons:kotlin",
        //   style: {
        //     color: "#5c79df",
        //   },
        // },
        // {
        //   skillName: "Dart",
        //   fontAwesomeClassname: "simple-icons:dart",
        //   style: {
        //     color: "#29B0EE",
        //   },
        // },
        // {
        //   skillName: "Go",
        //   fontAwesomeClassname: "simple-icons:go",
        //   style: {
        //     color: "#00A7D0",
        //   },
        // },
        // {
        //   skillName: "Visual Basic",
        //   fontAwesomeClassname: "simple-icons:dot-net",
        //   style: {
        //     color: "#029FCE",
        //   },
        // },
        // {
        //   skillName: "C#",
        //   fontAwesomeClassname: "simple-icons:csharp",
        //   style: {
        //     backgroundColor: "transparent",
        //     color: "#3776AB",
        //   },
        // },
        // {
        //   skillName: "C",
        //   fontAwesomeClassname: "simple-icons:c",
        //   style: {
        //     color: "#E94E32",
        //   },
        // },
        // {
        //   skillName: "C++",
        //   fontAwesomeClassname: "simple-icons:cplusplus",
        //   style: {
        //     color: "#E94E32",
        //   },
        // },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#c3002f",
          },
        },
        // {
        //   skillName: "NextJS",
        //   fontAwesomeClassname: "simple-icons:nextdotjs",
        //   style: {
        //     color: "#FFFFFF",
        //     backgroundColor: "#1D1D1D",
        //     borderRadius: "50%",
        //   },
        // },
        // {
        //   skillName: "NodeJS",
        //   fontAwesomeClassname: "simple-icons:node-dot-js",
        //   style: {
        //     color: "#339933",
        //   },
        // },
        // {
        //   skillName: "MongoDB",
        //   fontAwesomeClassname: "simple-icons:mongodb",
        //   style: {
        //     color: "#439743",
        //   },
        // },
        // {
        //   skillName: "GraphQL",
        //   fontAwesomeClassname: "simple-icons:graphql",
        //   style: {
        //     color: "#DE33A6",
        //   },
        // },
        // {
        //   skillName: "Android App Development",
        //   fontAwesomeClassname: "simple-icons:android",
        //   style: {
        //     color: "#3DDC84",
        //   },
        // },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
        // {
        //   skillName: "MySQL",
        //   fontAwesomeClassname: "simple-icons:mysql",
        //   style: {
        //     color: "#4479A1",
        //   },
        // },

        // {
        //   skillName: "Wordpress",
        //   fontAwesomeClassname: "simple-icons:wordpress",
        //   style: {
        //     color: "#207297",
        //   },
        // },

        // {
        //   skillName: "Git",
        //   fontAwesomeClassname: "simple-icons:git",
        //   style: {
        //     color: "#E94E32",
        //   },
        // },
      ],
    },

    {
      title: "Cloud Infrastructure",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Oracle Cloud Infrastructure (OCI) 2024 Generative AI Professional",
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Proficient in using Azure DevOps for managing and deploying applications",
        "⚡ Experience with deploying and managing applications on cloud platforms, ",
      ],
      softwareSkills: [
        {
          skillName: "AZURE",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "DATABRICKS",
          fontAwesomeClassname: "simple-icons:databricks",
          style: {
            color: "#FF3621",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Oracle",
          fontAwesomeClassname: "simple-icons:oracle",
          style: {
            color: "#C74634",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Streamlit",
          fontAwesomeClassname: "simple-icons:streamlit",
          style: {
            color: "#ff4b4b",
          },
        },
        // {
        //   skillName: "Heroku",
        //   fontAwesomeClassname: "simple-icons:heroku",
        //   style: {
        //     color: "#6863A6",
        //   },
        // },
        // {
        //   skillName: "Firebase",
        //   fontAwesomeClassname: "simple-icons:firebase",
        //   style: {
        //     color: "#FFCA28",
        //   },
        // },
        // {
        //   skillName: "MongoDB",
        //   fontAwesomeClassname: "simple-icons:mongodb",
        //   style: {
        //     color: "#47A248",
        //   },
        // },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
    {
      title: "Generative AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Hands-on experience with building RAG-based chatbots and vector databases",
        "⚡ Proficient with OpenAI, Hugging Face's Transformers and LangChain for LLM applications",
        "⚡ Experience in deploying and fine-tuning generative AI models",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos-python",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "LangChain",
          fontAwesomeClassname: "simple-icons:langchain",
          style: {
            backgroundColor: "transparent",
            // backgroundColor: "white",
            // color: "#D00000",
          },
        },
        {
          skillName: "Chroma",
          fontAwesomeClassname: "logos-chroma",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "OpenAI",
          fontAwesomeClassname: "simple-icons:openai",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "HuggingFace",
          fontAwesomeClassname: "simple-icons:huggingface",
          style: {
            "backgroundColor": "transparent",
            "color": "#FFBF00"
          },
        },
      ],
    },
    {
      title: "Quality Assurance",
      fileName: "FullStackImg",
      skills: [
        "⚡ Extensive experience in ETL Testing, Web & Application Testing, Mobile Testing, Performance Testing, and API Testing",
        "⚡ Proficient in using Selenium WebDriver, TestNG, BDD Cucumber, Postman, and JTMF for automated testing",
        "⚡ Experience with Continuous Quality Improvement and Quality Control methodologies"
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos-python",
          style: {
            backgroundColor: "transparent"
          }
        },
        {
          skillName: "Selenium WebDriver",
          fontAwesomeClassname: "simple-icons:selenium",
          style: {
            backgroundColor: "transparent",
            color: "#43B02A"
          }
        },
        {
          skillName: "Cucumber",
          fontAwesomeClassname: "simple-icons:cucumber",
          style: {
            backgroundColor: "transparent",
            color: "#23D96C"
          }
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postman",
          style: {
            backgroundColor: "transparent",
            color: "#FF6C37"
          }
        },
        {
          skillName: "JMeter",
          fontAwesomeClassname: "simple-icons:apachejmeter",
          style: {
            backgroundColor: "transparent",
            color: "#D22128"
          }
        },
        {
          skillName: "Azure DevOps",
          fontAwesomeClassname: "simple-icons:azuredevops",
          style: {
            backgroundColor: "transparent",
            color: "#0078D7"
          }
        }
      ]
    }
  ],
};

const degrees = {
  degrees: [
    {
      title: "Northeastern University",
      subtitle: "Master of Science in Information Systems",
      gpa : "[GPA - 3.94/4.00]",
      logo_path: "NU-logo.png",
      alt_name: "NEU",
      duration: "Sept 2022 - Aug 2024",
      descriptions: [
        "⚡ Studied Advanced Software Development Concepts, including Application and Web Development",
        "⚡ Gained expertise in User Experience & Testing and Software Quality Control & Management",
        "⚡ Developed strong foundations in Program Structure and Algorithm, Database Management",
        "⚡ Acquired knowledge in Data Science Methods and Tools, and Prompt Engineering for Generative AI",
      ],
      website_link: "https://www.northeastern.edu/",
    },
    {
      title: "Shri Vaishnav Vidyapeeth Vishwavidyalaya",
      subtitle: "B.Tech. in Information Technology",
      gpa : "[CGPA - 9.12/10.00]",
      logo_path: "svvv.jpeg",
      alt_name: "SVVV",
      duration: "Jul 2016 - May 2020",
      descriptions: [
        "⚡ Studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        "⚡ Completed various online courses for ML/DL, Web Development, Mobile App Development, etc.",
        "⚡ Implemented several projects based on my Information technology program. ",
      ],
      website_link: "https://svvv.edu.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "OCI 2024 Generative AI",
      subtitle: "Oracle Cloud Infrastructure",
      logo_path: "OCI.png",
      certificate_link:
        "https://drive.google.com/file/d/1Jp8OhAQ1rN-4npmHacQ0vSGhlNGZQ3LI/view?usp=sharing",
      alt_name: "OCI",
      color_code: "#b190b0",
    },
    {
      title: "Database Management System",
      subtitle: "IIT KHARAGPUR",
      logo_path: "nptel.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1t81qVAzMnYnGktS6LKLCt60Iv6wjn9ja/view?usp=sharing",
      alt_name: "AWS",
      color_code: "#ffc475",
    },
    {
      title: "Azure Data Fundamentals",
      subtitle: "LinkedIn Learning",
      logo_path: "AzureData.png",
      certificate_link: "https://drive.google.com/file/d/1sW9ESpJW-RDVqA2c80slEXJLOBqTxh1R/view?usp=sharing",
      alt_name: "Google",
      color_code: "#2AAFED",
    },
    // {
    //   title: "Google Code-In Student",
    //   subtitle: "2014-2017",
    //   logo_path: "google_logo.png",
    //   certificate_link: " ",
    //   alt_name: "Google",
    //   color_code: "#1e70c1",
    // },
    // {
    //   title: "Google Summer of Code Mentor",
    //   subtitle: "2017 / 2018 / 2020",
    //   logo_path: "google_logo.png",
    //   certificate_link: " ",
    //   alt_name: "Google",
    //   color_code: "#ffbfae",
    // },
    // {
    //   title: "Google Code-In Mentor",
    //   subtitle: "2017 / 2018 / 2019",
    //   logo_path: "google_logo.png",
    //   certificate_link: " ",
    //   alt_name: "Google",
    //   color_code: "#b190b0",
    // },
    // {
    //   title: "Deep Learning Specialization",
    //   subtitle: "deeplearning.ai",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://coursera.org/share/737a9587023c666b8e6cb303157aaeba",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#47A048",
    // },
    // {
    //   title: "Sequence Models",
    //   subtitle: "deeplearning.ai",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/FM5AKEZA9NUY",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#F6B808",
    // },
    // {
    //   title: "Convolutional Neural Networks",
    //   subtitle: "deeplearning.ai",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/U8BLDNUT9UUM",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#2AAFED",
    // },
    // {
    //   title: "Structuring Machine Learning Projects",
    //   subtitle: "deeplearning.ai",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/YLC25SJQKH3Y",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#E2405F",
    // },
    // {
    //   title: "Machine Learning",
    //   subtitle: "deeplearning.ai",
    //   logo_path: "stanford_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/records/72KY93DT82MP",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // },
    // {
    //   title: "Neural Networks and Deep Learning",
    //   subtitle: "deeplearning.ai",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/records/25JXRB2RWHRX",
    //   alt_name: "Google",
    //   color_code: "#7A7A7A",
    // },
    // {
    //   title: "Improving Deep Neural Networks",
    //   subtitle: "deeplearning.ai",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/records/PKR9M9LQ3JWC",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "Android Developer Nanodegree",
    //   subtitle: "Part of Google India Scholarship Program",
    //   logo_path: "100.png",
    //   certificate_link: "https://graduation.udacity.com/confirm/HLE7K5V3",
    //   alt_name: "Google",
    //   color_code: "#C5E2EE",
    // },
    // {
    //   title: "InOut 4.0 Winner #2",
    //   subtitle: "2017",
    //   logo_path: "ino.png",
    //   certificate_link: " ",
    //   alt_name: "InOut",
    //   color_code: "#fffbf3",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Teaching Assistant",
  description:
    "With two impactful internships, experience as a Teaching Assistant for two courses, and over 3 years in the professional field, I am actively seeking new opportunities to further enhance my expertise and drive innovation.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Interships",
      experiences: [
        {
          title: "Quality Engineering Intern",
          company: "TD Bank, Canada",
          company_url: "https://www.td.com",
          logo_path: "TD.png",
          duration: "May 2023 - Apr 2024",
          location: "Toronto, ON",
          description:
          [
            "Leveraged BDD Cucumber, Java and Jenkins using groovy to create automated regression pipelines, achieving a 40% reduction in testing time and a 30% boost in efficiency for Customer Risk Rating data. ",
            "Executed ETL processes for data validation using SQL, Python/PySpark in Databricks. Achieved a high accuracy rate by meticulously processing millions of records and eliminating bad data. ",
            "Orchestrated data pipelines with Azure Data Factory, ensuring seamless and efficient data extraction, transformation, and data loading processes, contributing to overall data quality and reliability. ",
            "Earned TD appreciation e-cards from the Team lead and team members for consistent, noteworthy contributions and a results-oriented approach, focusing on achieving high-quality outcomes. "
          ],
          color: "#f10000",
        },
        {
          title: "Software Developer Intern",
          company: "OEPP Innovations Pvt. Ltd",
          company_url: "https://www.shahsoftsol.com/",
          logo_path: "OEPP.png",
          duration: "Jan 2020 - Apr 2020",
          location: "Indore, India",
          description:
            "Designed and implemented responsive websites using React, Angular, HTML, CSS and Bootstrap and enhanced interactivity by integrating AI-based Chatbots, boosting communication efficiency by 20%. Awarded 'Intern of the Month' for outstanding performance and superior organizational skills.",
          color: "#2962FF",
        },
      ],
    },
    {
      title: "Work",
      experiences: [
        {
          title: "Project Engineer",
          company: "Wipro Technologies",
          company_url: "https://www.wipro.com/en-IN/",
          logo_path: "wipro.png",
          duration: "Sep 2020 - Sep 2022",
          location: "Pune, India",
          description: "Spearheaded the quality assurance efforts to successfully deliver flawless software products and developed over 1500 automated multi-browser tests with Selenium and TestNG. Facilitated root cause analysis of defects with the team and acted as a catalyst for continuous improvement, reducing manual workload by 60%. Streamlined IT workload by 20% via targeted performance testing using JMeter and API testing using Postman. Collaborated with BAs, Devs, POs in sprint planning sessions to decompose solutions into valuable increments and deliver assignments with detailed quality reports, ensuring client satisfaction by resolving critical defects. Secured a top performance rating of 5/5 and was honored with the 'Standing Ovation Award' in the FY 20-21 Walk of Fame",
          color: "#ee3c26",
        }
      ],
    },
    {
      title: "Teaching Assistant",
      experiences: [
        {
          title: "Graduate Teaching Assistant",
          company: "Northeastern University",
          company_url: "https://www.northeastern.edu/",
          logo_path: "NU-logo.png",
          duration: "Aug 2023 - Apr 2024",
          location: "Toronto, ON",
          description:
            "Assisted faculty in preparing and delivering course content, managed student queries, and supported Canvas administrative tasks. Instructed 60+ students and conducted the evaluation of assignments and exams, delivering insightful feedback. Facilitated classroom activities and events to enhance student learning and engagement. Contributed to course development by updating materials and organizing learning resources",
          color: "#4285F4",
        }
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects demonstrate expertise in cutting-edge technologies like Generative AI, React, Angular, Database Management, and Data Science, highlighting my ability to innovate and deliver impactful solutions",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "kaushikee-photo.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Youtube Channel",
    subtitle:
      "On my YouTube channel, I share insights and tutorials on cutting-edge technologies including Generative AI, Quality engineering etc. Subscribe to stay updated with the latest trends and innovations in the tech world!",
    link: "https://www.youtube.com/@kaushikeebhawsar",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      name: "RAG Chatbot",
      url: "https://kaushikee.streamlit.app/",
      description: "RAG based virtual Chatbot to help you navigate through my professional background efficiently. ",
      languages: [
        {
          name: "LangChain",
          iconifyClass: "simple-icons:langchain",
        },
        {
          name: "Chroma",
          iconifyClass: "logos-chroma",
        },
        {
          name: "Streamlit",
          iconifyClass: "simple-icons:streamlit",
        },
        {
          name: "HuggingFace",
          iconifyClass: "simple-icons:huggingface",
        },
      ],
    },
    {
      name: "Croptrail",
      url: "https://croptrails.satsure.co/",
      description:
        "CropTrails, a web application aimed at revolutionizing agriculture through innovative technology. Leveraging HTML, CSS, JavaScript, and Bootstrap.",
      languages: [
        {
          name: "Javascript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "HTML5",
          iconifyClass: "simple-icons:html5",
        },
        {
          name: "CSS3",
          iconifyClass: "fa-css3",
        },
        {
          name: "BootStrap",
          iconifyClass: "simple-icons:bootstrap",
        },
      ],
    },
    {
      name: "CHAMBER 20A",
      url: "https://www.chamber20a.com/",
      description: "By employing web technologies, including HTML, CSS, JavaScript, and Bootstrap, crafted a responsive design and a seamless digital experience.",
      languages: [
        {
          name: "Javascript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "HTML5",
          iconifyClass: "simple-icons:html5",
        },
        {
          name: "CSS3",
          iconifyClass: "fa-css3",
        },
        {
          name: "BootStrap",
          iconifyClass: "simple-icons:bootstrap",
        },
      ],
    },
    {
      name: "Ecommerce website",
      url: "",
      description: "Ecommerce website created using React, Javascript, HTML and CSS.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "Javascript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "HTML5",
          iconifyClass: "simple-icons:html5",
        },
        {
          name: "CSS3",
          iconifyClass: "fa-css3",
        },
      ],
    },
    {
      name: "CropRigate",
      url: " ",
      description:
        "a web application aimed at revolutionizing agriculture through innovative technology. Leveraging HTML, CSS, JavaScript, and Bootstrap.",
      languages: [
        {
          name: "Javascript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "HTML5",
          iconifyClass: "simple-icons:html5",
        },
        {
          name: "CSS3",
          iconifyClass: "fa-css3",
        },
      ],
    },
    
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
