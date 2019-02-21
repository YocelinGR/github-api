<template>
<div>
  <h1>GitHub</h1>
  <div>
      <button @click="mutationHeart()">click to inserte EYES</button>
      <p>Creación:  </p>
      <span>{{ repository.id }}</span>
  </div>
</div>
</template>

<script>
import gql from 'graphql-tag';
 const mutationEmoji = gql`
 mutation AddReactionToIssue($input: AddReactionInput!) {
   addReaction(input: $input) {
     reaction {
       content
     }
     subject {
       id
     }
   }
 }
 `;
const repository = gql`
  query FindIssueID($owner: String!, $name: String!) {
  repository(owner: $owner, name:$name) {
    id
  }
 }
`;

export default {
  data: () => ({
    repository: {}
  }),
    methods: {
      mutationHeart(){
        const mutationParams = {
            subjectId:"MDU6SXNzdWUzMzYyNDY5NDA=",
            content: 'EYES',
            clientMutationId: "MDQ6VXNlcjM5ODMzMDQ1",
        };
        location.reload();
        this.$apollo.mutate({
          mutation: mutationEmoji,
          variables: {
            input: mutationParams,
          }
        })
      }
    },
  apollo: {
    repository: {
      query: repository,
      variables() {
        return{
          owner: 'YocelinGR',
          name: 'cdmx-2018-06-bc-core-am-data-dashboard',
        }
      }
    }
  }
}
</script>
