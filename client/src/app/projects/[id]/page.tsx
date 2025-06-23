"use client";

import React, { useState } from "react";
import ProjectHeader from "@/app/projects/ProjectHeader";
import Board from "../BoardView";
import ListView from "../ListView";

type Props = {
  params: { id: string };
};

export enum ProjectTab {
  BOARD = "Board",
  LIST = "List",
  TIMELINE = "Timeline",
  TABLE = "Table",
}

const Projects = ({ params }: Props) => {
  const { id } = params;
  const [activeTab, setActiveTab] = useState(ProjectTab.BOARD);
  const [isModalNewTaskOpen, setIsModelNewTaskOpen] = useState(false);
  return (
    <div className="dark:bg-neutral-900">
      {/** Modal New Tasks */}

      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === ProjectTab.BOARD && (
        <Board id={id} setIsModalNewTaskOpen={setIsModelNewTaskOpen} />
      )}
      {activeTab === ProjectTab.LIST && (
        <ListView id={id} setIsModalNewTaskOpen={setIsModelNewTaskOpen} />
      )}
    </div>
  );
};

export default Projects;
