import React from "react";

export default function ProjectLinks({ links }) {
  if (!links || links.length === 0) return null;

  return (
    <div>
      <h3>Links</h3>
      <div>
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              marginRight: '1rem',
              marginBottom: '0.5rem',
              padding: '0.5rem 1rem',
              backgroundColor: 'var(--secondary-color)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px'
            }}
          >
            {link.type}
          </a>
        ))}
      </div>
    </div>
  );
} 