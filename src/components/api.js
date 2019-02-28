const fetch = require("node-fetch");
const { introspectionQuery, buildClientSchema } = require("graphql");
const fs = require("fs");
const USERNAME = 'YocelinGR'
const TOKEN = 'fe6641697bfd4421939383cc3e784393afea204e'


fetch(`https://api.github.com/graphql?user_name=${USERNAME}&access_token=${TOKEN}`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ query: introspectionQuery })
})
  .then(res => res.json())
  .then(res => {
    fs.writeFileSync("./result.json", JSON.stringify(res.data, null, 2));
    const introspectionSchemaResult = JSON.parse(fs.readFileSync('./result.json'));
    const graphqlSchemaObj = buildClientSchema(introspectionSchemaResult);
    fs.writeFileSync("./schema.gql", JSON.stringify(graphqlSchemaObj, null, 2));
  }
  );
