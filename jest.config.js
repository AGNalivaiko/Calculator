module.exports = {
  moduleNameMapper: {
    "^@main/(.*)$": "<rootDir>/src/modules/MathFunctions/mainCommand/$1",
    "^@math/(.*)$": "<rootDir>/src/modules/$1",
  },
  testEnvironment: "node",
};
