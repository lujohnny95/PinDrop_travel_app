const Pin = require("./pin.model");

exports.addPin = async (req, res) => {
    try {
        const pin = await Pin.create(req.body);
        res.status(201).send({ message: "Success", movie });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Check server logs" });
    }
};

exports.listPins = async (req, res) => {
    try {
        const pins = await Pin.find({});
        res.status(200).send({ pins });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Check server logs" });
    }
};

// exports.updatePin = async (req, res) => {
//     try {
//         const updatedPin = await Pin.updateOne(
            
//         )
//         res.status(200).send({ movies });
//     } catch (error) {
//         console.log(error);
//         res.status(500).send({ message: "Check server logs" });
//     }
// };

exports.deletePin = async (req, res) => {
    try {
        const deletedPin = await Pin.deleteOne({ title: req.params.title });
        res.status(200).send({ message: "Success", deletedPin });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Check server logs" });
    }
};