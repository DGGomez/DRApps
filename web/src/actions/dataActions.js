import axios from 'axios';

export const readData = () => async dispatch =>{
    try{
        console.log("HERE");
        const res = await axios.get(`/read`);
        console.log(res);
        dispatch({type: 'get_data', payload: res.data })
    }
    catch(err){
        console.log(err);
    }
};