const express = require("express");
const grapqlHTTP = require("express-graphql");
const graphqlSchema = require("./graphql/schema/schema");
const mongoose = require("mongoose");

const app = express();
const PORT = 3001;

mongoose.connect(
  "mongodb+srv://ruslan:Ruslan424540575600@todo-express-a2lpt.mongodb.net/graphql",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(
  "/graphql",
  grapqlHTTP({
    schema: graphqlSchema,
    graphiql: true,
  })
);

const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
dbConnection.once("open", () => console.log("Connected to DB"));

app.listen(PORT, (error) => {
  error ? console.error(error) : console.log(`Server is running at ${PORT} `);
});
