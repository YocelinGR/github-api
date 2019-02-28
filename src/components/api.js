const fetch = require("node-fetch");
const { introspectionQuery } = require("graphql");
const fs = require("fs");
const USERNAME = 'YocelinGR'
const TOKEN = '8a4e36f37e5c36bf88bd06790f1fe42240fa4ebd'


fetch(`https://api.github.com/graphql?user_name=${USERNAME}&access_token=${TOKEN}`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ query: introspectionQuery })
})
  .then(res => res.json())
  .then(res => {
    fs.writeFileSync("./result.json", JSON.stringify(res.data, null, 2));
    console.log('done');
  }
  );
