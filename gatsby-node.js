exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  const typeDefs = `
    type ProjectFeature {
      title: String!
      description: String!
    }

    type ProjectChallenge {
      title: String!
      description: String!
    }

    type ProjectResult {
      title: String!
      description: String!
    }

    type ProjectDetails {
      title: String!
      description: String!
      features: [ProjectFeature!]!
    }

    type ProjectChallenges {
      description: String!
      challenges: [ProjectChallenge!]!
    }

    type ProjectResults {
      description: String!
      results: [ProjectResult!]!
      conclusion: String!
    }

    type ProjectDetailedData {
      projectDetails: ProjectDetails!
      challenges: ProjectChallenges!
      results: ProjectResults!
    }

    type Project implements Node {
      detailedData: ProjectDetailedData
    }
  `;

  createTypes(typeDefs);
}; 