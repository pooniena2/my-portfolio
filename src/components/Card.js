import profile from "../image/profile.jpg";
import Icon from "./Icon";
import Typewriter from "typewriter-effect";
import  React  from "react";


function Card() {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5 hover:scale-105">
        <div className="">
          <img
            className="w-32 mx-auto bg-white rounded-full drop-shadow-sm"
            src={profile}
            alt="Profile"
          />
        </div>
        <div className="text-center mt-5">
          <p className="text-xs text-gray-900 sm:text-2xl">Anh Tuan Pham</p>
          <div className="text-xs text-gray-600 sm:text-base pt-2 pb-4 px-5 w-margin inline-block border-b-2">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("CS @ UofC '23")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Software Developer")
                  .start();
              }}
            />
          </div>
          <Icon />
        </div>
      </div>
    </div>
  );
}
export default Card;