const social_share = [
  {
    link: "http://facebook.com",
    icon: "icon-facebook",
    color: "color-fb",
  },
  {
    link: "http://twitter.com",
    icon: "icon-twitter",
    color: "color-twitter",
  },
  {
    link: "https://www.linkedin.com/",
    icon: "icon-linkedin2",
    color: "color-linkd",
  },
  {
    link: "https://www.youtube.com/",
    icon: "icon-youtube",
    color: "color-yt",
  },
  {
    link: "https://www.instagram.com/",
    icon: "icon-instagram",
    color: "color-ig",
  },
];

import React from "react";

const FooterSocial = () => {
  return (
    <>
      {social_share.map((social, i) => (
        <li key={i}>
          <a
            href={social.link}
            target="_blank"
            className={`${social.color}`}
          >
            <i className={social.icon}></i>
          </a>
        </li>
      ))}
    </>
  );
};

export default FooterSocial;
