const { Superhero } = require('../models');

module.exports.checkSuperhero = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;

    const userInstance = await Superhero.findByPk(id);

    if (!userInstance) {
      throw new Error('Superhero not found');
    }
    req.userInstance = userInstance;
    next();
  } catch (error) {
    next(error);
  }
}
