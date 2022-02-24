import {React} from "react";
import "aos/dist/aos.css";
import ExperienceData from "../data/ExperienceData";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWorkOutline} from "react-icons/md";

function Experience() {

  return (
    <div className="max-w-full mx-auto py-12 bg-gray-100">
      <p className="text-2xl text-black md:text-4xl text-center font-serif">
        My Work Experience
      </p>
      <VerticalTimeline>
        {ExperienceData.map(function (role, i) {
          return (
            <VerticalTimelineElement
              key={i}
              className="vertical-timeline-element--work"
              date={role.date}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<MdWorkOutline />}
            >
              <h3 className="vertical-timeline-element-title">
                {role.position}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {role.place}
              </h4>
              <p>{role.description}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
