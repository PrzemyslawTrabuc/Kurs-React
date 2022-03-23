import React from 'react';

const CommentDetail = (props) => {
 //console.log(props)
    return(
        <div className="comment">
            <a href="/" className="avatar"><img alt="avatar" src={props.avatar_img} /></a>
            <div className="content">
                <a href="/" className="author">{props.author}</a>
                <div className="metadata">
                    <span className="date">{props.timeAgo.toLocaleString()}</span>
                </div>
                <div className="text">{props.comment_text}</div>
            </div>
        </div>
    )
}
export default CommentDetail;