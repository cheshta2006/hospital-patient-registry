const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(__dirname));

app.post("/register", (req, res) => {
    const patient = req.body;

    let patients = [];

    if (fs.existsSync("patients.json")) {
        patients = JSON.parse(fs.readFileSync("patients.json"));
    }

    patients.push(patient);

    fs.writeFileSync(
        "patients.json",
        JSON.stringify(patients, null, 2)
    );

    res.send("Patient Registered Successfully");
});

app.get("/patients", (req, res) => {
    const patients = JSON.parse(
        fs.readFileSync("patients.json")
    );

    res.json(patients);
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});