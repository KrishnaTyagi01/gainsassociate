var express = require("express");
var axios = require("axios");
var router = express.Router();

router.get("/", function (req, res, next) {

  var config = {
    method: "get",
    url: "https://api.twitter.com/2/users/999002076842782721/tweets?tweet.fields=created_at",
    headers: {
      Authorization:
        "Bearer AAAAAAAAAAAAAAAAAAAAAEjYSwEAAAAAmZBA9WBFO88scbfXA%2Floo%2Bf5H9s%3Djn05hViit1Zh0wAO1Ns7qThNQS6eULYY2PHKQYJ6RZw61fb9X4",
      Cookie:
        'guest_id=v1%3A162974498247387223; personalization_id="v1_oZxuBlsdh+JUbDYhoW9iZw=="',
    },
  };

  axios(config)
    .then(function (response) {
      res.send(JSON.stringify(response.data))
    })
    .catch(function (error) {
     // console.log(error);
    });
});



module.exports = router;