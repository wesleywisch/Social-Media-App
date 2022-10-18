import birthday from '../../assets/gift.png';
import ad from '../../assets/ad.png';
import person1 from '../../assets/person/1.jpeg';

import { Users } from '../../data/database';

import { RightBarContainer } from './styles';
import { PeopleOnline } from '../PeopleOnline';

export function RightBar() {

  function HomeRightBar() {
    return (
      <>
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
      </>
    )
  }

  function ProfileRightBar() {
    return (
      <>
        <h4 className='rightBarTitle'>User information</h4>

        <div className="rightBarInfo">
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">City:</span>
            <span className="rightBarInfoValue">New York</span>
          </div>

          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">From:</span>
            <span className="rightBarInfoValue">Madrid</span>
          </div>

          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">Relationship:</span>
            <span className="rightBarInfoValue">Single</span>
          </div>
        </div>

        <h4 className='rightBarTitle'>User friends</h4>

        <div className="rightBarFollowings">
          <div className="rightBarFollowing">
            <img
              src={person1}
              alt="Pessoa"
              className="rightBarFollowingImg"
            />

            <span className="rightBarFollowingName">John Carter</span>
          </div>
        </div>
      </>
    )
  }

  return (
    <RightBarContainer>
      <div className="rightBarWrapper">
        <ProfileRightBar />
      </div>
    </RightBarContainer>
  )
}