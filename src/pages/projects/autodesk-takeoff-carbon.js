import React from "react";
import ProjectLayout from "../../components/ProjectLayout";
import ProjectDetails from "../../components/ProjectDetails";
import TechnologyTags from "../../components/TechnologyTags";
import ProjectChallenges from "../../components/ProjectChallenges";
import ProjectResults from "../../components/ProjectResults";
import ProjectLinks from "../../components/ProjectLinks";
import { useProjectData } from "../../hooks/useProjectData";

export default function AutodeskTakeoffCarbonPage() {
  const projectData = useProjectData("autodesk-takeoff-carbon");

  if (!projectData) {
    return <div>Project not found</div>;
  }

  const { detailedData } = projectData;

  return (
    <ProjectLayout project={projectData}>
      <ProjectDetails {...detailedData.projectDetails} />
      <ProjectChallenges {...detailedData.challenges} />
      <TechnologyTags technologies={projectData.technologies} />
      <ProjectResults {...detailedData.results} />
      <ProjectLinks links={projectData.links} />
    </ProjectLayout>
  );
} 