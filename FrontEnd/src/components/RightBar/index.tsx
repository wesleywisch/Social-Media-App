import birthday from '../../assets/gift.png';
import ad from '../../assets/ad.png';
import person from '../../assets/person/3.jpeg';

import { RightBarContainer } from './styles';

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
          <li className="rightBarFriend">
            <div className="rightBarProfileImgContainer">
              <img src={person} alt="Pessoa" className="rightBarProfileImg" />

              <span className="rightBarOnline"></span>
            </div>

            <span className="rightBarUsername">John Carter</span>
          </li>
        </ul>
      </div>
    </RightBarContainer>
  )
}