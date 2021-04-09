let axios = require('axios');
import Vue from "vue";

class VTSApi {

    baseUrl: string = 'http://localhost:8080/api/v1/';
    api = {
        login : {method:'post', url: 'auth/login', params: []},
        get_widget: {method:'get', url: 'widgets', params:[]},
        post_auth:{method:'post', url: 'auth', params:[]},
        get_QRcode: {method:'get', url: 'auth', params:[]},
        get_Polling: {method:'post', url: 'auth', params:[]},
        get_Polling_res: {method:'get', url: 'auth', params:[]},
     
        event: {method: 'post', url: 'event' , params: []},
    };

    public getConfig(apiCall:string, data : any, query : string = '') {
        // @ts-ignore
        let apiMethod = this.api[apiCall];
        return {
            method: apiMethod['method'],
            url: this.baseUrl + apiMethod['url'] + query,
            headers: {
                'Content-Type': 'application/json',
            }
        };
    }

    public login(email:string, password:string) {
        let data = JSON.stringify({"email": email, "password": password});
        console.log("login_data", data);
        let config = this.getConfig('login', data);
        console.log("login_config", config);
        return axios(config);
    }

    public event(data:any){
        let config = this.getConfig('event', data);
        return axios(config);
    }

    public get_widget() : Promise<any> {
        let config = this.getConfig('get_widget','');
        return axios(config);
    }

    public post_auth() : Promise<any> {
        let config = this.getConfig('post_auth','');
        return axios(config);
    }
    
    public get_QRcode(token:any) : Promise<any> {
        let config = this.getConfig('get_QRcode','', `/${token}/qrcode`);
        return axios(config);
    }

    public get_Polling() : Promise<any> {
        let config = this.getConfig('get_Polling','');
        return axios(config);
    }
    public get_pol_result(token:any) : Promise<any> {
        let config = this.getConfig('get_Polling_res','',`/${token}/result`);
        return axios(config);
    }

}

export default VTSApi;