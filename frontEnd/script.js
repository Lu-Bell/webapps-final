
 //UPDATES VIEW FOR ALL CLASSES
 var update_view = async (button) => {
  if(button.dataset.querytype = "allCourses")
  {
   console.log("button pressed");
   api = `http://localhost:3000/api`
  }
  const data = await fetch(api)
  const model = await data.json()
  render_view(model);
 }
//UPDATES CODE VIEW
 var update_code_view = async (button) => {
  if(button.dataset.querytype == "by_code")
  {
    console.log("button pressed");
    let qVal = document.querySelector("#queryByCode").value;
    api = `http://localhost:3000/api/by_code/${qVal}/`
   }
   const data = await fetch(api)
   const model = await data.json()
   render_view(model);
  }

  //UPDATES title VIEW
  var update_title_view = async (button) => {
    if(button.dataset.querytype == "by_title")
    {
      console.log("button pressed");
      let qVal = document.querySelector("#queryByTitle").value;
      api = `http://localhost:3000/api/by_title/${qVal}/`
     }
     const data = await fetch(api)
     const model = await data.json()
     render_view(model);
    }

//UPDATES GRAD VIEW
var update_level_view = async (button) => {
  if(button.dataset.querytype == "by_level")
  {
    console.log("button pressed");
    let qVal = document.querySelector("#queryByLevel").value;
    api = `http://localhost:3000/api/by_level/${qVal}/`
   }
   const data = await fetch(api)
   const model = await data.json()
   render_view(model);
  }

//UPDATES INSTRUCTOR VIEW
var update_instructor_view = async (button) => {
  if(button.dataset.querytype == "by_instructor")
  {
    console.log("button pressed");
    let qVal = document.querySelector("#queryByInstructor").value;
    api = `http://localhost:3000/api/by_instructor/${qVal}/`
   }
   const data = await fetch(api)
   const model = await data.json()
   render_view(model);
  }
  
//UPDATES COMBINED VIEW

var update_combined_view = async (button) => {
  if(button.dataset.querytype == "advanced")
  {
    console.log("button pressed");
    let qVal = document.querySelector("#queryByName").value;
    let qVal2 = document.querySelector("#queryByLvl").value;
    api = `http://localhost:3000/api/combined_query/${qVal}/${qVal2}`
   }
   const data = await fetch(api)
   const model = await data.json()
   render_view(model);
  }
 
//RENDER VIEW
  var render_view = (model) => {
    
    var source = document.querySelector("#results_view").innerHTML;
    var template = Handlebars.compile(source);
    var html = template(model);
  
    document.querySelector("#results").innerHTML = html;
  }

  var advanced_view = (model) => {
    var source = document.querySelector("#advanced_view").innerHTML;
    var template = Handlebars.compile(source);
    var html = template(model);
  
    document.querySelector("#advanced").innerHTML = html;
  }


