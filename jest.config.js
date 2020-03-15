{
  "rootDir": "../",
  "collectCoverage": false,
  "automock": false,
  "coverageReporters": ["json", "html", "lcov", "text", "text-summary"],
  "collectCoverageFrom": ["**/*.js", "!**/*.story.js"],
  "coveragePathIgnorePatterns": [
    "lendingblock.js",
    "build/*",
    "static/*",
    "dev/*",
    "coverage/*",
    ".eslintrc.js"
  ],
  "coverageThreshold": {
    "global": {
      "branches": 0,
      "functions": 0,
      "lines": 0,
      "statements": 0
    }
  },
  "moduleNameMapper": {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/dev/fileMock.js",
    "\\.(css|scss)$": "identity-obj-proxy"
  },
  "transform": {
    "^.+\\.js$": "babel-jest",
    "^.+\\.(svg)$": "<rootDir>/dev/stringTransform.js"
  },
  "testURL": "http://localhost",
  "snapshotSerializers": ["<rootDir>/node_modules/enzyme-to-json/serializer"],
  "setupTestFrameworkScriptFile": "<rootDir>/dev/setupTests.js",
  "testPathIgnorePatterns": [
    "<rootDir>/build/",
    "<rootDir>/deploy/",
    "<rootDir>/dev/",
    "<rootDir>/forms/",
    "<rootDir>/scss/",
    "<rootDir>/static/",
    "<rootDir>/node_modules/",
    "<rootDir>/.storybook/"
  ]
}
