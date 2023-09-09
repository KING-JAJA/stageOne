const express = require("express");
const bodyparser = require("body-parser");

const app = express();

app.use(bodyparser.json());

let localDate = new Date();

let utc_time = localDate.toISOString().split('.')[0] + 'z';

app.get('/api', (req, res) => {
    const { slack_name, track } = req.query;
    const status_code = res.statusCode;

    res.json({
        "slack_name": `${slack_name || "SamuelJaja"}`,
        "current_day": localDate.toLocaleDateString('en-EN', { weekday: 'long' }),
        "utc_time": utc,
        "track": `${track || "backend"}`,
        "github_file_url": "https://github.com/KING-JAJA/stageOne/blob/main/app.js",
        "github_repo_url": "https://github.com/KING-JAJA/stageOne",
        "status_code": status_code
    });
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running port 3000");
})



// https://docs.google.com/forms/d/e/1FAIpQLSdyExqRMAJKXMEaMblQ-YoYQ4t9M9VLnWeEkNr--XVCuFoQrw/viewform
