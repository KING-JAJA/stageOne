const express = require("express");
const bodyparser = require("body-parser");
const moment = require("moment");

const app = express();

app.use(bodyparser.json());

//let localDate = new Date();



app.get('/api', (req, res) => {
    const { slack_name, track } = req.query;

    const date = new Date();
    const day = date.getDay();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = days[day];

    const githubUrl = 'https://github.com/KING-JAJA/stageOne.git';
    const github_file_url = 'https://github.com/KING-JAJA/stageOne/blob/main/app.js';

    const statusCode = res.statusCode;

    const utc_time = date.toISOString().split('.')[0] + 'Z';//new Date(date.setMilliseconds(0)).toISOString();

    res.json({
        slack_name,
        current_day: today,
        utc_time,
        track,
        github_file_url,
        github_repo_url: githubUrl,
        status_code: statusCode
    });
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is up and running");
})



// https://docs.google.com/forms/d/e/1FAIpQLSdyExqRMAJKXMEaMblQ-YoYQ4t9M9VLnWeEkNr--XVCuFoQrw/viewform
