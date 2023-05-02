import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "redux/axios";

const initialState =  {
posts: {
items: [],
status: 'loading'
},
tags: {
    items: [],
    status: 'loading'
    },

}
export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async () => {
    const {data} = await axios.get('/posts/');
    console.log(data)
   return data
    
    
    }
    )
    export const fetchTags = createAsyncThunk(
        'posts/fetchTags',
        async () => {
        const {data} = await axios.get('/tags/');
       return data
        
        
        }
        

        )
        export const fetchRemovePost = createAsyncThunk('posts/fetchRemovePost', async(id) => {
            await axios.delete(`/posts/${id}`)
            })


export const postsSlice = createSlice({
name: 'posts',
initialState,
reducers: {},
extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
        state.posts.items = [];
        state.posts.status = 'loading'
    });
        
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.posts.items = action.payload;
            state.posts.status ='loaded'
            
});
         builder.addCase(fetchPosts.rejected, (state) => {
            state.posts.items = [];
            state.posts.status ='error'
         });
         builder.addCase(fetchTags.pending, (state) => {
            state.tags.items = [];
            state.tags.status = 'loading'
        });
            
            builder.addCase(fetchTags.fulfilled, (state, action) => {
                state.tags.items = action.payload;
                state.tags.status ='loaded'
                
    });
             builder.addCase(fetchTags.rejected, (state) => {
                state.tags.items = [];
                state.tags.status ='error'
             })

             builder.addCase(fetchRemovePost.pending, (state, action) => {
               state.posts.items = state.posts.items.filter(obj => obj._id !== action.meta.arg)
               //Тут идёт сравнение айдишника айтэма и айдишника статьи которую я удаляю
            });
                
               
                 

}
})

export const postsReducer= postsSlice.reducer