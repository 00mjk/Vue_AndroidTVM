import { ResData } from '@/models/ResData';
import axios, { AxiosResponse } from 'axios'

async function callApiPlaceHolder(): Promise<AxiosResponse<Array<ResData>>> {
    const url = 'http://jsonplaceholder.typicode.com/posts';
    const resp = await axios.get<Array<ResData>>(url);
    console.log(resp);
    return resp;
}

async function callTwitterLogin(): Promise<AxiosResponse<any>> {
    const url = 'http://jsonplaceholder.typicode.com/posts';
    const resp = await axios.get<Array<ResData>>(url);
    console.log(resp);
    return resp;
}

export { callApiPlaceHolder }
