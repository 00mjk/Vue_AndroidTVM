declare global {
    interface MapAlert {
        id: string;
        time: string;
        header: string;
        type: string;
        group: string;
        content: string;
        level: string;
        latLng: any,
    }
}
export default MapAlert;