const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLSchema,
    GraphQLInt
} = require('graphql');

const ObjectType = new GraphQLObjectType({
    name: 'User',
    fields: {
        username: {
            type: new GraphQLNonNull(GraphQLString)
        },
        password: {
            type: new GraphQLNonNull(GraphQLString)
        }
    },
});

const schema = new GraphQLSchema({
    query: ObjectType
})
