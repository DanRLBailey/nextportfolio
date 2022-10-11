import Head from "next/head";
import Image from "next/image";
import HeaderButton from "../src/components/headerButton";
import Button from "../src/components/button";
import styles from "../src/styles/home.module.scss";
import Tile from "../src/components/tile";
import Event from "../src/components/event";
import Project from "../src/components/project";
import Projects from "../src/projects.json";
import Timeline from "../src/timeline.json";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Daniel Bailey</title>
        <meta name="description" content="Daniel Bailey" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.section} id="home">
        <div className={styles.main}>
          <h1 className={styles.title}>Daniel Bailey</h1>
          <h2>Software & Game Developer</h2>
          <div className={styles.links}>
            <HeaderButton
              link="https://drive.google.com/file/d/1wyr1jWnKn6JS-PcBNFmyT4YtxmjvyAP_/view?usp=sharing"
              text="CV"
            />
            <HeaderButton link="https://github.com/DanRLBailey" text="GitHub" />
            <HeaderButton
              link="https://www.linkedin.com/in/daniel-bailey-289979162/"
              text="LinkedIn"
            />
          </div>
          <Button id="projects" link="#projects" text="View Projects" />
        </div>
      </div>

      <div className={styles.section} id="skills">
        <div className={styles.tiles}>
          <Tile header="Software">
            <ul>
              <li>C#</li>
              <li>.Net Core, Framework</li>
              <li>WebAPI</li>
              <li>SQL</li>
              <li>TDD, BDD</li>
              <li>MVC</li>
            </ul>
          </Tile>
          <Tile header="Web">
            <ul>
              <li>HTML</li>
              <li>CSS, SASS</li>
              <li>JavaScript, TypeScript</li>
              <li>React, Vue</li>
              <li>REST</li>
            </ul>
          </Tile>
          <Tile header="Game">
            <ul>
              <li>C++</li>
              <li>Unreal Engine 4</li>
              <li>Unity 2D, 3D</li>
              <li>PC, Console, Mobile</li>
              <li>OpenGL</li>
            </ul>
          </Tile>
        </div>
      </div>

      <div className={styles.section} id="timeline">
        <div className={styles.timeline}>
          {Timeline.map((timelineEvent, index) => (
            <Event
              location={timelineEvent.Location}
              title={timelineEvent.Title}
              subtitle={timelineEvent.Subtitle}
              date={timelineEvent.Date}
              key={index}
            ></Event>
          ))}
        </div>
      </div>

      <div className={styles.section} id="projects">
        <div className={styles.projects}>
          {Projects.map((project, index) => (
            <Project
              key={index}
              name={project.Name}
              description={project.Description}
              image={project.Image}
              staticImage={project.StaticImage}
              link={project.Link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
