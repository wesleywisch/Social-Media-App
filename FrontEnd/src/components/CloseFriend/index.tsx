import { CloseFriendContainer } from './styles';

import { UsersProps } from '../../data/database';

export function CloseFriend({ id, profilePicture, username }: UsersProps) {
  return (
    <CloseFriendContainer className="sidebarFriend">
      <img src={profilePicture} alt={username} className="sidebarFriendImg" />
      <span className="sidebarFriendName">
        {username}
      </span>
    </CloseFriendContainer>
  )
}