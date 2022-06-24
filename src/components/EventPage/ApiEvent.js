import gql from "graphql-tag";
import { client } from "../../utils/prismicHelpers";
export const GetEventData = async () => {
  const querry = gql`
    query EventsQuery {
      allEvents(sortBy: start_time_DESC) {
        edges {
          node {
            title
            square_title
            details
            start_time
            end_time
            _meta {
              uid
            }
            image
            company_name
            company_logo
          }
        }
      }
    }
  `;

  return await client
    .query({
      query: querry,
    })
    .then((response) => {
      console.log("Query Response: ", response);
      let data = response;
      console.log("Data: ", data);
      return data;
    })
    .catch((error) => {
      console.error(error);
    });

  //   return data;
};
