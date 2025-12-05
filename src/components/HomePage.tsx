import React from "react";
import { AboutIT } from "./AboutIT";
import { Contact } from "./Contact";
import { Hero } from "./Hero";
import { JobPositions } from "./JobPositions";
import { LearningRoadmap } from "./LearningRoadmap";
import { SalaryInfo } from "./SalaryInfo";
import { Specializations } from "./Specializations";
import { Trends } from "./Trends";

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
