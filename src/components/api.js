import axios from 'axios'

export const api = async () => {
      const USERNAME = 'YocelinGR';
      const TOKEN = '931cdabb794dfdd2bdd4980bb97a570fa6bc12ce';
      const url = `https://api.github.com/graphql?user_name=${USERNAME}&access_token=${TOKEN}`;
      try {
        await axios.post({
          url,
          params: {
            'user_name': USERNAME,
            'access_token': TOKEN,
          },
          headers: {
            'token': TOKEN,
            'Authorization': `Bearer ${TOKEN}`
          },
          data: {
            query: `
            query FindIssueID {
             repository(owner: "YocelinGR",
              name: "cdmx-2018-06-bc-core-am-data-dashboard") {
                id
              }
            }`
          }
        }).then((result) => {
          console.log()
        })
      } catch (e) {
        return e;
      }
    }
