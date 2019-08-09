const { default: axios } = require('axios');
const Developer = require('../models/Developer')

module.exports = {
  async store(request, response) {

    const { username } = request.body;

    const userExists = await Developer.findOne({user: username });

    if (userExists) {
      return response.json(userExists);
    }
    const developer = await axios.get(`https://api.github.com/users/${username}`);

    const { name, bio, avatar_url: avatar } = developer.data;

    const dev = await Developer.create({
      name,
      user: username,
      bio,
      avatar
    });
    return response.json(dev);
  }
}
