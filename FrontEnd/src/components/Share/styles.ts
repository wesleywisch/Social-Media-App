import styled from "styled-components";

export const ShareContainer = styled.div`
  width: 100%;
  height: 10.625rem;
  border-radius: .65rem;
  box-shadow: 0px 0px 16px -8px rgba(0,0,0,0.68);

  .shareWrapper {
    padding: 1.25rem;

    .shareTop {
      display: flex;
      align-items: center;

      .shareProfileImg {
        width: 3.125rem;
        height: 3.125rem;
        border-radius: 50%;
        object-fit: cover;
        margin-right: 0.625rem;
      }

      .shareInput {
        border: none;
        width: 80%;
        outline: none;
      }
    }

    .shareHr {
      margin: 1.25rem;
    }

    .shareBottom {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .shareOptions {
        display: flex;
        margin-left: 1.25rem;

        .shareOption {
          display: flex;
          align-items: center;
          margin-right: 0.93rem;
          cursor: pointer;

          .shareIcon {
            font-size: 1.125rem;
            margin-right: 3px;
          }

          .shareOptionText {
            font-size: 0.875rem;
            font-weight: 500;
          }
        }
      }

      .shareButton {
        border: none;
        padding: 0.43rem;
        border-radius: .3rem;
        background-color: green;
        font-weight: 500;
        margin-right: 1.25rem;
        cursor: pointer;
        color: #fff;
      }
    }
  }
`;