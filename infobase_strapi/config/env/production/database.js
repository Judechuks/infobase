// from strapi documentation - to get environment variables while on production
module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME"),
      user: env("DATABASE_USERNAME"),
      password: env("DATABASE_PASSWORD"),
      ssl: { rejectUnauthorized: false },
      // ssl: env.bool("DATABASE_SSL", false) && {
      //   rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false), // not using the default from strapi
      //   ca: env("DATABASE_CA"), // database certificate from Digital Ocean
      // },
    },
    debug: false,
  },
});
