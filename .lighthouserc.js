module.exports = {
  ci: {
    collect: {
      url: ["http://localhost:3000/api/data"],
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
