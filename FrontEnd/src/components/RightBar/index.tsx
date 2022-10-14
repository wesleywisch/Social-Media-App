import birthday from '../../assets/gift.png';
import ad from '../../assets/ad.png';

import { Users } from '../../data/database';

import { RightBarContainer } from './styles';
import { PeopleOnline } from '../PeopleOnline';

export function RightBar() {
  return (
    <RightBarContainer>
      <div className="rightBarWrapper">
        <div className="birthdayContainer">
          <img src={birthday} alt="Birthday" className="birthdayImg" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> hav a birthday today
          </span>
        </div>

        <img className='rightBarAd' src={ad} alt="Anúncio" />

        <h4 className="rightBarTitle">Online Friends</h4>

        <ul className="rightBarFriendList">
          {Users.map((user, key) => (
            <PeopleOnline
              key={key}
              id={user.id}
              profilePicture={user.profilePicture}
              username={user.username}
            />
          ))}
        </ul>
      </div>
    </RightBarContainer>
  )
}