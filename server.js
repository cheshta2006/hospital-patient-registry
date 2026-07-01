const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const Patient = require("./models/Patients");

const app = express();

app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.post("/register", async (req, res) => {

    const patient = new Patient(req.body);

    await patient.save();

    res.json({
        message: "Patient Registered Successfully"
    });

});

app.get("/patients", async (req, res) => {

    const patients = await Patient.find();

    res.json(patients);

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});