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


export const contact = (name, email, message, token, callback) => async dispatch =>{
    var cm = {
        user: name,
        sender: email,
        msg: message
    }
    
    try{
        const res = await axios.post(`/send`,{cm},{headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-XSRF-TOKEN': token
            }
        });
        callback();
    }
    catch(err){
        console.log(err);
    }
};