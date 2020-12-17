const Event = require("../models/Event.js");
const users = require("../models/User.js");
module.exports = {
  async createEvent(req, res) {
    const { title, description, price, thumbnail, sport } = req.body;
    const { user_id } = req.headers;
    const { filename } = req.file;

    const user = await users.findById(user_id);

    if (!user) {
      return res.status(400).json({ message: "User does not exist!" });
    }

    const event = await Event.create({
      title,
      description,
      price: parseFloat(price),
      user: user_id,
      thumbnail: filename,
      sport,
    });

    return res.json(event);
  },
  async deleteEvent(req, res) {
    const { eventId } = req.params;
    try {
      await Event.findByIdAndDelete(eventId);
      return res.status(204)
    } catch (error) {
      return res
        .status(404)
        .json({ message: "We do no have any events with this id yet" });
    }
  },
};
