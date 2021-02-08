import React from "react"

import { ReactComponent as IcFacebook } from "../../../images/svg/facebook.svg"
import { ReactComponent as IcInstagram } from "../../../images/svg/instagram.svg"
import { ReactComponent as IcLinkedin } from "../../../images/svg/linkedin.svg"
import { ReactComponent as IcWeb } from "../../../images/svg/web.svg"
// import { ReactComponent as IcYoutube } from "../../../images/svg/youtube.svg"

import "./Social.scss"

const socialMedia = [
  {
    icon: <IcFacebook />,
    link: "https://www.facebook.com/gvazcocronista/",
  },
  {
    icon: <IcInstagram />,
    link: "https://www.instagram.com/g_vazco/",
  },
  {
    icon: <IcLinkedin />,
    link: "https://www.linkedin.com/in/gustavo-vazco-cronista/",
  },
  {
    icon: <IcWeb />,
    link: "https://blog.allsdigital.net",
  },
]

export default function Social() {
  return (
    <div className="social">
      {socialMedia.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
        >
          {social.icon}
        </a>
      ))}
    </div>
  )
}
