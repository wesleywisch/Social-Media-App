import { Feed } from '../../components/Feed';
import { RightBar } from '../../components/RightBar';
import { SideBar } from '../../components/SideBar';
import { TopBar } from '../../components/TopBar';

import post3 from '../../assets/post/3.jpeg';
import person7 from '../../assets/person/7.jpeg';

import { ProfileContainer } from './styles';

export function Profile() {
  return (
    <>
      <TopBar />

      <ProfileContainer>
        <SideBar />

        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className='profileCoverImg' src={post3} alt="Post" />
              <img className='profileUserImg' src={person7} alt="User" />
            </div>

            <div className="profileInfo">
              <h4 className='profileInfoName'>Safak Kocaoglu</h4>
              <span className='profileInfoDesc'>Desc</span>
            </div>
          </div>

          <div className="profileRightBottom">
            <Feed />
            <RightBar />
          </div>
        </div>
      </ProfileContainer>
    </>
  )
}