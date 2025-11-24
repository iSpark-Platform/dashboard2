"use client";
import React, { useState } from 'react';

const SubscriptionSection = () => {
  const [subscriptionData] = useState({
    plan: 'Premium Teacher Plan',
    status: 'Active',
    renewalDate: 'December 31, 2023',
    features: [
      { name: 'Cloud Storage', limit: '50 GB', used: '32 GB', percentage: 64 },
      { name: 'Live Class Hours', limit: '100 hrs/month', used: '45 hrs', percentage: 45 },
      { name: 'AI Tool Access', limit: 'Unlimited', used: 'Active', percentage: 100 },
      { name: 'Student Accounts', limit: '200', used: '182', percentage: 91 }
    ],
    availableFeatures: [
      'Advanced analytics dashboard',
      'Custom course branding',
      'Priority support',
      'Integration with LMS systems',
      'Advanced assessment tools'
    ]
  });

  return (
    <div className="subscription-container">
      <div className="subscription-header">
        <h2 className="subscription-title">Subscription Details</h2>
        <div className="plan-badge">
          {subscriptionData.plan}
        </div>
      </div>

      <div className="subscription-card">
        <div className="card-section">
          <div className="status-row">
            <div className="status-item">
              <span className="status-label">Status</span>
              <span className="status-value active">{subscriptionData.status}</span>
            </div>
            <div className="status-item">
              <span className="status-label">Renewal Date</span>
              <span className="status-value">{subscriptionData.renewalDate}</span>
            </div>
          </div>
        </div>

        <div className="card-section">
          <h3 className="section-title">Resource Usage</h3>
          <div className="usage-grid">
            {subscriptionData.features.map((feature, index) => (
              <div key={index} className="usage-item">
                <div className="usage-header">
                  <span className="usage-name">{feature.name}</span>
                  <span className="usage-amount">{feature.used} / {feature.limit}</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${feature.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card-section">
          <h3 className="section-title">Available Features</h3>
          <div className="features-list">
            {subscriptionData.availableFeatures.map((feature, index) => (
              <div key={index} className="feature-item">
                <div className="feature-icon">✓</div>
                <span className="feature-text">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="info-banner">
          <div className="info-icon">ℹ</div>
          <div className="info-text">
            This subscription is managed by your institute. Contact your administrator for any changes or upgrades.
          </div>
        </div>
      </div>

      <style jsx>{`
        .subscription-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }

        .subscription-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        .subscription-title {
          font-size: 24px;
          font-weight: 600;
          color: #333;
          margin: 0;
        }

        .plan-badge {
          background-color: #1640ff;
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-weight: 500;
          font-size: 14px;
        }

        .subscription-card {
          background-color: white;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          overflow: hidden;
        }

        .card-section {
          padding: 24px;
          border-bottom: 1px solid #f0f0f0;
        }

        .card-section:last-child {
          border-bottom: none;
        }

        .status-row {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
        }

        .status-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .status-label {
          font-size: 14px;
          color: #666;
        }

        .status-value {
          font-size: 16px;
          font-weight: 600;
          color: #333;
        }

        .status-value.active {
          color: #28a745;
        }

        .section-title {
          font-size: 18px;
          font-weight: 600;
          color: #333;
          margin: 0 0 16px 0;
        }

        .usage-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 20px;
        }

        .usage-item {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .usage-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .usage-name {
          font-size: 14px;
          font-weight: 500;
          color: #333;
        }

        .usage-amount {
          font-size: 13px;
          color: #666;
        }

        .progress-bar {
          height: 8px;
          background-color: #f0f0f0;
          border-radius: 4px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background-color: #1640ff;
          border-radius: 4px;
        }

        .features-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 12px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .feature-icon {
          width: 20px;
          height: 20px;
          background-color: #1640ff;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: bold;
        }

        .feature-text {
          font-size: 14px;
          color: #333;
        }

        .info-banner {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 16px;
          background-color: rgba(22, 64, 255, 0.1);
          border-radius: 8px;
        }

        .info-icon {
          width: 24px;
          height: 24px;
          background-color: #1640ff;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: bold;
          flex-shrink: 0;
        }

        .info-text {
          font-size: 14px;
          color: #333;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .subscription-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }

          .usage-grid,
          .features-list {
            grid-template-columns: 1fr;
          }

          .status-row {
            flex-direction: column;
            gap: 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default SubscriptionSection;