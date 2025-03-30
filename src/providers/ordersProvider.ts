import axios from "axios"


type getListParams = {
    resource: string
}

type getDeleteParams = {
    resource: string
    id: number | string
}

type getListOneParams ={
    resource: string
    id: number | string
}

type getCreateParams = {
    resource: string
    dataOrders: any
}

type getUpdateParams = {
    resource: string
    dataOrders: any
    id: Number|string
}
const API_URL = "http://localhost:3000"

const ordersProvider = {
    getList: async({resource}:getListParams ) => {
       const response = await axios.get(`${API_URL}/${resource}`);
       return{
        data: response.data,
        total: response.data.length
       }
    },

    getListOne: async({resource, id}:getListOneParams) => {
        const response = await axios.get(`${API_URL}/${resource}/${id}`);
        return{
            data: response.data
        }
    },

    getCreate: async({resource, dataOrders}:getCreateParams ) => {
        const response = await axios.post(`${API_URL}/${resource}`, dataOrders);
        return{
            data: response.data,
           }
    },

    getDelete: async({resource,id}: getDeleteParams) => {
       await axios.delete(`${API_URL}/${resource}/${id}`);
       return{
        success: true
       }
    },

    getUpdate: async({resource, id, dataOrders}:getUpdateParams) => {
       const response = await axios.put(`${API_URL}/${resource}/${id}`, dataOrders);
       return{
        data: response.data,
       }
    }

}

export const {getList, getCreate, getDelete, getListOne, getUpdate} = ordersProvider;