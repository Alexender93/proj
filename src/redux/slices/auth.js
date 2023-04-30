import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'redux/axios';

const initialState = {
data: null,
status: 'loading'
}
export const fetchRegister = createAsyncThunk(
    'auth/fetchRegister', 
    async(params) => {
  const {data} = await axios.post('/auth/register', params)  
  
  return data
})
export const fetchAuth = createAsyncThunk(
    'auth/fetchAuth', 
    async(params) => {
  const {data} = await axios.post('/auth/login', params)  
  return data
})
export const fetchAuthMe = createAsyncThunk(
'auth/fetchAuthMe',
async () => {
const {data} = await axios.get('/auth/me')
return data
}
)

const authSlice = createSlice({
name: 'auth',
initialState,
reducers: {
logout: (state) => {
state.data = null

}

},

    extraReducers: (builder) => {
        builder.addCase(fetchAuth.pending, (state) => {
            state.data = null;
            state.status = 'loading'
        });
            
            builder.addCase(fetchAuth.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status ='loaded'
                
    });
             builder.addCase(fetchAuth.rejected, (state) => {
                state.data = null;
                state.status ='error'
             });
             builder.addCase(fetchAuthMe.pending, (state) => {
                state.data = null;
                state.status = 'loading'
            });
                
                builder.addCase(fetchAuthMe.fulfilled, (state, action) => {
                    state.data = action.payload;
                    state.status ='loaded'
                    
        });
                 builder.addCase(fetchAuthMe.rejected, (state) => {
                    state.data = null;
                    state.status ='error'
                 });
                 builder.addCase(fetchRegister.pending, (state) => {
                    state.data = null;
                    state.status = 'loading'
                });
                    
                    builder.addCase(fetchRegister.fulfilled, (state, action) => {
                        state.data = action.payload;
                        state.status ='loaded'
                        
            });
                     builder.addCase(fetchRegister.rejected, (state) => {
                        state.data = null;
                        state.status ='error'
                     });
             
                    
       
                    
               
        }
    })
    export const userData = (state) => state.auth.data.fullName
    export const selectIsAuth = (state) => Boolean(state.auth.data)
   export const authReducer = authSlice.reducer
    export const {logout} = authSlice.actions


