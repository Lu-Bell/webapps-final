//npm install express
var express = require('express');

var app = express();
//Load Json file
const fs = require('fs')
let rawdata = fs.readFileSync('./class.json'); //Will load the json object as a string
let classes = JSON.parse(rawdata);// Parses the string into a json object

//Define routes

app.get('/api', (req, res) => {
    let outputJSON = {
        courses : classes["courses"]
    }

    res.json(outputJSON);
});

//filter course code
app.get('/api/by_code/:qcode', (req, res) => {
    let query = req.params['qcode']
    filtered_class = classes["courses"].filter(q => q.course_code.includes(query))
    let outputJSON = {
        courses : filtered_class
    }

    res.json(outputJSON);
})

//filter course level

app.get('/api/by_level/:qlevel', (req, res) => {
    let query = req.params['qlevel']
    filtered_class = classes["courses"].filter(q => {
        if(query == "graduate")
        {
        if (q.course_level.includes("graduate") && !q.course_level.includes("under")) {
            return true;
            }
            return false;
          }
          if(query == "undergraduate")
        {
        if (q.course_level.includes("graduate") && q.course_level.includes("under")) {
            return true;
            }
            return false;
          }
}
    )

    let outputJSON = {
        courses : filtered_class
    }
    res.json(outputJSON);
})

//filter course title

app.get('/api/by_title/:qtitle', (req, res) => {
    let query = req.params['qtitle']
    filtered_class = classes["courses"].filter(q => q.title.includes(query))
    let outputJSON = {
        courses : filtered_class
    }

    res.json(outputJSON);
})


//filter course instructor

app.get('/api/by_instructor/:qinstructor', (req, res) => {
    let query = req.params['qinstructor']
    filtered_class = classes["courses"].filter(q => q.instructor.includes(query))
    let outputJSON = {
        courses : filtered_class
    }

    res.json(outputJSON);
})

//filter instructor and level

app.get('/api/combined_query/:qname/:qlevel', (req, res) => {
    let qname = req.params['qname']
    let qlevel = req.params['qlevel']
    filter_class = classes["courses"].filter(
        q => {
        if(qlevel == "graduate"){
            if(q.instructor.includes(qname) && q.course_level.includes(qlevel) && q.course_level.includes("graduate") && !q.course_level.includes("under")) {
                return true;
            }return false;
        } if(qlevel == "undergraduate"){
            if(q.instructor.includes(qname) && q.course_level.includes(qlevel) && q.course_level.includes("graduate") && q.course_level.includes("under")) {
                return true;
            }return false;
        }
        }
    );
let outputJSON = {
    courses : filter_class
}

res.json(outputJSON);

})



//static request
app.use('/demo', express.static('frontEnd'));


//Start server
app.listen(3000, function () {
    console.log("running on port 3000");
    //console.log(classes);
});
