class GitHub {
  constructor(){
    this.client_id = '391897be91909ee89a55',
    this.client_secret = '07096e31a756e7fe1c1a66a15ca690962354d617'
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret${this.client_secret}`)
    
    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}