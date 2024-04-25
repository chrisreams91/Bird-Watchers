import { useState , useEffect } from "react";
import { getComments as getCommentsApi,
         createComment as createCommentApi,
         deleteComment as deleteCommentApi,
         updateComment as updateCommentApi} from "./api"
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import styles from '../comments.css';
import axios from "axios";
import { jwtDecode } from 'jwt-decode';

const Comments = ({ commentsUrl, currentUserId }) => {
    const [backendComments, setBackendComments] = useState([])
    const [activeComment, setActiveComment] = useState(null);
    const [userComment, setUserComment] = useState("");
    const[data, setData] = useState([]);
    const rootComments = backendComments.filter(
    (backendComment) => backendComment.parentId === null
    );
    const getReplies = commentId => {
        return backendComments.filter((backendComment) => backendComment.blog_id === commentId).sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
    };

    const getUsernameFromToken = (token) => {
          const decoded = jwtDecode(token);
          return decoded.sub;
        };
      useEffect(() => {
        const fetchComments = async () => {
          try {
            const token = localStorage.getItem('jwtToken');
            const response = await fetch('http://localhost:8080/comments/getAll', {
              headers: {
                Authorization: `Bearer ${token}`
              }
            });
            if (!response.ok) {
              throw new Error('Unauthorized');
            }
            const data = await response.json();
            setUserComment(data);
          } catch (error) {
            console.error('Error fetching blogs:', error);
          }
        };

         fetchComments();
         const intervalId = setInterval(fetchComments, 2000);
         return () => clearInterval(intervalId);
       }, []);

    const addComment = async (comment_text, parentId) => {
        createCommentApi(comment_text, parentId).then(comment => {
            setBackendComments([comment, ...backendComments]);
            setActiveComment(null);
        })
    }

    const deleteComment = (commentId) => {
        if (window.confirm('Are you sure that you want to remove that comment?')) {
            deleteCommentApi(commentId).then(() => {
                const updatedBackEndComments = backendComments.filter((backendComment) => backendComment.id !== commentId);
                setBackendComments(updatedBackEndComments);
            });
        }
    };

    const updateComment = (comment_text, commentId) => {
    updateCommentApi(comment_text, commentId).then(() => {
        const updatedBackEndComments = backendComments.map((backendComment) => {
            if (backendComment.id === commentId) {
                return { ...backendComment, body: comment_text };
            }
            return backendComment;
        });
        setBackendComments(updatedBackEndComments);
        setActiveComment(null);
    })
    }


    return (
        <div className="comments">
            <h3 className="comments-title">Comments</h3>
            <div className="comment-form-title">Write Comment</div>
            <CommentForm submitLabel="Write" handleSubmit={addComment} />
            <div className="comments-container">
                {rootComments.map((rootComment) => (
                    <Comment
                    key={rootComment.id}
                    comments={rootComment}
                    replies={getReplies(rootComment.id)}
                    currentUserId={currentUserId}
                    deleteComment={deleteComment}
                    activeComment={activeComment}
                    setActiveComment={setActiveComment}
                    addComment={addComment}
                    updateComment={updateComment}
                    />
                ))}
            </div>
        </div>
    );
};

export default Comments;