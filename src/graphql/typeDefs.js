import { gql } from "apollo-server";

const typeDefs = gql`
  type Register {
    id: Int!
    current: String!
    prev: String!
    nickname: String!
    account: String!
    euntaek: String!
    one: String!
    sihwan: String!
    ganghee: String!
    yeongwon: String!
    gyeongmin: String!
    uju: String!
    haewon: String!
    aki: String!
    seungju: String!
    jaeyoung: String!
    wonchan: String!
    sang: String!
    common: String!
  }

  type Query {
    registers: [Register!]
  }

  type Mutation {
    addRegister(
      current: String!
      prev: String!
      nickname: String!
      account: String!
      euntaek: String!
      one: String!
      uju: String!
      sihwan: String!
      ganghee: String!
      yeongwon: String!
      gyeongmin: String!
      haewon: String!
      aki: String!
      seungju: String!
      jaeyoung: String!
      wonchan: String!
      sang: String!
      common: String!
    ): Register!
  }
`;

export default typeDefs;
