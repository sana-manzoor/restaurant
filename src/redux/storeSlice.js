import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRestaurant=createAsyncThunk('restaurantSlice/fetchRestaurant',()=>{
    return axios.get('/restaurants.json').then(res=>res.data.restaurants)
})

  const storeSlice=createSlice({
    name:'restaurantSlice',
    initialState:{
        loading:false,
        allRestaurants:[],
        error:''
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchRestaurant.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(fetchRestaurant.fulfilled,(state,action)=>{
            state.loading=false
            state.allRestaurants=action.payload
            state.error=""
        })
        builder.addCase(fetchRestaurant.rejected,(state,action)=>{
            state.loading=false
            state.allRestaurants=[]
            state.error=action.error.message
        })
    }
})

export default storeSlice.reducer