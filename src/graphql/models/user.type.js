import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLObject,
    GraphQLNonNull
} from 'graphql';

export const ObjectType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLString)
        },
        followers: {
            type: GraphQLObject
        }
    },
});
