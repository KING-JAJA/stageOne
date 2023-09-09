const express = require("express");
const bodyparser = require("body-parser");

const app = express();

app.use(bodyparser.json());

let localDate = new Date();

app.get("/", (req, res) => {
    res.json({
        "slack_name": "SamuelJaja",
        "current_day": localDate.toLocaleDateString('en-EN', { weekday: 'long' }),
        "utc_time": localDate.toISOString(),
        "track": "backend",
        "github_file_url": "https://github.com/KING-JAJA/stageOne/blob/main/app.js",
        "github_repo_url": "https://github.com/KING-JAJA/stageOne",
        "status_code": 200
      });
});

app.get('/api', (req, res) => {
    const { name, track } = req.query;
    res.json({
        "slack_name": `${name || "SamuelJaja"}`,
        "current_day": localDate.toLocaleDateString('en-EN', { weekday: 'long' }),
        "utc_time": localDate.toISOString(),
        "track": `${track || "backend"}`,
        "github_file_url": "https://github.com/KING-JAJA/stageOne/blob/main/app.js",
        "github_repo_url": "https://github.com/KING-JAJA/stageOne",
        "status_code": 200
    });
});

app.listen(3000, () => {
    console.log("Server is running port 3000");
})



// https://docs.google.com/forms/d/e/1FAIpQLSdyExqRMAJKXMEaMblQ-YoYQ4t9M9VLnWeEkNr--XVCuFoQrw/viewform