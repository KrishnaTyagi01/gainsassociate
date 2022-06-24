import gql from "graphql-tag";
import Cookies from "js-cookie";
import { client } from "./prismicHelpers";

// Not using this currently -> currently calling query directly on EventSection.js
const blogHomeQuery = gql`
  query blogHomeQuery {
    allBlog_homes {
      edges {
        node {
          headline
          description
          image
        }
      }
    }
  }
`;

const eventQuery = gql`
  query EventsQuery {
    site {
      meta: siteMetadata {
        title
        description
        url: siteUrl
        author
      }
    }

    prismic {
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
            company_name
            company_logo {
              ... on PRISMIC__ImageLink {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const eventQueryContent = async () => {
  const previewCookie = Cookies.get("io.prismic.preview");
  const queryOptions = {
    query: eventQuery,
  };
  if (previewCookie) {
    queryOptions.context = {
      headers: {
        "Prismic-ref": previewCookie,
      },
    };
  }
  return client.query(queryOptions);
};
