var Trip = require("../models/travlr");

const travel = async (req, res) => {
    try {
        const trips = await Trip.find({});
        res.render("travel", { title: "Travel", trips });
    } catch (err) {
        console.log("Error retrieving trips:", err);
        res.status(500).send("Error retrieving trips");
    }
};

module.exports = {
    travel
};