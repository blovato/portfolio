import React from "react";

export default function ProjectChallenges({ description, challenges }) {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <h3>Key Challenges & Solutions</h3>
      <p>{description}</p>

      {challenges && (
        <>
          <h4>Technical Challenges Overcome:</h4>
          <ul>
            {challenges.map((challenge, index) => (
              <li key={index}>
                <strong>{challenge.title}:</strong> {challenge.description}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
} 