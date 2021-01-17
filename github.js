class GitHub {
  constructor(){
    this.client_id = '3b65ef09806eeeca9048',
    this.client_secret = 'caa77d4f749fdbc008a0cc05bc14511b03580d0e'
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret${this.client_secret}`);
    
    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}