import Comments from "./Comments.js";
import styles from '../comments.css';
import CommentForm from "./CommentForm.js"

const Comment = ({ comments, replies, currentUserId , deleteComment, activeComment, addComment, updateComment, setActiveComment, parentId = null}) => {
    const fiveMinutes = 300000;
    const timePassed = new Date() - new Date(comments.createdAt) > fiveMinutes;
    const canReply = Boolean(currentUserId);
    const canEdit = currentUserId === comments.userId && !timePassed;
    const canDelete = currentUserId === comments.userId && !timePassed;
    const createdAt = new Date(comments.createdAt).toLocaleDateString();
    const isReplying =
    activeComment &&
    activeComment.type === "replying" &&
    activeComment.id === comments.id;
    const isEditing =
    activeComment &&
    activeComment.type === "editing" &&
    activeComment.id === comments.id;
    const replyId = parentId ? parentId : comments.id;
    return (
        <div key ={comments.id} className="comment">
            <div className="comment-image-container">
                <img src="/user-icon.png"/>
            </div>
            <div className="comment-right-part">
                <div className="comment-content">
                    <div className="comment-author">{comments.username}</div>
                    <div>{createdAt}</div>
                </div>
                {!isEditing && <div className="comment-text">{comments.body}</div>}
                {isEditing && (
                    <CommentForm
                    submitLabel="Update"
                    hasCancelButton
                    initialText={comments.body}
                    handleSubmit={(comment_text) => updateComment(comment_text, comments.id)}
                    handleCancel={() => setActiveComment(null)}
                    />
                )}
                <div className="comment-actions">
                    {canReply && (
                    <div className="comment-action" onClick={() => setActiveComment({ id: comments.id, type: "replying" })}>Reply</div>)}
                    {canEdit && (
                    <div className="comment-action" onClick={() => setActiveComment({ id: comments.id, type: "editing"})}>Edit</div>)}
                    {canDelete && (
                    <div className="comment-action" onClick={() => deleteComment(comments.id)}>Delete</div>)}
                </div>
                {isReplying && (
                    <CommentForm
                    submitLabel="Reply"
                    hasCancelButton
                    handleSubmit={(comment_text) => addComment(comment_text, replyId)}
                    />
                )}
                {replies.length > 0 && (
                    <div className="replies">
                    {replies.map((reply) => (
                        <Comment
                        comments={reply}
                        key={reply.id}
                        replies={[]}
                        currentUserId={currentUserId}
                        deleteComment={deleteComment}
                        addComment={addComment}
                        parentId={comments.id}
                        updateComment={updateComment}
                        />
                    ))}
                    </div>
                )}
            </div>
        </div>
    )
};

export default Comment;