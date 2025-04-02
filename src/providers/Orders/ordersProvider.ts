import axios from "axios"

const API_URL = "http://localhost:3000"

type getListParams = {
    resource: string
}

type getDeleteOneParams = {
    resource: string,
    id: string
}

type getListOneParams ={
    resource: string,
    id: string
}

type getCreateParams ={
    resource: string,
    variable: any

}

type getUpdateParams ={
    resource: string,
    variable: any
    id: string
    
}

const ordersProvider = {

     getList: async({resource}: getListParams) => {
         const response = await axios.get(`${API_URL}/${resource}`);
         return {
            data:response.data,
            total: response.data.length
         }
    },

    getDeleteOne: async({resource, id}: getDeleteOneParams) =>{
        await axios.delete(`${API_URL}/${resource}/${id}`);
        return{
            success: true
        }
    },

    getListOne: async({resource, id}: getListOneParams) => {
        const response = await axios.get(`${API_URL}/${resource}/${id}`);
         return {
            data:response.data,
         }
    },

    getCreate: async ({ resource, variable }: getCreateParams) => {
        // Lấy danh sách hiện có
        const response = await axios.get(`${API_URL}/${resource}`);
        const data = response.data;
    
        // Tìm ID lớn nhất, rồi +1
        const maxId = data.length > 0 ? Math.max(...data.map((item: any) => Number(item.id))) : 0;
        const newId = (maxId + 1).toString(); // Chuyển về chuỗi
    
        const newData = {
            ...variable,
            id: newId, // ID mới theo thứ tự
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
        };
    
        const createResponse = await axios.post(`${API_URL}/${resource}`, newData, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("access_token") || ""}`
            }
        });
    
        return {
            data: createResponse.data
        };
    },
    
    

    getUpdate: async ({ resource, id, variable }: getUpdateParams) => {
        const updatedData = {
            ...variable,
            updated_at: new Date().toISOString(), // Tự động cập nhật thời gian sửa
        };
    
        const response = await axios.patch(`${API_URL}/${resource}/${id}`, updatedData, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("access_token") || ""}`
            }
        });
    
        return {
            data: response.data
        };
    },
    
}

export const {getList, getDeleteOne, getCreate, getListOne, getUpdate} = ordersProvider;