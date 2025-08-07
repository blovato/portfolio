import React from "react";

export default function ProjectResults({ description, results, conclusion }) {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <h3>Results & Impact</h3>
      <p>{description}</p>

      {results && (
        <ul>
          {results.map((result, index) => (
            <li key={index}>
              <strong>{result.title}</strong> {result.description}
            </li>
          ))}
        </ul>
      )}

      {conclusion && <p>{conclusion}</p>}
    </div>
  );
} 