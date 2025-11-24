import React, { useState, useRef, useEffect } from 'react';
import { FiUser } from 'react-icons/fi';

const ProfileDropdown = () => {
    const [showUserMenu, setShowUserMenu] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current && 
                !dropdownRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)
            ) {
                setShowUserMenu(false);
                setIsClicked(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleClick = () => {
        setIsClicked(!isClicked);
        setShowUserMenu(!showUserMenu);
    };

    const handleMouseEnter = () => {
        if (!isClicked) {
            setShowUserMenu(true);
        }
    };

    const handleMouseLeave = () => {
        if (!isClicked) {
            setShowUserMenu(false);
        }
    };

    return (
        <div 
            className="user-menu-wrapper"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button 
                ref={buttonRef}
                className="user-button"
                onClick={handleClick}
            >
                <div className="user-avatar">
                    <FiUser className="icon" />
                </div>
            </button>

            {showUserMenu && (
                <div ref={dropdownRef} className="user-dropdown">
                    <div className="user-dropdown-body">
                        <button className="menu-item" onClick={() => {
                            window.location.href = '/login';
                        }}>
                            <i className="icon-56"></i>
                            <span>Login</span>
                        </button>
                        <button className="menu-item" onClick={() => {
                            window.location.href = '/contact-us';
                        }}>
                            <i className="icon-64"></i>
                            <span>Join as Instructor</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfileDropdown;