document.getElementById("patientForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const patient = {
        name: document.getElementById("name").value,
        admissionDate: document.getElementById("admissionDate").value,
        illness: document.getElementById("illness").value
    };

    await fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(patient)
    });

    alert("Patient Registered!");

    document.getElementById("patientForm").reset();
});

async function loadPatients() {
    const response = await fetch("/patients");
    const patients = await response.json();

    const list = document.getElementById("patientList");
    list.innerHTML = "";

    patients.forEach(patient => {
        const li = document.createElement("li");

        li.innerHTML = `
            <strong>${patient.name}</strong><br>
            Date: ${patient.admissionDate}<br>
            Illness: ${patient.illness}
        `;

        list.appendChild(li);
    });
}
