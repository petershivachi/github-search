//Git Init
const github = new GitHub;

//Instantiate UI
const ui = new UI;

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
        ui.showAlert('User not found', 'alert alert-danger');
      }else {
        //show the profile
        ui.showProfile(data.profile);

        //show repos
        ui.showRepos(data.repos);
      }
    })
  }else {
    //clear the profile
    ui.clearProfile();
    
  }


})