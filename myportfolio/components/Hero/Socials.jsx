'use client';
import {
  RiLinkedinFill,
  RiGithubFill,
  
} from 'react-icons/ri';

import { SiLeetcode } from "react-icons/si";

import Link from 'next/link';

const icons = [
  {
    path: 'https://www.linkedin.com/in/khirul-islam-badol-38687ab8/',
    name: <RiLinkedinFill />
  },
  {
    path: 'https://github.com/BadolJnU',
    name: <RiGithubFill />
  },
  {
    path: 'https://leetcode.com/badolcsejnu/',
    name: <SiLeetcode />
  },
]

const socials = ({containerStyles, iconsStyles}) => {
  return (
    <div className={`${containerStyles}`}>
      {
        icons.map((icon, index) => {
          return (
            <Link href={icon.path} key={index} target="_blank">
              <div className={`${iconsStyles}`}>
                {icon.name}
              </div>
            </Link>
          )
        })
      }
    </div>
  )
}

export default socials