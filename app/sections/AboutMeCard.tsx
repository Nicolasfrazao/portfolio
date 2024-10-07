import Image from "next/image";

import ProfilePic from "@/public/pic (1).jpg";

const AboutMeCard = () => {
  return (
    <div className="backdrop-blur-lg dark:bg-gradient-to-r from-slate-900/20 to-gray-700/20 bg-opacity-75  rounded-2xl min-h-96 p-6 mt-10 flex items-start shadow-2xl light:shadow-slate-800 dark:shadow-gray-600 shadow00">
      <div className="mr-6 flex-shrink-0">
        <Image
          alt="Profile Pic"
          className="rounded-xl shadow-lg dark:shadow-sky-900 shadow-slate-400"
          height={150}
          src={ProfilePic}
          width={150}
        />
      </div>

      {/* About Me Section */}
      <div>
        <h1 className="text-3xl font-bold mb-4">About Me:</h1>
        <p className="mb-4">
          &nbsp;I am a dynamic and results-driven Full Stack Developer and
          Entrepreneur with a proven track record of developing innovative
          solutions that drive growth and transform industries. With a deep
          foundation in technologies like React, Node.js, and cloud computing, I
          specialize in creating high-performance applications that scale
          seamlessly. My expertise spans across software engineering, cloud
          architecture, and cutting-edge AI, allowing me to tackle complex
          challenges and deliver exceptional user experiences.
        </p>
        <p className="mb-4">
          &nbsp;Beyond my technical skills, I bring a strategic business mindset that
          fuels my passion for leveraging technology to solve real-world
          problems. I thrive in fast-paced, collaborative environments where I
          can push the limits of what&apos;s possible and inspire others to reach new
          heights. With over 150 certifications across diverse fields and a
          relentless commitment to excellence, I am not just keeping pace with
          the latest advancements—I&apos;m setting the standard for innovation in the
          tech industry.
        </p>
        <p>
          &nbsp;In addition to my technical accomplishments, I&apos;m an avid athlete,
          which has ingrained in me a strong work ethic, discipline, and an
          unbreakable drive to excel. Whether I'm coding, leading a team, or
          exploring new ventures, I approach every endeavor with a commitment to
          surpassing expectations and making a meaningful impact.
        </p>
      </div>
    </div>
  );
};

export default AboutMeCard;
