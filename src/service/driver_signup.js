import { myaxios } from "./helper";

export const registration = (Admin) =>{
    return myaxios.post("/api/drivers/register").then((response)=>response.json());
};