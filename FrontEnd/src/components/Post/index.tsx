import { useState } from 'react';
import { MoreVert } from '@material-ui/icons';

import likeImg from '../../assets/like.png';
import heart from '../../assets/heart.png';

import { PostProps, Users } from '../../data/database';

import { PostContainer } from './styles';

export function Post({ comment, date, id, like, photo, userId, desc }: PostProps) {
  const [clickAddLike, setClickAddLike] = useState(like);
  const [isLiked, setIsLiked] = useState(false);

  const userName = Users.filter(user => user.id === userId)[0].username
  const photoProfile = Users.filter(user => user.id === userId)[0].profilePicture

  function handleAddLike() {
    setClickAddLike(isLiked ? clickAddLike - 1 : clickAddLike + 1);
    setIsLiked(!isLiked)
  }

  return (
    <PostContainer>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className='postProfileImg' src={photoProfile} alt="pessoa" />
            <span className="postUsername">{userName}</span>
            <span className="postDate">{date}</span>
          </div>

          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>

        <div className="postCenter">
          {desc && <span className="postText">{desc}</span>}
          <img className='postImg' src={photo} alt="post" />
        </div>

        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className='LikeIcon'
              src={likeImg}
              alt="Like"
              onClick={handleAddLike}
            />

            <img
              className='LikeIcon'
              src={heart}
              alt="Coração"
              onClick={handleAddLike}
            />

            <span className="postLikeCounter">{clickAddLike} people like it</span>
          </div>

          <div className="postBottomRight">
            <span className="postCommentText">{comment} comments</span>
          </div>
        </div>
      </div>
    </PostContainer>
  )
}