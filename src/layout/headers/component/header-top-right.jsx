import Link from 'next/link';
import React from 'react';

const social_share = [
    { link: 'https://www.facebook.com/learningispark', target: '_blank', icon: 'icon-facebook' },
    { link: 'https://www.youtube.com/@isparklearningsolutions1486', target: '_blank', icon: 'icon-youtube' },
    { link: 'https://www.linkedin.com/company/ispark-learning-solutions', target: '_blank', icon: 'icon-linkedin2' },
    { link: 'https://www.instagram.com/ispark_learning_solutions/#', target: '_blank', icon: 'icon-instagram' }
]

const HeaderTopRight = () => {
    return (
        <ul className="header-info">
            <li><Link href="/login">Login</Link></li>
            <li><Link href="/register">Register</Link></li>
            <li><a href="tel:+91 91761 32300"><i className="icon-phone"></i>Call: +91 91761 32300</a></li>
            <li><a href="mailto:info@isparkskills.ai" rel="noreferrer" target="_blank"><i className="icon-envelope"></i>Email: info@isparkskills.ai</a></li>
            <li className="social-icon">
                {social_share.map((social, i) => (
                    <a key={i} href={social.link} target={social.target ? social.target : ''} className={`${social.color}`}>
                        <i className={social.icon}></i>
                    </a>
                ))}
            </li>
        </ul>
    )
}

export default HeaderTopRight;