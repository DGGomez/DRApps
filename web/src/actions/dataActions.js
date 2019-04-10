import axios from 'axios';

export const readData = (callback) => async () =>{
    try{
        console.log("HERE");
        const res = await axios.get(`/read`);
        console.log(res);
        callback();
    }
    catch(err){
        console.log(err);
    }
};