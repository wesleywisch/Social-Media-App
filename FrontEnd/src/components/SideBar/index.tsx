import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School
} from '@material-ui/icons';

import { Users } from '../../data/database';

import { CloseFriend } from '../CloseFriend';

import { SideBarContainer } from './styles';

type SidebarItemsProps = {
  icon: React.ReactNode,
  title: string;
}

export function SideBar() {
  const sidebarItems = [
    {
      icon: <RssFeed className='sidebarIcon' />,
      title: 'Feed',
    },
    {
      icon: <Chat className='sidebarIcon' />,
      title: 'Chats',
    },
    {
      icon: <PlayCircleFilledOutlined className='sidebarIcon' />,
      title: 'Vídeos',
    },
    {
      icon: <Group className='sidebarIcon' />,
      title: 'Groups',
    },
    {
      icon: <Bookmark className='sidebarIcon' />,
      title: 'Bookmarks',
    },
    {
      icon: <HelpOutline className='sidebarIcon' />,
      title: 'Questions',
    },
    {
      icon: <WorkOutline className='sidebarIcon' />,
      title: 'Jobs',
    },
    {
      icon: <Event className='sidebarIcon' />,
      title: 'Events',
    },
    {
      icon: <School className='sidebarIcon' />,
      title: 'Courses',
    },
  ] as SidebarItemsProps[];

  return (
    <SideBarContainer>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          {sidebarItems.map((item, key) => (
            <li key={key} className="sidebarListItem">
              {item.icon}
              <span className="sidebarListItemText">{item.title}</span>
            </li>
          ))}
        </ul>

        <button className="sidebarButton">
          Show more
        </button>

        <hr className='sidebarHr' />

        <ul className="sidebarFriendList">
          {Users.map((user, key) => (
            <CloseFriend 
              key={key}
              id={user.id}
              profilePicture={user.profilePicture}
              username={user.username}
            />
          ))}
        </ul>
      </div>
    </SideBarContainer>
  )
}