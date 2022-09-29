import { TopBar } from '../../components/TopBar';
import { SideBar } from '../../components/SideBar';
import { Feed } from '../../components/Feed';
import { RightBar } from '../../components/RightBar';

import { HomeContainer } from './styles';

export function Home() {
  return (
    <>
      <TopBar />

      <HomeContainer>
        <SideBar />
        <Feed />
        <RightBar />
      </HomeContainer>
    </>
  )
}