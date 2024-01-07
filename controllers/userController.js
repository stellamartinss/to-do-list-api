const { User } = require('../models')

const getUser = async (req, res) => {
  try {
    const authenticatedUser = req.user;

    if (!authenticatedUser) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const user = await User.findOne({
      where: { id: authenticatedUser.id },
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
    getUser
}
