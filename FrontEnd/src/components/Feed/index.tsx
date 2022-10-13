import { Share } from '../Share';
import { Post } from '../Post';

import { FeedContainer } from './styles';

export function Feed() {
  return (
    <FeedContainer>
      <div className="feedWrapper">
        <Share />
        <Post />
      </div>
    </FeedContainer>
  )
}