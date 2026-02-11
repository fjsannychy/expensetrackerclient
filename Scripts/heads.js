const HeadsBASE_URL = "https://localhost:7270/api/Head";
/* =======================
   GET all heads
   ======================= */
 async function getAllHeads() {
    const response = await fetch(HeadsBASE_URL);
    return await response.json();
}

/* =======================
   GET head by HeadID
   ======================= */
async function getHeadById(id) {
    const response = await fetch(`${HeadsBASE_URL}/${id}`);
    return await response.json();
}

/* =======================
   CREATE new head
   ======================= */
async function createHead(head) {
    const response = await fetch(HeadsBASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(head)
    });

    return await response.json();
}

/* =======================
   UPDATE head
   ======================= */
async function updateHead(id, head) {
    const response = await fetch(`${HeadsBASE_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(head)
    });

    return await response.ok;
}

/* =======================
   DELETE head
   ======================= */
async function deleteHead(id) {
    const response = await fetch(`${HeadsBASE_URL}/${id}`, {
        method: "DELETE"
    });

    return response.ok;
}
