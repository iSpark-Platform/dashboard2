"use client";
import React, { useState, useEffect } from 'react';
import { 
  FiFolder, 
  FiStar, 
  FiClock, 
  FiSearch, 
  FiChevronDown,
  FiFileText,
  FiVideo,
  FiBook,
  FiLink,
  FiClipboard,
  FiSliders,
  FiEye,
  FiDownload,
  FiEdit,
  FiTrash,
  FiGrid,
  FiList,
  FiPlus,
  FiFolderPlus,
  FiFile,
  FiImage,
  FiMusic,
  FiArchive,
  FiCode,
  FiDatabase,
  FiChevronLeft,
  FiChevronRight,
  FiX
} from 'react-icons/fi';

export default function TeachingResources() {
  const [resources, setResources] = useState([
    {
      id: 1,
      name: "Smart Robotics  & Industry 4.0 Automation Internship",
      type: "PDF",
      size: "2.4 MB",
      dateAdded: "2023-11-10",
      folderId: 1,
      folderName: "Smart Robotics",
      isFavorite: false
    },
    {
      id: 2,
      name: "Applied AI & Machine Learning : From Models to Real-World Applications",
      type: "eBook",
      size: "8.7 MB",
      dateAdded: "2023-11-08",
      folderId: 1,
      folderName: "Applied AI & Machine Learning",
      isFavorite: true
    },
    {
      id: 3,
      name: "IoT & IIoT for Smart Systems and Industry 4.0",
      type: "Lesson Plan",
      size: "1.2 MB",
      dateAdded: "2023-11-05",
      folderId: 1,
      folderName: "IoT & IIoT ",
      isFavorite: false
    },
    {
      id: 4,
      name: "Cloud & Edge Computing for Connected Intelligence",
      type: "Slides",
      size: "5.3 MB",
      dateAdded: "2023-11-03",
      folderId: 1,
      folderName: "Cloud & Edge Computing",
      isFavorite: false
    },
  ]);

  const [folders, setFolders] = useState([
    { 
      id: 1, 
      name: "Smart Robotics ", 
      color: "#0e4db3ff",
      icon: <FiCode className="w-5 h-5" />
    },
    { 
      id: 2, 
      name: "Applied AI & Machine Learning", 
      color: "#069666ff",
      icon: <FiDatabase className="w-5 h-5" />
    },
    { 
      id: 3, 
      name: "IoT & IIoT", 
      color: "#3e0eafff",
      icon: <FiImage className="w-5 h-5" />
    },
    { 
      id: 4, 
      name: "Cloud & Edge Computing", 
      color: "#b91e1eff",
      icon: <FiSliders className="w-5 h-5" />
    },
    { 
      id: 5, 
      name: "3D Printing", 
      color: "#b37408ff",
      icon: <FiBook className="w-5 h-5" />
    }
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("Recently Added");
  const [currentFolder, setCurrentFolder] = useState(null);
  const [showFavorites, setShowFavorites] = useState(false);
  const [showRecent, setShowRecent] = useState(false);
  const [viewMode, setViewMode] = useState("grid"); // grid or list
  const [showFolderDropdown, setShowFolderDropdown] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newFolderName, setNewFolderName] = useState("");
  const [showCreateOptions, setShowCreateOptions] = useState(false);

  const sortOptions = ["Recently Added", "A-Z", "File Type"];

  // Get recently added resources (last 7 days)
  const getRecentResources = () => {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    
    return resources.filter(resource => {
      const resourceDate = new Date(resource.dateAdded);
      return resourceDate >= sevenDaysAgo;
    });
  };

  const getFilteredResources = () => {
    let filteredResources = resources;
    
    // Filter by folder if selected
    if (currentFolder) {
      filteredResources = filteredResources.filter(resource => resource.folderId === currentFolder.id);
    }
    
    // Filter by favorites if selected
    if (showFavorites) {
      filteredResources = filteredResources.filter(resource => resource.isFavorite);
    }
    
    // Filter by recent if selected
    if (showRecent) {
      filteredResources = getRecentResources();
    }
    
    // Filter by search query
    if (searchQuery) {
      filteredResources = filteredResources.filter(resource => 
        resource.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Sort resources
    return filteredResources.sort((a, b) => {
      if (sortBy === "Recently Added") {
        return new Date(b.dateAdded) - new Date(a.dateAdded);
      } else if (sortBy === "A-Z") {
        return a.name.localeCompare(b.name);
      } else if (sortBy === "File Type") {
        return a.type.localeCompare(b.type);
      }
      return 0;
    });
  };

  const handleToggleFavorite = (resourceId) => {
    setResources(resources.map(resource => 
      resource.id === resourceId 
        ? { ...resource, isFavorite: !resource.isFavorite }
        : resource
    ));
  };

  const handleResourceAction = (action, resource) => {
    if (action === "view") {
      alert(`Viewing ${resource.name}`);
    } else if (action === "download") {
      alert(`Downloading ${resource.name}`);
    } else if (action === "edit") {
      alert(`Opening editor for ${resource.name}`);
    } else if (action === "delete") {
      if (window.confirm(`Are you sure you want to delete ${resource.name}?`)) {
        setResources(resources.filter(r => r.id !== resource.id));
      }
    }
  };

  const handleOpenFolder = (folder) => {
    setCurrentFolder(folder);
    setShowFavorites(false);
    setShowRecent(false);
  };

  const handleBackToFolders = () => {
    setCurrentFolder(null);
  };

  const handleShowFavorites = () => {
    setShowFavorites(true);
    setShowRecent(false);
    setCurrentFolder(null);
  };

  const handleShowRecent = () => {
    setShowRecent(true);
    setShowFavorites(false);
    setCurrentFolder(null);
  };

  const handleCreateFolder = () => {
    setShowCreateOptions(true);
  };

  const handleCloseCreateOptions = () => {
    setShowCreateOptions(false);
  };

  const handleCreateFolderSubmit = (e) => {
    e.preventDefault();
    if (newFolderName) {
      const newId = folders.length + 1;
      const colors = ["#3B82F6", "#10B981", "#8B5CF6", "#EF4444", "#F59E0B"];
      const icons = [<FiCode className="w-5 h-5" />, <FiDatabase className="w-5 h-5" />, <FiImage className="w-5 h-5" />, <FiSliders className="w-5 h-5" />, <FiBook className="w-5 h-5" />];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      const randomIcon = icons[Math.floor(Math.random() * icons.length)];
      
      setFolders([...folders, {
        id: newId,
        name: newFolderName,
        color: randomColor,
        icon: randomIcon
      }]);
      
      setNewFolderName("");
      setShowCreateOptions(false);
    }
  };

const getFileIcon = (type) => {
  switch(type) {
    case "PDF":
      return <FiFileText size={32} stroke="#ef4444" />;

    case "eBook":
      return <FiBook size={32} stroke="#3b82f6" />;

    case "Lesson Plan":
      return <FiClipboard size={32} stroke="#22c55e" />;

    case "Slides":
      return <FiSliders size={32} stroke="#a855f7" />;

    case "Video":
      return <FiVideo size={32} stroke="#4f46e5" />;

    case "Template":
      return <FiFile size={32} stroke="#6b7280" />;

    case "Worksheet":
      return <FiClipboard size={32} stroke="#eab308" />;

    case "Reference Link":
      return <FiLink size={32} stroke="#06b6d4" />;

    case "Image":
      return <FiImage size={32} stroke="#ec4899" />;

    case "Audio":
      return <FiMusic size={32} stroke="#f97316" />;

    case "Archive":
      return <FiArchive size={32} stroke="#f59e0b" />;

    default:
      return <FiFile size={32} stroke="#6b7280" />;
  }
};



  const filteredResources = getFilteredResources();

  return (
    <div className="app-container">
      {/* Top Navigation */}
      <div className="top-nav">
        <div className="nav-header">
          <h1 className="page-title">Teaching Resources</h1>
          <button className="create-btn" onClick={handleCreateFolder}>
            <FiFolderPlus className="w-5 h-5" />
            Create New Folder
          </button>
        </div>
        
        <div className="nav-content">
          {/* Left Side - Folders */}
          <div className="nav-left">
            <div className="folders-section">
              <div className="folders-header">
                <h3 className="folders-title">FOLDERS</h3>
              </div>
              
              <div className="folders-list">
                {folders.map(folder => (
                  <button 
                    key={folder.id}
                    className={`folder-item ${currentFolder && currentFolder.id === folder.id ? 'active' : ''}`}
                    onClick={() => handleOpenFolder(folder)}
                  >
                    <div className="folder-icon-wrapper" style={{ backgroundColor: folder.color + '20' }}>
                      <span style={{ color: folder.color }}>{folder.icon}</span>
                    </div>
                    <div className="folder-info">
                      <span className="folder-name">{folder.name}</span>
                      <span className="folder-count">
                        {resources.filter(r => r.folderId === folder.id).length} items
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Side - Resources Section */}
          <div className="nav-right">
            {/* All Resources Section */}
            <div className="resources-section">
              <div className="section-header">
                <div className="section-nav">
                  <button 
                    className={`nav-item ${!currentFolder && !showFavorites && !showRecent ? 'active' : ''}`}
                    onClick={handleBackToFolders}
                  >
                    <FiFolder className="w-5 h-5" />
                    <span>All Resources</span>
                  </button>
                  
                  <button 
                    className={`nav-item ${showFavorites ? 'active' : ''}`}
                    onClick={handleShowFavorites}
                  >
                    <FiStar className="w-8 h-8" />
                    <span>Favorites</span>
                  </button>
                  
                  <button 
                    className={`nav-item ${showRecent ? 'active' : ''}`}
                    onClick={handleShowRecent}
                  >
                    <FiClock className="w-5 h-5" />
                    <span>Recent</span>
                  </button>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="main-content">
                <div className="content-header">
                  <h2 className="section-title">
                    {currentFolder ? currentFolder.name : showFavorites ? "Favorites" : showRecent ? "Recent" : "All Resources"}
                  </h2>
                </div>

                {/* Resources Grid */}
                <div className="content-body">
                  {filteredResources.length === 0 ? (
                    <div className="empty-state">
                      <div className="empty-icon">
                        <FiFolder className="w-8 h-8" />
                      </div>
                      <h3 className="empty-title">No resources found</h3>
                      <p className="empty-description">
                        {currentFolder 
                          ? `This folder is empty. Upload your first resource to get started.` 
                          : showFavorites 
                            ? "You haven't marked any resources as favorites yet."
                            : showRecent 
                              ? "No resources have been added in the last 7 days."
                              : "No resources match your search criteria."
                        }
                      </p>
                    </div>
                  ) : (
                    <div className={`resources-container ${viewMode}`}>
                      {filteredResources.map(resource => (
                        <div key={resource.id} className={`resource-card ${viewMode}`}>
                          {viewMode === 'grid' ? (
                            <>
                            <div className='card'>
                              <div className="card-icon-section">
                                {getFileIcon(resource.type)}
                                <button 
                                  className={`favorite-btn ${resource.isFavorite ? 'active' : ''}`}
                                  onClick={() => handleToggleFavorite(resource.id)}
                                >
                                  <FiStar className="w-8 h-8" fill={resource.isFavorite ? 'currentColor' : 'none'} />
                                </button>
                              </div>
                              </div>
                              
                              <div className="card-content">
                                <div className="card-header">
                                  <h3 className="resource-title">{resource.name}</h3>
                                </div>
                                
                                <div className="card-meta">
                                  <div className="meta-item">{resource.type}</div>
                                  <div className="meta-item">{resource.dateAdded}</div>
                                  <div className="meta-item">{resource.size}</div>
                                </div>
                                
                                <div className="card-actions">
                                  <button 
                                    className="action-btn"
                                    onClick={() => handleResourceAction("view", resource)}
                                    title="View"
                                  >
                                    <FiEye className="w-4 h-4" />
                                  </button>
                                  <button 
                                    className="action-btn"
                                    onClick={() => handleResourceAction("download", resource)}
                                    title="Download"
                                  >
                                    <FiDownload className="w-4 h-4" />
                                  </button>
                                  <button 
                                    className="action-btn"
                                    onClick={() => handleResourceAction("edit", resource)}
                                    title="Edit"
                                  >
                                    <FiEdit className="w-4 h-4" />
                                  </button>
                                  <button 
                                    className="action-btn delete"
                                    onClick={() => handleResourceAction("delete", resource)}
                                    title="Delete"
                                  >
                                    <FiTrash className="w-4 h-4" />
                                  </button>
                                </div>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="list-icon-section">
                                {getFileIcon(resource.type)}
                              </div>
                              
                              <div className="list-content">
                                <div className="list-header">
                                  <h3 className="resource-title">{resource.name}</h3>
                                  <button 
                                    className={`favorite-btn ${resource.isFavorite ? 'active' : ''}`}
                                    onClick={() => handleToggleFavorite(resource.id)}
                                  >
                                    <FiStar className="w-6 h-6" fill={resource.isFavorite ? 'currentColor' : 'none'} />
                                  </button>
                                </div>
                                
                                <div className="list-meta">
                                  <span className="meta-item">{resource.type}</span>
                                  <span className="meta-item">{resource.dateAdded}</span>
                                  <span className="meta-item">{resource.size}</span>
                                </div>
                              </div>
                              
                              <div className="list-actions">
                                <button 
                                  className="action-btn"
                                  onClick={() => handleResourceAction("view", resource)}
                                  title="View"
                                >
                                  <FiEye className="w-4 h-4" />
                                </button>
                                <button 
                                  className="action-btn"
                                  onClick={() => handleResourceAction("download", resource)}
                                  title="Download"
                                >
                                  <FiDownload className="w-4 h-4" />
                                </button>
                                <button 
                                  className="action-btn"
                                  onClick={() => handleResourceAction("edit", resource)}
                                  title="Edit"
                                >
                                  <FiEdit className="w-4 h-4" />
                                </button>
                                <button 
                                  className="action-btn delete"
                                  onClick={() => handleResourceAction("delete", resource)}
                                  title="Delete"
                                >
                                  <FiTrash className="w-4 h-4" />
                                </button>
                              </div>
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Create Folder Modal */}
      {showCreateOptions && (
        <div className="modal-overlay" onClick={handleCloseCreateOptions}>
          <div className="create-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">Create New Folder</h3>
              <button className="close-btn" onClick={handleCloseCreateOptions}>
                <FiX className="w-5 h-5" />
              </button>
            </div>
            
            <form className="create-form" onSubmit={handleCreateFolderSubmit}>
              <div className="form-group">
                <label className="form-label">Folder Name</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Enter folder name"
                  value={newFolderName}
                  onChange={(e) => setNewFolderName(e.target.value)}
                  required
                  autoFocus
                />
              </div>
              
              <div className="form-actions">
                <button type="button" className="form-btn cancel" onClick={handleCloseCreateOptions}>
                  Cancel
                </button>
                <button type="submit" className="form-btn submit">
                  <FiFolderPlus className="w-4 h-4" />
                  Create Folder
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style jsx>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          background-color: #f9fafb;
          color: #1a1a1a;
          line-height: 1.6;
        }

        .app-container {
          display: flex;
          flex-direction: column;
          height: 100vh;
          background-color: #f9fafb;
        }

        /* Top Navigation Styles */
        .top-nav {
          background-color: #ffffff;
          border-bottom: 1px solid #e5e7eb;
          padding: 24px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }

        .nav-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
        }

        .page-title {
          font-size: 28px;
          font-weight: 700;
          color: #1a1a1a;
        }

        .create-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          background-color: #3b82f6;
          color: #ffffff;
          border: none;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .create-btn:hover {
          background-color: #2563eb;
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(59, 130, 246, 0.15);
        }

/* Main layout wrapper */
.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 24px;
}

/* LEFT SIDEBAR */
.nav-left {
  width: 250px;
  border-right: 1px solid #cecdcdff; 
  padding-right: 16px;
  background: #ffffff;
  position: sticky;  
  top: 0;
  height: 100vh;     
  overflow-y: auto;   
}

/* RIGHT MAIN CONTENT */
.nav-right {
  flex: 1;
  padding-left: 10px;
}

/* Folder Section */
.folders-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* Section Header */
.folders-header {
  margin-bottom: 12px;
}

.folders-title {
  font-size: 14px;
  font-weight: 600;
  color: #1e1e1fff;
  letter-spacing: 0.05em;
}

/* Folder Items List */
.folders-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

/* Folder Item */
.folder-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 16px;
  border-radius: 8px;
  border: none;
  background: none;
  font-size: 15px;
  font-weight: 500;
  color: #424242ff;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
}

.folder-item:hover {
  background-color: #f0d4b7ff;
  color: #1640ff;
}

.folder-item.active {
  background-color: #eff6ff;
  color: #1640ff;
  font-weight: 600;
}

/* Folder Icon Wrapper */
.folder-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  flex-shrink: 0;
}

/* Folder Info */
.folder-info {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.folder-name {
  font-weight: 500;
}

.folder-count {
  font-size: 13px;
  color: #9ca3af;
}


        /* Resources Section Styles */
        .resources-section {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .section-header {
          background-color: #ffffff;
          border-bottom: 1px solid #e5e7eb;
          padding: 16px 24px;
        }

        .section-nav {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 20px;
          border-radius: 8px;
          border: none;
          background: none;
          font-size: 15px;
          font-weight: 500;
          color: #373738ff;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .nav-item:hover {
          background-color: #f3f4f6;
          color: #3b82f6;
        }

        .nav-item.active {
          background-color: #eff6ff;
          color: #3b82f6;
          font-weight: 600;
        }

        /* Main Content Styles */
        .main-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .content-header {
          padding: 16px 24px;
          border-bottom: 1px solid #e5e7eb;
        }

        .section-title {
          font-size: 20px;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 8px;
        }

        .content-body {
          flex: 1;
          padding: 16px;
          overflow-y: auto;
        }

        /* Grid View Styles */
        .resources-container.grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 16px;
        }

        /* List View Styles */
        .resources-container.list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .resource-card {
          background-color: #ffffff;
          border: 1px solid #bdcdeeff;
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.2s ease;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }

        .resource-card:hover {
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
          border-color: #d1d5db;
          transform: translateY(-4px);
        }

        .resource-card.grid {
          display: flex;
          flex-direction: column;
          height: 220px;
        }

        .resource-card.list {
          display: flex;
          align-items: center;
          padding: 12px;
          height: auto;
          min-height: 60px;
        }

.card-icon-section {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  background-color: #bfc2f0ff;      /* Default: Empty */
  border-radius: 8px;
  transition: 0.3s ease;
}

/* Blue background for odd cards: 1st, 3rd, 5th... */
.card:nth-child(odd) .card-icon-section {
  background-color: #1640ff20; 
}

/* Empty/white background for even cards: 2nd, 4th, 6th... */
.card:nth-child(even) .card-icon-section {
  background-color: #ffffff;
}


        .list-icon-section {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background-color: #f9fafb;
          border-radius: 8px;
          margin-right: 12px;
          flex-shrink: 0;
        }

        .card-content {
          padding: 12px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .list-content {
          flex: 1;
        }

        .card-header {
          margin-bottom: 8px;
        }

        .list-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 6px;
        }

        .resource-title {
          font-size: 14px;
          font-weight: 600;
          color: #1a1a1a;
          line-height: 1.3;
        }

        .favorite-btn {
          position: absolute;
          top: 8px;
          right: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: none;
          background-color: rgba(255, 255, 255, 0.9);
          color: #ec850fff;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .favorite-btn:hover {
          background-color: #ffffff;
          transform: scale(1.1);
        }

        .favorite-btn.active {
          background-color: #f59e0b;
          color: #ffffff;
        }

        .card-meta {
          display: flex;
          flex-direction: column;
          gap: 2px;
          font-size: 11px;
          color: #6b7280;
          margin-bottom: 8px;
        }

        .list-meta {
          display: flex;
          gap: 10px;
          font-size: 11px;
          color: #6b7280;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .card-actions {
          display: flex;
          gap: 6px;
          margin-top: auto;
        }

        .list-actions {
          display: flex;
          gap: 6px;
          margin-left: 12px;
        }

        .action-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6px;
          border: none;
          border-radius: 6px;
          background-color: #f3f4f6;
          color: #1853c9ff;
          cursor: pointer;
          transition: all 0.2s ease;
          flex: 1;
        }

        .action-btn:hover {
          background-color: #e5e7eb;
          color: #3b82f6;
        }

        .action-btn.delete:hover {
          background-color: #fef2f2;
          color: #ef4444;
        }

        /* Empty State */
        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 100px 20px;
          text-align: center;
        }

        .empty-icon {
          width: 80px;
          height: 80px;
          color: #9ca3af;
          margin-bottom: 24px;
        }

        .empty-title {
          font-size: 22px;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 12px;
        }

        .empty-description {
          font-size: 16px;
          color: #6b7280;
          max-width: 500px;
          line-height: 1.6;
        }

        /* Create Folder Modal */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
        }

        .create-modal {
          background-color: #ffffff;
          border-radius: 12px;
          max-width: 400px;
          width: 100%;
          position: relative;
          box-shadow: 0 20px 25px rgba(0, 0, 0, 0.15);
        }

        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px;
          border-bottom: 1px solid #e5e7eb;
        }

        .modal-title {
          font-size: 18px;
          font-weight: 600;
          color: #1a1a1a;
        }

        .close-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: none;
          background-color: #f3f4f6;
          color: #6b7280;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .close-btn:hover {
          background-color: #e5e7eb;
          color: #374151;
        }

        .create-form {
          padding: 24px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-label {
          display: block;
          font-size: 14px;
          font-weight: 600;
          color: #374151;
          margin-bottom: 8px;
        }

        .form-input {
          width: 100%;
          padding: 14px 16px;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          font-size: 15px;
          color: #374151;
          background-color: #ffffff;
          transition: all 0.2s ease;
        }

        .form-input:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .form-actions {
          display: flex;
          gap: 12px;
          margin-top: 24px;
        }

        .form-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 20px;
          border: none;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          flex: 1;
        }

        .form-btn.cancel {
          background-color: #f3f4f6;
          color: #6b7280;
        }

        .form-btn.cancel:hover {
          background-color: #e5e7eb;
          color: #374151;
        }

        .form-btn.submit {
          background-color: #3b82f6;
          color: #ffffff;
        }

        .form-btn.submit:hover {
          background-color: #2563eb;
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(59, 130, 246, 0.15);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .top-nav {
            padding: 16px;
          }

          .nav-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }

          .nav-content {
            flex-direction: column;
            gap: 20px;
          }

          .nav-left {
            width: 80%;
          }

          .content-body {
            padding: 12px;
          }

          .resources-container.grid {
            grid-template-columns: 1fr;
          }

          .resource-card.list {
            flex-direction: column;
            align-items: flex-start;
            padding: 12px;
          }

          .list-icon-section {
            margin-right: 0;
            margin-bottom: 8px;
          }

          .list-actions {
            margin-left: 0;
            margin-top: 8px;
          }
        }
      `}</style>
    </div>
  );
}