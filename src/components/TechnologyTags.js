import React from "react";

export default function TechnologyTags({ technologies }) {
  if (!technologies || technologies.length === 0) return null;

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h3>Technologies Used</h3>
      <div>
        {technologies.map((tech, index) => (
          <u key={index} style={{
            display: 'inline-block',
            margin: '0.25rem',

          }}>
            {tech}
          </u>
        ))}
      </div>
    </div>
  );
} 