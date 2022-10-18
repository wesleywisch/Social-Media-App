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

    .rightBarTitle {
      font-size: 1.2rem;
      font-weight: 500;
      margin-bottom: 0.625rem;
    }

    .rightBarInfo {
      margin-bottom: 1.875rem;

      .rightBarInfoItem {
        margin-bottom: 0.625rem;

        .rightBarInfoKey {
          font-weight: 500;
          margin-right: 0.98rem;
          color: #555;
        }

        .rightBarInfoValue {
          font-weight: 300;
        }
      }
    }

    .rightBarFollowings {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .rightBarFollowing {
        display: flex;
        flex-direction: column;
        margin-bottom: 1.25rem;
        cursor: pointer;
        
        .rightBarFollowingImg {
          width: 6.25rem;
          height: 6.25rem;
          object-fit: cover;
          border-radius: .6rem;
        }

        .rightBarFollowingName {}
      }
    }
  }
`;