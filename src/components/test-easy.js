const EasyGraphQLTester = require('easygraphql-tester')
    const fs = require('fs')
    const path = require('path')

    const schemaCode = fs.readFileSync(path.join(__dirname, '..', '..','result.json'), 'utf8')
    const tester = new EasyGraphQLTester(schemaCode)
    const query = `{
        user(login: "YocelinGR"){
        id
        followers(first: 20) {
          nodes {
            id
            login
            name
            avatarUrl(size: 64)
            bio
            location
          }
        }
      }
    }
    `;
    const result = tester.mock({ query });
    console.log(result);
