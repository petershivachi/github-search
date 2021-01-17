class GitHub {
  constructor(){
    this.client_id = '391897be91909ee89a55',
    this.client_secret = '2cb3bfc4162d72f057eb349c6b48336e9ed52eb5'
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret${this.client_secret}`)
    
    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}