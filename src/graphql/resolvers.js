import registersDB from "../database/registers.js";

const resolvers = {
  Query: {
    registers: () => registersDB,
  },
  Mutation: {
    addRegister: (_, payload) => {
      const newPayload = {
        ...payload,
        id: registersDB.length + 1,
      };
      registersDB.push(newPayload);
      return newPayload;
    },
  },
};

export default resolvers;
