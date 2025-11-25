"use client";
import React, { useState } from 'react';
import { FiSearch, FiCreditCard, FiTrendingUp, FiFileText } from 'react-icons/fi';

const HelpPage = () => {
  const [activeTab, setActiveTab] = useState('Instructor');
  const [searchQuery, setSearchQuery] = useState('');

  const instructorTopics = [
    {
      icon: FiCreditCard,
      title: 'Payments',
      description: 'Understand the revenue share and how to receive payments.',
      bgColor: '#ffe5e5'
    },
    {
      icon: FiTrendingUp,
      title: 'Selling & Promotion',
      description: 'Learn about the announcement and promotional tools.',
      bgColor: '#fff4e5'
    },
    {
      icon: FiFileText,
      title: 'Quality Standards',
      description: 'Learn what it takes to create a high quality course.',
      bgColor: '#ffe5f4'
    }
  ];

  const studentTopics = [
    {
      icon: FiFileText,
      title: 'Getting Started',
      description: 'Learn how to start your learning journey.',
      bgColor: '#e5f4ff'
    },
    {
      icon: FiCreditCard,
      title: 'Account & Payments',
      description: 'Manage your account and payment methods.',
      bgColor: '#e5ffe5'
    },
    {
      icon: FiTrendingUp,
      title: 'Course Experience',
      description: 'Get help with course features and learning.',
      bgColor: '#f4e5ff'
    }
  ];

  const currentTopics = activeTab === 'Instructor' ? instructorTopics : studentTopics;

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Add your search logic here
  };

  return (
    <div className="help-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">How may we help you?</h1>
          
          <form onSubmit={handleSearch} className="search-form">
            <div className="search-wrapper">
              <FiSearch className="search-icon" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for solutions"
                className="search-input"
              />
            </div>
          </form>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="tabs-section">
        <div className="tabs-container">
          <button
            className={`tab-button ${activeTab === 'Instructor' ? 'active' : ''}`}
            onClick={() => setActiveTab('Instructor')}
          >
            Instructor
          </button>
          <button
            className={`tab-button ${activeTab === 'Student' ? 'active' : ''}`}
            onClick={() => setActiveTab('Student')}
          >
            Student
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="content-section">
        <div className="content-container">
          <h2 className="section-title">Select a topic to search for help</h2>

          {/* Topic Cards */}
          <div className="topics-grid">
            {currentTopics.map((topic, index) => {
              const Icon = topic.icon;
              return (
                <div key={index} className="topic-card">
                  <div 
                    className="topic-icon-wrapper"
                    style={{ backgroundColor: topic.bgColor }}
                  >
                    <Icon className="topic-icon" />
                  </div>
                  <h3 className="topic-title">{topic.title}</h3>
                  <p className="topic-description">{topic.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        .help-container {
          min-height: 100vh;
          background-color: #f5f5f5;
        }

        /* Hero Section */
        .hero-section {
          background: linear-gradient(135deg, #3742d4ff 0%, #4240cfff 100%);
          padding: 80px 20px;
        }

        .hero-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .hero-title {
          font-size: 42px;
          font-weight: 600;
          color: #ffffff;
          margin: 0 0 40px 0;
        }

        .search-form {
          width: 100%;
        }

        .search-wrapper {
          position: relative;
          max-width: 600px;
          margin: 0 auto;
        }

        .search-icon {
          position: absolute;
          left: 20px;
          top: 50%;
          transform: translateY(-50%);
          width: 20px;
          height: 20px;
          color: #999;
        }

        .search-input {
          width: 100%;
          padding: 16px 20px 16px 52px;
          border: none;
          border-radius: 6px;
          font-size: 15px;
          color: #333;
          background-color: #ffffff;
          box-sizing: border-box;
          outline: none;
          transition: box-shadow 0.2s ease;
        }

        .search-input:focus {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .search-input::placeholder {
          color: #999;
        }

        /* Tabs Section */
        .tabs-section {
          background-color: #ffffff;
          border-bottom: 1px solid #e5e7eb;
        }

        .tabs-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          gap: 40px;
          padding: 0 20px;
        }

        .tab-button {
          padding: 20px 0;
          background: none;
          border: none;
          font-size: 16px;
          font-weight: 500;
          color: #666;
          cursor: pointer;
          position: relative;
          transition: color 0.2s ease;
        }

        .tab-button:hover {
          color: #333;
        }

        .tab-button.active {
          color: #333;
        }

        .tab-button.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background-color: #dc3545;
        }

        /* Content Section */
        .content-section {
          padding: 60px 20px;
        }

        .content-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-title {
          font-size: 24px;
          font-weight: 500;
          color: #333;
          margin: 0 0 40px 0;
        }

        /* Topics Grid */
        .topics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 30px;
        }

        .topic-card {
          background-color: #ffffff;
          border-radius: 8px;
          padding: 40px 30px;
          text-align: center;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          cursor: pointer;
        }

        .topic-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
        }

        .topic-icon-wrapper {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 25px auto;
        }

        .topic-icon {
          width: 36px;
          height: 36px;
          color: #333;
        }

        .topic-title {
          font-size: 20px;
          font-weight: 600;
          color: #333;
          margin: 0 0 15px 0;
        }

        .topic-description {
          font-size: 14px;
          color: #666;
          line-height: 1.6;
          margin: 0;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero-section {
            padding: 60px 20px;
          }

          .hero-title {
            font-size: 32px;
            margin-bottom: 30px;
          }

          .search-input {
            padding: 14px 18px 14px 48px;
            font-size: 14px;
          }

          .search-icon {
            left: 16px;
            width: 18px;
            height: 18px;
          }

          .tabs-container {
            gap: 30px;
          }

          .tab-button {
            font-size: 15px;
            padding: 16px 0;
          }

          .content-section {
            padding: 40px 20px;
          }

          .section-title {
            font-size: 20px;
            margin-bottom: 30px;
          }

          .topics-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .topic-card {
            padding: 30px 20px;
          }

          .topic-icon-wrapper {
            width: 70px;
            height: 70px;
            margin-bottom: 20px;
          }

          .topic-icon {
            width: 32px;
            height: 32px;
          }

          .topic-title {
            font-size: 18px;
          }

          .topic-description {
            font-size: 13px;
          }
        }
      `}</style>
    </div>
  );
};

export default HelpPage;