import React from 'react';
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { SiDevpost } from "react-icons/si";
import SocialData from "../data/SocialData";

function Icon() {

    const GITHUB = SocialData.GITHUB;
    const LINKEDIN = SocialData.LINKEDIN;
    const DEVPOST = SocialData.DEVPOST;
    return (
      <div className="flex align-center justify-center mt-4">
        <a
          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
          href={GITHUB}
        >
          <AiFillGithub />
        </a>
        <a
          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-800 hover:bg-blue-800 rounded-full hover:text-white transition-colors duration-300"
          href={LINKEDIN}
        >
          <AiFillLinkedin />
        </a>
        <a
          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-green-900 hover:bg-green-900 rounded-full hover:text-white transition-colors duration-300"
          href={DEVPOST}
        >
          <SiDevpost />
        </a>
      </div>
    );
}

export default Icon;
