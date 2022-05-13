import React from "react";
import { useState } from 'react';

const AddComment = () => {
    const [comments, setComments] = useState(
		[
			{
				id: 1,
				name: 'Victor',
				comment: "Welcome to my Comment Generator!",
			}
		]
	)
    console.log(comments);
    function clickedComment() {
        let comment = prompt("comment: ");
        let name = prompt("name: ");
        let id = Math.random() * (1, 100000000) + 1;
        setComments([...comments , { id, name, comment }]);
        return (
            comments
        )
    }
    function logComments() {
        console.log(comments);
    }
    return (
        <div className="main">
            <button onClick={clickedComment} className="commentButton"> 
                <h1>Add a Comment</h1>
            </button>
            <button onClick={logComments} className="commentButton"> 
                <h1>console.log comments</h1>
            </button>
            <h1 className="commenttitle">Comments</h1>
            <h1 className="comments">
                {comments.map(comment=>(<div>Comment: <p className="actualcomment">{comment.comment}</p> Name: <p className="actualcomment">{comment.name}</p></div>))}
            </h1>
        </div>
    )
}

export default AddComment;