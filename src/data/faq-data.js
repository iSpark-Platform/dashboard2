export const faq_data = [
    {
        id: "gn-ques",
        title: "General Questions",
        items: [
            {
                id: "g1",
                show: true,
                title: "What is the iSpark Agentic AI Learning & Placement Platform?",
                desc: "It is a cloud-based AI-driven learning and placement ecosystem built for 3,00,000+ VTU engineering students. The platform provides personalized learning, hands-on project labs, AI mentorship, and automated placement matching using autonomous AI agents." 
            },
            {
                id: "g2",
                title: "Who can use the platform?",
                desc: "Students, faculty mentors, university administrators, and recruiters can use the system. Each role has a dedicated dashboard and access controls."
            },
            {
                id: "g3",
                title: "Is the platform available on mobile?",
                desc: "Yes. The platform runs on web (React/Next.js) and mobile (Flutter), ensuring access on all devices." 
            },
            {
                id: "g4",
                title: "Is the entire learning process AI-powered?",
                desc: "Yes. All learning, assessments, feedback, career guidance, and placement matching are handled by AI agents described in the SRS—Learning Agent, Assessment Agent, Career Agent, Recruiter Agent, and Orchestrator Agent." 
            }
        ]
    },

    {
        id: "rg-ques",
        title: "Regular Questions",
        items: [
            {
                id: "r1",
                show: true,
                title: "How does personalized learning work?",
                desc: "The Learning Agent uses RAG (Retrieval-Augmented Generation) and interaction logs to generate personalized lessons, quizzes, and learning paths for each student." 
            },
            {
                id: "r2",
                title: "How does the platform evaluate my assignments?",
                desc: "The Assessment Agent auto-evaluates submissions, checks correctness, provides instant feedback, and stores results in the analytics database for continuous progress tracking." 
            },
            {
                id: "r3",
                title: "Can faculty monitor student progress?",
                desc: "Yes. Faculty mentors have a dedicated dashboard for reviewing submissions, tracking learning activity, and monitoring AI-generated performance indicators."
            }
        ]
    },

    {
        id: "ad-ques",
        title: "Advanced Questions",
        items: [
            {
                id: "a1",
                show: true,
                title: "How does multi-agent orchestration work?",
                desc: "The Orchestrator Agent coordinates all other agents using Azure Service Bus for messaging, LangGraph for workflow logic, and CrewAI pipelines. It ensures smooth task transitions such as learning → assessment → career scoring." 
            },
            {
                id: "a2",
                title: "Does the platform support hands-on labs?",
                desc: "Yes. Project-based sandbox labs for AI, IoT, Robotics, and Coding are included. Students can build projects with real-time AI guidance." 
            },
            {
                id: "a3",
                title: "How does placement matching work?",
                desc: "The Career Agent analyzes skills, project performance, and assessments, then the Recruiter Agent matches students with the best-fit job opportunities using AI-driven ranking models."
            }
        ]
    },

    {
        id: "com-policy",
        title: "Company Policies",
        items: [
            {
                id: "c1",
                show: true,
                title: "Where is my data stored?",
                desc: "All student and institutional data is stored securely in Azure Cloud (Central India Region) with proper compliance and isolation across institutions." 
            },
            {
                id: "c2",
                title: "Is the platform compliant with the DPDP Act 2023?",
                desc: "Yes. The platform is DPDP Act 2023 compliant and also follows ISO 27001 and GDPR-aligned data protection practices as outlined in the SRS." 
            },
            {
                id: "c3",
                title: "Does the platform maintain audit logs?",
                desc: "Yes. All user actions and agent interactions are logged for security, analytics, and audit purposes." 
            }
        ]
    },

    {
        id: "pay-option",
        title: "Payment Options",
        items: [
            {
                id: "p1",
                show: true,
                title: "What payment modes are supported?",
                desc: "The platform supports UPI, credit/debit cards, net banking, and third-party gateways such as Razorpay and Stripe, as part of the Phase 1 implementation." 
            },
            {
                id: "p2",
                title: "Can institutions purchase bulk licenses?",
                desc: "Yes. Colleges under VTU can onboard entire batches with multi-tenant provisioning handled automatically by the admin console." 
            }
        ]
    },

    {
        id: "terms-condition",
        title: "Terms & Conditions",
        items: [
            {
                id: "t1",
                show: true,
                title: "Can I share my login credentials?",
                desc: "No. Account sharing is strictly prohibited as per security policies and may result in account suspension." 
            },
            {
                id: "t2",
                title: "Can course materials be redistributed?",
                desc: "No. All content, AI models, and learning materials are proprietary and protected under copyright." 
            },
            {
                id: "t3",
                title: "Can system behavior change over time?",
                desc: "Yes. The platform evolves every quarter with updated agent models, improved workflows, and enhanced features as part of the AI Model Lifecycle described in the SRS."
            }
        ]
    }
];
