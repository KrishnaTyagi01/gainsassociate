import React from "react";
import { Link } from "react-router-dom";
import { PrismicLink } from "apollo-link-prismic";
import Prismic from "@prismicio/client";

import {
  InMemoryCache,
  IntrospectionFragmentMatcher,
} from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";
import {
  apiEndpoint,
  linkResolver,
  accessToken,
} from "../prismic-configuration";
import fragmentTypes from "./fragmentTypes.json";
// import { accessToken } from "./../prismic-configuration";

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: fragmentTypes,
});

// Helper function to convert Prismic Rich Text links to React Link components
export const customLink = (type, element, content, children, index) => (
  <Link to={linkResolver(element.data)} key={index}>
    {content}
  </Link>
);

// Client method to query documents from the Prismic repo
export const client = new ApolloClient({
  link: PrismicLink({
    uri: apiEndpoint,
    accessToken: accessToken,
    repositoryName: "gains",
  }),

  cache: new InMemoryCache({ fragmentMatcher }),
});
// export const client = Prismic.client(apiEndpoint, { accessToken });
