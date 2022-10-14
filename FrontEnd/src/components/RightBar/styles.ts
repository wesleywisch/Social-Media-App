import styled from "styled-components";

export const RightBarContainer = styled.div`
  flex: 3.5;

  .rightBarWrapper {
    padding: 1.25rem 1.25rem 0 0;

    .birthdayContainer {
      display: flex;
      align-items: center;

      .birthdayImg {
        width: 2.5rem;
        height: 2.5rem;
        margin-right: 0.625rem;
      }

      .birthdayText {
        font-weight: 300;
        font-size: 0.94rem;
      }
    }

    .rightBarAd {
      width: 100%;
      border-radius: 0.625rem;
      margin: 1.875rem 0;
    }

    .rightBarTitle {
      margin-bottom: 1.25rem;
    }

    .rightBarFriendList {}
  }
`;