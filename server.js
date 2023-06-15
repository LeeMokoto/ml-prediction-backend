const express = require("express");
const parkinsonsRoutes = require('./routes/parkinsons'); // import the routes
const routes = require('./routes/chestXray');

const app = express();

app.use(express.json({limit: "5mb"})); // parses incoming requests with JSON payloads

app.use('/', parkinsonsRoutes); //to use the routes
app.use('/', routes);

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('App is listening on port ' + listener.address().port)
})