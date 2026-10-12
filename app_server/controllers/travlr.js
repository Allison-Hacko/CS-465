
const travel = async (req, res) => {
    try {
        const searchTerm = (req.query.search || "").trim();

        // Retrieve trips through the REST API
        const response = await fetch("http://localhost:3000/api/trips");

        if (!response.ok) {
            throw new Error("API request failed");
        }

        let trips = await response.json();

        // Filter trips by name or resort when searching
        if (searchTerm) {
            const escapedSearch = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
            const searchRegex = new RegExp(escapedSearch, "i");

            trips = trips.filter(trip =>
                searchRegex.test(trip.name) ||
                searchRegex.test(trip.resort)
            );
        }

        // Sort trips alphabetically
        trips.sort((a, b) => a.name.localeCompare(b.name));

        res.render("travel", {
            title: "Travel",
            trips,
            searchTerm,
            noResults: searchTerm.length > 0 && trips.length === 0
        });
    } catch (err) {
        console.error("Error retrieving trips from API:", err.message);
        res.status(500).send(
            "Unable to retrieve travel information. Please try again later."
        );
    }
};

module.exports = { travel };
