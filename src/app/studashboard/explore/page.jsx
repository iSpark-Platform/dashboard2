"use client";
import React, { useState } from 'react';
import { 
  FiSearch,
  FiMoreVertical,FiMessageCircle,
  FiClock,
  FiUsers,
  FiBook,
  FiStar,
  FiTrendingUp,
  FiActivity,
  FiBarChart2,
  FiVideo,
  FiFileText,
  FiEdit3,
  FiCalendar,
  FiUpload,
  FiCheckCircle,
  FiAlertCircle,
  FiZap,
  FiTarget,
  FiAward,
  FiMessageSquare,
  FiPlay
} from 'react-icons/fi';
import Link from 'next/link';

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Teaching insights data
  const teachingInsights = [
    { 
      id: 1, 
      title: 'Student Engagement',
      value: '87%',
      change: '+12%',
      trend: 'up',
      icon: FiActivity,
      color: '#1640ff'
    },
    { 
      id: 2, 
      title: 'Course Completion',
      value: '73%',
      change: '+5%',
      trend: 'up',
      icon: FiCheckCircle,
      color: '#1640ff'
    },
  
   
    { 
      id: 3, 
      title: 'Active Learners',
      value: '1,248',
      change: '+156',
      trend: 'up',
      icon: FiUsers,
      color: '#1640ff'
    },
    { 
      id: 4, 
      title: 'Course Rating',
      value: '4.8',
      change: '+0.2',
      trend: 'up',
      icon: FiStar,
      color: '#1640ff'
    }
  ];

  // Trending subjects data
  const trendingSubjects = [
    {
      id: 1,
      title: 'Smart Robotics & Industry 4.0 Automation Internship',
      category: 'Programming',
      trend: 'up',
      students: 3421,
      growth: '+18%',
      difficulty: 'Intermediate',
      image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=500&h=300&fit=crop'
    },
    {
      id: 2,
      title: 'Applied AI & Machine Learning: From Models to Real-World Applications',
      category: 'Data Science',
      trend: 'up',
      students: 2876,
      growth: '+24%',
      difficulty: 'Beginner',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop'
    },
    {
      id: 3,
      title: 'IoT & IIoT for Smart Systems and Industry 4.0',
      category: 'Cloud Computing',
      trend: 'stable',
      students: 1954,
      growth: '+5%',
      difficulty: 'Advanced',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop'
    },
    {
      id: 4,
      title: 'Cloud & Edge Computing for Connected Intelligence',
      category: 'Design',
      trend: 'up',
      students: 2234,
      growth: '+15%',
      difficulty: 'Beginner',
      image: 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=500&h=300&fit=crop'
    },
  ];

  // Teaching tools data
  const teachingTools = [
     {
    id: 1,
    title: 'Messages / Chat',
    description: 'Send messages to students and provide updates',
    icon: FiMessageCircle,
    color: '#1640ff'
  },
  {
    id: 2,
    title: 'Timetable',
    description: 'View and manage your class schedule, including subjects',
    icon: FiClock,
    color: '#1640ff'
  },
    {
      id: 3,
      title: 'Upload Study Material',
      description: 'Share notes, presentations, and resources',
      icon: FiUpload,
      color: '#1640ff'
    },
    {
      id: 4,
      title: 'Create Quiz',
      description: 'Build interactive quizzes to test knowledge',
      icon: FiFileText,
      color: '#1640ff'
    }
  ];

  // Recommended for you data
  const recommendations = [
    {
      id: 1,
      title: 'Add Interactive Quizzes to "Python Basics"',
      type: 'Course Improvement',
      impact: 'High',
      description: 'Students are struggling with loops and functions',
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=500&h=300&fit=crop'
    },
    {
      id: 2,
      title: 'Schedule a Doubt-Solving Session',
      type: 'Engagement',
      impact: 'Medium',
      description: 'Based on recent questions in your courses',
      image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f9e867?w=500&h=300&fit=crop'
    },
    {
      id: 3,
      title: 'Create a Course on "React Hooks"',
      type: 'New Course',
      impact: 'High',
      description: 'High demand topic with 500+ searches this week',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=300&fit=crop'
    },
    {
      id: 4,
      title: 'Upload Additional Notes for "Data Structures"',
      type: 'Resource',
      impact: 'Medium',
      description: 'Students have requested more examples',
      image: 'https://images.unsplash.com/photo-1554224154-260325c05919?w=500&h=300&fit=crop'
    },
    {
      id: 5,
      title: 'Host a Webinar on "Career in AI"',
      type: 'Engagement',
      impact: 'High',
      description: 'Attract new students with industry insights',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop'
    },
    {
      id: 6,
      title: 'Update "JavaScript ES6" Course',
      type: 'Course Update',
      impact: 'Medium',
      description: 'New features have been released',
      image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=500&h=300&fit=crop'
    },
    {
      id: 7,
      title: 'Create a Project-Based Learning Module',
      type: 'New Content',
      impact: 'High',
      description: 'Students prefer hands-on learning',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop'
    },
    {
      id: 8,
      title: 'Add Case Studies to "Business Analytics"',
      type: 'Course Enhancement',
      impact: 'Medium',
      description: 'Real-world examples improve understanding',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop'
    }
  ];

  // Upcoming live classes data
  const upcomingClasses = [
    {
      id: 1,
      title: '3D Printing & Digital Fabrication for Engineers',
      date: 'Today',
      time: '3:00 PM',
      students: 245,
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=300&fit=crop'
    },
    {
      id: 2,
      title: 'Cloud & Edge Computing for Connected Intelligence',
      date: 'Tomorrow',
      time: '5:00 PM',
      students: 189,
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=500&h=300&fit=crop'
    },
    {
      id: 3,
      title: 'IoT & IIoT for Smart Systems and Industry 4.0',
      date: 'Friday',
      time: '4:00 PM',
      students: 156,
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&h=300&fit=crop'
    },
    {
      id: 4,
      title: 'Applied AI & Machine Learning: From Models to Real-World Applications',
      date: 'Saturday',
      time: '11:00 AM',
      students: 203,
      image: 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=500&h=300&fit=crop'
    }
  ];

  // Most watched replays data
  const watchedReplays = [
    {
      id: 1,
      title: 'Smart Robotics & Industry 4.0 Automation Internship',
      views: '5.2K',
      duration: '1h 45m',
      date: '3 days ago',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop'
    },
    {
      id: 2,
      title: 'Applied AI & Machine Learning: From Models to Real-World Applications',
      views: '3.8K',
      duration: '2h 10m',
      date: '1 week ago',
      image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=500&h=300&fit=crop'
    },
    {
      id: 3,
      title: 'IoT & IIoT for Smart Systems and Industry 4.0',
      views: '2.9K',
      duration: '1h 30m',
      date: '2 weeks ago',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop'
    },
    {
      id: 4,
      title: 'Cloud & Edge Computing for Connected Intelligence',
      views: '2.4K',
      duration: '1h 55m',
      date: '3 weeks ago',
      image: 'https://images.unsplash.com/photo-1554224154-260325c05919?w=500&h=300&fit=crop'
    }
  ];

 
  // Recently viewed items
  const recentlyViewed = [
    {
      id: 1,
      title: 'Advanced JavaScript Course',
      type: 'Course',
      date: '2 hours ago',
      progress: 75,
      image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=500&h=300&fit=crop'
    },
    {
      id: 2,
      title: 'Python Basics Assignment',
      type: 'Assignment',
      date: 'Yesterday',
      progress: 100,
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=500&h=300&fit=crop'
    },
    {
      id: 3,
      title: 'Data Science Quiz Results',
      type: 'Quiz',
      date: '2 days ago',
      progress: 100,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop'
    },
    {
      id: 4,
      title: 'Cloud Architecture Notes',
      type: 'Notes',
      date: '3 days ago',
      progress: 50,
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop'
    }
  ];

  const categories = [
    'All Tools',
    'Teaching Tools',
    'Analytics',
    'Resources',
    'Live Classes',
    'Recommendations'
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Add your search logic here
  };

  const handleToolClick = (toolId) => {
    console.log('Opening tool:', toolId);
    // Navigate to tool
  };

  const handleRecommendationClick = (recommendationId) => {
    console.log('Viewing recommendation:', recommendationId);
    // Navigate to recommendation details
  };

  const handleLiveClassClick = (classId) => {
    console.log('Viewing live class:', classId);
    // Navigate to live class details
  };

  const handleReplayClick = (replayId) => {
    console.log('Viewing replay:', replayId);
    // Navigate to replay
  };

  const handleResourceClick = (resourceId) => {
    console.log('Viewing resource:', resourceId);
    // Navigate to resource
  };

  const handleRecentlyViewedClick = (itemId) => {
    console.log('Viewing recently viewed item:', itemId);
    // Navigate to item
  };

  const filteredRecommendations = selectedCategory === 'all' || selectedCategory === 'All Tools'
    ? recommendations
    : recommendations.filter(rec => rec.type.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <>
      <div className="explore-container">
        <div className="explore-page">
        

          {/* Teaching Insights Section */}
          <section className="insights-section">
            <div className="section-header">
              <h2 className="section-title">
                <FiBarChart2 className="section-icon" />
                Teaching Insights
              </h2>
              <Link href="/dashboard/analytics">
                <button className="see-all-btn">View analytics →</button>
              </Link>
            </div>

            <div className="insights-grid">
              {teachingInsights.map((insight) => (
                <div 
                  key={insight.id} 
                  className="insight-card"
                  onClick={() => console.log('Viewing insight:', insight.id)}
                >
                  <div className="insight-icon" style={{ backgroundColor: `${insight.color}20`, color: insight.color }}>
                    <insight.icon size={20} />
                  </div>
                  <div className="insight-content">
                    <h3 className="insight-title">{insight.title}</h3>
                    <div className="insight-value">{insight.value}</div>
                    <div className={`insight-change ${insight.trend}`}>
                      {insight.trend === 'up' ? <FiTrendingUp size={12} /> : <FiActivity size={12} />}
                      <span>{insight.change}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Trending Subjects Section */}
          <section className="trending-section">
            <div className="section-header">
              <h2 className="section-title">
                <FiZap className="section-icon" />
                Trending Subjects
              </h2>
              <Link href="/dashboard/trends">
                <button className="see-all-btn">See all →</button>
              </Link>
            </div>

            <div className="trending-grid">
              {trendingSubjects.map((subject) => (
                <div 
                  key={subject.id} 
                  className="trending-card"
                  onClick={() => console.log('Viewing subject:', subject.id)}
                >
                  <div className="trending-image-container">
                    <img 
                      src={subject.image}
                      alt={subject.title}
                      className="trending-image"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/500x300?text=Subject';
                      }}
                    />
                    <div className="trending-overlay">
                      <span className={`trend-badge ${subject.trend}`}>
                        {subject.trend === 'up' ? <FiTrendingUp size={12} /> : subject.trend === 'down' ? <FiActivity size={12} /> : <FiActivity size={12} />}
                        <span>{subject.growth}</span>
                      </span>
                      <span className="difficulty-badge">{subject.difficulty}</span>
                    </div>
                  </div>
                  <div className="trending-info">
                    <h3 className="trending-title">{subject.title}</h3>
                    <p className="trending-category">{subject.category}</p>
                    <div className="trending-stats">
                      <span className="stat">
                        <FiUsers size={12} /> {subject.students.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Teaching Tools Section */}
<section className="tools-section">
  <div className="section-header">
    <h2 className="section-title">
      <FiTarget className="section-icon" />
      Instructor Tools
    </h2>
    <Link href="/dashboard/tools">
      <button className="see-all-btn">See all →</button>
    </Link>
  </div>

  <div className="tools-grid">
    {teachingTools.map((tool) => {
      // Define custom button labels per tool
      let buttonLabel = '';
      switch(tool.title) {
        case 'Messages / Chat':
          buttonLabel = 'Chat Now';
          break;
        case 'Timetable':
          buttonLabel = 'View Timetable';
          break;
        case 'Upload Study Material':
          buttonLabel = 'Upload Material';
          break;
        case 'Create Quiz':
          buttonLabel = 'Create Quiz';
          break;
        default:
          buttonLabel = 'Use Tool';
      }

      return (
        <div 
          key={tool.id} 
          className="tool-card"
          onClick={() => handleToolClick(tool.id)}
        >
          <div className="tool-icon" style={{ backgroundColor: `${tool.color}20`, color: tool.color }}>
            <tool.icon size={24} />
          </div>
          <h3 className="tool-title">{tool.title}</h3>
          <p className="tool-description">{tool.description}</p>
          <button className="tool-action-btn" style={{ backgroundColor: tool.color }}>
            {buttonLabel}
          </button>
        </div>
      );
    })}
  </div>
</section>



          {/* Category Filter 
          <section className="categories-section">
            <div className="categories-scroll">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`category-btn ${selectedCategory === category || (selectedCategory === 'all' && category === 'All Tools') ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category === 'All Tools' ? 'all' : category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </section>*/}

       
          {/* Upcoming Live Classes and Most Watched Replays */}
          <div className="live-content-container">
            {/* Upcoming Live Classes */}
            <section className="upcoming-section">
              <div className="section-header">
                <h2 className="section-title">
                  <FiCalendar className="section-icon" />
                  Upcoming Live Classes
                </h2>
                <Link href="/dashboard/live">
                  <button className="see-all-btn">See all →</button>
                </Link>
              </div>

              <div className="upcoming-grid">
                {upcomingClasses.map((classItem) => (
                  <div 
                    key={classItem.id} 
                    className="upcoming-card"
                    onClick={() => handleLiveClassClick(classItem.id)}
                  >
                    <div className="upcoming-image-container">
                      <img 
                        src={classItem.image}
                        alt={classItem.title}
                        className="upcoming-image"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/500x300?text=Live Class';
                        }}
                      />
                      <div className="upcoming-overlay">
                        <span className="live-badge">UPCOMING</span>
                      </div>
                    </div>
                    <div className="upcoming-info">
                      <h3 className="upcoming-title">{classItem.title}</h3>
                      <div className="upcoming-details">
                        <span className="upcoming-date">{classItem.date}</span>
                        <span className="upcoming-time">{classItem.time}</span>
                      </div>
                      <div className="upcoming-stats">
                        <span className="stat">
                          <FiUsers size={12} /> {classItem.students} registered
                        </span>
                      </div>
                      <button className="join-btn">Join Class</button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Most Watched Replays */}
            <section className="replays-section">
              <div className="section-header">
                <h2 className="section-title">
                  <FiPlay className="section-icon" />
                  Most Watched Replays
                </h2>
                <Link href="/dashboard/replays">
                  <button className="see-all-btn">See all →</button>
                </Link>
              </div>

              <div className="replays-grid">
                {watchedReplays.map((replay) => (
                  <div 
                    key={replay.id} 
                    className="replay-card"
                    onClick={() => handleReplayClick(replay.id)}
                  >
                    <div className="replay-image-container">
                      <img 
                        src={replay.image}
                        alt={replay.title}
                        className="replay-image"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/500x300?text=Replay';
                        }}
                      />
                      <div className="replay-overlay">
                        <span className="play-icon">
                          <FiPlay size={16} />
                        </span>
                      </div>
                    </div>
                    <div className="replay-info">
                      <h3 className="replay-title">{replay.title}</h3>
                      <div className="replay-details">
                        <span className="replay-duration">{replay.duration}</span>
                        <span className="replay-date">{replay.date}</span>
                      </div>
                      <div className="replay-stats">
                        <span className="stat">
                          <FiUsers size={12} /> {replay.views} views
                        </span>
                      </div>
                      <button className="watch-btn">Watch Now</button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

       

     
        </div>
      </div>

      <style jsx>{`
        .explore-container {
          background-color: #f8f9fa;
          min-height: 100vh;
          padding: 30px 20px;
        }

        .explore-page {
          max-width: 1400px;
          margin: 0 auto;
        }

        /* Search Section */
        .search-section {
          margin-bottom: 40px;
        }

        .search-container {
          position: relative;
          width: 100%;
        }

        .search-icon {
          position: absolute;
          left: 20px;
          top: 50%;
          transform: translateY(-50%);
          width: 20px;
          height: 20px;
          color: #9ca3af;
          pointer-events: none;
        }

        .search-input {
          width: 100%;
          height: 54px;
          padding: 0 20px 0 56px;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          font-size: 14px;
          outline: none;
          background-color: #ffffff;
          transition: all 0.2s ease;
        }

        .search-input:focus {
          border-color: #1640ff;
          box-shadow: 0 0 0 3px rgba(22, 64, 255, 0.1);
        }

        .search-input::placeholder {
          color: #9ca3af;
        }

        /* Section Headers */
        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        .section-title {
          font-size: 22px;
          font-weight: 700;
          color: #1f2937;
          margin: 0;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .section-icon {
          color: #1640ff;
        }

        .see-all-btn {
          font-size: 14px;
          color: #6b7280;
          background: none;
          border: none;
          cursor: pointer;
          transition: color 0.2s ease;
          font-weight: 500;
          padding: 4px 8px;
          margin-left:"8px";
        }

        .see-all-btn:hover {
          color: #1640ff;
        }

        .recommendations-count {
          font-size: 14px;
          color: #6b7280;
        }

        /* Teaching Insights Section */
        .insights-section {
          margin-bottom: 40px;
        }

        .insights-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 10px;
        }

        .insight-card {
          background-color: #ffffff;
          border-radius: 12px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          width:260px
        }

        .insight-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 4px 12px rgba(22, 64, 255, 0.2);
        }

        .insight-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
        }

        .insight-title {
          font-size: 14px;
          font-weight: 600;
          color: #6b7280;
          margin: 0 0 8px 0;
        }

        .insight-value {
          font-size: 24px;
          font-weight: 700;
          color: #1f2937;
          margin: 0 0 8px 0;
        }

        .insight-change {
          font-size: 12px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .insight-change.up {
          color: #10b981;
        }

        .insight-change.down {
          color: #EF7C00;
        }

        /* Trending Subjects Section */
        .trending-section {
          margin-bottom: 40px;
        }

        .trending-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 20px;
        }

        .trending-card {
          background-color: #ffffff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          cursor: pointer;
          width:260px;
        }

        .trending-card:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          transform: translateY(-4px);
        }

        .trending-image-container {
          position: relative;
          width: 100%;
          height: 120px;
          overflow: hidden;
        }

        .trending-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .trending-card:hover .trending-image {
          transform: scale(1.05);
        }

        .trending-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.1), transparent);
          padding: 12px;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .trend-badge {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 10px;
          font-weight: 600;
          padding: 4px 8px;
          border-radius: 4px;
        }

        .trend-badge.up {
          background-color: rgba(16, 185, 129, 0.2);
          color: #10b981;
        }

        .trend-badge.down {
          background-color: rgba(239, 124, 0, 0.2);
          color: #EF7C00;
        }

        .trend-badge.stable {
          background-color: rgba(107, 114, 128, 0.2);
          color: #6b7280;
        }

        .difficulty-badge {
          font-size: 10px;
          font-weight: 600;
          padding: 4px 8px;
          border-radius: 4px;
          background-color: rgba(22, 64, 255, 0.2);
          color: #1640ff;
        }

        .trending-info {
          padding: 16px;
        }

        .trending-title {
          font-size: 14px;
          font-weight: 600;
          color: #1f2937;
          margin: 0 0 4px 0;
          line-height: 1.4;
        }

        .trending-category {
          font-size: 12px;
          color: #6b7280;
          margin: 0 0 8px 0;
        }

        .trending-stats {
          display: flex;
          gap: 12px;
        }

        .stat {
          font-size: 11px;
          color: #6b7280;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        /* Teaching Tools Section */
        .tools-section {
          margin-bottom: 40px;
        }

        .tools-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .tool-card {
          background-color: #ffffff;
          border-radius: 12px;
          padding: 24px;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .tool-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 4px 12px rgba(22, 64, 255, 0.2);
        }

        .tool-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }

        .tool-title {
          font-size: 16px;
          font-weight: 600;
          color: #1f2937;
          margin: 0 0 8px 0;
        }

        .tool-description {
          font-size: 14px;
          color: #6b7280;
          margin: 0 0 16px 0;
          line-height: 1.4;
        }

        .tool-action-btn {
          padding: 8px 16px;
          background-color: #1640ff;
          color: #ffffff;
          border: none;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .tool-action-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(22, 64, 255, 0.3);
        }

        /* Categories Section */
        .categories-section {
          margin-bottom: 30px;
        }

        .categories-scroll {
          display: flex;
          gap: 10px;
          overflow-x: auto;
          padding-bottom: 10px;
          scrollbar-width: thin;
        }

        .categories-scroll::-webkit-scrollbar {
          height: 6px;
        }

        .categories-scroll::-webkit-scrollbar-thumb {
          background-color: #e5e7eb;
          border-radius: 3px;
        }

        .category-btn {
          padding: 10px 20px;
          background-color: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 500;
          color: #6b7280;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .category-btn:hover {
          border-color: #1640ff;
          color: #1640ff;
        }

        .category-btn.active {
          background-color: #1640ff;
          border-color: #1640ff;
          color: #ffffff;
        }

        /* Recommended for You Section */
        .recommendations-section {
          margin-bottom: 40px;
        }

        .recommendations-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .recommendation-card {
          background-color: #ffffff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .recommendation-card:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          transform: translateY(-4px);
        }

        .recommendation-image-container {
          position: relative;
          width: 100%;
          height: 140px;
          overflow: hidden;
        }

        .recommendation-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .recommendation-card:hover .recommendation-image {
          transform: scale(1.05);
        }

        .recommendation-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.1), transparent);
          padding: 12px;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .impact-badge {
          font-size: 10px;
          font-weight: 700;
          padding: 4px 8px;
          border-radius: 4px;
          text-transform: uppercase;
        }

        .impact-badge.high {
          background-color: rgba(239, 124, 0, 0.2);
          color: #EF7C00;
        }

        .impact-badge.medium {
          background-color: rgba(22, 64, 255, 0.2);
          color: #1640ff;
        }

        .impact-badge.low {
          background-color: rgba(107, 114, 128, 0.2);
          color: #6b7280;
        }

        .type-badge {
          font-size: 10px;
          font-weight: 600;
          padding: 4px 8px;
          border-radius: 4px;
          background-color: rgba(22, 64, 255, 0.2);
          color: #1640ff;
        }

        .recommendation-info {
          padding: 16px;
        }

        .recommendation-title {
          font-size: 14px;
          font-weight: 600;
          color: #1f2937;
          margin: 0 0 8px 0;
          line-height: 1.4;
        }

        .recommendation-description {
          font-size: 12px;
          color: #6b7280;
          margin: 0 0 12px 0;
          line-height: 1.4;
        }

        .recommendation-action-btn {
          width: 100%;
          padding: 8px 16px;
          background-color: #1640ff;
          color: #ffffff;
          border: none;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .recommendation-action-btn:hover {
          background-color: #0a35d0;
          transform: translateY(-2px);
        }

        /* Live Content Container */
        .live-content-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          margin-bottom: 40px;
        }

        /* Upcoming Live Classes Section */
        .upcoming-section {
          margin-bottom: 0;
        }

        .upcoming-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }

        .upcoming-card {
          background-color: #ffffff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          cursor: pointer;
          display: flex;
        }

        .upcoming-card:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          transform: translateY(-2px);
        }

        .upcoming-image-container {
          position: relative;
          width: 120px;
          height: 100px;
          overflow: hidden;
          flex-shrink: 0;
        }

        .upcoming-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .upcoming-card:hover .upcoming-image {
          transform: scale(1.05);
        }

        .upcoming-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.1), transparent);
          padding: 8px;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .live-badge {
          background-color: #EF7C00;
          color: #ffffff;
          font-size: 9px;
          font-weight: 700;
          padding: 4px 8px;
          border-radius: 4px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .upcoming-info {
          padding: 12px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .upcoming-title {
          font-size: 14px;
          font-weight: 600;
          color: #1f2937;
          margin: 0 0 6px 0;
          line-height: 1.3;
        }

        .upcoming-details {
          display: flex;
          gap: 8px;
          margin-bottom: 6px;
        }

        .upcoming-date, .upcoming-time {
          font-size: 11px;
          color: #6b7280;
        }

        .upcoming-stats {
          display: flex;
          gap: 12px;
          margin-bottom: 10px;
        }

        .join-btn {
          margin-top: auto;
          padding: 6px 12px;
          background-color: #1640ff;
          color: #ffffff;
          border: none;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          align-self: flex-start;
        }

        .join-btn:hover {
          background-color: #0a35d0;
        }

        /* Most Watched Replays Section */
        .replays-section {
          margin-bottom: 0;
        }

        .replays-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }

        .replay-card {
          background-color: #ffffff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          cursor: pointer;
          display: flex;
        }

        .replay-card:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          transform: translateY(-2px);
        }

        .replay-image-container {
          position: relative;
          width: 120px;
          height: 100px;
          overflow: hidden;
          flex-shrink: 0;
        }

        .replay-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .replay-card:hover .replay-image {
          transform: scale(1.05);
        }

        .replay-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.3);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .play-icon {
          width: 32px;
          height: 32px;
          background-color: rgba(255, 255, 255, 0.9);
          color: #1640ff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .replay-info {
          padding: 12px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .replay-title {
          font-size: 14px;
          font-weight: 600;
          color: #1f2937;
          margin: 0 0 6px 0;
          line-height: 1.3;
        }

        .replay-details {
          display: flex;
          gap: 8px;
          margin-bottom: 6px;
        }

        .replay-duration, .replay-date {
          font-size: 11px;
          color: #6b7280;
        }

        .replay-stats {
          display: flex;
          gap: 12px;
          margin-bottom: 10px;
        }

        .watch-btn {
          margin-top: auto;
          padding: 6px 12px;
          background-color: #1640ff;
          color: #ffffff;
          border: none;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          align-self: flex-start;
        }

        .watch-btn:hover {
          background-color: #0a35d0;
        }

        /* Newly Added Study Resources Section */
        .resources-section {
          margin-bottom: 40px;
        }

        .resources-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .resource-card {
          background-color: #ffffff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .resource-card:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          transform: translateY(-4px);
        }

        .resource-image-container {
          position: relative;
          width: 100%;
          height: 140px;
          overflow: hidden;
        }

        .resource-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .resource-card:hover .resource-image {
          transform: scale(1.05);
        }

        .resource-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.1), transparent);
          padding: 12px;
          display: flex;
          justify-content: flex-end;
          align-items: flex-start;
        }

        .resource-info {
          padding: 16px;
        }

        .resource-title {
          font-size: 14px;
          font-weight: 600;
          color: #1f2937;
          margin: 0 0 8px 0;
          line-height: 1.4;
        }

        .resource-details {
          display: flex;
          gap: 8px;
          margin-bottom: 8px;
        }

        .resource-size {
          font-size: 11px;
          color: #6b7280;
        }

        .resource-stats {
          display: flex;
          gap: 12px;
          margin-bottom: 12px;
        }

        .download-btn {
          width: 100%;
          padding: 8px 16px;
          background-color: #1640ff;
          color: #ffffff;
          border: none;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .download-btn:hover {
          background-color: #0a35d0;
          transform: translateY(-2px);
        }

        /* Recently Viewed Items Section */
        .recently-viewed-section {
          margin-bottom: 40px;
        }

        .recently-viewed-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .recently-viewed-card {
          background-color: #ffffff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .recently-viewed-card:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          transform: translateY(-4px);
        }

        .recently-viewed-image-container {
          position: relative;
          width: 100%;
          height: 140px;
          overflow: hidden;
        }

        .recently-viewed-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .recently-viewed-card:hover .recently-viewed-image {
          transform: scale(1.05);
        }

        .recently-viewed-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.1), transparent);
          padding: 12px;
          display: flex;
          justify-content: flex-end;
          align-items: flex-start;
        }

        .recently-viewed-info {
          padding: 16px;
        }

        .recently-viewed-title {
          font-size: 14px;
          font-weight: 600;
          color: #1f2937;
          margin: 0 0 8px 0;
          line-height: 1.4;
        }

        .recently-viewed-details {
          display: flex;
          gap: 8px;
          margin-bottom: 8px;
        }

        .viewed-date {
          font-size: 11px;
          color: #6b7280;
        }

        .progress-container {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
        }

        .progress-bar {
          flex-grow: 1;
          height: 6px;
          background-color: #e5e7eb;
          border-radius: 3px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background-color: #1640ff;
        }

        .progress-text {
          font-size: 11px;
          color: #6b7280;
          font-weight: 600;
        }

        .continue-btn {
          width: 100%;
          padding: 8px 16px;
          background-color: #1640ff;
          color: #ffffff;
          border: none;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .continue-btn:hover {
          background-color: #0a35d0;
          transform: translateY(-2px);
        }

        /* Responsive */
        @media (max-width: 1280px) {
          .insights-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .trending-grid {
            grid-template-columns: repeat(4, 1fr);
          }

          .tools-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .recommendations-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .resources-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .recently-viewed-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 1024px) {
          .insights-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .trending-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .tools-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .recommendations-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .live-content-container {
            grid-template-columns: 1fr;
          }

          .resources-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .recently-viewed-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .insights-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .trending-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .tools-grid {
            grid-template-columns: 1fr;
          }

          .recommendations-grid {
            grid-template-columns: 1fr;
          }

          .resources-grid {
            grid-template-columns: 1fr;
          }

          .recently-viewed-grid {
            grid-template-columns: 1fr;
          }

          .search-input {
            height: 48px;
          }

          .section-title {
            font-size: 18px;
          }
        }

        @media (max-width: 480px) {
          .insights-grid {
            grid-template-columns: 1fr;
          }

          .trending-grid {
            grid-template-columns: 1fr;
          }

          .explore-container {
            padding: 20px 12px;
          }
        }
      `}</style>
    </>
  );
}