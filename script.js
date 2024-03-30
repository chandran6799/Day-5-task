//1) Create your own resume data in JSON format

/*
let myResume={
    "personal details": {
      "name": "Chandran",
      "email": "chandhuu1234@gmail.com",
      "phone": 9080102039,
      "Gender":"Male",
      "degree": "B.sc computer science",
      "location": {
        "city": "chennai",
        "state": "Tamil",
        "country": "India"
      },
    },
    "education": 
      {
        "institution": "Guru Nanak College",
        "department": "computer science",
        "studyType": "Full-Time",
        "batch_start_year": 2016,
        "batch_end_year": 2020,
        "cgpa": 8.27
      },

    "skills": 
      {
        "programming_languages": "Html,CSS,Javascript,Reactjs,Nodejs,MongoDB,",        
        
      },

      "languages": 
      {
        "languages_known": "English, Tamil",
      }
    
  }
  console.log(myResume);
  */
 //------------------------------------------------------------------------------------------------------

 //2) For the above JSON,iterate over all for loops (for,for in, for of, for each)
 /* 
const myResume=[{
    "personaldetails": {
      "name": "Chandran",
      "email": "chandhuu1234@gmail.com",
      "phone": 9080102039,
      "Gender":"Male",
      "degree": "B.sc computer science",
      "location": {
        "city": "chennai",
        "state": "Tamil",
        "country": "India"
      },
    },
    "education": 
      {
        "institution": "Guru Nanak College",
        "department": "computer science",
        "studyType": "Full-Time",
        "batch_start_year": 2016,
        "batch_end_year": 2020,
        "cgpa": 8.27
      },

    "skills": 
      {
        "programming_languages": "Html,CSS,Javascript,Reactjs,Nodejs,MongoDB,",        
        
      },

      "languages": 
      {
        "languages_known": "English, Tamil",
      }
    }];
*/
//For loop:
/*
    for(let i = 0 ; i < myResume.length ; i++){
    var Access = myResume[i];
  
    console.log(Access.personaldetails.name);
   console.log(Access.skills);
  }
*/

//For in:
/*
for(var key in myResume){
    console.log(myResume[key]);
  }
*/
//For of:
/*
let Access = Object.values(myResume);
for(elements of Access){
    console.log(elements);
}
*/

//For Each:
/*
  let Access = Object.values(myResume);
  //console.log(Access);
  
  Access.forEach((key) => console.log(key));
  */