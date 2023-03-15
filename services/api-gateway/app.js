"use strict";

const path = require("path");
const AutoLoad = require("@fastify/autoload");

// Pass --options via CLI arguments in command to enable these options.
module.exports.options = {};

module.exports = async function (fastify, opts) {
  fastify.register(require("@fastify/swagger"), {});
  fastify.register(
    require("@fastify/swagger-ui"),
    require("./utils/swaggerConfig")
  );
  fastify.register(require("@fastify/cors"), require("./utils/corsConfig"));

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, "plugins"),
    options: Object.assign({}, opts),
  });

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, "routes"),
    options: Object.assign({}, opts),
  });

  // Executes Swagger
  fastify.ready((err) => {
    if (err) throw err;
    fastify.swagger();
  });
};
