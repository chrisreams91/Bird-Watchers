import axios from "axios";
import { jwtDecode } from 'jwt-decode';


   const token = localStorage.getItem('jwtToken')
   const decodedToken = jwtDecode(token);
   const getUsernameFromToken = (token) => {
          const decoded = jwtDecode(token);
          return decoded.sub;
        };
   const date = new Date().toISOString();




export const createComment = async (comment_text, parentId = null) => {
          try {
            const newComments = { comment_text, parentId, username: decodedToken.sub };
            console.log(decodedToken);
            console.log(newComments);
            await axios.post("http://localhost:8080/comments/add", newComments, {
              headers: {
                Authorization: `Bearer ${token}`
              }
            });
            console.log("New comment has been added!");
          } catch (error) {
            console.error('Error adding new comment:', error);
            }
    return {
        id: Math.random().toString(36).substr(2, 9),
        body: comment_text, parentId,
        userId: "1",
        username: decodedToken.sub,
        createdAt: date,
    };
};



export const updateComment = async (comment_text) => {
    return { comment_text };
};

export const deleteComment = async () => {
    return {};
};