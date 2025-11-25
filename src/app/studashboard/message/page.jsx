"use client";
import React, { useState } from "react";
import {
  FiMessageCircle,
  FiPaperclip,
  FiBell,
  FiClock,
  FiUsers,
  FiLock,
  FiCheck,
  FiArrowRight,
  FiChevronDown,
  FiChevronUp,
  FiSend,
  FiInbox,
  FiVideo,
  FiShield,
  FiZap,
} from "react-icons/fi";

export default function MessagesPlaceholder() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [activeTab, setActiveTab] = useState("features");

  const styles = {
    page: {
      minHeight: "100vh",
      padding: "60px 20px 40px 20px",
      background: "linear-gradient(135deg, #f8f9fb 0%, #e9ecef 100%)",
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
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
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
      icon: <FiMessageCircle style={styles.featureIcon} />,
      title: "Direct & Group Chats",
      text: "Foster direct connections with private messages and collaborate in dynamic group chats.",
    },
    {
      icon: <FiPaperclip style={styles.featureIcon} />,
      title: "File Sharing",
      text: "Seamlessly share notes, assignments, images, and documents directly in conversations.",
    },
    {
      icon: <FiVideo style={styles.featureIcon} />,
      title: "Video Calls",
      text: "Initiate face-to-face virtual meetings directly from a chat for more personal interaction.",
    },
  ];

  const benefits = [
    {
      icon: <FiZap style={styles.featureIcon} />,
      title: "Boost Engagement",
      text: "Create a vibrant community and increase student participation with easy-to-use communication tools.",
    },
    {
      icon: <FiInbox style={styles.featureIcon} />,
      title: "Centralized Hub",
      text: "Consolidate all course-related communication in one place, reducing clutter and confusion.",
    },
    {
      icon: <FiSend style={styles.featureIcon} />,
      title: "Instant Announcements",
      text: "Reach everyone at once with important updates and announcements, ensuring no one misses out.",
    },
  ];

  const security = [
    {
      icon: <FiShield style={styles.featureIcon} />,
      title: "Data Privacy",
      text: "We are committed to protecting user data with strict privacy policies and secure data handling practices.",
    },
    {
      icon: <FiLock style={styles.featureIcon} />,
      title: "Secure Connections",
      text: "All communications will be protected with industry-standard encryption to keep conversations safe.",
    },
    {
      icon: <FiUsers style={styles.featureIcon} />,
      title: "User Control",
      text: "Users will have control over their notifications, privacy settings, and who can contact them.",
    },
  ];

  const faqs = [
    {
      question: "When will the messaging feature be available?",
      answer: "We're working hard to build a robust and user-friendly messaging system. It's slated for release in our next major update. Sign up for notifications to be the first to know!",
    },
    {
      question: "Will there be mobile apps for messaging?",
      answer: "Yes, we plan to introduce native mobile apps for iOS and Android to ensure you can stay connected on the go.",
    },
    {
      question: "Is file sharing secure?",
      answer: "Absolutely. We will implement secure file transfer protocols to ensure that shared documents are protected and only accessible to intended recipients within the course.",
    },
    {
      question: "Can instructors moderate group chats?",
      answer: "Yes, instructors and course admins will have moderation capabilities to manage group chats, ensuring a respectful and productive learning environment.",
    },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
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
            <FiMessageCircle />
            Messages
          </div>
          <div style={styles.subtitle}>
            A new, seamless way to communicate and collaborate within your courses.
          </div>
          <div style={styles.badge}>
            <FiClock /> Coming in the Next Update
          </div>
        </div>

        {/* Illustration */}
        <div style={styles.illustration}>
          <div style={styles.illustrationPattern}></div>
          <div style={styles.illustrationInner}>
            <FiMessageCircle />
          </div>
        </div>

        {/* Tabs */}
        <div style={styles.tabs}>
          <div
            style={{ ...styles.tab, ...(activeTab === "features" ? styles.activeTab : {}) }}
            onClick={() => setActiveTab("features")}
          >
            Features
          </div>
          <div
            style={{ ...styles.tab, ...(activeTab === "benefits" ? styles.activeTab : {}) }}
            onClick={() => setActiveTab("benefits")}
          >
            Benefits
          </div>
          <div
            style={{ ...styles.tab, ...(activeTab === "security" ? styles.activeTab : {}) }}
            onClick={() => setActiveTab("security")}
          >
            Security
          </div>
        </div>

        {/* Main Text */}
        <div style={styles.mainText}>
          <div style={styles.mainTitle}>
            {activeTab === "features" && "Powerful Communication Tools"}
            {activeTab === "benefits" && "Build a More Connected Classroom"}
            {activeTab === "security" && "Your Privacy is Our Priority"}
          </div>
          <div style={styles.mainSubtitle}>
            {activeTab === "features" && "Connect, share, and collaborate with a rich set of messaging features designed for education."}
            {activeTab === "benefits" && "Enhance the learning experience by fostering a community where students and instructors can interact effortlessly."}
            {activeTab === "security" && "We are building our messaging system with a strong foundation of security and privacy to protect all users."}
          </div>
        </div>

        {/* Content Grid */}
        <div style={styles.featureGrid}>
          {(activeTab === "features" ? features : activeTab === "benefits" ? benefits : security).map((item, index) => (
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
              {item.icon}
              <div style={styles.featureTitle}>{item.title}</div>
              <div style={styles.featureText}>{item.text}</div>
            </div>
          ))}
        </div>

        {/* Email Signup */}
        <div style={styles.emailSignup}>
          <div style={styles.emailTitle}>Get Notified on Launch</div>
          <div style={styles.emailText}>
            Be the first to experience the new messaging feature.
          </div>
          {isSubscribed ? (
            <div style={styles.successMessage}>
              <FiCheck size={20} />
              Thanks for subscribing! We'll keep you in the loop.
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
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#0D2FBF")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "#1640FF")}
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
              <div style={styles.faqQuestion} onClick={() => toggleFAQ(index)}>
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
            We're building the future of educational communication. Stay tuned for powerful tools that will bring your classroom closer together.
          </div>
        </div>
      </div>
    </div>
  );
}