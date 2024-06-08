
import instance from "../config/axiosConfig";



export const vehiclesRegistereds = [
    { model: 'Tesla Model S', connector: 'Type 2', battery: '100 kWh', image: "./allCars/car1.png" },
    { model: 'Nissan Leaf', connector: 'CHAdeMO', battery: '40 kWh', image: "./allCars/car2.png" },
    { model: 'BMW i3', connector: 'CCS Combo', battery: '42.2 kWh', image: "./allCars/car3.webp" }
  ];

export async function VerifyCredentials(email, password){
    const result = await instance.post("/user/login", {email, password});
    if(result.status === 200){
        const data = result.data;
        
        localStorage.setItem("key", JSON.stringify(data));
        return true;
    }
    else{
        return false;
    }
}

export async function GetAllPoints(lat, lon){
    const allPoints = await instance.get(`/point/get?lat=${lat}&lon=${lon}`)
    return allPoints.data;
}
export async function AddVehicle({model, connector, battery}){
    try{
        
        const c = JSON.parse(localStorage.getItem("key"));
        const allPoints = await instance.post("/vehicle/addvehicle", {
            battery,
            connector,
            model,
            ownerId: c.id
        })
        return allPoints.data;  
    }
    catch(e){
        
    }
}

export async function getAllVehicleById(){

    const c = JSON.parse(localStorage.getItem("key"));
    console.log(c)
    const result = await instance.get(`/vehicle/get/${c.id}`)
    return result.data;
}

export async function getAllRecharges(){

    const c = JSON.parse(localStorage.getItem("key"));

    const result = await instance.get(`/recharge/all/${c.id}`)
    return result.data;
}

export async function deleteVehicleById(id){
    try{
    const result = await instance.delete(`/vehicle/delete/${id}`)
    console.log(result, result.status)
    return result.status === 200 ? true : false;
    }
    catch(e){
        console.log(e)
        return false;
    }
}


export async function GerarCobranca(pointId, value, vehicleId){
    
    const c = JSON.parse(localStorage.getItem("key"));
    const result = await instance.post(`/payment/qrcode`, {
        clientId: c.id,
        pointId,
        value,
        vehicleId
    })
    console.log(result)
    return result.data;
}