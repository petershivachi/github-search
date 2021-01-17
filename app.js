//Git Init
const github = new GitHub;

//Get the input 
const searchUser = document.getElementById('searchUser');

//Add an event listener to the search input
searchUser.addEventListener('keyup', (e) => {
  //Get the text input
  const userInput = e.target.value;

  if (userInput !== ''){
    //http call
    github.getUser(userInput)
    .then(data => {
      if(data.profile.message === 'Not Found'){
        //show alert
      }else {
        //show the profile
      }
    })
  }else {
    //clear the profile
    
  }


})