const sonarqubeScanner = require("sonarqube-scanner");
sonarqubeScanner(
  {
    serverUrl: "http://localhost:9000",
    token: "<TOKEN>",
    options: {
      "sonar.projectKey": "nodejs-app",
      "sonar.projectName": "nodejs-app",
      "sonar.projectVersion": "1.0",
      "sonar.language": "js",
      "sonar.sources": "src",
    //   "sonar.test.inclusions": "**/*.spec.js",
    //   "sonar.javascript.lcov.reportPaths": "coverage/lcov.info",
    },
  },
  () => process.exit()
);