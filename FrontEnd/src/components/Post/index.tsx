import { MoreVert } from '@material-ui/icons';

import person from '../../assets/person/1.jpeg';
import post from '../../assets/post/1.jpeg';
import like from '../../assets/like.png';
import heart from '../../assets/heart.png';

import { PostContainer } from './styles';

export function Post() {
  return (
    <PostContainer>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className='postProfileImg' src={person} alt="pessoa" />
            <span className="postUsername">Safak kocaoglu</span>
            <span className="postDate">5 mins ago</span>
          </div>

          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>

        <div className="postCenter">
          <span className="postText">Hey! Its my first post :)</span>
          <img className='postImg' src={post} alt="post" />
        </div>

        <div className="postBottom">
          <div className="postBottomLeft">
            <img className='LikeIcon' src={like} alt="Like" />
            <img className='LikeIcon' src={heart} alt="Coração" />
            <span className="postLikeCounter">32 people like it</span>
          </div>

          <div className="postBottomRight">
            <span className="postCommentText">9 comments</span>
          </div>
        </div>
      </div>
    </PostContainer>
  )
}