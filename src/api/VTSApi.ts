let axios = require('axios');
import Vue from "vue";

class VTSApi {

    baseUrl: string = 'http://localhost:8080/api/v1/';
    DogTrackUrl: string = 'https://api.tcl-move.com//v1.0/tps/';
    api = {
        login : {method:'post', url: 'auth/login', params: []},
        get_widget: {method:'get', url: 'widgets', params:[]},
        post_auth:{method:'post', url: 'auth', params:[]},
        get_QRcode: {method:'get', url: 'auth', params:[]},
        get_Polling: {method:'post', url: 'auth', params:[]},
        get_Polling_res: {method:'get', url: 'auth', params:[]},
        event: {method: 'post', url: 'event' , params: []},
        //////
        get_dog_authorize: {method:'get', url: 'oauth/authorize', params:[]},
        post_dog_authorize: {method:'post', url: 'oauth/authorize', params:[]},
        post_dog_token: {method:'post', url: 'oauth/token', params:[]},
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

    public getDogTrackConfig(apiCall:string, data : any, query : string = '') {
        let apiMethod = this.api[apiCall];
        return {
            method: apiMethod['method'],
            url: this.DogTrackUrl + apiMethod['url'] + query,
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

    /////
    public get_dog_authorize(client_id:any): Promise<any>{
        let config = this.getDogTrackConfig('get_dog_authorize','','response_type=code/client_id=16173532589628348469/redirect_uri=http://localhost:8081/dogtracker/callback/scope=all/state=xyz');
        return axios(config);
    }

    public post_dog_authorize(client_id:any): Promise<any>{
        let config = this.getDogTrackConfig('post_dog_authorize','');
        return axios(config);
    }
}

export default VTSApi;