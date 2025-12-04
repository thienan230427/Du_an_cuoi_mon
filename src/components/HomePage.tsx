import { Hero } from "./Hero";
import { AboutIT } from "./AboutIT";
import { Specializations } from "./Specializations";
import { LearningRoadmap } from "./LearningRoadmap";
import { JobPositions } from "./JobPositions";
import { SalaryInfo } from "./SalaryInfo";
import { Trends } from "./Trends";
import { Contact } from "./Contact";

export function HomePage() {
  return (
    <>
      <Hero />
      <AboutIT />
      <Specializations />
      <LearningRoadmap />
      <JobPositions />
      <SalaryInfo />
      <Trends />
      <Contact />
    </>
  );
}
