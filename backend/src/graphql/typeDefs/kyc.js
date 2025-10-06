export const kycTypeDefs = `#graphql
  type DocumentFields {
    bucket: String
    X_Amz_Algorithm: String
    X_Amz_Credential: String
    X_Amz_Date: String
    key: String
    Policy: String
    X_Amz_Signature: String
  }

  type DocumentUpload {
    url: String
    fields: DocumentFields
  }

  type KycDocument {
    id: String
    type: String
    category: String
  }

  type KycSession {
    id: String
    individualId: String
    status: String
    livenessRequired: Boolean
    firstName: String
    lastName: String
    birthDate: String
    document: KycDocument
    createdAt: String
    updatedAt: String
  }

  type KycSessionResponse {
    session: KycSession
    backDocumentUpload: DocumentUpload
    frontDocumentUpload: DocumentUpload
  }

  input CreateKycSessionInput {
    firstName: String!
    lastName: String!
    birthDate: String!
    documentCountry: String!
    documentCategory: String!
    documentId: String!
    livenessRequired: Boolean!
    email: String,
    address: String,
    city: String,
    state: String,
    postalCode: String,
    natinality: String,
  }

  type Mutation {
    createKycSession(input: CreateKycSessionInput!): KycSessionResponse!
    processKycSession(sessionId: String!): Boolean!
  }

  type Query {
    getKycSession(sessionId: String!): KycSessionResponse!
  }
`;