const express = require("express");
const bodyparser = require("body-parser");

const app = express();

app.use(bodyparser.json());

let localDate = new Date();

let utc_time = localDate.toISOString().split('.')[0] + 'z';

app.get('/api', (req, res) => {
    const { slack_name, track } = req.query;
    const statusCode = res.statusCode;
    const current_day = localDate.toLocaleDateString('en-EN', { weekday: 'long' });
    const github_file_url = "https://github.com/KING-JAJA/stageOne/blob/main/app.js";
    const github_repo_url = "https://github.com/KING-JAJA/stageOne";

    res.json({
        slack_name,
        current_day,
        utc_time,
        track,
        github_file_url,
        github_repo_url,
        status_code: statusCode
    });
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running port 3000");
})



// https://docs.google.com/forms/d/e/1FAIpQLSdyExqRMAJKXMEaMblQ-YoYQ4t9M9VLnWeEkNr--XVCuFoQrw/viewform
