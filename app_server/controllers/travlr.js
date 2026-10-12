
const Trip = require("../models/travlr");

const travel = async (req, res) => {
    try {
        const searchTerm = (req.query.search || "").trim();

        let filter = {};

        if (searchTerm) {
            const escapedSearch = searchTerm.replace(
                /[.*+?^${}()|[\]\\]/g,
                "\\$&"
            );

            filter = {
                $or: [
                    { name: { $regex: escapedSearch, $options: "i" } },
                    { resort: { $regex: escapedSearch, $options: "i" } }
                ]
            };
        }

        const trips = await Trip.find(filter).sort({ name: 1 });

        res.render("travel", {
            title: "Travel",
            trips,
            searchTerm,
            noResults: searchTerm.length > 0 && trips.length === 0
        });
    } catch (err) {
        console.error("Error retrieving trips:", err.message);
        res.status(500).send("Unable to retrieve travel information. Please try again later.");
    }
};

module.exports = {
    travel
};
