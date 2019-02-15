<template>
<div>
  <h1>GitHub</h1>
  <div>
      <button @click="mutationHeart()">click</button>
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
export default {
  data: () => ({
    topicData: {}
  }),
  methods: {
    mutationHeart(){
      const varHeart = {
          subjectId:"MDU6SXNzdWUzMzYyNDY5NDA=",
          content: 'EYES',
          clientMutationId: "MDQ6VXNlcjM5ODMzMDQ1",
      };
      this.$apollo.mutate({
        mutation: mutationEmoji,
        variables: {
          input: varHeart,
        }
      })
      console.log('holu');
    }
  }
}
</script>
