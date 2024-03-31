//1) Create your own resume data in JSON format
/*const myResume={
    
      "name": "Chandran",
      "email": "chandhuu1234@gmail.com",
      "phone": 9080102039,
      "Gender":"Male",
      "degree": "B.sc computer science",
      "institution": "Guru Nanak College",
      "department": "computer science",
      "studyType": "Full-Time",
      "batch_start_year": 2016,
      "batch_end_year": 2020,
      "cgpa": 8.27,
      "programming_languages": "Html,CSS,Javascript,Reactjs,Nodejs,MongoDB,",        
      "languages_known": "English, Tamil"
}
  console.log(myResume);
  */
  
 //------------------------------------------------------------------------------------------------------

 //2) For the above JSON,iterate over all for loops (for,for in, for of, for each)
 /*
const myResume=[{
      "name": "Chandran",
      "email": "chandhuu1234@gmail.com",
      "phone": 9080102039,
      "Gender":"Male",
      "degree": "B.sc computer science"
        },
        {
        "institution": "Guru Nanak College",
        "department": "computer science",
        "studyType": "Full-Time",
        "batch_start_year": 2016,
        "batch_end_year": 2020,
        "cgpa": 8.27
      },
      {
        "programming_languages": "Html,CSS,Javascript,Reactjs,Nodejs,MongoD", 
        "languages_known": "English, Tamil"
      }
    ];
   */ 

//For loop:
/*
    for(let i=0;i<myResume.length;i++){
    var data = myResume[i];
   console.log(data);
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
const myResume={
      "name": "Chandran",
      "email": "chandhuu1234@gmail.com",
      "phone": 9080102039,
      "Gender":"Male",
      "degree": "B.sc computer science",
      "institution": "Guru Nanak College",
      "department": "computer science",
      "studyType": "Full-Time",
      "batch_start_year": 2016,
      "batch_end_year": 2020,
      "cgpa": 8.27,
      "programming_languages": "Html,CSS,Javascript,Reactjs,Nodejs,MongoDB,",        
      "languages_known": "English, Tamil"
    }
const data = Object.entries(myResume)

//For of:

for (var [key,value] of data){
  console.log(value);
}


//For Each:

  data.forEach(([key,val])=> console.log(key));
  */
 