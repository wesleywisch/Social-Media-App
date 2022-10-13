import styled from "styled-components";

export const PostContainer = styled.div`
  width: 100%;
  border-radius: 0.625rem;
  box-shadow: 0px 0px 16px -8px rgba(0,0,0,0.68);
  margin: 1.875rem 0;

  .postWrapper {
    padding: 0.625rem;

    .postTop {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .postTopLeft {
        display: flex;
        align-items: center;

        .postProfileImg {
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          object-fit: cover;
        }

        .postUsername {
          font-size: 0.93rem;
          font-weight: 500;
          margin: 0 0.625rem;
        }

        .postDate {
          font-size: 0.75rem;
        }
      }

      .postTopRight {
        cursor: pointer;
      }
    }

    .postCenter {
      margin: 1.25rem 0;

      .postImg {
        width: 100%;
        margin-top: 1.25rem;
        max-height: 31.25rem;
        object-fit: contain;
      }
    }

    .postBottom {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .postBottomLeft {
        display: flex;
        align-items: center;

        .LikeIcon {
          width: 1.5rem;
          height: 1.5rem;
          margin-right: 0.3rem;
          cursor: pointer;
        }

        .postLikeCounter {
          font-size: 0.93rem;
        }        
      }

      .postBottomRight {
        .postCommentText{
          border-bottom: 1px dashed gray;
          font-size: 0.93rem;
          cursor: pointer;
        }
      }
    }
  }
`;