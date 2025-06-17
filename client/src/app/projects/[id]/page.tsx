"use client";

import React, { useState } from "react";
import ProjectHeader from "@/app/projects/ProjectHeader";

type Props = {
  params: { id: string };
};

const Projects = ({ params }: Props) => {
  const { id } = params;
  const [activeTab, setActiveTab] = useState("Board");
  const [isModalNewTaskOpen, setIsModelNewTaskOpen] = useState(false);
  return (
    <div>
      {/** Modal New Tasks */}

      {/* <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} /> */}
      {/* {activeTab === "Board" ** } */}
    </div>
  );
};

export default Projects;
