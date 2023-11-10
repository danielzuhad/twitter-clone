import { createSlice } from "@reduxjs/toolkit";
import { PostType, UserType } from "../type";

export interface AuthState {
  user: UserType | null;
  token: string | null;
  posts: PostType[] | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
  posts: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },

    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },

    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error("user friends non-existent :(");
      }
    },

    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },

    setPost: (state, action) => {
      if (state.posts) {
        const updatedPosts = state.posts.map((post) => {
          if (post.id === action.payload.post._id) return action.payload.post;
          return post;
        });

        state.posts = updatedPosts;
      } else {
        console.error("Posts array is undefined :(");
      }
    },
  },
});

export const { setLogin, setLogout, setFriends, setPosts, setPost } =
  authSlice.actions;
export default authSlice.reducer;
