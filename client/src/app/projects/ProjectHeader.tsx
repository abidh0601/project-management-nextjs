import Header from "@/components/Header";
import {
  Clock,
  Filter,
  Grid3x3,
  List,
  PlusSquare,
  Share2,
  Table,
} from "lucide-react";
import React, { useState } from "react";
import ModalNewProject from "./ModalNewProject";

type Props = {
  activeTab: string;
  setActiveTab: (tabName: string) => void;
};

const ProjectHeader = ({ activeTab, setActiveTab }: Props) => {
  const [isModalNewProjectOpen, setIsNewModalProjectOpen] = useState(false);
  return (
    <div className="px-4 xl:px-6">
      <ModalNewProject
        isOpen={isModalNewProjectOpen}
        onClose={() => setIsNewModalProjectOpen(false)}
      />

      <div className="pb-6 pt-6 lg:pb-4 lg:pt-8">
        <Header
          name="Product Design Developmemt"
          buttonComponent={
            <button
              className="items-cneter flex rounded-md bg-blue-primary px-3 py-2 text-white hover:bg-blue-600"
              onClick={() => setIsNewModalProjectOpen(true)}
            >
              <PlusSquare className="mr-2 h-5 w-5" /> New Board
            </button>
          }
        />
      </div>

      {/* TABS */}
      <div className="flex flex-wrap-reverse gap-2 border-y border-gray-200 pb-[8px] pt-2 dark:border-stroke-dark md:items-center">
        <div className="flex flex-1 items-center gap-2 md:gap-4">
          <TabButton
            name={"BOARD"}
            icon={<Grid3x3 className="h-5 w-5" />}
            setActiveTab={setActiveTab}
            activeTab={activeTab}
          />
          <TabButton
            name={"LIST"}
            icon={<List className="h-5 w-5" />}
            setActiveTab={setActiveTab}
            activeTab={activeTab}
          />
          <TabButton
            name={"TIMELINE"}
            icon={<Clock className="h-5 w-5" />}
            setActiveTab={setActiveTab}
            activeTab={activeTab}
          />
          <TabButton
            name={"TABLE"}
            icon={<Table className="h-5 w-5" />}
            setActiveTab={setActiveTab}
            activeTab={activeTab}
          />
        </div>

        <div className="item-center flex gap-2">
          <button className="text-gray-500 hover:text-gray-600 dark:text-neutral-500 dark:hover:text-gray-300">
            <Filter className="h-5 w-5" />
          </button>
          <button className="text-gray-500 hover:text-gray-600 dark:text-neutral-500 dark:hover:text-gray-300">
            <Share2 className="h-5 w-5" />
          </button>
          <div className="relative">
            <input
              type="text"
              placeholder="Search Task"
              className="dark:bg-dark-seconday rounded-md border py-1 pl-10 pr-4 focus:outline-none dark:border-dark-secondary dark:text-white"
            />
            <Grid3x3 className="absolute left-3 top-2 h-4 w-4 text-gray-400 dark:text-neutral-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

type TabButtonProps = {
  name: string;
  icon: React.ReactNode;
  setActiveTab: (tab: string) => void;
  activeTab: string;
};

const TabButton = ({ name, icon, setActiveTab, activeTab }: TabButtonProps) => {
  const isActive = activeTab === name;

  return (
    <button
      className={`after: w-ful relative flex items-center gap-2 px-1 py-2 after:absolute after:-bottom-[9px] after:left-0 after:h-[1px] hover:text-blue-600 dark:hover:text-white sm:px-2 lg:px-4 ${isActive ? "text-blue-600 after:bg-blue-600 dark:text-white" : "text-gray-500"}`}
      onClick={() => setActiveTab(name)}
    >
      {icon}
      {name}
    </button>
  );
};

export default ProjectHeader;
