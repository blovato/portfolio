import React from "react";
import {
  Page,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function ProjectLayout({ project, children }) {
  return (
    <>
      <Seo title={project.title} />
      <Page>
        <div style={{ padding: '2rem 0', maxWidth: '800px', margin: '0 auto 8rem auto' }}>
          <div style={{ padding: '2rem', borderRadius: '8px' }}>
            <h1>{project.title}</h1>
            <p style={{ color: '#666', fontSize: '1.1rem', marginBottom: '2rem' }}>{project.category}</p>

            {project.image && (
              <div style={{ marginBottom: '2rem' }}>
                <img
                  src={project.image.src.childImageSharp.gatsbyImageData.images.fallback.src}
                  alt={project.image.alt}
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
            )}

            {children}
          </div>
        </div>
      </Page>
    </>
  );
} 