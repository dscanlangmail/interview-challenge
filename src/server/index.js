const express = require("express");
const cors = require("cors");
const items = require("./items");

const app = express();
app.use(cors());
const port = process.env.PORT || 8080;

app.use(express.static("dist"));

app.get("/api/items", (req, res) => {
  let menuItems = items;

  try {
    if (req.query.search.length > 0) {
      menuItems = items.filter((item) =>
        item.name
          .toLocaleLowerCase()
          .includes(req.query.search.toLocaleLowerCase())
      );
    }
  } catch (e) {
    console.log(e);
  }

  res.send({ items: menuItems });
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
