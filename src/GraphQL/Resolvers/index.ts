import api from "../../utils/api";

export const resolvers = {
    Query: {
        blocksList: async () => {
            return (await api.get(`blocks?format=json`)).data;
        },
        blockDetails: async (_: any, { hash }: any) => {
            return (await api.get(`rawblock/${hash}`)).data;
        }
    }
}