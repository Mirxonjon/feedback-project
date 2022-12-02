import "../add-comment/add-comment";
import "./comments.scss";


const Comments = ({currentFeedback}) => {
  
  
  const currentComments = currentFeedback?.comments;

    return(
    <div className="comments">
      <h5><span>{currentFeedback?.comments?.length} </span>comments</h5>
      {currentComments?.map(comment => (
        <div key={comment.id} className="comment">
          <div className="comment-top__content">
            <div className="user-data">
            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzrYpohjhQQnvWmiEpwmAhpgkN-weqRYIjCQ&usqp=CAU"} alt="user img" />
              <div>
                <h6>{comment.user.name}</h6>
                <p>@{comment.user.username}</p>
              </div>
            </div>
            <span>reply</span>
          </div>
          <p className="comment-content">{comment.content}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Comments;
