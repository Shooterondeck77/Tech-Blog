const express = require('express');
const routes = require('./routes');
const exphbs = require('express-handlebars');
const path = require('path');
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3003;

const hbs = exphbs.create();
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});