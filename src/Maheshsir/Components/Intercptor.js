
import axios from "axios"






export const Interceptors =()=>{
    axios.interceptors.request.use((request)=>{
        console.log(request);
        return request
  })
  
  
  
  
  }