// Remove the hardcoded dates and the '?' from the base URL
const ReportBase_URL = 'https://localhost:7270/api/Transaction/report';

async function getTransactionReport(startDate, endDate) {
    try {
        // This now creates: .../report?startDate=2026-01-01&endDate=2026-01-15
        const response = await fetch(`${ReportBase_URL}?startDate=${startDate}&endDate=${endDate}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data; 
        
    } catch (error) {
        console.error("Could not fetch report data:", error);
       return { 
            transactions: [], 
            totalIncome: 0, 
            totalExpense: 0 
        };
    }
}