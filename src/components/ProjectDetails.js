import React from "react";

export default function ProjectDetails({ title, description, features }) {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <h2>{title}</h2>
      <p>{description}</p>

      {features && (
        <>
          <h4>Key Features Implemented:</h4>
          <ul>
            {features.map((feature, index) => (
              <li key={index}>
                <strong>{feature.title}:</strong> {feature.description}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
} 