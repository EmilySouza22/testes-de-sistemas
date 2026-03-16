export default {
  reporters: [
    "default",
    ["jest-html-reporters", {
      filepath: "./reports/report.html",
      openReport: true
    }]
  ]
};