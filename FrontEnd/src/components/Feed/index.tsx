import { Posts } from '../../data/database';

import { Share } from '../Share';
import { Post } from '../Post';

import { FeedContainer } from './styles';

export function Feed() {
  return (
    <FeedContainer>
      <div className="feedWrapper">
        <Share />
        {Posts.map((post, key) => (
          <Post 
            key={key}
            comment={post.comment}
            date={post.date}
            id={post.id}
            like={post.like}
            photo={post.photo}
            userId={post.userId}
            desc={post.desc}
          />
        ))}
      </div>
    </FeedContainer>
  )
}