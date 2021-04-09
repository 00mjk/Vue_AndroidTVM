declare global {
    interface Widget {
        alert_id: number;
        aux_id: number;
        customer_id: number;
        days: number;
        description: string;
        email: string;
        engine_limit: number;
        friday_end: string;
        friday_start: string;
        geofence_id: number;
        group_id: number;
        idle_limit: number;
        level: string;
        monday_end: string;
        monday_start: string;
        name: string;
        saturday_end: string;
        saturday_start: string;
        speedLimitMargin: number;
        speed_limit: number;
        sunday_end: string;
        sunday_start: string;
        thursday_end: string;
        thursday_start: string;
        timezone: string;
        tuesday_end: string;
        tuesday_start: string;
        txt: string;
        type: string;
        vehicle_id: number;
        wednesday_end: string;
        wednesday_start: string;
    }
}

export default Widget;