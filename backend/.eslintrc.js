module.exports = {
  "extends": "standard",
  "plugins": [
      "standard",
      "promise"
  ],
  "globals": {
      "Database": true,
      "Cache": true,
      "app": true
  },
  "rules": {
      "prefer-const": "error"
  }
};