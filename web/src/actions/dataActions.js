import axios from 'axios';

export const readData = (callback) => async () =>{
    try{
        const res = await axios.get(`/read`);
        
        callback();
    }
    catch(err){
        console.log(err);
    }
};