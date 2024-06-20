export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-4xl text-center justify-center p-3">
        <h1 className="text-4xl font-serif">About Me:</h1>
        <p className=" text-base">
          I am a dedicated Full Stack Engineer with a strong passion for
          problem-solving and developing innovative solutions. With expertise in
          the MERN stack (MongoDB, Express.js, React, Node.js) and Next.js, I
          bring a robust skill set to design, develop, and maintain scalable web
          applications. I am committed to continuous learning and skill
          enhancement, always striving to stay updated with the latest industry
          trends and best practices.
        </p>
        <p className=" text-base mt-4">
          My goal is to leverage my technical proficiency and creativity to
          deliver high-quality, user-centric products. I am enthusiastic about
          new technologies and enjoy exploring and implementing cutting-edge
          solutions.
        </p>
        <p className=" text-base mt-4">
          Beyond my professional interests, I am passionate about fitness,
          sports, traveling, and self-improvement. I thrive on pushing my limits
          and embracing new challenges, both in my career and personal life.
        </p>
      </div>

      <div className="flex gap-3">
        <h2>Projects: </h2>
      </div>
      <div>
        <h2>Skills:</h2>
      </div>

      <div className="mt-8" />
    </section>
  );
}
