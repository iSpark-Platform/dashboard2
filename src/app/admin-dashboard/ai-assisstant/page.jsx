"use client";
import React, { useState } from "react";
import {
  FiCpu,
  FiZap,
  FiHelpCircle,
  FiFileText,
  FiCheckSquare,
  FiMapPin,
  FiClock,
  FiMail,
  FiCheck,
  FiArrowRight,
  FiCalendar,
  FiTrendingUp,
  FiUsers,
  FiAward,
  FiBookOpen,
  FiTarget,
  FiBell,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";

export default function AIAssistantPlaceholder() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [activeTab, setActiveTab] = useState("features");

  const styles = {
    page: {
      minHeight: "100vh",
      padding: "60px 20px 40px 20px",
      background: "linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)",
      fontFamily: "'Inter', sans-serif",
      color: "#1A1D27",
      position: "relative",
      overflow: "hidden",
    },
    backgroundPattern: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231640ff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      zIndex: 0,
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      position: "relative",
      zIndex: 1,
    },
    header: {
      textAlign: "center",
      marginBottom: "40px",
    },
    title: {
      fontSize: "42px",
      fontWeight: "800",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "15px",
      marginBottom: "15px",
      background: "linear-gradient(135deg, #1640FF 0%, #8B5CF6 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    subtitle: {
      fontSize: "18px",
      color: "#6B7280",
      maxWidth: "600px",
      margin: "0 auto",
      lineHeight: "1.6",
    },
    badge: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      backgroundColor: "rgba(239, 124, 0, 0.1)",
      color: "#EF7C00",
      padding: "6px 14px",
      borderRadius: "30px",
      fontSize: "14px",
      fontWeight: "600",
      marginTop: "15px",
    },
    illustration: {
      width: "100px",
      height: "100px",
      margin: "0 auto 40px",
      borderRadius: "30px",
      background: "linear-gradient(135deg, #1640FF 0%, #8B5CF6 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      fontSize: "80px",
      boxShadow: "0px 20px 40px rgba(22, 64, 255, 0.2)",
      position: "relative",
      overflow: "hidden",
    },
    illustrationInner: {
      position: "relative",
      zIndex: 2,
    },
    illustrationPattern: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
      opacity: 0.4,
    },
    tabs: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "30px",
      borderBottom: "1px solid #E5E7EB",
    },
    tab: {
      padding: "12px 24px",
      cursor: "pointer",
      fontWeight: "600",
      color: "#6B7280",
      borderBottom: "3px solid transparent",
      transition: "all 0.2s ease",
    },
    activeTab: {
      color: "#1640FF",
      borderBottom: "3px solid #1640FF",
    },
    mainText: {
      textAlign: "center",
      marginBottom: "40px",
    },
    mainTitle: {
      fontSize: "32px",
      fontWeight: "700",
      marginBottom: "15px",
    },
    mainSubtitle: {
      fontSize: "18px",
      color: "#6B7280",
      lineHeight: "1.6",
      maxWidth: "700px",
      margin: "0 auto",
    },
    featureGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "25px",
      marginBottom: "50px",
    },
    featureCard: {
      backgroundColor: "#fff",
      borderRadius: "20px",
      padding: "30px",
      textAlign: "center",
      boxShadow: "0px 10px 30px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "15px",
      transition: "all 0.3s ease",
      height: "100%",
    },
    featureCardHover: {
      transform: "translateY(-8px)",
      boxShadow: "0px 15px 35px rgba(0,0,0,0.1)",
    },
    featureIcon: {
      color: "#1640FF",
      fontSize: "36px",
      padding: "15px",
      borderRadius: "50%",
      backgroundColor: "rgba(22, 64, 255, 0.1)",
    },
    featureTitle: {
      fontSize: "18px",
      fontWeight: "700",
      marginBottom: "5px",
    },
    featureText: {
      fontSize: "15px",
      color: "#6B7280",
      lineHeight: "1.5",
    },
    timelineContainer: {
      marginBottom: "50px",
    },
    timelineTitle: {
      fontSize: "28px",
      fontWeight: "700",
      textAlign: "center",
      marginBottom: "30px",
    },
    timeline: {
      display: "flex",
      justifyContent: "space-between",
      position: "relative",
      maxWidth: "800px",
      margin: "0 auto",
    },
    timelineLine: {
      position: "absolute",
      top: "30px",
      left: "0",
      right: "0",
      height: "4px",
      background: "#E5E7EB",
      zIndex: 1,
    },
    timelineProgress: {
      position: "absolute",
      top: "30px",
      left: "0",
      height: "4px",
      background: "linear-gradient(90deg, #1640FF 0%, #8B5CF6 100%)",
      width: "66%",
      zIndex: 2,
    },
    timelineItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "relative",
      zIndex: 3,
      width: "120px",
    },
    timelineDot: {
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      backgroundColor: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "15px",
      boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
      border: "4px solid #E5E7EB",
    },
    completedDot: {
      borderColor: "#1640FF",
    },
    currentDot: {
      borderColor: "#8B5CF6",
      animation: "pulse 2s infinite",
    },
    timelineDate: {
      fontSize: "14px",
      fontWeight: "600",
      marginBottom: "5px",
    },
    timelineLabel: {
      fontSize: "14px",
      color: "#6B7280",
      textAlign: "center",
    },
    emailSignup: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "20px",
      marginBottom: "50px",
      padding: "40px",
      backgroundColor: "#fff",
      borderRadius: "20px",
      boxShadow: "0px 10px 30px rgba(0,0,0,0.05)",
      maxWidth: "600px",
      margin: "0 auto 50px",
    },
    emailTitle: {
      fontSize: "24px",
      fontWeight: "700",
      textAlign: "center",
    },
    emailText: {
      fontSize: "16px",
      color: "#6B7280",
      textAlign: "center",
      marginBottom: "10px",
    },
    emailForm: {
      display: "flex",
      width: "100%",
      maxWidth: "400px",
    },
    emailInput: {
      flex: 1,
      padding: "14px 20px",
      borderRadius: "30px 0 0 30px",
      border: "1px solid #E5E7EB",
      fontSize: "16px",
      outline: "none",
    },
    emailButton: {
      padding: "14px 25px",
      backgroundColor: "#1640FF",
      color: "#fff",
      border: "none",
      borderRadius: "0 30px 30px 0",
      fontSize: "16px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "background 0.2s ease",
    },
    emailButtonHover: {
      backgroundColor: "#0D2FBF",
    },
    successMessage: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      color: "#10B981",
      fontWeight: "600",
    },
    faqContainer: {
      marginBottom: "50px",
      maxWidth: "800px",
      margin: "0 auto 50px",
    },
    faqTitle: {
      fontSize: "28px",
      fontWeight: "700",
      textAlign: "center",
      marginBottom: "30px",
    },
    faqItem: {
      backgroundColor: "#fff",
      borderRadius: "15px",
      marginBottom: "15px",
      overflow: "hidden",
      boxShadow: "0px 5px 15px rgba(0,0,0,0.05)",
    },
    faqQuestion: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px 25px",
      cursor: "pointer",
      fontWeight: "600",
      fontSize: "16px",
    },
    faqAnswer: {
      padding: "0 25px",
      fontSize: "15px",
      color: "#6B7280",
      lineHeight: "1.6",
      overflow: "hidden",
      maxHeight: "0",
      transition: "max-height 0.3s ease, padding 0.3s ease",
    },
    expandedAnswer: {
      maxHeight: "500px",
      padding: "0 25px 20px",
    },
    footer: {
      textAlign: "center",
      fontSize: "16px",
      color: "#6B7280",
      marginTop: "40px",
      padding: "30px 0",
      borderTop: "1px solid #E5E7EB",
    },
    footerText: {
      maxWidth: "600px",
      margin: "0 auto",
      lineHeight: "1.6",
    },
  };

  const features = [
    {
      icon: <FiHelpCircle style={styles.featureIcon} />,
      title: "Instant Q&A",
      text: "Students can ask questions and receive immediate, accurate answers from the AI assistant.",
    },
    {
      icon: <FiFileText style={styles.featureIcon} />,
      title: "Content Generation",
      text: "AI creates comprehensive summaries, quizzes, and flashcards tailored to course material.",
    },
    {
      icon: <FiCheckSquare style={styles.featureIcon} />,
      title: "Automated Grading",
      text: "Instructors save time with AI-powered assessment tools that provide consistent feedback.",
    },
    {
      icon: <FiMapPin style={styles.featureIcon} />,
      title: "Personalized Guidance",
      text: "AI identifies learning gaps and suggests personalized learning paths for each student.",
    },
    {
      icon: <FiTrendingUp style={styles.featureIcon} />,
      title: "Performance Analytics",
      text: "Track student progress with detailed insights and predictive analytics.",
    },
    {
      icon: <FiUsers style={styles.featureIcon} />,
      title: "Collaborative Learning",
      text: "AI facilitates group discussions and peer learning activities.",
    },
  ];

  const benefits = [
    {
      icon: <FiAward style={styles.featureIcon} />,
      title: "Improved Outcomes",
      text: "Students achieve better results with personalized learning support.",
    },
    {
      icon: <FiBookOpen style={styles.featureIcon} />,
      title: "Richer Content",
      text: "AI generates diverse learning materials to accommodate different learning styles.",
    },
    {
      icon: <FiTarget style={styles.featureIcon} />,
      title: "Focused Teaching",
      text: "Instructors can concentrate on high-value interactions while AI handles routine tasks.",
    },
  ];

  const faqs = [
    {
      question: "When will the AI Teaching Assistant be available?",
      answer: "We're currently in Phase 1 of development and plan to launch the AI Teaching Assistant in Phase 2, which is scheduled for Q3 2023. Sign up for our newsletter to receive updates on the launch timeline.",
    },
    {
      question: "Will the AI replace human instructors?",
      answer: "Absolutely not. The AI Teaching Assistant is designed to augment and support human instructors, not replace them. It handles routine tasks and provides additional support, allowing instructors to focus on higher-value teaching activities.",
    },
    {
      question: "How will you ensure the quality of AI-generated content?",
      answer: "All AI-generated content will be reviewable and editable by instructors. We're implementing quality control mechanisms and feedback loops to continuously improve the AI's accuracy and usefulness.",
    },
    {
      question: "Will there be additional costs for the AI features?",
      answer: "Pricing details will be announced closer to the launch. We're committed to providing value at a reasonable cost and may offer different tiers based on usage and features.",
    },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      // In a real app, you would send the email to your backend here
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail("");
      }, 5000);
    }
  };

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div style={styles.page}>
      <div style={styles.backgroundPattern}></div>
      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.title}>
            <FiCpu />
            AI Teaching Assistant
          </div>
          <div style={styles.subtitle}>
            Transform your teaching experience with intelligent automation and personalized learning support
          </div>
          <div style={styles.badge}>
            <FiCalendar /> Coming in Phase 2
          </div>
        </div>

        {/* Illustration */}
        <div style={styles.illustration}>
          <div style={styles.illustrationPattern}></div>
          <div style={styles.illustrationInner}>
            <FiZap />
          </div>
        </div>

        {/* Tabs */}
        <div style={styles.tabs}>
          <div
            style={{
              ...styles.tab,
              ...(activeTab === "features" ? styles.activeTab : {}),
            }}
            onClick={() => setActiveTab("features")}
          >
            Features
          </div>
          <div
            style={{
              ...styles.tab,
              ...(activeTab === "benefits" ? styles.activeTab : {}),
            }}
            onClick={() => setActiveTab("benefits")}
          >
            Benefits
          </div>
          <div
            style={{
              ...styles.tab,
              ...(activeTab === "timeline" ? styles.activeTab : {}),
            }}
            onClick={() => setActiveTab("timeline")}
          >
            Timeline
          </div>
        </div>

        {/* Main Text */}
        <div style={styles.mainText}>
          <div style={styles.mainTitle}>
            {activeTab === "features" && "Powerful AI Features for Modern Education"}
            {activeTab === "benefits" && "Elevate the Learning Experience"}
            {activeTab === "timeline" && "Development Roadmap"}
          </div>
          <div style={styles.mainSubtitle}>
            {activeTab === "features" && "Our AI Teaching Assistant will revolutionize how educators and students interact with course material, providing instant support and personalized learning experiences."}
            {activeTab === "benefits" && "Discover how our AI solution addresses key challenges in education and creates new opportunities for effective teaching and learning."}
            {activeTab === "timeline" && "We're building the AI Teaching Assistant in phases to ensure a robust, reliable, and valuable tool for educators."}
          </div>
        </div>

        {/* Features/Benefits Grid */}
        {activeTab === "features" && (
          <div style={styles.featureGrid}>
            {features.map((feature, index) => (
              <div
                key={index}
                style={styles.featureCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0px 15px 35px rgba(0,0,0,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0px)";
                  e.currentTarget.style.boxShadow = "0px 10px 30px rgba(0,0,0,0.05)";
                }}
              >
                {feature.icon}
                <div style={styles.featureTitle}>{feature.title}</div>
                <div style={styles.featureText}>{feature.text}</div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "benefits" && (
          <div style={styles.featureGrid}>
            {benefits.map((benefit, index) => (
              <div
                key={index}
                style={styles.featureCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0px 15px 35px rgba(0,0,0,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0px)";
                  e.currentTarget.style.boxShadow = "0px 10px 30px rgba(0,0,0,0.05)";
                }}
              >
                {benefit.icon}
                <div style={styles.featureTitle}>{benefit.title}</div>
                <div style={styles.featureText}>{benefit.text}</div>
              </div>
            ))}
          </div>
        )}

        {/* Timeline */}
        {activeTab === "timeline" && (
          <div style={styles.timelineContainer}>
            <div style={styles.timeline}>
              <div style={styles.timelineLine}></div>
              <div style={styles.timelineProgress}></div>
              
              <div style={styles.timelineItem}>
                <div style={{...styles.timelineDot, ...styles.completedDot}}>
                  <FiCheck color="#1640FF" size={24} />
                </div>
                <div style={styles.timelineDate}>Q1 2023</div>
                <div style={styles.timelineLabel}>Planning & Research</div>
              </div>
              
              <div style={styles.timelineItem}>
                <div style={{...styles.timelineDot, ...styles.completedDot}}>
                  <FiCheck color="#1640FF" size={24} />
                </div>
                <div style={styles.timelineDate}>Q2 2023</div>
                <div style={styles.timelineLabel}>Core Development</div>
              </div>
              
              <div style={styles.timelineItem}>
                <div style={{...styles.timelineDot, ...styles.currentDot}}>
                  <FiClock color="#8B5CF6" size={24} />
                </div>
                <div style={styles.timelineDate}>Q3 2023</div>
                <div style={styles.timelineLabel}>Beta Testing</div>
              </div>
              
              <div style={styles.timelineItem}>
                <div style={styles.timelineDot}>
                  <FiZap color="#6B7280" size={24} />
                </div>
                <div style={styles.timelineDate}>Q4 2023</div>
                <div style={styles.timelineLabel}>Full Launch</div>
              </div>
            </div>
          </div>
        )}

        {/* Email Signup */}
        <div style={styles.emailSignup}>
          <div style={styles.emailTitle}>Stay Updated</div>
          <div style={styles.emailText}>
            Be the first to know when the AI Teaching Assistant is available.
          </div>
          {isSubscribed ? (
            <div style={styles.successMessage}>
              <FiCheck size={20} />
              Thank you for subscribing! We'll keep you updated.
            </div>
          ) : (
            <form style={styles.emailForm} onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={styles.emailInput}
              />
              <button
                type="submit"
                style={styles.emailButton}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#0D2FBF";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#1640FF";
                }}
              >
                Notify Me <FiArrowRight style={{ marginLeft: "5px" }} />
              </button>
            </form>
          )}
        </div>

        {/* FAQ Section */}
        <div style={styles.faqContainer}>
          <div style={styles.faqTitle}>Frequently Asked Questions</div>
          {faqs.map((faq, index) => (
            <div key={index} style={styles.faqItem}>
              <div
                style={styles.faqQuestion}
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {expandedFAQ === index ? <FiChevronUp /> : <FiChevronDown />}
              </div>
              <div
                style={{
                  ...styles.faqAnswer,
                  ...(expandedFAQ === index ? styles.expandedAnswer : {}),
                }}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={styles.footer}>
          <div style={styles.footerText}>
            We're building the future of educational technology. Stay tuned as we integrate AI to transform teaching experiences and create more effective learning environments.
          </div>
        </div>
      </div>
    </div>
  );
}