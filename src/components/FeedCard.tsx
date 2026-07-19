import { useNavigate } from "react-router-dom";

interface FeedCardProps {
  post: {
    id: number;
    user: string;
    avatar: string;
    image: string;
    title: string;
    description: string;
    likes: number;
    comments: number;
    date: string;
  };
}

const FeedCard = ({ post }: FeedCardProps) => {

  const navigate = useNavigate();

  return (

    <div className="feed-card">

      <div className="feed-header">

        <img
          src={post.avatar}
          alt={post.user}
          className="avatar"
        />

        <div>

          <h4>{post.user}</h4>

          <small>{post.date}</small>

        </div>

      </div>

      <img
        src={post.image}
        alt={post.title}
        className="feed-image"
      />

      <div className="feed-content">

        <h3>{post.title}</h3>

        <p>{post.description}</p>

        <div className="feed-footer">

          <span>❤️ {post.likes}</span>

          <span>💬 {post.comments}</span>

        </div>

      </div>

    </div>

  );

};

export default FeedCard;