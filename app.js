let utils = require('./utils');

let arr =
    [
        {
            "jobTitle": "Intern",
            "headCount": 3,
            "resigCount": 0
        },
        {
            "jobTitle": "Principal Consultant",
            "headCount": 2,
            "resigCount": 0
        },
        {
            "jobTitle": "Graduate Trainee",
            "headCount": 3,
            "resigCount": 1
        },
        {
            "jobTitle": "Associate Consultant",
            "headCount": 2,
            "resigCount": 1
        },
        {
            "jobTitle": "null",
            "headCount": 3,
            "resigCount": 2
        },
        {
            "jobTitle": "Consultant",
            "headCount": 2,
            "resigCount": 0
        },
        {
            "jobTitle": "Principal Consultant",
            "headCount": 1,
            "resigCount": 0
        },
        {
            "jobTitle": "Consultant",
            "headCount": 1,
            "resigCount": 0
        },
        {
            "jobTitle": "Associate Consultant",
            "headCount": 3,
            "resigCount": 1
        },
        {
            "jobTitle": "Graduate Trainee",
            "headCount": 1,
            "resigCount": 0
        },
        {
            "jobTitle": "Intern",
            "headCount": 1,
            "resigCount": 1
        },
        {
            "jobTitle": "HR",
            "headCount": 1,
            "resigCount": 0
        },
        {
            "jobTitle": "Intern",
            "headCount": 1,
            "resigCount": 1
        },
        {
            "jobTitle": "Associate Consultant",
            "headCount": 2,
            "resigCount": 1
        },
        {
            "jobTitle": "Consultant",
            "headCount": 2,
            "resigCount": 0
        },
        {
            "jobTitle": "Graduate Trainee",
            "headCount": 3,
            "resigCount": 0
        },
        {
            "jobTitle": "GTE",
            "headCount": 2,
            "resigCount": 0
        },
        {
            "jobTitle": "",
            "headCount": 1,
            "resigCount": 0
        },
        {
            "jobTitle": "Consultant",
            "headCount": 1,
            "resigCount": 0
        },
        {
            "jobTitle": "Intern",
            "headCount": 1,
            "resigCount": 0
        }
    ];

    console.log(utils.concatCountByTitle(arr))


module.exports = utils;