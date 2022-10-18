import styled from "styled-components";

export const ProfileContainer = styled.main`
  display: flex;

  .profileRight {
    flex: 9;

    .profileRightTop {

      .profileCover {
        height: 20rem;
        position: relative;

        .profileCoverImg {
          width: 100%;
          height: 15.625rem;
          object-fit: cover;
        }

        .profileUserImg {
          width: 9.375rem;
          height: 9.375rem;
          border-radius: 50%;
          object-fit: cover;
          position: absolute;
          left: 0;
          right: 0;
          margin: auto;
          top: 9.375rem;
          border: 3px solid #fff;
        }
      }

      .profileInfo {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .profileInfoName {
          font-size: 1.5rem;
        }

        .profileInfoDesc {
          font-weight: 300;
        }
      }
    }

    .profileRightBottom {
      display: flex;
    }
  }
`;