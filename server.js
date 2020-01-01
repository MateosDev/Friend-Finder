// DEPENDENCIES (GLOBAL)

var express = require("express");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(_dirname = "/app/public/"));

// ================================================================================
// ROUTER
// ================================================================================

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// =============================================================================
// LISTENER
// =============================================================================

app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});