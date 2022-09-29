import {
  Search,
  Person,
  Chat,
  Notifications
} from '@material-ui/icons';

import person1Img from '../../assets/person/1.jpeg';

import {
  TopBarContainer,
  TopBarLeft,
  TopBarCenter,
  TopBarRight
} from './styles';

export function TopBar() {
  return (
    <TopBarContainer>
      <TopBarLeft>
        <span className="logo">Social Media</span>
      </TopBarLeft>

      <TopBarCenter>
        <div className="searchBar">
          <Search className='searchIcon' />
          <input
            type="text"
            className="searchInput"
            placeholder='Search for friend, post or video'
          />
        </div>
      </TopBarCenter>

      <TopBarRight>
        <div className="topBarLinks">
          <span className="topBarLink">HomePage</span>
          <span className="topBarLink">Timeline</span>
        </div>

        <div className="topBarIcons">
          <div className="topBarIconItem">
            <Person />
            <span className="topBarIconBadge">1</span>
          </div>

          <div className="topBarIconItem">
            <Chat />
            <span className="topBarIconBadge">2</span>
          </div>

          <div className="topBarIconItem">
            <Notifications />
            <span className="topBarIconBadge">1</span>
          </div>
        </div>

        <img src={person1Img} alt="Foto de perfil" className="topBarImg" />
      </TopBarRight>
    </TopBarContainer>
  )
}