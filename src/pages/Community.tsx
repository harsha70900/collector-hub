import FeedCard from "../components/FeedCard";
import { posts } from "../data/posts";

const Community = () => {

  return (

    <div className="page">

      <h1 className="page-title">

        Community Feed

      </h1>

      <div className="feed-grid">

        {posts.map((post) => (

          <FeedCard
            key={post.id}
            post={post}
          />

        ))}

      </div>

    </div>

  );

};

export default Community;