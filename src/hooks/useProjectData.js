import { useStaticQuery, graphql } from 'gatsby';

export const useProjectData = (projectSlug) => {
  const data = useStaticQuery(graphql`
    query AllProjectsDataQuery {
      allProjectsJson {
        sections: nodes {
          projects {
            category
            description
            image {
              alt
              linkTo
              src {
                childImageSharp {
                  gatsbyImageData(width: 400)
                }
              }
              objectFit
            }
            links {
              type
              url
            }
            tags
            title
            visible
            detailedData {
              projectDetails {
                title
                description
                features {
                  title
                  description
                }
              }
              challenges {
                description
                challenges {
                  title
                  description
                }
              }
              results {
                description
                results {
                  title
                  description
                }
                conclusion
              }
            }
          }
        }
      }
    }
  `);

  const allProjects = data.allProjectsJson.sections[0].projects;

  // Find project by matching the linkTo path with the projectSlug
  const project = allProjects.find(project => {
    if (project.image && project.image.linkTo) {
      const path = project.image.linkTo;
      return path === `/projects/${projectSlug}` || path.endsWith(projectSlug);
    }
    return false;
  });

  if (!project) {
    console.warn(`Project with slug "${projectSlug}" not found`);
    return null;
  }

  return {
    ...project,
    technologies: project.tags, // Map tags to technologies for compatibility
    detailedData: project.detailedData || {}
  };
}; 