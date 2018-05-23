const express = require("express"),
  app = express(),
  { json } = require("body-parser"),
  cors = require("cors"),
  port = 3001;

const { scrapem } = require("./scrape");

app.use(json());
app.use(cors());

app.get("/api/getairplaneflightsandgethotelavailabilities", scrapem);
//  (req, res) => {
//   let { week, day } = req.query;
//   console.log(typeof week);
//   console.log(typeof day);
//   console.log("END POINT HIT");
// });

app.listen(port, () => {
  console.log(`Magic happens on port ${port}`);
});
