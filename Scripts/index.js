const TransactionBASE_URL = 'https://localhost:7270/api/Transaction'


/* =======================
   GET all Transactions
   ======================= */
 async function getAllTransactions() {
    const response = await fetch(TransactionBASE_URL);
    return await response.json();
}

/* =======================
   GET Transaction by TransactionID
   ======================= */
async function getTransactionById(id) {
    const response = await fetch(`${TransactionBASE_URL}/${id}`);
    return await response.json();
}

/* =======================
   CREATE new Transaction
   ======================= */
async function createTransaction(Transaction) {
    const response = await fetch(TransactionBASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(Transaction)
    });

    return await response.json();
}

/* =======================
   UPDATE Transaction
   ======================= */
async function updateTransaction(id, Transaction) {
    const response = await fetch(`${TransactionBASE_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(Transaction)
    });

    return await response.ok;
}

/* =======================
   DELETE Transaction
   ======================= */
async function deleteTransaction(id) {
    const response = await fetch(`${TransactionBASE_URL}/${id}`, {
        method: "DELETE"
    });

    return response.ok;
}
