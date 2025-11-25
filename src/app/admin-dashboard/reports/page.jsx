"use client";
import React from 'react';
import { FiClock } from 'react-icons/fi';

const ReportHistoryPage = () => {
  return (
    <div className="report-container">
      <div className="report-content">
        {/* Header */}
        <div className="report-header">
      
          <h1 className="header-title">Report history</h1>
        </div>

        {/* Thanks Section */}
        <div className="thanks-section">
          <h2 className="thanks-title">Thanks for reporting</h2>
          
          <p className="description-text">
            Any member of the Cursus community can flag content to us that they believe violates our Community Guidelines. When something is flagged, it's not automatically taken down. Flagged content is reviewed in line with the following guidelines:
          </p>

          {/* Guidelines List */}
          <ul className="guidelines-list">
            <li className="guideline-item">
              <span className="guideline-text">
                Content that violates our{' '}
                <a href="#" className="guideline-link">Community Guidelines</a>
                {' '}is removed from Edututs+.
              </span>
            </li>
            <li className="guideline-item">
              <span className="guideline-text">
                Content that may not be appropriate for all younger audiences may be age-restricted.
              </span>
            </li>
          </ul>

          {/* Learn More Link */}
          <a href="#" className="learn-more-link">
            Learn more about reporting content on Cursus.
          </a>
        </div>

        {/* Empty State */}
        <div className="empty-state">
          <p className="empty-text">You haven't submitted any reports.</p>
        </div>
      </div>

      <style jsx>{`
        .report-container {
          min-height: 100vh;
          background-color: #f5f5f5;
          padding: 40px 20px;
        }

        .report-content {
          max-width: 900px;
          margin: 0 auto;
          background-color: #ffffff;
          border-radius: 8px;
          padding: 40px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .report-header {
          display: flex;
          align-items: center;
          margin-bottom: 40px;
          padding-bottom: 20px;
          border-bottom: 1px solid #e5e7eb;
        }

        .header-icon {
          width: 24px;
          height: 24px;
          margin-right: 12px;
          color: #333;
        }

        .header-title {
          font-size: 24px;
          font-weight: 500;
          color: #333;
          margin: 0;
        }

        .thanks-section {
          margin-bottom: 50px;
        }

        .thanks-title {
          font-size: 18px;
          font-weight: 600;
          color: #333;
          margin: 0 0 20px 0;
        }

        .description-text {
          font-size: 14px;
          color: #666;
          line-height: 1.7;
          margin: 0 0 20px 0;
        }

        .guidelines-list {
          margin: 0 0 20px 0;
          padding-left: 20px;
        }

        .guideline-item {
          font-size: 14px;
          color: #666;
          line-height: 1.7;
          margin-bottom: 12px;
        }

        .guideline-item:last-child {
          margin-bottom: 0;
        }

        .guideline-text {
          color: #666;
        }

        .guideline-link {
          color: #4c6ef5;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .guideline-link:hover {
          color: #3b5bdb;
          text-decoration: underline;
        }

        .learn-more-link {
          display: inline-block;
          font-size: 14px;
          color: #4c6ef5;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .learn-more-link:hover {
          color: #3b5bdb;
          text-decoration: underline;
        }

        .empty-state {
          text-align: center;
          padding: 60px 20px;
          background-color: #fafafa;
          border-radius: 6px;
          border: 1px solid #e5e7eb;
        }

        .empty-text {
          font-size: 15px;
          color: #666;
          margin: 0;
        }

        @media (max-width: 768px) {
          .report-content {
            padding: 25px;
          }

          .report-header {
            margin-bottom: 30px;
          }

          .header-title {
            font-size: 20px;
          }

          .thanks-title {
            font-size: 16px;
          }

          .description-text,
          .guideline-item,
          .learn-more-link {
            font-size: 13px;
          }

          .empty-state {
            padding: 40px 15px;
          }
        }
      `}</style>
    </div>
  );
};

export default ReportHistoryPage;