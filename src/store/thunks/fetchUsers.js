import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const fetchUsers = createAsyncThunk('users/fetch', async ()=> {
    const response = await axios.get('http://localhost:3005/users');
    await pause(1000); //TODO: delete this function at the end of development.
    return response.data;
});

//TODO: This function is for development purpose only.. delete this function at the end of development.
const pause = async (duration)=>{
    return new Promise((resolve)=>{
        setTimeout(resolve, duration);
    });
};

export {fetchUsers};