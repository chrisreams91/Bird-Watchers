import axios from "axios";
import { jwtDecode } from 'jwt-decode';
import BlogData from "./EnterBlogData";



   const token = localStorage.getItem('jwtToken')
   let decodedToken = null;
   if (token) {
       try {
           decodedToken = jwtDecode(token);
       } catch (error) {
           console.error('Error decoding token:', error);
       }
   }

   const getUsernameFromToken = (token) => {
       if (token) {
           const decoded = jwtDecode(token);
           return decoded.sub;
       }
       return null;
   };


      function getCurrentDate() {
          const currentDate = new Date();
          const year = currentDate.getFullYear();
          const month = String(currentDate.getMonth() + 1).padStart(2, '0');
          const day = String(currentDate.getDate()).padStart(2, '0');
          return `${year}-${month}-${day}`;
        }


export const createComment = async (comment_text, parentId = null, fk_blog_id) => {
          try {
            const currentDate = getCurrentDate();
            const newComments = { comment_text, parentId, fk_blog_id, username: decodedToken.sub, date: currentDate };
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
        date: getCurrentDate(),
        fk_blog_id
    };
};



export const updateComment = async (comment_text) => {
    return { comment_text };
};

export const deleteComment = async () => {
    return {};
};