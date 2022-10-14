import styled from "styled-components";

export const PeopleOnlineContainer = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.94rem;

  .rightBarProfileImgContainer {
    margin-right: 0.625rem;
    position: relative;

    .rightBarProfileImg {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      object-fit: cover;
    }

    .rightBarOnline {
      width: 0.75rem;
      height: 0.75rem;
      border-radius: 50%;
      background-color: limegreen;
      position: absolute;
      top: -2px;
      right: 0;
      border: 2px solid white;
    }
  }

  .rightBarUsername {
    font-weight: 500;
  }
`;