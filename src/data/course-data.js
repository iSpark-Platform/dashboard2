const course_data = [
  {
  id: 1,
  img: 'course-01.jpg',
  duration: '60 hours',
  course_outline: 'Online + Onsite',
  level: 'Beginner',
  title: 'Professional Diploma in Humanoid Robotics for Service Industries',
  rating: '4.9',
  rating_count: 5,
  course_price: '₹ 4999',
  lesson: 13,
  student: 28,
  category: 'Robotics & AI',
  short_desc:
    'This Professional Diploma equips learners to design, program, and deploy humanoid robots for healthcare, hospitality, retail, and customer service. Gain hands-on experience with AIoT and real-world projects to become industry-ready.',
  instructor: 'Rajesh Nair',
  instructor_img: 'team-01.jpg',
  instructor_title: 'Founder & CEO',
  instructor_desc:
    'Rajesh Nair is a robotics engineer and AI educator with over 12 years of experience in humanoid robot design, automation, and applied AI systems. She has trained professionals across industries in building service robots for healthcare and customer engagement.',
  features: [
    'Comprehensive course modules covering robotics, AI, and sensors',
    'Hands-on humanoid robotics projects with real-world applications',
    'Career guidance, certification, and portfolio development support',
  ],
  social_links: [
    { link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook' },
    { link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter' },
    { link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2' },
    { link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube' },
  ],
  language: 'English',
  certificate: 'yes',
  videoId: 'm2m5Xx5T4No',
  course_desc:
    'The Professional Diploma in Humanoid Robotics for Service Industries is designed to help learners master the end-to-end process of creating and deploying humanoid robots. Through practical sessions, you will explore how AI, computer vision, and embedded systems integrate to make robots interact intelligently with humans.',
  course_desc_2:
    'Browse detailed course modules, participate in guided projects, and download the brochure to start your journey as an AI robotics expert. The course blends theoretical concepts with practical application, ensuring you gain both technical and problem-solving expertise required in the robotics domain.',
  learn_list: [
    'Learn to design and program humanoid robots for real-world service applications.',
    'Understand sensor integration, motion control, and environment perception.',
    'Build and deploy AI-driven humanoid systems using popular open-source frameworks.',
    'Develop communication and control interfaces for multi-sensor robotic systems.',
  ],
  course_desc_3:
    'Get the complete details of our Professional Diploma in Humanoid Robotics for Service Industries. Explore the curriculum, projects, and career opportunities in the rapidly growing AI & robotics ecosystem.',
  curriculum_desc:
    'The curriculum is structured into progressive modules that include mechanical design, control systems, AI programming, and real-world deployment. Each week is designed to build practical understanding through mini-projects and guided labs.',
  course_lessons: [
  {
    title: 'Module 1 — Lab Foundations & Rapid Prototyping',
    text: 'Learn the essentials of lab safety, electronics prototyping, and basic fabrication to get started in robotics engineering.',
    lessons: [
      { title: 'Lab safety & instruments', icon: 'icon-68' },
      { title: 'Project: Test a sensor on a breadboard', icon: 'icon-68' },
      { title: 'Microcontroller bring-up', icon: 'icon-68' },
      { title: 'Project: LED dimmer with button debounce', icon: 'icon-68' },
      { title: 'Serial communication & PCB basics', icon: 'icon-68' },
      { title: 'Project: Fabricate a tiny LED PCB', icon: 'icon-68' },
      { title: 'Mechanical fasteners & 3D CAD', icon: 'icon-68' },
      { title: 'Project: 3D-print a sensor mount', icon: 'icon-68' },
    ],
  },
  {
    title: 'Module 2 — Sensors, Actuators & Control',
    text: 'Understand how sensors and actuators work together in real-world robotic systems with control and feedback.',
    lessons: [
      { title: 'DC motors & drivers', icon: 'icon-68' },
      { title: 'Project: Speed-controlled DC motor', icon: 'icon-68' },
      { title: 'Servos & stepper motors', icon: 'icon-68' },
      { title: 'Project: Servo pan-tilt tracking dot', icon: 'icon-68' },
      { title: 'Closed-loop control (PID)', icon: 'icon-68' },
      { title: 'Project: Balance a beam using PID', icon: 'icon-68' },
      { title: 'Instrumentation & logging', icon: 'icon-68' },
      { title: 'Project: Log IMU & temperature data', icon: 'icon-68' },
    ],
  },
  {
    title: 'Module 3 — IoT & Cloud Integration',
    text: 'Build IoT-connected robotic systems that communicate with the cloud using MQTT, APIs, and secure protocols.',
    lessons: [
      { title: 'ESP32 networking (Wi-Fi, MQTT)', icon: 'icon-68' },
      { title: 'Project: Sensor → Dashboard', icon: 'icon-68' },
      { title: 'Edge → Cloud pipelines', icon: 'icon-68' },
      { title: 'Project: Alert on sensor threshold', icon: 'icon-68' },
      { title: 'Power & reliability', icon: 'icon-68' },
      { title: 'Project: Battery IoT node simulation', icon: 'icon-68' },
      { title: 'Device security fundamentals', icon: 'icon-68' },
      { title: 'Project: Provision secure credentials', icon: 'icon-68' },
    ],
  },
  {
    title: 'Module 4 — Mobile Robotics',
    text: 'Learn robot locomotion, navigation, and autonomous behavior using differential drive and PID control.',
    lessons: [
      { title: 'Robot chassis & 2WD kinematics', icon: 'icon-68' },
      { title: 'Project: Build & drive a calibrated 2WD bot', icon: 'icon-68' },
      { title: 'Line following & maze logic', icon: 'icon-68' },
      { title: 'Project: PID line follower', icon: 'icon-68' },
      { title: 'Mapping & obstacle detection', icon: 'icon-68' },
      { title: 'Project: Obstacle avoidance with sensors', icon: 'icon-68' },
      { title: 'Mechanical add-ons', icon: 'icon-68' },
      { title: 'Project: 3D-print sensor bracket', icon: 'icon-68' },
    ],
  },
  {
    title: 'Module 5 — Computer Vision Foundations',
    text: 'Master OpenCV basics, classical vision algorithms, and deploy simple vision-based applications.',
    lessons: [
      { title: 'Image basics (OpenCV, thresholds)', icon: 'icon-68' },
      { title: 'Project: Shape & color detection', icon: 'icon-68' },
      { title: 'Classical CV (edges, homography)', icon: 'icon-68' },
      { title: 'Project: Fiducial tracking', icon: 'icon-68' },
      { title: 'Data collection & labeling', icon: 'icon-68' },
      { title: 'Project: Create 100-image dataset', icon: 'icon-68' },
      { title: 'Tiny classifiers (MobileNet/TFLite)', icon: 'icon-68' },
      { title: 'Project: Run a classifier on Raspberry Pi', icon: 'icon-68' },
    ],
  },
  {
    title: 'Module 6 — ML/AI for Robotics Engineers',
    text: 'Explore machine learning pipelines and implement TinyML models on low-power hardware.',
    lessons: [
      { title: 'ML pipeline (split, fit, validate)', icon: 'icon-68' },
      { title: 'Project: Predict motor RPM from PWM & load', icon: 'icon-68' },
      { title: 'TinyML on MCU (quantization)', icon: 'icon-68' },
      { title: 'Project: Gesture recognition on ESP32', icon: 'icon-68' },
      { title: 'Jetson bring-up (CUDA, cameras)', icon: 'icon-68' },
      { title: 'Project: Run YOLOv8 on Jetson Nano', icon: 'icon-68' },
      { title: 'Edge optimization (INT8, batching)', icon: 'icon-68' },
      { title: 'Project: 2× inference speed improvement', icon: 'icon-68' },
    ],
  },
  {
    title: 'Module 7 — Edge, Cloud & DevOps for Robotics',
    text: 'Automate robotics deployments using APIs, telemetry systems, and CI/CD workflows.',
    lessons: [
      { title: 'APIs & microservices (FastAPI)', icon: 'icon-68' },
      { title: 'Project: Device → API → Dashboard', icon: 'icon-68' },
      { title: 'CI/CD for firmware & models', icon: 'icon-68' },
      { title: 'Project: GitHub Actions builds', icon: 'icon-68' },
      { title: 'Telemetry at scale (InfluxDB/Grafana)', icon: 'icon-68' },
      { title: 'Project: Live robotics dashboard', icon: 'icon-68' },
      { title: 'OTA & fleet management', icon: 'icon-68' },
      { title: 'Project: Staged rollout to 10 ESP32s', icon: 'icon-68' },
    ],
  },
  {
    title: 'Module 8 — 3D Printing & Additive Design',
    text: 'Design, print, and evaluate 3D mechanical components tailored for robotics applications.',
    lessons: [
      { title: 'DfAM principles', icon: 'icon-68' },
      { title: 'Project: Print motor mount & test fit', icon: 'icon-68' },
      { title: 'Materials & strength analysis', icon: 'icon-68' },
      { title: 'Project: Bracket A/B test with deflection report', icon: 'icon-68' },
      { title: 'Reverse engineering & design sprint', icon: 'icon-68' },
      { title: 'Project: Recreate & improve coupler', icon: 'icon-68' },
      { title: 'Mechanical-electrical integration', icon: 'icon-68' },
      { title: 'Project: Printed enclosure with standoffs', icon: 'icon-68' },
    ],
  },
  {
    title: 'Module 9 — Cybersecurity & Digital Forensics for Robotics',
    text: 'Develop secure robotics systems with network protection, threat modeling, and digital forensics.',
    lessons: [
      { title: 'Network fundamentals & traffic analysis', icon: 'icon-68' },
      { title: 'Project: Capture & interpret MQTT sessions', icon: 'icon-68' },
      { title: 'Threat modeling for robots/IoT', icon: 'icon-68' },
      { title: 'Project: STRIDE analysis & mitigation plan', icon: 'icon-68' },
      { title: 'Hardening & secure updates', icon: 'icon-68' },
      { title: 'Project: Sign firmware & verify at boot', icon: 'icon-68' },
      { title: 'DFIR basics', icon: 'icon-68' },
      { title: 'Project: Recover incident timeline from logs', icon: 'icon-68' },
    ],
  },
  {
    title: 'Module 10 — Capstone & Industry Showcase',
    text: 'Consolidate your learning by developing a complete humanoid robotics solution and presenting it to experts.',
    lessons: [
      { title: 'Capstone project kickoff', icon: 'icon-68' },
      { title: 'Team formation & domain selection', icon: 'icon-68' },
      { title: 'Mid-project checkpoint', icon: 'icon-68' },
      { title: 'Project: Submit demo video & GitHub repo', icon: 'icon-68' },
      { title: 'Final project completion', icon: 'icon-68' },
      { title: 'Project: Submit technical brief & BOM', icon: 'icon-68' },
      { title: 'Expo & viva', icon: 'icon-68' },
      { title: 'Industry showcase & feedback', icon: 'icon-68' },
    ],
  },
],
 
    reviews:[
        {img:'/assets/images/blog/comment.png',rating:5,name:'Nisha Verma',date:'Oct 20, 2025',desc:'Excellent balance between theory and practical sessions. The iSpark CoE’s robotics lab helped me understand human–robot interaction in real-life service use cases.'},
        {img:'/assets/images/blog/comment-02.png',rating:5,name:'Rohit Sharma',date:'Oct 21, 2025',desc:'This diploma helped me specialize in service robots and automation. The mentorship was exceptional — clear, structured, and full of real-world insights.'},
        {img:'/assets/images/blog/comment-03.png',rating:5,name:'Aarav Mehta',date:'Oct 22, 2025',desc:'The Humanoid Robotics course gave me hands-on exposure to sensors, servos, and motion algorithms. I actually built a working humanoid prototype — an unforgettable experience!'},
     ]
  },
  {
    id: 2,
    img: 'course-02.jpg',
    duration: '60 hours',
    course_outline: 'Blended Learning (30% Live + 70% Self-paced)',
    level: 'Intermediate',
    title: 'Diploma in Artificial Intelligence Applications Across Industries',
    rating: '4.9',
    rating_count: 5,
    course_price: '₹ 4999',
    lesson: 40,
    student: 98,
    category: 'Artificial Intelligence',
    short_desc: 'Master AI, ML, DL, and Robotics applications across industries through 240 hours of blended learning and hands-on projects. Gain real-world expertise through industry-aligned AI capstone projects designed to make you job-ready.',
    instructor: 'Aditi Verma',
    instructor_img: 'team-05.jpg',
    instructor_title: 'AI & Robotics Expert',
    instructor_desc: 'Aditya Sharma brings over 15 years of experience in Artificial Intelligence, Robotics, and Machine Learning, mentoring hundreds of engineers in applied AI projects across healthcare, finance, and manufacturing.',
    features: [
    'Hands-on AI and Robotics learning with real-world projects.',
    'Blended model: 30% live faculty + 70% AI-driven self-paced learning.',
    'Industry-relevant modules covering AI applications in 4 key sectors.'
   ],
  social_links: [
    { link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook' },
    { link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter' },
    { link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2' },
    { link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube' }
  ],
  language: 'English',
  certificate: 'Yes',
  videoId: 'm2m5Xx5T4No',
  course_desc: 'The Diploma in Artificial Intelligence Applications Across Industries equips learners to design, program, and deploy AI-driven humanoid robots and intelligent systems across multiple sectors. Gain expertise in AI, ML, DL, and sensors with practical exposure to real-world projects.',
  course_desc_2: 'Delivered through a blended model (30% live + 70% self-paced), this 6-month, 240-hour program transforms learners into industry-ready professionals capable of developing AI-powered solutions for manufacturing, healthcare, finance, and education.',
  learn_list: [
    'Strong foundations in AI, ML, and DL concepts.',
    'Hands-on coding experience with Python, TensorFlow, and real datasets.',
    'Deep understanding of AI’s role in high-impact industries.',
    '4+ mini projects and 1 major capstone aligned with real-world needs.'
  ],
  course_desc_3: 'By the end of this Diploma, students will have mastered the technical depth and practical application of AI, preparing them for top industry roles or research pathways.',
  curriculum_desc: 'A comprehensive, 240-hour applied AI curriculum divided into 7 modules covering everything from AI foundations to real-world capstone projects.',
  course_lessons: [
    {
      title: 'Module 1: Foundations of AI & Industry Relevance (20 hrs)',
      text: 'History and evolution of AI, Industry 4.0 & 5.0, AI ethics and responsible AI.',
      lessons: [
        { title: 'History & Evolution of AI', icon: 'icon-68' },
        { title: 'AI in Industry 4.0 & 5.0', icon: 'icon-68' },
        { title: 'Core AI Concepts: Agents, Search, Knowledge Representation', icon: 'icon-68' },
        { title: 'AI Ethics & Responsible AI', icon: 'icon-68' },
      ]
    },
    {
      title: 'Module 2: Python for AI & Data Science (40 hrs)',
      text: 'Master Python, data preprocessing, and visualization for AI development.',
      lessons: [
        { title: 'Python Essentials for AI/ML', icon: 'icon-68' },
        { title: 'NumPy, Pandas, Matplotlib, Seaborn', icon: 'icon-68' },
        { title: 'Data Cleaning & Preprocessing', icon: 'icon-68' },
        { title: 'Mini Project: Exploratory Data Analysis (EDA)', badge_list: true, question: 2, minutes: 30 },
      ]
    },
    {
      title: 'Module 3: Machine Learning Fundamentals (40 hrs)',
      text: 'Build regression, classification, and clustering models from scratch.',
      lessons: [
        { title: 'Supervised & Unsupervised Learning', icon: 'icon-68' },
        { title: 'Regression, Classification, Clustering', icon: 'icon-68' },
        { title: 'Feature Engineering & Model Evaluation', icon: 'icon-68' },
        { title: 'Hands-on: Build ML Models', icon: 'icon-68' },
      ]
    },
    {
      title: 'Module 4: Deep Learning & Neural Networks (40 hrs)',
      text: 'Dive into ANN, CNN, RNN, Computer Vision, and NLP with TensorFlow.',
      lessons: [
        { title: 'ANN, CNN, RNN Fundamentals', icon: 'icon-68' },
        { title: 'TensorFlow & Keras Basics', icon: 'icon-68' },
        { title: 'Computer Vision: Image Recognition & Object Detection', icon: 'icon-68' },
        { title: 'NLP Basics: Sentiment Analysis & Chatbots', icon: 'icon-68' },
      ]
    },
    {
      title: 'Module 5: AI Applications in Industries (50 hrs)',
      text: 'Explore AI use cases across Manufacturing, Healthcare, Finance, and Education.',
      lessons: [
        { title: 'Manufacturing: Predictive Maintenance, Defect Detection', icon: 'icon-68' },
        { title: 'Healthcare: Medical Imaging & Disease Prediction', icon: 'icon-68' },
        { title: 'Finance: Fraud Detection, Credit Scoring', icon: 'icon-68' },
        { title: 'Education: AI Tutors, Exam Analytics', icon: 'icon-68' },
      ]
    },
    {
      title: 'Module 6: Advanced Topics & Tools (20 hrs)',
      text: 'Learn cutting-edge AI trends like Generative AI, Edge AI, and Cloud AI.',
      lessons: [
        { title: 'Generative AI (LLMs, GPT, Diffusion Models)', icon: 'icon-68' },
        { title: 'Agentic AI & Retrieval-Augmented Generation (RAG)', icon: 'icon-68' },
        { title: 'Edge AI & IoT + AI', icon: 'icon-68' },
        { title: 'Cloud AI: AWS, GCP, Azure', icon: 'icon-68' },
      ]
    },
    {
      title: 'Module 7: Capstone Projects (30 hrs)',
      text: 'Apply all your learning to real-world AI projects from 4 domains.',
      lessons: [
        { title: 'Manufacturing: Predictive Maintenance System', icon: 'icon-68' },
        { title: 'Healthcare: AI Disease Detection Model', icon: 'icon-68' },
        { title: 'Finance: Fraud Detection / Loan Eligibility System', icon: 'icon-68' },
        { title: 'Education: Personalized AI Tutor', icon: 'icon-68' },
      ]
      },
    ],
    reviews:[
       {img:'/assets/images/blog/comment.png',rating:5,name:'Priya Nair',date:'Oct 23, 2025',desc:'From data preprocessing to deploying AI models, this program covers it all. I learned how AI drives industries like healthcare and retail with live projects.'},
       {img:'/assets/images/blog/comment-02.png',rating:5,name:'Karan Gupta',date:'Oct 24, 2025',desc:'The case studies and project-driven learning helped me apply AI in multiple domains. The instructors simplified even the toughest ML concepts.'},
       {img:'/assets/images/blog/comment-03.png',rating:5,name:'Sana Khan',date:'Oct 25, 2025',desc:'A perfect start for anyone wanting to enter AI professionally. The blend of Python, ML, and industry applications gave me confidence to build solutions on my own.'},
      ]
  },
  {
  id: 3,
  img: 'course-03.jpg',
  duration: '60 Hours',
  course_outline: 'Hands-on + Guided Learning',
  level: 'Intermediate',
  title: 'Industry-Ready Diploma in Cloud & Edge Technologies',
  rating: '4.7',
  rating_count: 5,
  course_price: '₹ 3999.00',
  lesson: 40,
  student: 58,
  category: 'AI & Robotics',
  short_desc: 'Master Cloud, Edge, IoT, and Robotics through hands-on, project-based learning across 10 industry-aligned modules. Experience an hands-on journey from prototyping to AI-powered humanoid robotics with expert mentorship.',
  instructor: 'Aditya Sharma',
  instructor_img: 'team-02.jpg',
  instructor_title: 'Lead Mentor – VTU Hands-on STEM Lab',
  instructor_desc: 'Aditya Sharma is an expert in embedded systems, AIoT, and robotics education, guiding students through real-world lab projects with industry integration.',
  features: [
    '60-hour practical program with live mentorship and hands-on labs.',
    '10 real-world modules across IoT, AI, Cloud, and Robotics domains.',
    'Industry-grade project portfolio with GitHub, demo videos, and reports.'
  ],
  social_links: [
    { link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook' },
    { link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter' },
    { link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2' },
    { link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube' }
  ],
  language: 'English',
  certificate: 'yes',
  videoId: 'b6PqkD1fBJI',
  course_desc: 'Industry-Ready Diploma in Cloud & Edge Technologies equips learners to design, program, and deploy humanoid robots for healthcare, hospitality, retail, and customer service. Gain hands-on experience with AI, sensors, and real-world projects to become industry-ready.',
  course_desc_2: 'Browse course modules, work on real-world humanoid robotics projects, and download the brochure to start your journey as an AI robotics expert.',
  learn_list: [
    'Master practical robotics, IoT, AI, Cloud, and DevOps workflows.',
    'Gain real-world experience through project-based sessions and GitHub deliverables.',
    'Develop technical and problem-solving skills with 10 applied modules.',
    'Showcase your skills through capstone projects and demo presentations.'
  ],
  course_desc_3: 'The VTU Hands-on STEM Lab is a 60-hour immersive program designed for pre-final and final-year engineering students across all disciplines. It focuses on practical, project-based experience in Robotics, IoT, Edge AI, Computer Vision, 3D Printing, Cloud/DevOps, and Cybersecurity.',
  curriculum_desc: 'Program: 40 sessions × 1.5 hrs. Each session follows a 10-60-10 pattern — introduction, hands-on practical, demo, and quiz. Learners complete working mini-projects every session, forming a real-world engineering portfolio. ',
  course_lessons: [
    {
      title: 'Module 1 — Lab Foundations & Rapid Prototyping (S1–S4)',
      text: 'Lab safety, instruments, and rapid prototyping for hardware engineers.',
      lessons: [
        { title: 'S1: Lab safety & instruments – Test a sensor on a breadboard.', icon: 'icon-68' },
        { title: 'S2: Microcontroller bring-up – LED dimmer with button debounce.', icon: 'icon-68' },
        { title: 'S3: Serial communication & PCB basics – Fabricate a tiny LED PCB.', badge_list: true, question: 2, minutes: 15 },
        { title: 'S4: Mechanical fasteners & 3D CAD – 3D-print a sensor mount.', icon: 'icon-68' },
      ],
    },
    {
      title: 'Module 2 — Sensors, Actuators & Control (S5–S8)',
      text: 'Explore motion control, PID tuning, and instrumentation for robotics.',
      lessons: [
        { title: 'S5: DC motors & drivers – Speed-controlled DC motor.', icon: 'icon-68' },
        { title: 'S6: Servos & steppers – Servo pan-tilt tracking dot.', icon: 'icon-68' },
        { title: 'S7: Closed-loop control (PID) – Balance a beam using PID.', badge_list: true, question: 2, minutes: 15 },
        { title: 'S8: Instrumentation & logging – Log IMU & temperature data.', icon: 'icon-68' },
      ],
    },
    {
      title: 'Module 3 — IoT & Cloud (S9–S12)',
      text: 'Build IoT pipelines and connect devices to cloud dashboards.',
      lessons: [
        { title: 'S9: ESP32 networking (Wi-Fi, MQTT) – Sensor → dashboard.', icon: 'icon-68' },
        { title: 'S10: Edge → Cloud pipelines – Real-time alerting.', icon: 'icon-68' },
        { title: 'S11: Power & reliability – Battery IoT node simulation.', badge_list: true, question: 3, minutes: 20 },
        { title: 'S12: Device security fundamentals – Secure provisioning.', icon: 'icon-68' },
      ],
    },
    {
      title: 'Module 4 — Mobile Robotics (S13–S16)',
      text: 'Design autonomous robots with sensors, mapping, and motion control.',
      lessons: [
        { title: 'S13: Robot chassis & 2WD kinematics – Build and calibrate bot.', icon: 'icon-68' },
        { title: 'S14: Line following & maze logic – PID line follower.', icon: 'icon-68' },
        { title: 'S15: Mapping & sensors – Obstacle avoidance grid.', badge_list: true, question: 2, minutes: 10 },
        { title: 'S16: Mechanical add-ons – 3D-print sensor bracket.', icon: 'icon-68' },
      ],
    },
    {
      title: 'Module 5 — Computer Vision Foundations (S17–S20)',
      text: 'Apply image processing and AI for vision-based robotics.',
      lessons: [
        { title: 'S17: Image basics (OpenCV) – Shape and color detection.', icon: 'icon-68' },
        { title: 'S18: Classical CV (edges, homography) – Fiducial tracking.', icon: 'icon-68' },
        { title: 'S19: Data collection & labeling – Create 100-image dataset.', badge_list: true, question: 1, minutes: 10 },
        { title: 'S20: Tiny classifiers (TFLite) – Run model on Raspberry Pi.', icon: 'icon-68' },
      ],
    },
    {
      title: 'Module 6 — ML/AI for Engineers (S21–S24)',
      text: 'Implement AI/ML pipelines and TinyML applications on edge devices.',
      lessons: [
        { title: 'S21: ML pipeline – Predict motor RPM from PWM.', icon: 'icon-68' },
        { title: 'S22: TinyML on MCU – Gesture recognition on ESP32.', icon: 'icon-68' },
        { title: 'S23: Jetson bring-up – Run YOLOv8 on Jetson.', badge_list: true, question: 2, minutes: 20 },
        { title: 'S24: Edge optimization – Speed optimization (INT8).', icon: 'icon-68' },
      ],
    },
    {
      title: 'Module 7 — Edge + Cloud + DevOps (S25–S28)',
      text: 'Integrate firmware, APIs, CI/CD, and telemetry for scalable systems.',
      lessons: [
        { title: 'S25: APIs & microservices (FastAPI) – Device → API → dashboard.', icon: 'icon-68' },
        { title: 'S26: CI/CD for firmware & models – GitHub Actions builds.', icon: 'icon-68' },
        { title: 'S27: Telemetry at scale – Live Grafana dashboard.', badge_list: true, question: 2, minutes: 15 },
        { title: 'S28: OTA & fleet management – Rollout to 10 ESP32s.', icon: 'icon-68' },
      ],
    },
    {
      title: 'Module 8 — 3D Printing & Additive Design (S29–S32)',
      text: 'Learn 3D printing, DfAM, and mechanical-electrical integration.',
      lessons: [
        { title: 'S29: DfAM principles – Print motor mount.', icon: 'icon-68' },
        { title: 'S30: Materials & strength – Bracket A/B deflection test.', icon: 'icon-68' },
        { title: 'S31: Design sprint & reverse engineering – Recreate coupler.', badge_list: true, question: 1, minutes: 10 },
        { title: 'S32: Mechanical-electrical integration – Printed enclosure.', icon: 'icon-68' },
      ],
    },
    {
      title: 'Module 9 — Cybersecurity & Digital Forensics (S33–S36)',
      text: 'Secure robotics systems and perform digital forensics analysis.',
      lessons: [
        { title: 'S33: Network fundamentals – Analyze MQTT traffic.', icon: 'icon-68' },
        { title: 'S34: Threat modeling – STRIDE analysis & mitigation.', icon: 'icon-68' },
        { title: 'S35: Secure updates – Firmware signing & verification.', badge_list: true, question: 2, minutes: 15 },
        { title: 'S36: DFIR basics – Recover incident timeline.', icon: 'icon-68' },
      ],
    },
    {
      title: 'Module 10 — Capstone & Showcase (S37–S40)',
      text: 'Complete and present your final industry-aligned capstone project.',
      lessons: [
        { title: 'S37: Capstone kickoff – Choose project domain.', icon: 'icon-68' },
        { title: 'S38: Mid-project checkpoint – Demo video & repo submission.', icon: 'icon-68' },
        { title: 'S39: Final project submission – Presentation & report.', badge_list: true, question: 1, minutes: 10 },
        { title: 'S40: Expo & viva – Showcase and evaluation.', icon: 'icon-68' },
      ],
    },
  ],
    reviews:[
      {img:'/assets/images/blog/comment.png',rating:5,name:'Sneha Iyer',date:'Oct 26, 2025',desc:'Loved how the course connects edge computing to real industrial applications. The live cloud setup and deployment sessions were the highlight.'},
      {img:'/assets/images/blog/comment-02.png',rating:5,name:'Arjun Patel',date:'Oct 27, 2025',desc:'This diploma made me industry-ready for cloud and IoT careers. I learned AWS, Azure, and edge deployment with practical assignments.'},
      {img:'/assets/images/blog/comment-03.png',rating:5,name:'Riya Deshmukh',date:'Oct 28, 2025',desc:'A brilliant course that bridges the gap between cloud infrastructure and smart device networks. The mentors were always supportive and responsive.'},
    ]
  },
  {
    id: 4,
  img: 'course-04.jpg',
  duration: '60 hours',
  course_outline: 'Online & Cloud Labs',
  level: 'Advanced',
  title: 'Career-Ready Diploma in Cybersecurity & Digital Forensics',
  rating: '4.8',
  rating_count: 5,
  course_price: ' ₹ 4500',
  lesson: 40,
  student: 25,
  category: 'Cybersecurity',
  short_desc: 'Secure your future with our Career-Ready Diploma in Cybersecurity & Digital Forensics. Learn to protect digital assets, detect threats, and investigate cybercrimes using cutting-edge tools and security techniques.',
  instructor: 'Vivek Iyer',
  instructor_img: 'team-03.jpg',
  instructor_title: 'Cybersecurity Lead, iSpark Learning',
  instructor_desc: 'With over 12 years of experience in ethical hacking, SOC operations, and cyber-forensics,Vivek Iyer has trained 1,000+ professionals in advanced cybersecurity tools and frameworks.',
  features: [
    'Gain mastery in ethical hacking, SOC operations, and digital forensics.',
    'Hands-on cloud-based cyber-range labs with 1:4 mentorship.',
    'Prepare for certifications like CEH, Pentest+, and CySA+.',
  ],
  social_links: [
    { link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook' },
    { link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter' },
    { link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2' },
    { link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube' }
  ],
  language: 'English',
  certificate: 'Yes',
  videoId: 'm2m5Xx5T4No',
  course_desc: 'The Career-Ready Diploma in Cybersecurity & Digital Forensics empowers learners to detect, respond to, and prevent modern cyber threats. Through hands-on labs and mentorship, learners master key tools like Kali Linux, Metasploit, Burp Suite, Splunk, and Autopsy.',
  course_desc_2: 'This 26-week immersive program blends real-world scenarios with live hackathons, forensic case studies, and purple-team simulations, making you industry-ready for SOC, Red Team, or Forensics roles.',
  learn_list: [
    'Conduct penetration tests, analyze vulnerabilities, and exploit systems ethically.',
    'Perform digital forensics investigations using Autopsy and Volatility.',
    'Deploy and monitor SIEM solutions like Splunk/ELK for threat detection.',
    'Build a professional cybersecurity portfolio with reports and exploit demos.'
  ],
  course_desc_3: 'Learners gain deep exposure to both red- and blue-team operations, learning from certified OSCP, CHFI, and CEH mentors. Graduates are job-ready with real artifacts and live-range experience.',
  curriculum_desc: 'Each phase combines theory, hands-on missions, and artifacts like exploit demos, forensic reports, and live dashboards. Learners gain real-world readiness for CompTIA and Offensive Security certifications.',
  course_lessons: [
    {
      title: 'Phase 1 — Boot-Camp',
      text: 'Cybersecurity & Network Fundamentals, Linux/Windows, Command Line & Scripting',
      lessons: [
        { title: 'Introduction to Cybersecurity Concepts', icon: 'icon-68' },
        { title: 'Network Fundamentals & Security Layers', icon: 'icon-68' },
        { title: 'Linux and Windows Essentials', badge_list: true, question: 2, minutes: 10 },
        { title: 'Hands-on: Command Line & Shell Scripting', icon: 'icon-68' },
        { title: 'Project: Personal War-Room VM Image', icon: 'icon-68' }
      ]
    },
    {
      title: 'Phase 2 — Cybersecurity Foundations',
      text: 'Active Directory, Cryptography, Exploitation Basics, Web Hacking, Defensive Security',
      lessons: [
        { title: 'Active Directory Fundamentals', icon: 'icon-68' },
        { title: 'Cryptography and Hashing', icon: 'icon-68' },
        { title: 'Exploit Basics and Metasploit Framework', badge_list: true, question: 3, minutes: 20 },
        { title: 'Web Security & Defensive Techniques', icon: 'icon-68' },
        { title: 'Project: Foundation Lab Completion Badge', icon: 'icon-68' }
      ]
    },
    {
      title: 'Phase 3 — Pentesting',
      text: 'Recon, Enumeration, Vulnerability Discovery, Privilege Escalation, Burp Suite Deep Dive',
      lessons: [
        { title: 'Reconnaissance and Scanning', icon: 'icon-68' },
        { title: 'Enumeration and Vulnerability Discovery', icon: 'icon-68' },
        { title: 'Privilege Escalation Techniques', badge_list: true, question: 2, minutes: 15 },
        { title: 'Burp Suite Deep Dive', icon: 'icon-68' },
        { title: 'Project: Red Team Playbook #1', icon: 'icon-68' }
      ]
    },
    {
      title: 'Phase 4 — Web Application Pentesting',
      text: 'SQLi, XSS, SSRF, RCE, Auth & Authorization Bypass, Client/Server Attacks',
      lessons: [
        { title: 'SQL Injection and XSS Attacks', icon: 'icon-68' },
        { title: 'Server-Side Request Forgery (SSRF)', icon: 'icon-68' },
        { title: 'Remote Code Execution Techniques', badge_list: true, question: 2, minutes: 15 },
        { title: 'Authentication and Authorization Exploits', icon: 'icon-68' },
        { title: 'Project: Bug Bounty Exposure', icon: 'icon-68' }
      ]
    },
    {
      title: 'Phase 5 — CompTIA Pentest+',
      text: 'Engagement Management, Recon, Vulnerability Analysis, Post-Exploitation',
      lessons: [
        { title: 'Engagement Management & Reporting', icon: 'icon-68' },
        { title: 'Advanced Reconnaissance', icon: 'icon-68' },
        { title: 'Vulnerability Analysis & Exploitation', badge_list: true, question: 3, minutes: 25 },
        { title: 'Post-Exploitation Tactics', icon: 'icon-68' },
        { title: 'Project: Pentest+ Report & Exploit Demo', icon: 'icon-68' }
      ]
    },
    {
      title: 'Phase 6 — SOC & Digital Forensics',
      text: 'Threat Intelligence, Traffic Analysis, SIEM, Forensics, Incident Response',
      lessons: [
        { title: 'Threat Intelligence & SIEM Fundamentals', icon: 'icon-68' },
        { title: 'Traffic Analysis using Splunk/ELK', icon: 'icon-68' },
        { title: 'Forensics with Autopsy & Volatility', badge_list: true, question: 2, minutes: 20 },
        { title: 'Incident Response & Recovery', icon: 'icon-68' },
        { title: 'Project: Forensic Case Report & SOC Dashboard', icon: 'icon-68' }
      ]
    },
    {
      title: 'Phase 7 — CompTIA CySA+',
      text: 'Security Operations, Threat Hunting, Vulnerability Management, Incident Reporting',
      lessons: [
        { title: 'Security Operations & Threat Hunting', icon: 'icon-68' },
        { title: 'Vulnerability Management Lifecycle', icon: 'icon-68' },
        { title: 'Incident Reporting & Documentation', badge_list: true, question: 2, minutes: 15 },
        { title: 'Hands-on: CySA+ Simulation Lab', icon: 'icon-68' },
        { title: 'Project: CySA+ Threat Detection Report', icon: 'icon-68' }
      ]
    },
    {
      title: 'Phase 8 — Capstone: Purple-Team Fusion',
      text: '72-hour live-range hackathon with real-world red & blue team simulation',
      lessons: [
        { title: 'Red vs Blue Team Strategy Overview', icon: 'icon-68' },
        { title: 'Live Defense Simulation', icon: 'icon-68' },
        { title: 'Incident Analysis and Recovery', badge_list: true, question: 3, minutes: 20 },
        { title: 'Post-Engagement Review', icon: 'icon-68' },
        { title: 'Project: Executive After-Action Debrief', icon: 'icon-68' }
      ]
    },
    {
      title: 'Phase 9 — Career Accelerator',
      text: 'CV & LinkedIn optimization, mock interviews, bug-bounty challenges',
      lessons: [
        { title: 'Career Portfolio Building', icon: 'icon-68' },
        { title: 'Resume and LinkedIn Optimization', icon: 'icon-68' },
        { title: 'Mock Technical Interviews', badge_list: true, question: 2, minutes: 10 },
        { title: 'Bug Bounty Challenge Sprint', icon: 'icon-68' },
        { title: 'Project: Offer-Letter Scoreboard', icon: 'icon-68' }
      ]
      },
    ],
    reviews:[
       {img:'/assets/images/blog/comment.png',rating:5,name:'Neha Singh',date:'Oct 29, 2025',desc:'This course opened my eyes to real cyber threats and forensic analysis. We simulated live attacks and learned professional incident response skills.'},
       {img:'/assets/images/blog/comment-02.png',rating:5,name:'Vikram Joshi',date:'Oct 30, 2025',desc:'I liked the hands-on labs in ethical hacking, network defense, and digital forensics. It’s a complete cybersecurity journey from basics to pro level.'},
       {img:'/assets/images/blog/comment-03.png',rating:5,name:'Riya Das',date:'Oct 31, 2025',desc:'The mentors helped us learn penetration testing and digital evidence handling systematically. I now feel career-ready for cybersecurity roles.'},
    ]
  },
  {
    id: 5,
  img: 'course-05.jpg',
  duration: '60 Hours',
  course_outline: 'In-person Lab',
  level: 'Intermediate',
  title: 'Year-long STEM Readiness for UG Students',
  rating: '4.8',
  rating_count: 5,
  course_price: '₹ 5999.00',
  lesson: 40,
  student: 40,
  category: 'STEM & Engineering',
  short_desc:
    'Prepare for a future in Science, Technology, Engineering, and Mathematics with hands-on, project-based learning across IoT, AI, Robotics, and Cloud systems designed for UG students.',
  instructor: 'Ananya Reddy',
  instructor_img: 'team-04.jpg',
  instructor_title: 'Lead Instructor, iSpark Learning',
  instructor_desc:
    'Ananya Reddy is an experienced educator and technologist specializing in robotics, IoT, and AI education. she has led multiple national-level hands-on programs integrating engineering education with applied research and innovation.',
  features: [
    '40 in-lab sessions covering Robotics, IoT, AI, and DevOps fundamentals',
    'Each session includes a working project with GitHub portfolio submission',
    'VTU-recognized Certificate / Diploma with industry-ready skills',
  ],
  social_links: [
    { link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook' },
    { link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter' },
    { link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2' },
    { link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube' },
  ],
  language: 'English',
  certificate: 'yes',
  videoId: 'm2m5Xx5T4No',
  course_desc:
    'The VTU Hands-on STEM Lab is a 60-hour immersive program designed for pre-final and final-year engineering students across disciplines. Students gain hands-on experience in Robotics, IoT, Edge AI, Computer Vision, 3D Printing, Cloud/DevOps, and Cybersecurity.',
  course_desc_2:
    'Learners build projects every session, creating a GitHub-based portfolio of working prototypes and demo videos. Each session focuses on building real-world problem-solving, experimentation, and collaboration skills through hands-on learning.',
  learn_list: [
    'Gain practical skills in Robotics, IoT, AI, Cloud, and Cybersecurity.',
    'Work on 40+ real-world projects with GitHub portfolios.',
    'Build hardware prototypes and deploy end-to-end AIoT systems.',
    'Receive a VTU-recognized Diploma and career placement support.',
  ],
  course_desc_3:
    'This program blends practical engineering, innovation, and digital readiness. Students graduate with a job-ready portfolio, certifications, and hands-on mastery across 10 integrated modules.',
  curriculum_desc:
    'The curriculum is structured into 10 modules (40 sessions total) designed for project-based learning in Robotics, IoT, AI, Cloud, and Cybersecurity domains.',
  course_lessons: [
    {
      title: 'Module 1 — Lab Foundations & Rapid Prototyping',
      text: 'Get started with lab tools, microcontrollers, and basic prototyping techniques.',
      lessons: [
        { title: 'Lab safety & instruments', icon: 'icon-68' },
        { title: 'Project: Test a sensor on a breadboard', icon: 'icon-68' },
        { title: 'Microcontroller bring-up', icon: 'icon-68' },
        { title: 'Project: LED dimmer with button debounce', icon: 'icon-68' },
        { title: 'Serial communication & PCB basics', icon: 'icon-68' },
        { title: 'Project: Fabricate a tiny LED PCB', icon: 'icon-68' },
        { title: 'Mechanical fasteners & 3D CAD', icon: 'icon-68' },
        { title: 'Project: 3D-print a sensor mount', icon: 'icon-68' },
      ],
    },
    {
      title: 'Module 2 — Sensors, Actuators & Control',
      text: 'Learn motion control and feedback systems for robotics and automation.',
      lessons: [
        { title: 'DC motors & drivers', icon: 'icon-68' },
        { title: 'Project: Speed-controlled DC motor', icon: 'icon-68' },
        { title: 'Servos & stepper motors', icon: 'icon-68' },
        { title: 'Project: Servo pan-tilt tracking dot', icon: 'icon-68' },
        { title: 'Closed-loop control (PID)', icon: 'icon-68' },
        { title: 'Project: Balance a beam using PID', icon: 'icon-68' },
        { title: 'Instrumentation & logging', icon: 'icon-68' },
        { title: 'Project: Log IMU & temperature data', icon: 'icon-68' },
      ],
    },
    {
      title: 'Module 3 — IoT & Cloud Integration',
      text: 'Build IoT systems that connect sensors to cloud dashboards securely.',
      lessons: [
        { title: 'ESP32 networking (Wi-Fi, MQTT)', icon: 'icon-68' },
        { title: 'Project: Sensor → Dashboard', icon: 'icon-68' },
        { title: 'Edge → Cloud pipelines', icon: 'icon-68' },
        { title: 'Project: Alert on threshold', icon: 'icon-68' },
        { title: 'Power & reliability', icon: 'icon-68' },
        { title: 'Project: Battery IoT node simulation', icon: 'icon-68' },
        { title: 'Device security fundamentals', icon: 'icon-68' },
        { title: 'Project: Provision secure credentials', icon: 'icon-68' },
      ],
    },
    {
      title: 'Module 4 — Mobile Robotics',
      text: 'Explore robotic movement, path-following, and autonomous navigation.',
      lessons: [
        { title: 'Robot chassis & 2WD kinematics', icon: 'icon-68' },
        { title: 'Project: Build & drive a 2WD bot', icon: 'icon-68' },
        { title: 'Line following & maze logic', icon: 'icon-68' },
        { title: 'Project: PID line follower', icon: 'icon-68' },
        { title: 'Mapping & sensors', icon: 'icon-68' },
        { title: 'Project: Obstacle avoidance grid', icon: 'icon-68' },
        { title: 'Mechanical add-ons', icon: 'icon-68' },
        { title: 'Project: 3D-print sensor bracket', icon: 'icon-68' },
      ],
    },
    {
      title: 'Module 5 — Computer Vision Foundations',
      text: 'Learn image processing, object detection, and vision-based robotics tasks.',
      lessons: [
        { title: 'Image basics (OpenCV)', icon: 'icon-68' },
        { title: 'Project: Shape & color detection', icon: 'icon-68' },
        { title: 'Classical CV (edges, homography)', icon: 'icon-68' },
        { title: 'Project: Fiducial tracking', icon: 'icon-68' },
        { title: 'Data collection & labeling', icon: 'icon-68' },
        { title: 'Project: Create 100-image dataset', icon: 'icon-68' },
        { title: 'Tiny classifiers (MobileNet/TFLite)', icon: 'icon-68' },
        { title: 'Project: Run classifier on Raspberry Pi', icon: 'icon-68' },
      ],
    },
    {
      title: 'Module 6 — ML/AI for Engineers',
      text: 'Implement ML pipelines and deploy TinyML models for embedded AI.',
      lessons: [
        { title: 'ML pipeline (split, fit, validate)', icon: 'icon-68' },
        { title: 'Project: Predict motor RPM from PWM', icon: 'icon-68' },
        { title: 'TinyML on MCU', icon: 'icon-68' },
        { title: 'Project: Gesture recognition on ESP32', icon: 'icon-68' },
        { title: 'Jetson bring-up (CUDA, containers)', icon: 'icon-68' },
        { title: 'Project: Run YOLOv8 on Jetson Nano', icon: 'icon-68' },
        { title: 'Edge optimization', icon: 'icon-68' },
        { title: 'Project: 2× inference speed improvement', icon: 'icon-68' },
      ],
    },
    {
      title: 'Module 7 — Edge + Cloud + DevOps',
      text: 'Automate firmware, APIs, and telemetry with modern DevOps pipelines.',
      lessons: [
        { title: 'APIs & microservices (FastAPI)', icon: 'icon-68' },
        { title: 'Project: Device → API → Dashboard', icon: 'icon-68' },
        { title: 'CI/CD for firmware & models', icon: 'icon-68' },
        { title: 'Project: GitHub Actions builds', icon: 'icon-68' },
        { title: 'Telemetry at scale', icon: 'icon-68' },
        { title: 'Project: Live lab dashboard', icon: 'icon-68' },
        { title: 'OTA & fleet management', icon: 'icon-68' },
        { title: 'Project: Rollout to 10 ESP32s', icon: 'icon-68' },
      ],
    },
    {
      title: 'Module 8 — 3D Printing & Additive Design',
      text: 'Apply design-for-additive principles to create robotic components.',
      lessons: [
        { title: 'DfAM principles', icon: 'icon-68' },
        { title: 'Project: Print motor mount & test fit', icon: 'icon-68' },
        { title: 'Materials & strength', icon: 'icon-68' },
        { title: 'Project: Bracket A/B test', icon: 'icon-68' },
        { title: 'Reverse engineering & sprint', icon: 'icon-68' },
        { title: 'Project: Recreate & improve coupler', icon: 'icon-68' },
        { title: 'Integration design', icon: 'icon-68' },
        { title: 'Project: Printed enclosure', icon: 'icon-68' },
      ],
    },
    {
      title: 'Module 9 — Cybersecurity & Digital Forensics',
      text: 'Understand how to secure IoT systems and perform digital forensics.',
      lessons: [
        { title: 'Network fundamentals', icon: 'icon-68' },
        { title: 'Project: Analyze MQTT sessions', icon: 'icon-68' },
        { title: 'Threat modeling for robots', icon: 'icon-68' },
        { title: 'Project: STRIDE mitigation', icon: 'icon-68' },
        { title: 'Hardening & secure updates', icon: 'icon-68' },
        { title: 'Project: Verify firmware at boot', icon: 'icon-68' },
        { title: 'DFIR basics', icon: 'icon-68' },
        { title: 'Project: Recover incident timeline', icon: 'icon-68' },
      ],
    },
    {
      title: 'Module 10 — Capstone & Showcase',
      text: 'Finalize a major project integrating all STEM domains and present it.',
      lessons: [
        { title: 'Capstone kickoff', icon: 'icon-68' },
        { title: 'Team & domain selection', icon: 'icon-68' },
        { title: 'Mid-project checkpoint', icon: 'icon-68' },
        { title: 'Project: Demo video & GitHub repo', icon: 'icon-68' },
        { title: 'Final project completion', icon: 'icon-68' },
        { title: 'Project: Technical brief submission', icon: 'icon-68' },
        { title: 'Expo & viva', icon: 'icon-68' },
        { title: 'Stakeholder demo & feedback', icon: 'icon-68' },
      ],
    },
  ],    reviews:[
      {img:'/assets/images/blog/comment.png',rating:5,name:'Meera Pillai',date:'Nov 1, 2025',desc:'As a first-year UG student, this course boosted my confidence in technical problem-solving. The mentors made complex concepts easy to grasp.'},
      {img:'/assets/images/blog/comment-02.png',rating:5,name:'Dhruv Shah',date:'Nov 2, 2025',desc:'A year-long, well-structured course that introduced me to real-world projects early. Perfect for students preparing for future tech careers.'},
      {img:'/assets/images/blog/comment-03.png',rating:5,name:'Aditya Rao',date:'Nov 3, 2025',desc:'The STEM Readiness program built my foundation in coding, robotics, and AI. Every week was packed with practical and fun learning.'},
    ]
  },
  {
    id: 6,
    img: 'course-06.jpg',
    duration: '60 hours',
    course_outline:'Online + Onsite',
    level: 'Intermediate',
    title: 'Python for Beginners - Learn Programming from scratch',
    rating: '4.9',
    rating_count: 30,
    course_price: '64.99',
    lesson: 12,
    student: 85,
    category:'Marketing',
    short_desc: 'Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod tempor.',
    instructor: 'Penelope Cruz',
    instructor_img:'team-05.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'English',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Learn to use Python professionally, learning both Python 2 & Python 3!', 'Build 6 beautiful real-world projects for your portfolio (not boring toy apps)', 'Understand the Theory behind Vue.js and use it in Real Projects', 'Create responsive, accessible, and beautiful layouts'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 7,
    university_courses:true,
    img: 'course-07.jpg',
    filter_category:["undergraduate","graduate"],
    duration: '6 Weeks',
    course_outline:'Online + Onsite',
    level: 'Business',
    title: 'Public Administration',
    rating: '5.0',
    rating_count: 11,
    course_price: '69.99',
    lesson: 20,
    student: 38,
    category:'Art & Design',
    short_desc: 'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.',
    instructor: 'Jane Seymour',
    instructor_img:'team-05.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language:'Hindi',
    certificate:'yes',
    videoId:'c238xxeDdFI',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Learn to use Python professionally, learning both Python 2 & Python 3!', 'Build 6 beautiful real-world projects for your portfolio (not boring toy apps)', 'Understand the Theory behind Vue.js and use it in Real Projects', 'Create responsive, accessible, and beautiful layouts'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 8,
    university_courses:true,
    img: 'course-08.jpg',
    filter_category:["undergraduate","graduate"],
    duration: '10 Weeks',
    course_outline:'Online + Onsite',
    level: 'Business',
    title: 'Major in Economics',
    rating: '4.9',
    rating_count: 15,
    course_price: '72.99',
    lesson: 20,
    student: 35,
    category:'Development',
    short_desc: 'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.',
    instructor: 'Susan White',
    instructor_img:'team-05.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'English',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Learn to use Python professionally, learning both Python 2 & Python 3!', 'Build 6 beautiful real-world projects for your portfolio (not boring toy apps)', 'Understand the Theory behind Vue.js and use it in Real Projects', 'Create responsive, accessible, and beautiful layouts'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 9,
    university_courses:true,
    img: 'course-09.jpg',
    filter_category:["undergraduate","online"],
    duration: '3 Weeks',
    level: 'Business',
    course_outline:'Online Only',
    title: 'Business Studies',
    rating: '4.4',
    rating_count: 10,
    course_price: '78.99',
    lesson: 15,
    student: 35,
    category:'Art & Design',
    short_desc: 'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.',
    instructor: 'Penelope Cruz',
    instructor_img:'team-02.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'Korean',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Learn to use Python professionally, learning both Python 2 & Python 3!', 'Build 6 beautiful real-world projects for your portfolio (not boring toy apps)', 'Understand the Theory behind Vue.js and use it in Real Projects', 'Create responsive, accessible, and beautiful layouts'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 10,
    duration: '12 Weeks',
    course_outline:'Onsite Only',
    img: 'course-10.jpg',
    hours: 35,
    level: 'Beginner',
    title: 'Master Microservices with Spring Boot and Spring Cloud',
    rating: '5',
    rating_count: 8,
    course_price: '35',
    lesson: 13,
    student: 35,
    category:'Art & Design',
    short_desc: 'Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod tempor.',
    instructor: 'Edward Norton',
    instructor_img:'team-02.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'English',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 11,
    duration: '9 Weeks',
    course_outline:'Online Only',
    img: 'course-11.jpg',
    hours: 45,
    level: 'Intermediate',
    title: 'The Complete Angular Course: Beginner to Advanced',
    rating: '4.8',
    rating_count: 16,
    course_price: '40',
    lesson: 18,
    student: 42,
    category:'Art & Design',
    short_desc: 'Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod tempor.',
    instructor: 'Connie Comerford',
    instructor_img:'team-06.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'German',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 12,
    duration: '8 Weeks',
    course_outline:'Online + Onsite',
    img: 'course-12.jpg',
    hours: 20,
    level: 'Advanced',
    title: 'Vue - The Complete Guide (w/ Router, Vuex, Composition API)',
    rating: '5',
    rating_count: 20,
    course_price: '50',
    lesson: 8,
    student: 50,
    category:'Marketing',
    short_desc: 'Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod tempor.',
    instructor: 'Edward Norton',
    instructor_img:'team-02.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'Hindi',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 13,
    duration: '14 Weeks',
    course_outline:'Onsite Only',
    img: 'course-13.jpg',
    hours: 25,
    level: 'Power Yoga',
    title: 'Build Responsive Real- World Websites with HTML and CSS',
    rating: '4.5',
    rating_count: 20,
    course_price: '30',
    lesson: 18,
    student: 25,
    category:'Academics',
    short_desc: 'Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod tempor.',
    instructor: 'Jane Seymour',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'English',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  // kitchen course
  {
    id: 14,
    kitchen_course:true,
    course_outline:'Online Only',
    duration: '16 Weeks',
    img: 'course-14.jpg',
    hours: 30,
    level: 'Cooking',
    title: 'Healthy Sushi Roll - Japanese Popular Cooking Class',
    rating: '5',
    rating_count: 35,
    course_price: '40',
    lesson: 22,
    student: 28,
    category:'Marketing',
    short_desc: 'Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod tempor.',
    instructor: 'Susan White',
    instructor_img:'team-05.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Professional Japanese cooking from beginners to experts',
      'Will be able to cook authentic Italian recipes in their own kitchen',
      'Understand the HOW of cooking, before thinking of the WHAT to cook.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'English',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 15,
    kitchen_course:true,
    duration: '15 Weeks',
    course_outline:'Online + Onsite',
    img: 'course-15.jpg',
    hours: 32,
    level: 'Cooking',
    title: 'Nutrition Kitchen - Basics of Cooking for Busy People',
    rating: '4',
    rating_count: 38,
    course_price: '50',
    lesson: 15,
    student: 31,
    category:'Business',
    short_desc: 'Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod tempor.',
    instructor: 'Penelope Cruz',
    instructor_img:'team-03.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Prepare a huge variety of simple, delicious, healthy recipes.',
      'Professional Indian cooking from beginners to experts.',
      'Serve delicious and healthy meals for your loved ones.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'English',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 16,
    kitchen_course:true,
    duration: '13 Weeks',
    course_outline:'Onsite Only',
    img: 'course-16.jpg',
    hours: 35,
    level: 'Cooking',
    title: 'Authentic Kerala Cooking - The South Indian Cuisine',
    rating: '5',
    rating_count: 40,
    course_price: '60',
    lesson: 20,
    student: 36,
    category:'Academics',
    short_desc: 'Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod tempor.',
    instructor: 'Edward Norton',
    instructor_img:'team-02.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Cook much loved recipes like ravioli, pizza and pesto from scratch',
      'Cook better than restaurant Thai food at home',
      'Keep your food safe from harmful bacteria and disease.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'English',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 17,
    kitchen_course:true,
    duration: '20 Weeks',
    course_outline:'Online + Onsite',
    img: 'course-17.jpg',
    hours: 40,
    level: 'Cooking',
    level: 'Drawing',
    title: 'Vegan Thai Cooking Classes Popular Vegan Recipes',
    rating: '5',
    rating_count: 35,
    course_price: '30',
    lesson: 22,
    student: 40,
    category:'Development',
    short_desc: 'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.',
    instructor: 'Edward Norton',
    instructor_img:'team-02.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Professional Indian cooking from beginners to experts.',
      'Prepare a huge variety of simple, delicious, healthy recipes.',
      'Serve delicious and healthy meals for your loved ones.'
    ],
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'English',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 18,
    kitchen_course:true,
    duration: '15 Weeks',
    course_outline:'Online + Onsite',
    img: 'course-18.jpg',
    hours: 32,
    level: 'Cooking',
    title: 'Indian Culinary World - Master the art of Indian Cooking',
    rating: '4',
    rating_count: 38,
    course_price: '50',
    lesson: 15,
    student: 31,
    category:'Business',
    short_desc: 'Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod tempor.',
    instructor: 'Susan White',
    instructor_img:'team-05.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Prepare a huge variety of simple, delicious, healthy recipes.',
      'Professional Indian cooking from beginners to experts.',
      'Serve delicious and healthy meals for your loved ones.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'English',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 19,
    kitchen_course:true,
    duration: '13 Weeks',
    course_outline:'Onsite Only',
    img: 'course-19.jpg',
    hours: 35,
    level: 'Cooking',
    title: 'Herbalism - Medicinal Kitchen Herbs & Spices Certificate',
    rating: '5',
    rating_count: 40,
    course_price: '60',
    lesson: 20,
    student: 36,
    category:'Academics',
    short_desc: 'Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod tempor.',
    instructor: 'Jane Seymour',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Cook much loved recipes like ravioli, pizza and pesto from scratch',
      'Cook better than restaurant Thai food at home',
      'Keep your food safe from harmful bacteria and disease.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'English',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 20,
    yoga_course: true,
    img: 'course-20.jpg',
    duration: '9 Weeks',
    course_outline:'Onsite Only',
    level: 'Power Yoga',
    title: 'Yoga for Back Pain Relief',
    rating: '4.9',
    rating_count: 30,
    course_price: '30',
    lesson: 12,
    student: 85,
    category:'Marketing',
    short_desc: 'Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod tempor.',
    instructor: 'Edward Norton',
    instructor_img:'team-02.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'English',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Learn to use Python professionally, learning both Python 2 & Python 3!', 'Build 6 beautiful real-world projects for your portfolio (not boring toy apps)', 'Understand the Theory behind Vue.js and use it in Real Projects', 'Create responsive, accessible, and beautiful layouts'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 21,
    yoga_course: true,
    img: 'course-21.jpg',
    duration: '5 Weeks',
    course_outline:'Online + Onsite',
    level: 'Power Yoga',
    title: 'Super Brain YOGA',
    rating: '5.0',
    rating_count: 11,
    course_price: '40',
    lesson: 20,
    student: 38,
    category:'Art & Design',
    short_desc: 'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.',
    instructor: 'Ananya Reddy',
    instructor_img:'team-04.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language:'Hindi',
    certificate:'yes',
    videoId:'c238xxeDdFI',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Learn to use Python professionally, learning both Python 2 & Python 3!', 'Build 6 beautiful real-world projects for your portfolio (not boring toy apps)', 'Understand the Theory behind Vue.js and use it in Real Projects', 'Create responsive, accessible, and beautiful layouts'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 22,
    yoga_course:true,
    img: 'course-22.jpg',
    duration: '10 Weeks',
    course_outline:'Online + Onsite',
    level: 'Power Yoga',
    title: 'Chair Yoga for Seniors',
    rating: '4.9',
    rating_count: 15,
    course_price: '50',
    lesson: 20,
    student: 35,
    category:'Development',
    short_desc: 'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.',
    instructor: 'John Travolta',
    instructor_img:'team-04.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'English',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Learn to use Python professionally, learning both Python 2 & Python 3!', 'Build 6 beautiful real-world projects for your portfolio (not boring toy apps)', 'Understand the Theory behind Vue.js and use it in Real Projects', 'Create responsive, accessible, and beautiful layouts'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 23,
    yoga_course: true,
    img: 'course-23.jpg',
    duration: '3 Weeks',
    level: 'Power Yoga',
    course_outline:'Online Only',
    title: 'Online Yoga for Beginners',
    rating: '4.4',
    rating_count: 10,
    course_price: '60',
    lesson: 15,
    student: 35,
    category:'Art & Design',
    short_desc: 'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.',
    instructor: 'John Travolta',
    instructor_img:'team-04.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'Korean',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Learn to use Python professionally, learning both Python 2 & Python 3!', 'Build 6 beautiful real-world projects for your portfolio (not boring toy apps)', 'Understand the Theory behind Vue.js and use it in Real Projects', 'Create responsive, accessible, and beautiful layouts'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 24,
    yoga_course: true,
    duration: '12 Weeks',
    course_outline:'Online Only',
    img: 'course-24.jpg',
    hours: 35,
    level: 'Chair Yoga',
    title: 'Yoga Nidra Master Class',
    rating: '5',
    rating_count: 8,
    course_price: '70',
    lesson: 13,
    student: 35,
    category:'Art & Design',
    short_desc: 'Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod tempor.',
    instructor: 'Jane Seymour',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'English',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 25,
    yoga_course: true,
    duration: '9 Weeks',
    course_outline:'Online Only',
    img: 'course-25.jpg',
    hours: 45,
    level: 'Chair Yoga',
    title: 'Gentle Seated Chair Yoga',
    rating: '4.8',
    rating_count: 16,
    course_price: '80',
    lesson: 18,
    student: 42,
    category:'Art & Design',
    short_desc: 'Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod tempor.',
    instructor: 'Jane Seymour',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'German',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
 // kindergarten course 
  {
    id: 26,
    kindergarten_course:true,
    duration: '5 Weeks',
    course_outline:'Online + Onsite',
    img: 'course-26.jpg',
    bg_color:'bg-color-extra02',
    hours: 12,
    level: 'Drawing',
    title: 'Powerful Calming Techniques For Kids and Teens',
    rating: '4.5',
    rating_count: 40,
    course_price: '40',
    lesson: 25,
    student: 45,
    category:'Art & Design',
    short_desc: 'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.',
    instructor: 'Jane Seymour',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'English',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 27,
    kindergarten_course:true,
    duration: '12 Weeks',
    course_outline:'Online + Onsite',
    img: 'course-27.jpg',
    bg_color:'bg-color-primary',
    hours: 41,
    level: 'Parenting',
    title: 'Parenting Skills to Raise Responsible Children',
    rating: '5',
    rating_count: 42,
    course_price: '50',
    lesson: 28,
    student: 50,
    category:'Development',
    short_desc: 'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.',
    instructor: 'Connie Comerford',
    instructor_img:'team-06.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'English',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 28,
    kindergarten_course:true,
    duration: '5 Weeks',
    course_outline:'Onsite Only',
    img: 'course-28.jpg',
    bg_color:'bg-color-secondary',
    hours: 12,
    level: 'Drawing',
    title: 'The Ultimate Drawing Course - Beginner to Advanced',
    rating: '4.5',
    rating_count: 40,
    course_price: '60',
    lesson: 25,
    student: 45,
    category:'Art & Design',
    short_desc: 'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.',
    instructor: 'Connie Comerford',
    instructor_img:'team-06.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'English',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 29,
    kindergarten_course:true,
    duration: '12 Weeks',
    course_outline:'Online + Onsite',
    img: 'course-29.jpg',
    bg_color:'bg-color-extra02',
    hours: 41,
    level: 'Parenting',
    title: 'Public Speaking for Kids (& Parents) Kids Can Speak!',
    rating: '5',
    rating_count: 42,
    course_price: '70',
    lesson: 28,
    student: 50,
    category:'Development',
    short_desc: 'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.',
    instructor: 'Connie Comerford',
    instructor_img:'team-06.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'English',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 30,
    kindergarten_course:true,
    duration: '5 Weeks',
    course_outline:'Online Only',
    img: 'course-30.jpg',
    bg_color:'bg-color-primary',
    hours: 12,
    level: 'Drawing',
    title: 'Real-World Programming for Kids with Python',
    rating: '4.5',
    rating_count: 40,
    course_price: '80',
    lesson: 25,
    student: 45,
    category:'Art & Design',
    short_desc: 'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.',
    instructor: 'Susan White',
    instructor_img:'team-05.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'English',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 31,
    kindergarten_course:true,
    duration: '12 Weeks',
    course_outline:'Online + Onsite',
    img: 'course-31.jpg',
    bg_color:'bg-color-secondary',
    hours: 41,
    level: 'Parenting',
    title: 'How to Get Kids to Eat Healthy',
    rating: '5',
    rating_count: 42,
    course_price: '90',
    lesson: 28,
    student: 50,
    category:'Development',
    short_desc: 'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.',
    instructor: 'Jane Seymour',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'English',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  // health coach
  {
    id: 32,
    health_coach:true,
    duration: '13 Weeks',
    course_outline:'Online + Onsite',
    img: 'course-32.jpg',
    hours: 42,
    level: 'Parenting',
    title: 'Diet And Nutrition Coach Certification',
    rating: '5',
    rating_count: 42,
    course_price: '30',
    lesson: 28,
    student: 50,
    category:'Development',
    short_desc: 'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.',
    instructor: 'Thomas Lopez',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'English',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 33,
    health_coach:true,
    duration: '13 Weeks',
    course_outline:'Onsite Only',
    img: 'course-33.jpg',
    hours: 35,
    level: 'Parenting',
    title: 'How to Make Simple Plant- Based Meals',
    rating: '4',
    rating_count: 35,
    course_price: '35',
    lesson: 28,
    student: 50,
    category:'Development',
    short_desc: 'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.',
    instructor: 'Amber Page',
    instructor_img:'team-02.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'English',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 34,
    health_coach:true,
    duration: '15 Weeks',
    course_outline:'Onsite Only',
    img: 'course-34.jpg',
    hours: 40,
    level: 'Parenting',
    title: 'Powerful Thing You Have Self Coaching Scholars',
    rating: '4',
    rating_count: 35,
    course_price: '39',
    lesson: 28,
    student: 50,
    category:'Development',
    short_desc: 'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.',
    instructor: 'Ray Sanchez',
    instructor_img:'team-03.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'Korean',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 35,
    health_coach:true,
    duration: '18 Weeks',
    course_outline:'Onsite Only',
    img: 'course-35.jpg',
    hours: 40,
    level: 'Parenting',
    title: 'Powerful Thing You Have Self Coaching Scholars',
    rating: '4',
    rating_count: 35,
    course_price: '40',
    lesson: 28,
    student: 50,
    category:'Development',
    short_desc: 'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.',
    instructor: 'Lucas More',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'Korean',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 36,
    health_coach:true,
    duration: '20 Weeks',
    course_outline:'Onsite Only',
    img: 'course-36.jpg',
    hours: 42,
    level: 'Parenting',
    title: 'How to Make Simple Plant- Based Meals',
    rating: '4',
    rating_count: 35,
    course_price: '45',
    lesson: 28,
    student: 50,
    category:'Development',
    short_desc: 'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.',
    instructor: 'Lucas More',
    instructor_img:'team-05.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'Hindi',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 37,
    health_coach:true,
    duration: '22 Weeks',
    course_outline:'Onsite Only',
    img: 'course-37.jpg',
    hours: 45,
    level: 'Parenting',
    title: 'How to Make Simple Plant- Based Meals',
    rating: '4',
    rating_count: 35,
    course_price: '41',
    lesson: 28,
    student: 50,
    category:'Development',
    short_desc: 'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.',
    instructor: 'Lucas More',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'Hindi',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  // home language academy
  {
    id: 37,
    language_academy:true,
    duration: '22 Weeks',
    course_outline:'Onsite Only',
    img: 'course-38.jpg',
    hours: 45,
    level: 'Parenting',
    title: 'English For Biginner',
    rating: '4',
    rating_count: 35,
    course_price: '20',
    lesson: 20,
    student: 50,
    category:'Development',
    short_desc: 'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.',
    instructor: 'Lucas More',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'Hindi',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 38,
    language_academy:true,
    duration: '23 Weeks',
    course_outline:'Onsite Only',
    img: 'course-39.jpg',
    hours: 45,
    level: 'Parenting',
    title: 'Spanish Language Course',
    rating: '4',
    rating_count: 35,
    course_price: '40',
    lesson: 25,
    student: 50,
    category:'Development',
    short_desc: 'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.',
    instructor: 'Lucas More',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'Hindi',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 39,
    language_academy:true,
    duration: '24 Weeks',
    course_outline:'Onsite Only',
    img: 'course-40.jpg',
    hours: 45,
    level: 'Parenting',
    title: 'German Courses',
    rating: '4',
    rating_count: 35,
    course_price: '50',
    lesson: 40,
    student: 50,
    category:'Development',
    short_desc: 'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.',
    instructor: 'Lucas More',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'Hindi',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 40,
    language_academy:true,
    duration: '24 Weeks',
    course_outline:'Onsite Only',
    img: 'course-41.jpg',
    hours: 45,
    level: 'Parenting',
    title: 'Korean Courses',
    rating: '4',
    rating_count: 35,
    course_price: '48',
    lesson: 45,
    student: 50,
    category:'Development',
    short_desc: 'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.',
    instructor: 'Lucas More',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'Hindi',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 41,
    language_academy:true,
    duration: '25 Weeks',
    course_outline:'Onsite Only',
    img: 'course-42.jpg',
    hours: 45,
    level: 'Parenting',
    title: 'French Courses',
    rating: '4',
    rating_count: 35,
    course_price: '80',
    lesson: 35,
    student: 50,
    category:'Development',
    short_desc: 'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.',
    instructor: 'Lucas More',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'Hindi',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 42,
    language_academy:true,
    duration: '26 Weeks',
    course_outline:'Onsite Only',
    img: 'course-43.jpg',
    hours: 45,
    level: 'Parenting',
    title: 'Japanese Courses',
    rating: '4',
    rating_count: 35,
    course_price: '100',
    lesson: 28,
    student: 50,
    category:'Development',
    short_desc: 'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.',
    instructor: 'Lucas More',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'Hindi',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  // home remote training
  {
    id: 43,
    remote_training:true,
    duration: '26 Weeks',
    course_outline:'Onsite Only',
    img: 'course-44.jpg',
    hours: 45,
    level: 'Parenting',
    title: 'The Complete Camtasia Course for Content Creators',
    rating: '4',
    rating_count: 35,
    course_price: '30',
    lesson: 8,
    student: 20,
    category:'Meditation',
    short_desc: 'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.',
    instructor: 'Lucas More',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'Hindi',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 44,
    remote_training:true,
    duration: '26 Weeks',
    course_outline:'Onsite Only',
    img: 'course-45.jpg',
    hours: 45,
    level: 'Parenting',
    title: 'Machine Learning A-Z™ Hands-On Python & Data Science',
    rating: '4',
    rating_count: 35,
    course_price: '40',
    lesson: 10,
    student: 25,
    category:'Power Yoga',
    short_desc: 'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.',
    instructor: 'Lucas More',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'Hindi',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 45,
    remote_training:true,
    duration: '26 Weeks',
    course_outline:'Onsite Only',
    img: 'course-46.jpg',
    hours: 45,
    level: 'Parenting',
    title: 'React - The Complete Guide (incl Hooks, React, Redux)',
    rating: '4',
    rating_count: 35,
    course_price: '50',
    lesson: 20,
    student: 40,
    category:'Pranayama',
    short_desc: 'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.',
    instructor: 'Lucas More',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'Hindi',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  // home photography
  {
    id: 46,
    photography:true,
    duration: '26 Weeks',
    course_outline:'Onsite Only',
    img: 'course-47.jpg',
    hours: 45,
    level: 'Parenting',
    title: 'The Complete Camtasia Course for Content.',
    rating: '4',
    rating_count: 35,
    course_price: '30',
    lesson: 20,
    student: 20,
    category:'Photography',
    short_desc: 'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.',
    instructor: 'Lucas More',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'Hindi',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 47,
    photography:true,
    duration: '26 Weeks',
    course_outline:'Onsite Only',
    img: 'course-48.jpg',
    hours: 45,
    level: 'Parenting',
    title: 'Machine Learning A-Z™ Hands-On Python.',
    rating: '4',
    rating_count: 35,
    course_price: '40',
    lesson: 20,
    student: 25,
    category:'Camera',
    short_desc: 'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.',
    instructor: 'Lucas More',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'Hindi',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 48,
    photography:true,
    duration: '26 Weeks',
    course_outline:'Onsite Only',
    img: 'course-49.jpg',
    hours: 45,
    level: 'Parenting',
    title: 'React - The Complete Guide (incl Hooks, React, Redux)',
    rating: '4',
    rating_count: 35,
    course_price: '50',
    lesson: 20,
    student: 30,
    category:'Retouching',
    short_desc: 'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.',
    instructor: 'Lucas More',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'Hindi',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 49,
    photography:true,
    duration: '26 Weeks',
    course_outline:'Onsite Only',
    img: 'course-50.jpg',
    hours: 45,
    level: 'Parenting',
    title: 'Master Your Personal Brand Like a Marketing Pro',
    rating: '4',
    rating_count: 35,
    course_price: '60',
    lesson: 20,
    student: 45,
    category:'Studio',
    short_desc: 'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.',
    instructor: 'Lucas More',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'Hindi',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  // home business coach
  {
    id: 50,
    business_coach:true,
    duration: '18 Weeks',
    course_outline:'Onsite Only',
    img: 'course-51.jpg',
    hours: 30,
    level: 'Parenting',
    title: 'Microsoft Power BI Desktop for Business Intelligence',
    rating: '4',
    rating_count: 35,
    course_price: '60',
    lesson: 8,
    student: 20,
    category:'Business',
    short_desc: 'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.',
    instructor: 'Lucas More',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'Hindi',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 51,
    business_coach:true,
    duration: '18 Weeks',
    course_outline:'Onsite Only',
    img: 'course-52.jpg',
    hours: 30,
    level: 'Parenting',
    title: 'Write Better Emails: Tactics for Smarter Communication',
    rating: '4',
    rating_count: 35,
    course_price: '40',
    lesson: 12,
    student: 25,
    category:'Business',
    short_desc: 'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.',
    instructor: 'Lucas More',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'Hindi',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 52,
    business_coach:true,
    duration: '18 Weeks',
    course_outline:'Onsite Only',
    img: 'course-53.jpg',
    hours: 30,
    level: 'Parenting',
    title: 'MySQL for Data Analytics and Business Intelligence',
    rating: '4',
    rating_count: 35,
    course_price: '50',
    lesson: 15,
    student: 30,
    category:'Business',
    short_desc: 'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.',
    instructor: 'Lucas More',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'Hindi',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 53,
    business_coach:true,
    duration: '18 Weeks',
    course_outline:'Onsite Only',
    img: 'course-54.jpg',
    hours: 30,
    level: 'Parenting',
    title: 'The Complete Camtasia Course for Content Creators',
    rating: '4',
    rating_count: 35,
    course_price: '60',
    lesson: 18,
    student: 35,
    category:'Business',
    short_desc: 'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.',
    instructor: 'Lucas More',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'Hindi',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 54,
    business_coach:true,
    duration: '18 Weeks',
    course_outline:'Onsite Only',
    img: 'course-55.jpg',
    hours: 30,
    level: 'Parenting',
    title: 'Start an Amazon FBA Store on a Tight Budget',
    rating: '4',
    rating_count: 35,
    course_price: '70',
    lesson: 20,
    student: 28,
    category:'Business',
    short_desc: 'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.',
    instructor: 'Lucas More',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'Hindi',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 55,
    business_coach:true,
    duration: '18 Weeks',
    course_outline:'Onsite Only',
    img: 'course-56.jpg',
    hours: 30,
    level: 'Parenting',
    title: 'The Complete Camtasia Course for Content Creators',
    rating: '4',
    rating_count: 35,
    course_price: '80',
    lesson: 35,
    student: 40,
    category:'Business',
    short_desc: 'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.',
    instructor: 'Lucas More',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'Hindi',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  // home motivation
  {
    id: 56,
    motivation:true,
    duration: '18 Weeks',
    course_outline:'Onsite Only',
    img: 'course-57.jpg',
    hours: 30,
    level: 'Parenting',
    title: 'How to End Procrastination Once and For All',
    rating: '4',
    rating_count: 35,
    course_price: '30',
    lesson: 10,
    student: 15,
    category:'Motivation',
    short_desc: 'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.',
    instructor: 'Lucas More',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'Bengali',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 57,
    motivation:true,
    duration: '18 Weeks',
    course_outline:'Onsite Only',
    img: 'course-58.jpg',
    hours: 30,
    level: 'Parenting',
    title: 'The Complete Daily Positive Habits Building Course',
    rating: '4',
    rating_count: 35,
    course_price: '40',
    lesson: 12,
    student: 18,
    category:'Motivation',
    short_desc: 'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.',
    instructor: 'Lucas More',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'Bengali',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 58,
    motivation:true,
    duration: '18 Weeks',
    course_outline:'Onsite Only',
    img: 'course-59.jpg',
    hours: 30,
    level: 'Parenting',
    title: 'Unstoppable Self Confidence - Your Key to Success!',
    rating: '4',
    rating_count: 35,
    course_price: '50',
    lesson: 15,
    student: 20,
    category:'Motivation',
    short_desc: 'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.',
    instructor: 'Lucas More',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'Bengali',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 59,
    motivation:true,
    duration: '18 Weeks',
    course_outline:'Onsite Only',
    img: 'course-60.jpg',
    hours: 30,
    level: 'Parenting',
    title: 'Conquer Your Mind to Assign Empowering Meanings',
    rating: '4',
    rating_count: 35,
    course_price: '60',
    lesson: 22,
    student: 25,
    category:'Motivation',
    short_desc: 'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.',
    instructor: 'Lucas More',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'Bengali',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 60,
    motivation:true,
    duration: '18 Weeks',
    course_outline:'Onsite Only',
    img: 'course-61.jpg',
    hours: 30,
    level: 'Parenting',
    title: 'Motivation Mastery: How to Get Motivated Fast',
    rating: '4',
    rating_count: 35,
    course_price: '70',
    lesson: 28,
    student: 32,
    category:'Motivation',
    short_desc: 'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.',
    instructor: 'Lucas More',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'Bengali',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 61,
    motivation:true,
    duration: '18 Weeks',
    course_outline:'Onsite Only',
    img: 'course-62.jpg',
    hours: 30,
    level: 'Parenting',
    title: 'Build Self Control & Good Habits',
    rating: '4',
    rating_count: 35,
    course_price: '70',
    lesson: 35,
    student: 40,
    category:'Motivation',
    short_desc: 'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.',
    instructor: 'Lucas More',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'English',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  // home programming
  {
    id: 62,
    programming:true,
    duration: '18 Weeks',
    course_outline:'Onsite Only',
    img: 'course-63.jpg',
    hours: 30,
    level: 'Parenting',
    title: 'How to End Procrastination Once and For All Programmer',
    rating: '4',
    rating_count: 35,
    course_price: '29',
    lesson: 8,
    student: 20,
    category:'Programming',
    short_desc: 'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.',
    instructor: 'Lucas More',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'English',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 63,
    programming:true,
    duration: '18 Weeks',
    course_outline:'Onsite Only',
    img: 'course-64.jpg',
    hours: 30,
    level: 'Parenting',
    title: 'Java Programming Masterclass for Software Developers',
    rating: '4',
    rating_count: 35,
    course_price: '35',
    lesson: 12,
    student: 25,
    category:'Programming',
    short_desc: 'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.',
    instructor: 'Lucas More',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'English',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 64,
    programming:true,
    duration: '18 Weeks',
    course_outline:'Onsite Only',
    img: 'course-65.jpg',
    hours: 30,
    level: 'Parenting',
    title: 'Unstoppable Self Confidence - Your Key to Success!',
    rating: '4',
    rating_count: 35,
    course_price: '40',
    lesson: 15,
    student: 35,
    category:'Programming',
    short_desc: 'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.',
    instructor: 'Lucas More',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'English',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  // home online art
  {
    id: 65,
    online_art:true,
    duration: '18 Weeks',
    course_outline:'Onsite Only',
    img: 'course-66.jpg',
    hours: 30,
    level: 'Parenting',
    title: 'How to End Procrastination Once and For All Programmer',
    rating: '4.2',
    rating_count: 35,
    course_price: '29',
    lesson: 8,
    student: 15,
    category:'Programming',
    short_desc: 'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.',
    instructor: 'Lucas More',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'English',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 66,
    online_art:true,
    duration: '18 Weeks',
    course_outline:'Onsite Only',
    img: 'course-67.jpg',
    hours: 30,
    level: 'Parenting',
    title: 'Java Programming Masterclass for Software Developers',
    rating: '4.9',
    rating_count: 15,
    course_price: '35',
    lesson: 12,
    student: 20,
    category:'Programming',
    short_desc: 'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.',
    instructor: 'Lucas More',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'English',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 67,
    online_art:true,
    duration: '18 Weeks',
    course_outline:'Onsite Only',
    img: 'course-68.jpg',
    hours: 30,
    level: 'Parenting',
    title: 'Unstoppable Self Confidence - Your Key to Success!',
    rating: '4.5',
    rating_count: 10,
    course_price: '35',
    lesson: 15,
    student: 28,
    category:'Programming',
    short_desc: 'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.',
    instructor: 'Lucas More',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'English',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  // home digital merketing
  {
    id: 68,
    digital_marketing:true,
    duration: '18 Weeks',
    course_outline:'Onsite Only',
    img: 'course-69.jpg',
    hours: 30,
    level: 'Parenting',
    title: 'Conquer Your Mind to Assign Empowering Meanings',
    rating: '4.5',
    rating_count: 10,
    course_price: '45',
    lesson: 12,
    student: 15,
    category:'Motivation',
    short_desc: 'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.',
    instructor: 'Lucas More',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'English',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 69,
    digital_marketing:true,
    duration: '18 Weeks',
    course_outline:'Onsite Only',
    img: 'course-70.jpg',
    hours: 30,
    level: 'Parenting',
    title: 'How to End Procrastination Once and For All',
    rating: '3.5',
    rating_count: 10,
    course_price: '75',
    lesson: 14,
    student: 18,
    category:'Motivation',
    short_desc: 'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.',
    instructor: 'Lucas More',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'English',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 70,
    digital_marketing:true,
    duration: '18 Weeks',
    course_outline:'Onsite Only',
    img: 'course-71.jpg',
    hours: 30,
    level: 'Parenting',
    title: 'The Complete Daily Positive Habits Building Course',
    rating: '4.00',
    rating_count: 10,
    course_price: '55',
    lesson: 17,
    student: 20,
    category:'Motivation',
    short_desc: 'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.',
    instructor: 'Lucas More',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'English',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 71,
    digital_marketing:true,
    duration: '18 Weeks',
    course_outline:'Onsite Only',
    img: 'course-72.jpg',
    hours: 30,
    level: 'Parenting',
    title: 'Unstoppable Self Confidence - Your Key to Success!',
    rating: '4.8',
    rating_count: 10,
    course_price: '50',
    lesson: 22,
    student: 39,
    category:'Motivation',
    short_desc: 'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.',
    instructor: 'Lucas More',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'English',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 72,
    digital_marketing:true,
    duration: '18 Weeks',
    course_outline:'Onsite Only',
    img: 'course-73.jpg',
    hours: 30,
    level: 'Parenting',
    title: 'Build Self Control & Good <br> Habits',
    rating: '4.90',
    rating_count: 12,
    course_price: '85',
    lesson: 8,
    student: 40,
    category:'Motivation',
    short_desc: 'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.',
    instructor: 'Lucas More',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'English',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 73,
    digital_marketing:true,
    duration: '18 Weeks',
    course_outline:'Onsite Only',
    img: 'course-74.jpg',
    hours: 30,
    level: 'Parenting',
    title: 'How to End Procrastination Once and For All Programmer',
    rating: '4.80',
    rating_count: 12,
    course_price: '35',
    lesson: 14,
    student: 17,
    category:'Motivation',
    short_desc: 'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.',
    instructor: 'Lucas More',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'English',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 74,
    digital_marketing:true,
    duration: '18 Weeks',
    course_outline:'Onsite Only',
    img: 'course-75.jpg',
    hours: 30,
    level: 'Parenting',
    title: 'The Complete Daily Positive Habits Building Course',
    rating: '4.60',
    rating_count: 16,
    course_price: '65',
    lesson: 18,
    student: 25,
    category:'Motivation',
    short_desc: 'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.',
    instructor: 'Lucas More',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'English',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  // home sales coach
  {
    id: 75,
    sales_coach:true,
    duration: '18 Weeks',
    course_outline:'Onsite Only',
    img: 'course-76.jpg',
    hours: 30,
    level: 'Parenting',
    title: 'The Complete Camtasia Course for Content Creators',
    rating: '4.50',
    rating_count: 16,
    course_price: '35',
    lesson: 8,
    student: 12,
    category:'Sales coach',
    short_desc: 'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.',
    instructor: 'Lucas More',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'English',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 76,
    sales_coach:true,
    duration: '18 Weeks',
    course_outline:'Onsite Only',
    img: 'course-77.jpg',
    hours: 30,
    level: 'Parenting',
    title: 'Master Your Personal Brand Like a Marketing Pro',
    rating: '4.50',
    rating_count: 16,
    course_price: '49',
    lesson: 13,
    student: 16,
    category:'Sales coach',
    short_desc: 'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.',
    instructor: 'Lucas More',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'English',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 77,
    sales_coach:true,
    duration: '18 Weeks',
    course_outline:'Onsite Only',
    img: 'course-78.jpg',
    hours: 30,
    level: 'Parenting',
    title: 'Java Programming Masterclass for Software Developers',
    rating: '4.60',
    rating_count: 16,
    course_price: '59',
    lesson: 17,
    student: 21,
    category:'Sales coach',
    short_desc: 'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.',
    instructor: 'Lucas More',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'English',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 78,
    sales_coach:true,
    duration: '18 Weeks',
    course_outline:'Onsite Only',
    img: 'course-79.jpg',
    hours: 30,
    level: 'Parenting',
    title: 'The Ultimate Drawing Course - Beginner to Advanced',
    rating: '4.40',
    rating_count: 16,
    course_price: '55',
    lesson: 22,
    student: 30,
    category:'Sales coach',
    short_desc: 'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.',
    instructor: 'Lucas More',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'English',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 79,
    sales_coach:true,
    duration: '18 Weeks',
    course_outline:'Onsite Only',
    img: 'course-80.jpg',
    hours: 30,
    level: 'Parenting',
    title: 'The Ultimate Drawing Course - Beginner to Advanced',
    rating: '4.30',
    rating_count: 16,
    course_price: '60',
    lesson: 25,
    student: 35,
    category:'Sales coach',
    short_desc: 'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.',
    instructor: 'Lucas More',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'English',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 80,
    sales_coach:true,
    duration: '18 Weeks',
    course_outline:'Onsite Only',
    img: 'course-81.jpg',
    hours: 30,
    level: 'Parenting',
    title: 'The Ultimate Drawing Course - Beginner to Advanced',
    rating: '4.90',
    rating_count: 16,
    course_price: '65',
    lesson: 32,
    student: 42,
    category:'Sales coach',
    short_desc: 'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.',
    instructor: 'Lucas More',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'English',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  // home quran learning
  {
    id: 81,
    quran_learning:true,
    duration: '18 Weeks',
    course_outline:'Onsite Only',
    img: 'course-82.jpg',
    hours: 30,
    level: 'Parenting',
    title: 'Noorani Qaida For Adults',
    rating: '5.0',
    rating_count: 10,
    course_price: '29',
    lesson: 15,
    student: 20,
    category:'Quran Learn',
    short_desc: 'Lorem ipsum dolor sit amet cons adpis elit sed eusmod tempor int ididunt labore.',
    instructor: 'Lucas More',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'English',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 82,
    quran_learning:true,
    duration: '18 Weeks',
    course_outline:'Onsite Only',
    img: 'course-83.jpg',
    hours: 30,
    level: 'Parenting',
    title: 'Quran with Tajweed',
    rating: '4.9',
    rating_count: 12,
    course_price: '30',
    lesson: 18,
    student: 30,
    category:'Quran Learn',
    short_desc: 'Lorem ipsum dolor sit amet cons adpis elit sed eusmod tempor int ididunt labore.',
    instructor: 'Lucas More',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'English',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 83,
    quran_learning:true,
    duration: '18 Weeks',
    course_outline:'Onsite Only',
    img: 'course-84.jpg',
    hours: 30,
    level: 'Parenting',
    title: 'Memorize Quran',
    rating: '4.8',
    rating_count: 13,
    course_price: '35',
    lesson: 20,
    student: 25,
    category:'Quran Learn',
    short_desc: 'Lorem ipsum dolor sit amet cons adpis elit sed eusmod tempor int ididunt labore.',
    instructor: 'Lucas More',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'English',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 84,
    quran_learning:true,
    duration: '18 Weeks',
    course_outline:'Onsite Only',
    img: 'course-85.jpg',
    hours: 30,
    level: 'Parenting',
    title: 'Ijazah Course For Kids',
    rating: '4.7',
    rating_count: 15,
    course_price: '40',
    lesson: 27,
    student: 36,
    category:'Quran Learn',
    short_desc: 'Lorem ipsum dolor sit amet cons adpis elit sed eusmod tempor int ididunt labore.',
    instructor: 'Lucas More',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'English',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 85,
    quran_learning:true,
    duration: '18 Weeks',
    course_outline:'Onsite Only',
    img: 'course-86.jpg',
    hours: 30,
    level: 'Parenting',
    title: 'Quran Translation',
    rating: '4.4',
    rating_count: 18,
    course_price: '45',
    lesson: 30,
    student: 40,
    category:'Quran Learn',
    short_desc: 'Lorem ipsum dolor sit amet cons adpis elit sed eusmod tempor int ididunt labore.',
    instructor: 'Lucas More',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'English',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 86,
    quran_learning:true,
    duration: '18 Weeks',
    course_outline:'Onsite Only',
    img: 'course-87.jpg',
    hours: 30,
    level: 'Parenting',
    title: 'Learn Prayer(Salat)',
    rating: '4.5',
    rating_count: 20,
    course_price: '50',
    lesson: 35,
    student: 50,
    category:'Quran Learn',
    short_desc: 'Lorem ipsum dolor sit amet cons adpis elit sed eusmod tempor int ididunt labore.',
    instructor: 'Lucas More',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'English',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  // home gym training
  {
    id: 87,
    gym_training:true,
    duration: '18 Weeks',
    course_outline:'Onsite Only',
    img: 'course-88.jpg',
    hours: 30,
    level: 'Parenting',
    title: 'How to End Procrastination Once and For All',
    rating: '4.2',
    rating_count: 15,
    course_price: '30',
    lesson: 8,
    student: 12,
    category:'Gym Training',
    short_desc: 'Lorem ipsum dolor sit amet cons adpis elit sed eusmod tempor int ididunt labore.',
    instructor: 'Lucas More',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'English',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 88,
    gym_training:true,
    duration: '18 Weeks',
    course_outline:'Onsite Only',
    img: 'course-89.jpg',
    hours: 30,
    level: 'Parenting',
    title: 'The Complete Daily Positive Habits Building Course',
    rating: '4.3',
    rating_count: 7,
    course_price: '60',
    lesson: 13,
    student: 15,
    category:'Gym Training',
    short_desc: 'Lorem ipsum dolor sit amet cons adpis elit sed eusmod tempor int ididunt labore.',
    instructor: 'Lucas More',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'English',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 89,
    gym_training:true,
    duration: '18 Weeks',
    course_outline:'Onsite Only',
    img: 'course-90.jpg',
    hours: 30,
    level: 'Parenting',
    title: 'Unstoppable Self Confidence - Your Key to Success!',
    rating: '4.9',
    rating_count: 9,
    course_price: '80',
    lesson: 16,
    student: 20,
    category:'Gym Training',
    short_desc: 'Lorem ipsum dolor sit amet cons adpis elit sed eusmod tempor int ididunt labore.',
    instructor: 'Lucas More',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'English',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 90,
    gym_training:true,
    duration: '18 Weeks',
    course_outline:'Onsite Only',
    img: 'course-91.jpg',
    hours: 30,
    level: 'Parenting',
    title: 'Conquer Your Mind to Assign Empowering Meanings',
    rating: '4.5',
    rating_count: 12,
    course_price: '86',
    lesson: 18,
    student: 22,
    category:'Gym Training',
    short_desc: 'Lorem ipsum dolor sit amet cons adpis elit sed eusmod tempor int ididunt labore.',
    instructor: 'Lucas More',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'English',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 91,
    gym_training:true,
    duration: '18 Weeks',
    course_outline:'Onsite Only',
    img: 'course-92.jpg',
    hours: 30,
    level: 'Parenting',
    title: 'Motivation Mastery: How to Get Motivated Fast',
    rating: '4.7',
    rating_count: 12,
    course_price: '90',
    lesson: 21,
    student: 26,
    category:'Gym Training',
    short_desc: 'Lorem ipsum dolor sit amet cons adpis elit sed eusmod tempor int ididunt labore.',
    instructor: 'Lucas More',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'English',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
  {
    id: 92,
    gym_training:true,
    duration: '18 Weeks',
    course_outline:'Onsite Only',
    img: 'course-93.jpg',
    hours: 30,
    level: 'Parenting',
    title: 'Build Self Control & Good Habits',
    rating: '4.8',
    rating_count: 6,
    course_price: '95',
    lesson: 24,
    student: 32,
    category:'Gym Training',
    short_desc: 'Lorem ipsum dolor sit amet cons adpis elit sed eusmod tempor int ididunt labore.',
    instructor: 'Lucas More',
    instructor_img:'team-01.webp',
    instructor_title:'Founder & CEO',
    instructor_desc:'Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate.',
    features: [
      'Build fully-fledged websites and web apps for your business.',
      'After the course you will be able to build ANY website you want.',
      'You will master both front and back-end development technologies.'
    ], 
    social_links:[
      {link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook'},
      {link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter'},
      {link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2'},
      {link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube'}
    ],
    language: 'English',
    certificate: 'yes',
    videoId: 'm2m5Xx5T4No',
    course_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.',
    course_desc_2: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    learn_list: ['Professional Japanese cooking from beginners to experts','Will be able to cook authentic Italian recipes in their own kitchen','Understand the HOW of cooking, before thinking of the WHAT to cook.'],
    course_desc_3: 'Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor.',
    curriculum_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.',
    course_lessons: [
      {
        title: 'Week 1-4',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Introduction', icon: 'icon-68' },
          { title: 'Course Overview', icon: 'icon-68' },
          { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
          { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
          { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
          { title: ' Embedding PHP in HTML', icon: 'icon-68' },
        ]
      },
      {
        title: 'Week 5-8',
        text: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        lessons: [
          { title: 'Defining Functions', icon: 'icon-68' },
          { title: 'Function Parameters', icon: 'icon-68' },
          { title: ' Return Values From Functions', badge_list: true, question: 2, minutes: 15 },
          { title: ' Global Variable and Scope', icon: 'icon-68' },
          { title: 'Newer Way of creating a Constant', icon: 'icon-68' },
          { title: 'Constants', icon: 'icon-68' },
        ]
      },
    ],
    reviews:[
      {img:'/assets/images/blog/comment-01.jpg',rating:5,name:'Haley Bennet',date:'Oct 10, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-02.jpg',rating:5,name:'Simon Baker',date:'Oct 15, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {img:'/assets/images/blog/comment-03.jpg',rating:5,name:'Richard Gere',date:'Oct 19, 2021',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
  },
]

export default course_data;