import fetch from "node-fetch";
import fs from "fs";
import axios from "axios";
// const fetch = require("node-fetch");
// const fs = require("fs");
const repoId = "gains";

console.log("Executing this file");
// https://${repoId}.cdn.prismic.io/api
fetch(
  `https://gains.cdn.prismic.io/api/v2/documents/search?ref=YVqnXBIAACUAvfSF&access_token=MC5YbmMweGhJQUFDa0FqWWl1.Y--_ve-_vWjvv71A77-9DR_vv73vv73vv71EEu-_vSPvv70PMe-_ve-_ve-_ve-_vV8q77-9LO-_ve-_ve-_vTp-&page=1&pageSize=2000`
)
  .then((r) => r.json())
  .then((data) => {
    fs.writeFileSync("./src/utils/data.json", JSON.stringify(data), (err) => {
      if (err) {
        console.error("Error writing fragmentTypes file", err);
      } else {
        console.log("Fragment types successfully extracted!");
      }
    });
    console.log("Response Data: ", data);
    // console.lo;
    // const ref = data.refs.find((r) => r.id === "master");
    // console.log("Data ref: ", ref);
    // if (!ref) return;
    fetch(
      `https://${repoId}.cdn.prismic.io/graphql?query=%7B%20__schema%20%7B%20types%20%7B%20kind%20name%20possibleTypes%20%7B%20name%20%7D%20%7D%20%7D%20%7D`,
      {
        headers: {
          "prismic-ref": "YVqnXBIAACUAvfSF",
          access_token:
            "MC5YbmMweGhJQUFDa0FqWWl1.Y--_ve-_vWjvv71A77-9DR_vv73vv73vv71EEu-_vSPvv70PMe-_ve-_ve-_ve-_vV8q77-9LO-_ve-_ve-_vTp-",
        },
      }
    )
      .then((result) => result.json())
      .then((result) => {
        console.log("Result: ", result);
        const filteredResults = result;
        const filteredData = result.data.__schema.types.filter(
          (type) => type.possibleTypes !== null
        );
        filteredResults.data.__schema.types = filteredData;
        fs.writeFileSync(
          "./src/utils/fragmentTypes.json",
          JSON.stringify(filteredResults.data),
          (err) => {
            if (err) {
              console.error("Error writing fragmentTypes file", err);
            } else {
              console.log("Fragment types successfully extracted!");
            }
          }
        );
      });
  })
  .catch((err) => console.log(err));
