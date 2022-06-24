export const repoName = "gains";
// import { accessToken } from "./prismic-configuration";
export const apiEndpoint = `https://${repoName}.cdn.prismic.io/graphql`;
export const accessToken =
  "MC5YbmMweGhJQUFDa0FqWWl1.Y--_ve-_vWjvv71A77-9DR_vv73vv73vv71EEu-_vSPvv70PMe-_ve-_ve-_ve-_vV8q77-9LO-_ve-_ve-_vTp-";
// -- Link resolution rules
// Manages the url links to internal Prismic documents

// export const accessToken =
//   "MC5ZVjNoVlJFQUFDMEFhNzlr.77-9VO-_vXfvv73vv73vv70E77-9dxDvv70RJ--_ve-_ve-_ve-_vXYEb3EI77-9axPvv73vv716DWoC";

export const linkResolver = (doc) => {
  if (doc.type === "post") return `/blog/${doc.uid}`;
  return "/";
};
