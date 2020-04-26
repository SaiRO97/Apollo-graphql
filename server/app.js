const express = require("express");
const grapqlHTTP = require("express-graphql");
const graphqlSchema = require("./graphql/schema/schema");

const app = express();
const PORT = 3001;

app.use(
  "/graphql",
  grapqlHTTP({
    schema: graphqlSchema,
    graphiql: true,
  })
);

app.listen(PORT, (error) => {
  error ? console.error(error) : console.log(`Server is running at ${PORT} `);
});
