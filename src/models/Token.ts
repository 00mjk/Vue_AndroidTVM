declare global {
    interface Token {
        alert_id: number;
        aux_id: number;
        customer_id: number;
        days: number;
    }
}

export default Token;