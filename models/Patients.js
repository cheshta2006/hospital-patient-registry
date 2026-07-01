const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
    name: String,
    admissionDate: String,
    illness: String
});

module.exports = mongoose.model("Patient", patientSchema);