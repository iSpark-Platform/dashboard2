"use client";
import React, { useState, useEffect } from "react";

const gallery_items = [
  { img: "/assets/images/gallery/gallery-01.jpg", category: "Education" },
  { img: "/assets/images/gallery/gallery-02.jpg", category: "Marketing" },
  { img: "/assets/images/gallery/gallery-03.jpg", category: "Education" },
  { img: "/assets/images/gallery/gallery-04.jpg", category: "Marketing" },
  { img: "/assets/images/gallery/gallery-05.jpg", category: "Education" },
  { img: "/assets/images/gallery/gallery-06.jpg", category: "Development" },
  { img: "/assets/images/gallery/gallery-07.jpg", category: "Development" },
  { img: "/assets/images/gallery/gallery-08.jpg", category: "Education" },
  { img: "/assets/images/gallery/gallery-09.jpg", category: "Development" },
];

const uniq_categories = ["All", ...new Set(gallery_items.map((item) => item.category))];

const GalleryArea = () => {
  const [category, setCategory] = useState("All");
  const [filtered, setFiltered] = useState(gallery_items);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (category === "All") setFiltered(gallery_items);
    else setFiltered(gallery_items.filter((item) => item.category === category));
  }, [category]);

  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  return (
    <>
      <style jsx>{`
        .gallery-container {
          padding: 60px 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .filter-nav {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0;
          margin-bottom: 50px;
          border-bottom: 2px solid #e5e7eb;
          padding-bottom: 0;
        }

        .filter-btn {
          position: relative;
          padding: 16px 32px;
          font-size: 16px;
          font-weight: 600;
          border: none;
          background: transparent;
          color: #6b7280;
          cursor: pointer;
          transition: all 0.3s ease;
          letter-spacing: 0.3px;
        }

        .filter-btn::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 3px;
          background: linear-gradient(135deg, #272586ff 0%, #20348bff 100%);
          transition: width 0.3s ease;
        }

        .filter-btn:hover {
          color: #667eea;
        }

        .filter-btn.active {
          color: #667eea;
        }

        .filter-btn.active::after {
          width: 100%;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 30px;
        }

        .gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: 12px;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          background: #f5f5f5;
        }

        .gallery-item:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
        }

        .gallery-item img {
          width: 100%;
          height: 280px;
          object-fit: cover;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          display: block;
        }

        .gallery-item:hover img {
          transform: scale(1.08);
        }

        .gallery-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.85) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }

        .zoom-icon {
          width: 60px;
          height: 60px;
          background: rgba(255, 255, 255, 0.25);
          border: 2px solid rgba(255, 255, 255, 0.6);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          color: white;
          backdrop-filter: blur(10px);
          transform: scale(0.8);
          transition: all 0.3s ease;
        }

        .gallery-item:hover .zoom-icon {
          transform: scale(1);
        }

        /* Lightbox Styles */
        .lightbox {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.96);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .lightbox-close {
          position: absolute;
          top: 30px;
          right: 30px;
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          color: white;
          font-size: 24px;
          font-weight: 300;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          z-index: 10001;
        }

        .lightbox-close:hover {
          background: rgba(255, 255, 255, 0.25);
          border-color: rgba(255, 255, 255, 0.6);
          transform: rotate(90deg);
        }

        .lightbox-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 55px;
          height: 55px;
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.25);
          border-radius: 50%;
          color: white;
          font-size: 28px;
          font-weight: 300;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          z-index: 10001;
        }

        .lightbox-nav:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.5);
          transform: translateY(-50%) scale(1.1);
        }

        .lightbox-nav.prev {
          left: 40px;
        }

        .lightbox-nav.next {
          right: 40px;
        }

        .lightbox-image {
          max-width: 90%;
          max-height: 85vh;
          object-fit: contain;
          border-radius: 8px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
          animation: imageZoom 0.3s ease;
        }

        @keyframes imageZoom {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .lightbox-counter {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 12px 24px;
          border-radius: 25px;
          color: white;
          font-size: 15px;
          font-weight: 500;
          letter-spacing: 1px;
          z-index: 10001;
        }

        @media (max-width: 768px) {
          .gallery-container {
            padding: 60px 15px;
          }

          .filter-nav {
            flex-wrap: wrap;
            gap: 0;
          }

          .filter-btn {
            padding: 14px 20px;
            font-size: 14px;
          }

          .gallery-grid {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 20px;
          }

          .gallery-item img {
            height: 220px;
          }

          .lightbox-nav {
            width: 45px;
            height: 45px;
            font-size: 24px;
          }

          .lightbox-nav.prev {
            left: 15px;
          }

          .lightbox-nav.next {
            right: 15px;
          }

          .lightbox-close {
            top: 20px;
            right: 20px;
            width: 45px;
            height: 45px;
          }

          .lightbox-image {
            max-width: 95%;
            max-height: 80vh;
          }

          .lightbox-counter {
            bottom: 25px;
            font-size: 14px;
            padding: 10px 20px;
          }
        }
      `}</style>

      <div className="gallery-container">
        <div className="filter-nav">
          {uniq_categories.map((c, i) => (
            <button
              key={i}
              onClick={() => setCategory(c)}
              className={`filter-btn ${category === c ? "active" : ""}`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filtered.map((item, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => setSelectedImage(index)}
            >
              <img src={item.img} alt={item.category} />
              <div className="gallery-overlay">
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <button
            className="lightbox-close"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>

          <button
            className="lightbox-nav prev"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage((selectedImage - 1 + filtered.length) % filtered.length);
            }}
          >
            ‹
          </button>

          <img
            src={filtered[selectedImage].img}
            alt="Gallery"
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="lightbox-nav next"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage((selectedImage + 1) % filtered.length);
            }}
          >
            ›
          </button>

          <div className="lightbox-counter">
            {selectedImage + 1} / {filtered.length}
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryArea;