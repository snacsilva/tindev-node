const Developer = require('../models/Developer');

module.exports = {
  async store (request, responses) {
    const { user } = request.headers;
    const { idDev } = request.params;

    const loggedDev = await Developer.findById(user);
    const targetDev = await Developer.findById(idDev);

    if (!targetDev) {
      return responses.status(400).json({ error: 'Dev not exists' });
    }

    loggedDev.dislikes.push(targetDev._id);

    await loggedDev.save()

    return responses.json(loggedDev);
  }
}
