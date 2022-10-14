import { PeopleOnlineContainer } from './styles';

import { UsersProps } from '../../data/database';

export function PeopleOnline({ id, profilePicture, username } : UsersProps) {
  return (
    <PeopleOnlineContainer className="rightBarFriend">
      <div className="rightBarProfileImgContainer">
        <img src={profilePicture} alt={username} className="rightBarProfileImg" />

        <span className="rightBarOnline"></span>
      </div>

      <span className="rightBarUsername">{username}</span>
    </PeopleOnlineContainer>
  )
}