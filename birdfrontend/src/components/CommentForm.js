import { useState, useEffect } from "react";
import styles from '../comments.css';

const CommentForm = ({ handleSubmit, submitLabel, hasCancelButton = false, initialText = '', handleCancel }) => {
    const [comment_text, setCommentText] = useState(initialText);
    const isTextareaDisabled = comment_text.length === 0;
    const onSubmit = event => {
        event.preventDefault();
        handleSubmit(comment_text);
        setCommentText("");
    };
    return (
    <form onSubmit={onSubmit}>
        <textarea className="comment-form-textarea" value={comment_text} onChange={(e) => setCommentText(e.target.value)}></textarea>
        <button className="comment-form-button" disabled={isTextareaDisabled}>
        {submitLabel}
        </button>
        {hasCancelButton && (
            <button type="button" className="comment-form-button" onClick={handleCancel}/>
        )}
    </form>
    )
};

export default CommentForm;