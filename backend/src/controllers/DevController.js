const axios = require('axios');


module.exports = {
  async store(request, response) {

    const { username } = request.body;

    const developer = await axios.get(`https://api.github/users/${username}`);

    return response.json(developer.data);
  }
}
