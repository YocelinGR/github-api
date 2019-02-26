<template>
  <div class="row project">
    <div class="col-md-12">
      <input v-model="title" type="text" placeholder="Project Title">
      <button class="btn btn-light" @click="newColumn">New Project Column</button>
      <hr>
      <input v-model="description" type="text" placeholder="Project Description">
      <button class="btn btn-light" @click="newCard">New Project Card</button>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

const createProjectColumn = gql`
  mutation addProjectColumn ($input: AddProjectColumnInput!){
  addProjectColumn(input: $input) {
    clientMutationId
  }
}
`;
const createProjectCard = gql`
  mutation addProjectCard ($input: AddProjectCardInput!){
  addProjectCard(input: $input){
    clientMutationId
  }
}
`;
export default {
  data: () => ({
    description: '',
    title: ''
  }),
  methods: {
    newCard(){
      const inputCard = {
        projectColumnId: "MDEzOlByb2plY3RDb2x1bW40NTA1OTky",
        note: this.description,
        clientMutationId:  "MDQ6VXNlcjM5ODMzMDQ1"
      };
      // location.reload();
      this.$apollo.mutate({
        mutation: createProjectCard,
        variables: {
          input: inputCard,
        }
      })
    },
    newColumn(){
      const inputTitle = {
        projectId: "MDc6UHJvamVjdDIyMDgyNDI=",
        name: this.title,
        clientMutationId:  "MDQ6VXNlcjM5ODMzMDQ1"
      };
      // location.reload();
      this.$apollo.mutate({
        mutation: createProjectColumn,
        variables: {
          input: inputTitle,
        }
      })
    }
  }
}
</script>
<style scoped>
  .btn {
    background-color: #f0f1f1;
    border-color: #a5a6a7;
  }
  .btn:hover {
    background-color: #ccd2db;
  }
  input {
    height: 35px;
    background: #f9f7f5;
    border: #f0dbc7;
  }
  .project {
  }

</style>
