const events = require("../models/Event.js");
const users = require("../models/User.js");
module.exports = {
  async createEvent(req, res) {
    const { title, description, price, thumbnail } = req.body;
    const { user_id } = req.headers;
    const { filename } = req.file;

    const user = await users.findById(user_id);

    if (!user) {
      return res.status(400).json({ message: "User does not exist!" });
    }

    const event = await events.create({
      title,
      description,
      price: parseFloat(price),
      user: user_id,
      thumbnail: filename,
    });

    return res.json(event);
  },
  async getEventById(req, res) {
    const { eventId } = req.params;
    try {
      const event = await events.findById(eventId);
      if (event) {
        return res.json(event);
      }
    } catch (error) {
      return res.status(400).json({ message: "EventId does not exist!" });
    }
  },
};
