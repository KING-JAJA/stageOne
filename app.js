const express = require("express");
const bodyparser = require("body-parser");

const app = express();

app.use(bodyparser.json());

let localDate = new Date();

// let utcTime = () => {
//     // Get the current UTC time in milliseconds
//     let currentUTCTime = Date.now();
  
//     // Get the UTC time in seconds (rounded down to the nearest second)
//     let currentUTCSeconds = Math.floor(currentUTCTime / 1000);
  
//     // Get the local time in seconds (rounded down to the nearest second)
//     let currentLocalSeconds = Math.floor(Date.now() / 1000);
  
//     // Calculate the time difference in seconds
//     let timeDifference = currentLocalSeconds - currentUTCSeconds;

//     if (Math.abs(timeDifference) <= 2) {
//         // The current UTC time is within +/- 2 seconds of accuracy
//         return new Date(currentUTCTime);
//     }
// }

let utc = new Date().toISOString().slice(0, 19) + "Z";

app.get("/", (req, res) => {
    res.json({
        "slack_name": "SamuelJaja",
        "current_day": localDate.toLocaleDateString('en-EN', { weekday: 'long' }),
        "utc_time": utc,
        "track": "backend",
        "github_file_url": "https://github.com/KING-JAJA/stageOne/blob/main/app.js",
        "github_repo_url": "https://github.com/KING-JAJA/stageOne",
        "status_code": 200
      });
});

app.get('/api', (req, res) => {
    const { slack_name, track } = req.query;
    res.json({
        "slack_name": `${slack_name || "SamuelJaja"}`,
        "current_day": localDate.toLocaleDateString('en-EN', { weekday: 'long' }),
        "utc_time": utc,
        "track": `${track || "backend"}`,
        "github_file_url": "https://github.com/KING-JAJA/stageOne/blob/main/app.js",
        "github_repo_url": "https://github.com/KING-JAJA/stageOne",
        "status_code": 200
    });
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running port 3000");
})



// https://docs.google.com/forms/d/e/1FAIpQLSdyExqRMAJKXMEaMblQ-YoYQ4t9M9VLnWeEkNr--XVCuFoQrw/viewform
