// newTea function for post tea route
const newTea = (req, res, next) => {
    res.json({message: "POST new tea"}); // dummy function for now
};

// getTea function for post tea route
const getTea = (req, res, next) => {
    res.json({message: "GET new tea"}); // dummy function for now
};

// deleteTea function for post tea route
const deleteTea = (req, res, next) => {
    res.json({message: "DELETE new tea"}); // dummy function for now
};

module.exports = {newTea, getTea, deleteTea};