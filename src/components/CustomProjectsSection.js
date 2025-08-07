import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function CustomProjectsSection({ sectionId, heading }) {
  const data = useStaticQuery(graphql`
    query CustomProjectsSectionQuery {
      allProjectsJson {
        sections: nodes {
          button {
            label
            url
            visible
          }
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

  const projectsData = data.allProjectsJson.sections[0];
  const projects = projectsData.projects.filter(project => project.visible);

  return (
    <section id={sectionId} style={{
      width: '100%',
      height: 'auto',
      background: 'var(--background-color)',
      scrollMarginTop: '60px'
    }}>
      <div style={{
        width: '100%',
        height: '100%',
        maxWidth: 'var(--page-width)',
        margin: '0 auto 8rem auto',
        padding: 'var(--page-padding)',
      }}>
        {heading && (
          <h3 style={{
            margin: '0 0 2rem 0',
            fontSize: '1.75rem',
            lineHeight: '2.25rem'
          }}>
            {heading}
          </h3>
        )}

        <div style={{
          display: 'flex',
          flexDirection: 'row',
          marginTop: '-2rem',
          overflow: 'scroll'
        }}>
          {projects.map((project, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                flexDirection: 'column-reverse',
                justifyContent: 'flex-end',
                alignItems: 'center',
                whiteSpace: 'normal',
                marginTop: '3rem',
                marginBottom: '2rem',
                flexShrink: 0,
                paddingRight: '2.5rem',
                maxWidth: '24rem'
              }}
            >
              <div style={{
                width: '100%',
                maxWidth: '25rem',
                display: 'flex',
                flexDirection: 'column',
                marginTop: '3rem'
              }}>
                <span style={{
                  fontSize: '0.875rem',
                  lineHeight: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '+1px'
                }}>
                  {project.category}
                </span>

                <h4 style={{
                  marginTop: '0.625rem',
                  marginBottom: '0.625rem',
                  fontSize: '1.375rem',
                  lineHeight: '1.625rem',
                  fontWeight: '700'
                }}>
                  {project.title}
                </h4>

                <p>{project.description}</p>

                {project.tags && project.tags.length > 0 && (
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    marginTop: '1.5rem',
                    lineHeight: '1.2rem'
                  }}>
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} style={{ marginRight: '1rem', marginBottom: '1rem' }}>
                        <u>{tag}</u>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {project.image.src && (
                <div style={{
                  width: '100%',
                  maxWidth: '25rem',
                  height: '15rem',
                  borderRadius: 'var(--border-radius)',
                  boxShadow: '0 0 2.5rem var(--box-shadow-color)',
                  transition: 'all 0.3s ease-out',
                  cursor: project.image.linkTo ? 'pointer' : 'default'
                }}
                  onMouseEnter={(e) => {
                    if (project.image.linkTo) {
                      e.target.style.transform = 'translate3d(0px, -0.125rem, 0px)';
                      e.target.style.boxShadow = '0 0 2.5rem var(--box-shadow-hover-color)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (project.image.linkTo) {
                      e.target.style.transform = 'none';
                      e.target.style.boxShadow = '0 0 2.5rem var(--box-shadow-color)';
                    }
                  }}
                  onClick={() => {
                    if (project.image.linkTo) {
                      if (project.image.linkTo.startsWith('/')) {
                        // Internal link - use Gatsby navigation
                        window.location.href = project.image.linkTo;
                      } else {
                        // External link
                        window.open(project.image.linkTo, '_blank', 'noopener,noreferrer');
                      }
                    }
                  }}
                >
                  <GatsbyImage
                    image={project.image.src.childImageSharp.gatsbyImageData}
                    alt={project.image.alt || `Project ${project.title}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 'var(--border-radius)'
                    }}
                    objectFit={project.image.objectFit}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {projectsData.button && projectsData.button.visible !== false && (
          <div style={{
            marginTop: '4rem',
            textAlign: 'center'
          }}>
            <a
              href={projectsData.button.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '0.75rem 1.5rem',
                backgroundColor: 'var(--primary-color)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: 'var(--border-radius)',
                fontWeight: '600',
                transition: 'all 0.3s ease-out'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'var(--primary-color-hover)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'var(--primary-color)';
              }}
            >
              {projectsData.button.label}
            </a>
          </div>
        )}
      </div>
    </section>
  );
} 