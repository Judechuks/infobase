module.exports = ({ env }) => ({
  media: {
    config: {
      upload: {
        config: {
          destination: env("UPLOAD_DIR", "/uploads"), // Replace with Render's path
        },
      },
    },
  },
});
