"use client";

import React, { useState } from "react";
import ProjectHeader from "@/app/projects/ProjectHeader";
import Board from "../BoardView";

type Props = {
  params: { id: string };
};

const Projects = ({ params }: Props) => {
  const { id } = params;
  const [activeTab, setActiveTab] = useState("Board");
  const [isModalNewTaskOpen, setIsModelNewTaskOpen] = useState(false);
  return (
    <div className="dark:bg-neutral-900">
      {/** Modal New Tasks */}

      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "Board" && (
        <Board id={id} setIsModalNewTaskOpen={setIsModelNewTaskOpen} />
      )}
    </div>
  );
};

export default Projects;
