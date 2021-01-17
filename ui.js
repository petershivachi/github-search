class UI {
  constructor(){
    this.profile = document.getElementById('profile');
  }

  showProfile(user){
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
    <div class="row">
    <div class="col-md-3">
    <img class="img-fluid mb-2" src="${user.avatar_url}">
    <a class="btn btn-primary btn-block mb-4" href="${user.html_url}" target="_blank">View Profile</a>
    </div>
    <div class="col-md-9">
    <span class="badge badge-primary p-2">Public Repos: ${user.public_repos}</span>
    <span class="badge badge-secondary p-2">Public Gists: ${user.public_gists}</span>
    <span class="badge badge-success p-2">Followers: ${user.followers}</span>
    <span class="badge badge-info p-2">Following: ${user.following}</span>
    <br><br>
    <ul>
    <li class="list-group-item">Company: ${user.company}</li>
    <li class="list-group-item">Location: ${user.location}</li>
    <li class="list-group-item">Blog/Website: ${user.blog}</li>
    <li class="list-group-item">Joined: ${user.created_at}</li>
    <li class="list-group-item">Last Update: ${user.updated_at}</li>
    </ul>
    </div>
    </div>
    </div>
    <h class="page-heading mb-3">Latest Repos</h3>
    <div id="repos"></div>`
  }

  //clear Profile
  clearProfile(){
    this.profile.innerHTML = '';
  }

  //show an alert
  showAlert(message, className){
    //remove existing alert before displaying another alert
    this.clearAlert();

    //create a div
    const div = document.createElement('div');

    //add a class to the div
    div.className = className;

    //add text to the classname
    div.appendChild(document.createTextNode(message));

    //get the parent element
    const container = document.querySelector('.searchContainer');

    //get the search element
    const search = document.querySelector('.search');

    //insert an alert
    container.insertBefore(div, search);

    //set time out for an alert
    setTimeout(() => {
      const alert = document.querySelector('.alert');
      alert.remove();
    }, 2000)
  }

  //clear alert
  clearAlert(){
    const currentAlert = document.querySelector('.alert');

    if(currentAlert){
      currentAlert.remove();
    }
  }
}