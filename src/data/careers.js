export const careerData = [
    {
        id: "software-developer",
        title: "Software Developer",
        description: "Build applications and systems that solve real-world problems. Focused on coding, logic, and software architecture.",
        roadmap: [
            { step: "Foundations", details: "Learn C++, Java, or Python. Master Data Structures and Algorithms (DSA)." },
            { step: "Development", details: "Pick a domain (Web, Mobile, Desktop). Learn Git and Version Control." },
            { step: "Full Stack", details: "Learn Database management (SQL/NoSQL) and System Design." },
            { step: "Professional", details: "CI/CD, Cloud Deployment, and Agile Methodologies." }
        ],
        resources: {
            youtube: [
                { name: "TakeUForward (Striver)", url: "https://www.youtube.com/c/takeUforward" },
                { name: "CodeWithHarry", url: "https://www.youtube.com/c/CodeWithHarry" },
                { name: "FreeCodeCamp", url: "https://www.youtube.com/c/Freecodecamp" },
                { name: "Apna College", url: "https://www.youtube.com/c/ApnaCollegeOfficial" }
            ],
            websites: [
                { name: "LeetCode", url: "https://leetcode.com" },
                { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org" },
                { name: "W3Schools", url: "https://www.w3schools.com" },
                { name: "JavaTpoint", url: "https://www.javatpoint.com" },
                { name: "Simplilearn", url: "https://www.simplilearn.com" }
            ]
        }
    },
    {
        id: "ml-engineer",
        title: "Machine Learning Engineer",
        description: "Design and implement AI models and algorithms that learn from data and make predictions.",
        roadmap: [
            { step: "Mathematics", details: "Linear Algebra, Calculus, and Statistics (high school & college level)." },
            { step: "Programming", details: "Master Python and libraries like NumPy, Pandas, and Matplotlib." },
            { step: "ML Core", details: "Supervised & Unsupervised learning. Scikit-learn." },
            { step: "Deep Learning", details: "Neural Networks, CNNs, RNNs using TensorFlow or PyTorch." }
        ],
        resources: {
            youtube: [
                { name: "StatQuest", url: "https://www.youtube.com/c/StatQuest" },
                { name: "Krish Naik", url: "https://www.youtube.com/c/KrishNaik" },
                { name: "Sentdex", url: "https://www.youtube.com/c/sentdex" },
                { name: "DeepLearning.AI", url: "https://www.youtube.com/c/Deeplearningai" }
            ],
            websites: [
                { name: "Kaggle", url: "https://www.kaggle.com" },
                { name: "Scikit-Learn", url: "https://scikit-learn.org" },
                { name: "Fast.ai", url: "https://www.fast.ai" },
                { name: "Towards Data Science", url: "https://towardsdatascience.com" }
            ]
        }
    },
    {
        id: "frontend-developer",
        title: "Frontend Developer",
        description: "Create the visual and interactive parts of a website. Focused on UI/UX and user interaction.",
        roadmap: [
            { step: "HTML & CSS", details: "Semantic HTML, Flexbox, CSS Grid, and responsive design." },
            { step: "JavaScript", details: "ES6+, DOM Manipulation, and Fetch API." },
            { step: "Frameworks", details: "Master React, Vue, or Angular. State management (Redux/Context)." },
            { step: "Advanced", details: "TypeScript, Next.js, and Performance optimization." }
        ],
        resources: {
            youtube: [
                { name: "Traversy Media", url: "https://www.youtube.com/c/TraversyMedia" },
                { name: "Web Dev Simplified", url: "https://www.youtube.com/c/WebDevSimplified" },
                { name: "JavaScript Mastery", url: "https://www.youtube.com/c/JavaScriptMastery" },
                { name: "The Net Ninja", url: "https://www.youtube.com/c/TheNetNinja" }
            ],
            websites: [
                { name: "W3Schools", url: "https://www.w3schools.com" },
                { name: "MDN Web Docs", url: "https://developer.mozilla.org" },
                { name: "Frontend Mentor", url: "https://www.frontendmentor.io" },
                { name: "CSS-Tricks", url: "https://css-tricks.com" }
            ]
        }
    },
    {
        id: "backend-developer",
        title: "Backend Developer",
        description: "Focus on server-side logic, databases, and application architecture. The engine behind the UI.",
        roadmap: [
            { step: "Language Core", details: "Master Node.js, Python (Django/FastAPI), Java (Spring), or Go." },
            { step: "Databases", details: "Relational (PostgreSQL/MySQL) and NoSQL (MongoDB/Redis)." },
            { step: "API Design", details: "RESTful principles, GraphQL, and Authentication (JWT/OAuth)." },
            { step: "Deployment", details: "Docker, Nginx, and Server-side performance." }
        ],
        resources: {
            youtube: [
                { name: "Hussein Nasser", url: "https://www.youtube.com/c/HusseinNasser" },
                { name: "The Primeagen", url: "https://www.youtube.com/c/ThePrimeagen" },
                { name: "ArjanCodes", url: "https://www.youtube.com/c/ArjanCodes" }
            ],
            websites: [
                { name: "Node.js Docs", url: "https://nodejs.org/docs" },
                { name: "Postman", url: "https://www.postman.com" },
                { name: "Couchbase", url: "https://www.couchbase.com" }
            ]
        }
    },
    {
        id: "fullstack-developer",
        title: "Full Stack Developer",
        description: "Combining both frontend and backend expertise to build complete end-to-end applications.",
        roadmap: [
            { step: "Frontend Mastery", details: "HTML, CSS, JS, and a modern framework like React." },
            { step: "Backend Core", details: "Server setup, API creation, and database integration." },
            { step: "DevOps Basics", details: "Learn to deploy using Vercel, Heroku, or AWS." },
            { step: "Real Projects", details: "Build complex applications like E-commerce or Social Media clones." }
        ],
        resources: {
            youtube: [
                { name: "JavaScript Mastery", url: "https://www.youtube.com/c/JavaScriptMastery" },
                { name: "Sonny Sangha", url: "https://www.youtube.com/c/SonnySangha" },
                { name: "Clever Programmer", url: "https://www.youtube.com/c/CleverProgrammer" }
            ],
            websites: [
                { name: "FreeCodeCamp", url: "https://www.freecodecamp.org" },
                { name: "The Odin Project", url: "https://www.theodinproject.com" }
            ]
        }
    },
    {
        id: "devops-engineer",
        title: "DevOps Engineer",
        description: "Bridging the gap between development and operations through automation and infrastructure.",
        roadmap: [
            { step: "Linux Admin", details: "Learn Linux internals, shell scripting, and server management." },
            { step: "CI/CD", details: "Master Jenkins, GitHub Actions, or GitLab CI." },
            { step: "Containerization", details: "Docker and Kubernetes for orchestration." },
            { step: "IaC", details: "Infrastructure as Code using Terraform or Ansible." }
        ],
        resources: {
            youtube: [
                { name: "TechWorld with Nana", url: "https://www.youtube.com/c/TechWorldwithNana" },
                { name: "KodeKloud", url: "https://www.youtube.com/c/KodeKloud" },
                { name: "DevOps Directive", url: "https://www.youtube.com/c/DevOpsDirective" }
            ],
            websites: [
                { name: "Roadmap.sh", url: "https://roadmap.sh/devops" },
                { name: "DZone", url: "https://dzone.com" }
            ]
        }
    },
    {
        id: "cloud-engineer",
        title: "Cloud Engineer",
        description: "Designing and managing scalable systems in cloud environments like AWS, Azure, or GCP.",
        roadmap: [
            { step: "Cloud Fundamentals", details: "Learn core services (Compute, Storage, Networking)." },
            { step: "Security", details: "IAM, VPCs, and Cloud compliance." },
            { step: "Automation", details: "CloudFormation or Terraform for automated provisioning." },
            { step: "Serverless", details: "AWS Lambda, Azure Functions, and event-driven architectures." }
        ],
        resources: {
            youtube: [
                { name: "AWS Online Tech Talks", url: "https://www.youtube.com/c/AWSOnlineTechTalks" },
                { name: "Cloud Academy", url: "https://www.youtube.com/c/CloudAcademy" },
                { name: "DigitalCloud Training", url: "https://www.youtube.com/c/DigitalCloudTraining" }
            ],
            websites: [
                { name: "AWS Educate", url: "https://aws.amazon.com/education/awseducate/" },
                { name: "Azure Learn", url: "https://learn.microsoft.com/en-us/training/azure/" }
            ]
        }
    },
    {
        id: "mobile-developer",
        title: "Mobile App Developer",
        description: "Building native or cross-platform applications for iOS and Android devices.",
        roadmap: [
            { step: "Platform Choice", details: "Choose Native (Swift/Kotlin) or Cross-platform (React Native/Flutter)." },
            { step: "UI & State", details: "Learn mobile-specific UI components and state management." },
            { step: "Device APIs", details: "Working with Cameras, GPS, and push notifications." },
            { step: "App Stores", details: "App Store and Play Store submission processes." }
        ],
        resources: {
            youtube: [
                { name: "The Net Ninja", url: "https://www.youtube.com/c/TheNetNinja" },
                { name: "Reso Coder", url: "https://www.youtube.com/c/ResoCoder" },
                { name: "Sean Allen", url: "https://www.youtube.com/c/seanallen" }
            ],
            websites: [
                { name: "React Native Docs", url: "https://reactnative.dev" },
                { name: "Flutter Dev", url: "https://flutter.dev" }
            ]
        }
    },
    {
        id: "uiux-designer",
        title: "UI/UX Designer",
        description: "Focusing on user experience and visual design to create intuitive digital products.",
        roadmap: [
            { step: "Design Theory", details: "Color theory, typography, and layout principles." },
            { step: "Tools", details: "Master Figma, Adobe XD, or Sketch." },
            { step: "Wireframing", details: "Creating low and high fidelity prototypes and user flows." },
            { step: "User Research", details: "Conducting user testing and accessibility audits." }
        ],
        resources: {
            youtube: [
                { name: "Malewicz", url: "https://www.youtube.com/c/Malewicz" },
                { name: "DesignCourse", url: "https://www.youtube.com/c/DesignCourse" },
                { name: "The Futur", url: "https://www.youtube.com/c/TheFuturishere" }
            ],
            websites: [
                { name: "Behance", url: "https://www.behance.net" },
                { name: "Dribbble", url: "https://dribbble.com" },
                { name: "Nielsen Norman Group", url: "https://www.nngroup.com" }
            ]
        }
    },
    {
        id: "game-developer",
        title: "Game Developer",
        description: "Creating immersive experiences using game engines and interactive logic.",
        roadmap: [
            { step: "Programming Core", details: "C# for Unity or C++ for Unreal Engine." },
            { step: "Engine Basics", details: "Physics, Rendering, and Scene management." },
            { step: "Assets", details: "Integrating 2D/3D assets and animations." },
            { step: "Optimization", details: "Shaders, memory management, and frame rates." }
        ],
        resources: {
            youtube: [
                { name: "Brackeys", url: "https://www.youtube.com/c/Brackeys" },
                { name: "Sebastian Lague", url: "https://www.youtube.com/c/SebastianLague" },
                { name: "Game Maker's Toolkit", url: "https://www.youtube.com/c/GameMakersToolkit" }
            ],
            websites: [
                { name: "Unity Learn", url: "https://learn.unity.com" },
                { name: "Unreal Engine Docs", url: "https://docs.unrealengine.com" }
            ]
        }
    },
    {
        id: "cybersecurity-analyst",
        title: "Cybersecurity Analyst",
        description: "Protect systems and networks from digital attacks. Focused on security protocols and threat detection.",
        roadmap: [
            { step: "Networking", details: "TCP/IP, OSI Model, DNS, and HTTP/S protocols." },
            { step: "Operating Systems", details: "Linux command line, Scripting (Python/Bash), and Windows Server." },
            { step: "Security Core", details: "Encryption, Firewalls, VPNs, and Vulnerability Assessment." },
            { step: "Advanced", details: "Penetration Testing, Ethical Hacking, and CISSP/CEH concepts." }
        ],
        resources: {
            youtube: [
                { name: "NetworkChuck", url: "https://www.youtube.com/c/NetworkChuck" },
                { name: "John Hammond", url: "https://www.youtube.com/c/JohnHammond010" },
                { name: "The Cyber Mentor", url: "https://www.youtube.com/c/TheCyberMentor" }
            ],
            websites: [
                { name: "TryHackMe", url: "https://tryhackme.com" },
                { name: "HackTheBox", url: "https://hackthebox.com" },
                { name: "Cybrary", url: "https://www.cybrary.it" },
                { name: "OWASP", url: "https://owasp.org" }
            ]
        }
    },
    {
        id: "data-scientist",
        title: "Data Scientist",
        description: "Analyze complex data to help organizations make informed decisions.",
        roadmap: [
            { step: "Math & Stats", details: "Probability, Inferential Statistics, and Optimization." },
            { step: "Data Tools", details: "SQL, Python/R, and Data Visualization (Tableau/PowerBI)." },
            { step: "Model Building", details: "Predictive modeling, Regression, and Classification." },
            { step: "Business Value", details: "Data Storytelling and domain-specific analysis." }
        ],
        resources: {
            youtube: [
                { name: "Alex The Analyst", url: "https://www.youtube.com/c/AlexTheAnalyst" },
                { name: "Ken Jee", url: "https://www.youtube.com/c/KenJee_ds" },
                { name: "Data School", url: "https://www.youtube.com/c/dataschool" }
            ],
            websites: [
                { name: "Kaggle", url: "https://www.kaggle.com" },
                { name: "DataCamp", url: "https://www.datacamp.com" },
                { name: "Analytics Vidhya", url: "https://www.analyticsvidhya.com" }
            ]
        }
    },
    {
        id: "blockchain-developer",
        title: "Blockchain Developer",
        description: "Building decentralized applications and smart contracts using distributed ledger technology.",
        roadmap: [
            { step: "Cryptography", details: "Hashing, Public/Private keys, and Digital Signatures." },
            { step: "Solidty", details: "Learn Smart Contract development for Ethereum." },
            { step: "DApps", details: "Web3.js or Ethers.js to connect frontend with blockchain." },
            { step: "Advanced", details: "Hyperledger, Solana (Rust), and Level 2 scaling solutions." }
        ],
        resources: {
            youtube: [
                { name: "EatTheBlocks", url: "https://www.youtube.com/c/EatTheBlocks" },
                { name: "Dapp University", url: "https://www.youtube.com/c/DappUniversity" },
                { name: "Patrick Collins", url: "https://www.youtube.com/c/PatrickCollins" }
            ],
            websites: [
                { name: "CryptoZombies", url: "https://cryptozombies.io" },
                { name: "Solidity Docs", url: "https://docs.soliditylang.org" }
            ]
        }
    },
    {
        id: "embedded-systems",
        title: "Embedded Systems Engineer",
        description: "Working at the intersection of hardware and software to control physical devices.",
        roadmap: [
            { step: "C / C++", details: "Master memory-efficient programming and pointers." },
            { step: "Microcontrollers", details: "Learn Arduino, ESP32, or ARM Cortex basics." },
            { step: "OS Internals", details: "RTOS (Real-Time Operating Systems) and concurrency." },
            { step: "Hardware Interface", details: "SPI, I2C, UART, and reading datasheets." }
        ],
        resources: {
            youtube: [
                { name: "GreatScott!", url: "https://www.youtube.com/c/GreatScottLab" },
                { name: "Phil's Lab", url: "https://www.youtube.com/c/PhilsLab" },
                { name: "Digi-Key", url: "https://www.youtube.com/c/digikey" }
            ],
            websites: [
                { name: "Embedded.com", url: "https://www.embedded.com" },
                { name: "Hackaday", url: "https://hackaday.com" }
            ]
        }
    },
    {
        id: "qa-engineer",
        title: "Quality Assurance (QA) Engineer",
        description: "Ensuring software quality through testing, bug tracking, and automated verification.",
        roadmap: [
            { step: "Testing Basics", details: "Understand SDLC, Manual Testing, and Bug Reports." },
            { step: "Automation", details: "Learn Selenium, Cypress, or Playwright." },
            { step: "API Testing", details: "Working with Postman and automated API scripts." },
            { step: "Integration", details: "Continuous Testing in CI/CD pipelines." }
        ],
        resources: {
            youtube: [
                { name: "Testing Academy", url: "https://www.youtube.com/c/TestingAcademy" },
                { name: "Naveen AutomationLabs", url: "https://www.youtube.com/c/NaveenAutomationLabs" }
            ],
            websites: [
                { name: "Ministry of Testing", url: "https://www.ministryoftesting.com" },
                { name: "Guru99", url: "https://www.guru99.com" }
            ]
        }
    },
    {
        id: "data-engineer",
        title: "Data Engineer",
        description: "Building and maintaining the systems that allow data scientists to access and interpret data.",
        roadmap: [
            { step: "Big Data Tools", details: "Master Hadoop, Spark, and Kafka for data processing." },
            { step: "ETL Pipelines", details: "Build robust Extract, Transform, Load processes." },
            { step: "Data Warehousing", details: "Learn Snowflake, BigQuery, or Redshift." },
            { step: "Scheduling", details: "Workflow management with Airflow or Prefect." }
        ],
        resources: {
            youtube: [
                { name: "Andreas Kretz", url: "https://www.youtube.com/c/AndreasKretz" },
                { name: "Data With Danny", url: "https://www.youtube.com/c/DataWithDanny" }
            ],
            websites: [
                { name: "Databricks", url: "https://www.databricks.com" },
                { name: "Apache Spark Docs", url: "https://spark.apache.org/docs" }
            ]
        }
    },
    {
        id: "network-engineer",
        title: "Network Engineer",
        description: "Designing, implementing, and managing computer networks for reliability and performance.",
        roadmap: [
            { step: "Routing & Switching", details: "Master Cisco, Juniper, or Arista configurations." },
            { step: "Protocols", details: "Deep dive into BGP, OSPF, EIGRP, and MPLS." },
            { step: "Network Security", details: "Firewalls, Intrusion Detection, and VPNs." },
            { step: "SDN", details: "Software Defined Networking and Automation." }
        ],
        resources: {
            youtube: [
                { name: "David Bombal", url: "https://www.youtube.com/c/DavidBombal" },
                { name: "Jeremy's IT Lab", url: "https://www.youtube.com/c/JeremysITLab" }
            ],
            websites: [
                { name: "Cisco Learning", url: "https://learningnetwork.cisco.com" },
                { name: "Packet Pushers", url: "https://packetpushers.net" }
            ]
        }
    },
    {
        id: "ai-researcher",
        title: "AI Researcher",
        description: "Pushing the boundaries of artificial intelligence through academic research and innovation.",
        roadmap: [
            { step: "Advanced Math", details: "PhD level Linear Algebra, Probability, and Information Theory." },
            { step: "Paper Reading", details: "Mastering ArXiv papers and state-of-the-art architectures." },
            { step: "Prototyping", details: "Implementing new algorithms in PyTorch or JAX." },
            { step: "Publishing", details: "Writing for conferences like NeurIPS, ICML, or CVPR." }
        ],
        resources: {
            youtube: [
                { name: "Lex Fridman", url: "https://www.youtube.com/c/lexfridman" },
                { name: "Yannic Kilcher", url: "https://www.youtube.com/c/YannicKilcher" }
            ],
            websites: [
                { name: "ArXiv.org", url: "https://arxiv.org" },
                { name: "Papers with Code", url: "https://paperswithcode.com" }
            ]
        }
    },
    {
        id: "sre",
        title: "Site Reliability Engineer (SRE)",
        description: "Applying software engineering mindsets to IT operations for high availability systems.",
        roadmap: [
            { step: "SLIs/SLOs", details: "Understanding error budgets and reliability metrics." },
            { step: "Observability", details: "Mastering Prometheus, Grafana, and ELK stack." },
            { step: "Incident Response", details: "Post-mortems and automated recovery scripts." },
            { step: "Scale", details: "Managing massive traffic through load balancing and GSLB." }
        ],
        resources: {
            youtube: [
                { name: "Google Cloud Tech", url: "https://www.youtube.com/c/googlecloudplatform" },
                { name: "SRE Weekly", url: "https://sreweekly.com" }
            ],
            websites: [
                { name: "Google SRE Book", url: "https://sre.google/sre-book/table-of-contents/" },
                { name: "Sre.xyz", url: "https://sre.xyz" }
            ]
        }
    },
    {
        id: "security-architect",
        title: "Security Architect",
        description: "Designing and overseeing complex security systems that defend entire organizations.",
        roadmap: [
            { step: "Governance", details: "ISO 27001, NIST framework, and Compliance audits." },
            { step: "Threat Modeling", details: "Identifying attack vectors in software architecture." },
            { step: "Zero Trust", details: "Implementing identity-based security perimeters." },
            { step: "Incident Mgmt", details: "Leading SOC teams and forensic investigations." }
        ],
        resources: {
            youtube: [
                { name: "SANS Institute", url: "https://www.youtube.com/user/SANSInstitute" },
                { name: "Black Hat", url: "https://www.youtube.com/user/BlackHatOfficial" }
            ],
            websites: [
                { name: "NIST Security", url: "https://www.nist.gov/cyberframework" },
                { name: "SANS News", url: "https://www.sans.org/newsletters/newsbites/" }
            ]
        }
    },
    {
        id: "computer-vision",
        title: "Computer Vision Engineer",
        description: "Teaching machines to see and interpret visual information from the world.",
        roadmap: [
            { step: "Image Processing", details: "OpenCV, Filtering, and Morphological operations." },
            { step: "Deep Learning CV", details: "CNNs, YOLO, and Segmentation models." },
            { step: "Geometry", details: "Camera calibration, SLAM, and 3D reconstruction." },
            { step: "Deployment", details: "Optimizing models for edge devices with TensorRT." }
        ],
        resources: {
            youtube: [
                { name: "PyImageSearch", url: "https://pyimagesearch.com" },
                { name: "First Principles CV", url: "https://www.youtube.com/c/FirstPrinciplesofComputerVision" }
            ],
            websites: [
                { name: "OpenCV.org", url: "https://opencv.org" },
                { name: "Roboflow", url: "https://roboflow.com" }
            ]
        }
    },
    {
        id: "systems-programmer",
        title: "Systems Programmer",
        description: "Writing code that interacts directly with hardware and operating system kernels.",
        roadmap: [
            { step: "Lower Level", details: "Master Assembly and C programming for performance." },
            { step: "OS Design", details: "Memory management, CPU scheduling, and File systems." },
            { step: "Driver Dev", details: "Writing Linux Kernel Modules or Windows drivers." },
            { step: "Virtualization", details: "QEMU, Hypervisors, and Hardware abstraction layers." }
        ],
        resources: {
            youtube: [
                { name: "Low Level Learning", url: "https://www.youtube.com/c/LowLevelLearning" },
                { name: "Bisqwit", url: "https://www.youtube.com/user/Bisqwit" }
            ],
            websites: [
                { name: "OSDev Wiki", url: "https://wiki.osdev.org" },
                { name: "Linux Kernel Docs", url: "https://www.kernel.org/doc/html/latest/" }
            ]
        }
    },
    {
        id: "technical-pm",
        title: "Technical Product Manager",
        description: "Leading tech products from conception to launch with a deep technical understanding.",
        roadmap: [
            { step: "Product Strategy", details: "Market analysis, User personas, and Roadmapping." },
            { step: "Agile Leadership", details: "Scrum, Kanban, and Sprint planning." },
            { step: "Tech Communication", details: "Bridging the gap between business and engineers." },
            { step: "Data Driven", details: "A/B testing, North star metrics, and Analytics." }
        ],
        resources: {
            youtube: [
                { name: "Product School", url: "https://www.youtube.com/c/ProductSchoolSanFrancisco" },
                { name: "Exponent PM", url: "https://www.youtube.com/c/ExponentTV" }
            ],
            websites: [
                { name: "Mind the Product", url: "https://www.mindtheproduct.com" },
                { name: "Product Plan", url: "https://www.productplan.com" }
            ]
        }
    },
    {
        id: "iot-engineer",
        title: "IoT Engineer",
        description: "Connecting the physical world to the internet through smart sensors and devices.",
        roadmap: [
            { step: "Hardware Basics", details: "Electronics, PCB design, and Microcontrollers." },
            { step: "IoT Protocols", details: "MQTT, CoAP, LoRaWAN, and Zigbee." },
            { step: "Cloud IoT", details: "AWS IoT Core or Azure IoT Hub integration." },
            { step: "Security", details: "Device authentication and encrypted firmware updates." }
        ],
        resources: {
            youtube: [
                { name: "ExplainingComputers", url: "https://www.youtube.com/user/explainingcomputers" },
                { name: "Andreas Spiess", url: "https://www.youtube.com/c/AndreasSpiess" }
            ],
            websites: [
                { name: "Hackster.io", url: "https://www.hackster.io" },
                { name: "Adafruit Learn", url: "https://learn.adafruit.com" }
            ]
        }
    },
    {
        id: "bioinformatics",
        title: "Bioinformatics Engineer",
        description: "Applying computer science and statistics to biological data like genomic sequences.",
        roadmap: [
            { step: "Biology Core", details: "Genetics, Molecular Biology, and Biochemistry." },
            { step: "Sequence Analysis", details: "BLAST, Sequence alignment, and Phylogenetics." },
            { step: "Stats for Bio", details: "R programming and Bioconductor packages." },
            { step: "Data Visual", details: "Genomic browsers and Proteomics visualization." }
        ],
        resources: {
            youtube: [
                { name: "Bioinformatics Coach", url: "https://www.youtube.com/c/BioinformaticsCoach" },
                { name: "OMGenomics", url: "https://www.youtube.com/c/Omgenomics" }
            ],
            websites: [
                { name: "BioStars", url: "https://www.biostars.org" },
                { name: "NCBI", url: "https://www.ncbi.nlm.nih.gov" }
            ]
        }
    }
];
