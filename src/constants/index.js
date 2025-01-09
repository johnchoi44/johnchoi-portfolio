import {
    heroImage,
    white1,
    white2,
    white3,
    white4,
    white5,
    white6,
    white7,
    white8,
    resume,
    anp,
    cybermed,
    kisti,
    nittanyai,
    pennstate,
    rokaf,
    truwin,
    email,
    github,
    linkedin,
    w340,
    ds410book,
    chatbot,
    chatbot1,
    datafest,
    ds410,
    groop,
    groop1,
    groop2,
    groop3,
    groop4,
    groop5,
    groop6,
    groop7,
    groop8,
    ps,
    selenium,
    twitter,
    vibe1,
    vibe2,
    vibe3,
    vibe4,
    vibe5,
    vibe6,
    vibe7,
    vibeai
} from "../assets";

export const history = [
    {
        "role": "Machine Learning Engineer",
        "organisation": "Nittany Ai Advance",
        "startDate": "Aug 2024",
        "endDate": "Present",
        "experiences": ["Computer Vision", "EfficientNetB3", "TensorFlow", "PyTorch", "KMeans", "PCA", "CNN", "Amazon EC2"],
        "imageSrc": nittanyai
    },
    {
        "role": "Undergraduate Research Assistant",
        "organisation": "Penn State Listening Lab",
        "startDate": "Jan 2024",
        "endDate": "Aug 2024",
        "experiences": ["Data Collection", "Machine Learning"],
        "imageSrc": pennstate
    },
    {
        "role": "Technology Tutor",
        "organisation": "Penn State IT Learning & Development",
        "startDate": "Aug 2023",
        "endDate": "Present",
        "experiences": [
            "Technical Support", "Interpersonal Skills"
        ],
        "imageSrc": pennstate
    },
    {
        "role": "Data Science Intern",
        "organisation": "Advanced Nano Products Co., Ltd (ANP)",
        "startDate": "May 2023",
        "endDate": "Aug 2023",
        "experiences": [
            "Data Management", "ESG"
        ],
        "imageSrc": anp
    },
    {
        "role": "Development Team Intern",
        "organisation": "Truwin Co Ltd",
        "startDate": "Aug 2022",
        "endDate": "May 2022",
        "experiences": [
            "Research", "Vehicle Motor", "Vehicle Battery"
        ],
        "imageSrc": truwin
    },
    {
        "role": "AI Engineering Intern",
        "organisation": "Cybermed Inc.",
        "startDate": "Feb 2022",
        "endDate": "May 2022",
        "experiences": [
            "Chatbot Development", "Sales Automation"
        ],
        "imageSrc": cybermed
    },
    {
        "role": "Military Police Sergeant and Squad Leader",
        "organisation": "Republic of Korea Air Force - 17th Fighter Wing",
        "startDate": "May 2020",
        "endDate": "Feb 2022",
        "experiences": [
            "Leadership", "Team Management", "Interpersonal Skills"
        ],
        "imageSrc": rokaf
    },
    {
        "role": "Intelligent Infra, Technology Research Center Intern",
        "organisation": "Korea Institute of Science and Technology Information (KISTI)",
        "startDate": "Sep 2019",
        "endDate": "Dec 2019",
        "experiences": [
            "PyTorch", "Caffe", "Lightweight Deep Learning Model"
        ],
        "imageSrc": kisti
    }
]

export const projects = [
    {
        "title": "Vibe.Ai",
        "imageSrc": vibeai,
        "description": "Platform for users to generate personalized voice outputs and music covers using advanced AI technologies.",
        "skills": ["#Voice Cloning", "#Music Cover Gen", "#React.js", "#Node.js"],
        "demo": "https://youtu.be/jwbqdBqSGfI?si=I5s_7gKNqidYZbqS",
        "source": "https://github.com/johnchoi44/VibeAI",
        "youtubeLink": "https://www.youtube.com/embed/jwbqdBqSGfI?si=MdO1qErDuZ2NsiFQ",
        "screenshots": ["", vibe1, vibe2, vibe3, vibe4, vibe5, vibe6]
    },
    {
    "title": "Groop",
    "imageSrc": groop,
    "description": "Real-time messaging platform which match people based on their MBTI and interests.",
    "skills": ["#Google Cloud Vertex AI", "#Firebase", "#React.js", "#Node.js"],
    "demo": "https://youtu.be/R4BUHn4X1lk",
    "source": "https://github.com/johnchoi44/GROOP",
    "youtubeLink": "https://www.youtube.com/embed/R4BUHn4X1lk?si=hTGA7gXSWcRRI0zQ",
    "screenshots": ["", groop1, groop2, groop3, groop4, groop5, groop6, groop7]
    },
    {
    "title": "Book Recommendation System",
    "imageSrc": ds410book,
    "description": "Developed genre-specific book recommendation system using Amazon book reviews.",
    "skills": ["#Apache Spark", "#HPC", "#ML"],
    "demo": "https://www.example.com",
    "source": "https://github.com/johnchoi44/BookRecommendationSystem",
    "screenshots": [ds410]
    },
    {
    "title": "Crime Severity Analysis in NYC",
    "imageSrc": w340,
    "description": "Analyzing and predicting crime severity across NYC using ML.",
    "skills": ["#ML", "#Data Analysis", "#Data Integration", "#Data Visualization"],
    "demo": "https://docs.google.com/presentation/d/1qLM_tuAN2niDSqgJhcYBwWSNY6nHni1OYO7s0cTM84E/edit?usp=sharing",
    "source": "https://github.com/johnchoi44/DS340W_Project",
    "screenshots": [w340]
    },
    {
    "title": "Workplace Social Media Activity",
    "imageSrc": ps,
    "description": "Research project investigating the impact of social/technical changes on organizational behaviors.",
    "skills": ["#Data Scraping", "#Sentiment Analysis", "#Twitter API"],
    "demo": "https://www.example.com",
    "source": "https://github.com/johnchoi44/ProjectTwitter",
    "screenshots": [twitter]
    },
    {
    "title": "Chatbot Development",
    "imageSrc": chatbot,
    "description": "Analyzed historical customer inquiries to model and develop a customer service chabot.",
    "skills": ["#SQL", "#KakaoTalk API"],
    "demo": "http://pf.kakao.com/_CXxmeb",
    "source": "https://www.linkedin.com/in/choi-yongjun/details/projects/",
    "screenshots": [chatbot1]
    },
    {
    "title": "MegaByte",
    "imageSrc": datafest,
    "description": "Analyzed real-world dataset provided by the AMA to design a platform to match a client to the appropriate attorney.",
    "skills": ["#R", "#Tableau", "#Data Visualization", "#Data Analysis"],
    "demo": "https://www.youtube.com/watch?v=SAb4ZrnstgU&t=96s",
    "source": "https://datafest.psu.edu/previous/_2023/",
    "youtubeLink": "https://www.youtube.com/embed/SAb4ZrnstgU?si=RqQnwDxgvA_JNIsO",
    "screenshots": [""]
    }
]