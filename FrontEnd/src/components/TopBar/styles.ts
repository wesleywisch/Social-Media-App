import styled from "styled-components";

export const TopBarContainer = styled.header`
  width: 100%;
  height: 3.125rem;
  background-color: #1877f2;

  display: flex;
  align-items: center;

  position: sticky;
  top: 0;
`;

export const TopBarLeft = styled.div`
  flex: 3;

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: #fff;

    margin-left: 1.25rem;

    cursor: pointer;
  }
`;

export const TopBarCenter = styled.div`
  flex: 5;

  .searchBar {
    width: 100%;
    height: 1.875rem;

    background-color: #fff;

    border-radius: 1.875rem;

    display: flex;
    align-items: center;

    .searchIcon {
      font-size: 1.25rem !important;

      margin-left: 0.625rem;
    }

    .searchInput {
      width: 70%;

      border: none;

      &:focus {
        outline: none;
      }
    }
  }
`;

export const TopBarRight = styled.div`
  flex: 4;

  display: flex;
  align-items: center;
  justify-content: space-around;

  color: #fff;

  .topBarLinks {
    .topBarLink {
      margin-right: 0.625rem;

      font-size: 0.875rem;

      cursor: pointer;
    }
  }

  .topBarIcons {
    display: flex;

    .topBarIconItem {
      margin-right: 0.9375rem;

      cursor: pointer;

      position: relative;

      .topBarIconBadge {
        width: 0.9375rem;
        height: 0.9375rem;

        background-color: red;
        border-radius: 50%;

        color: #fff;
        font-size: 0.75rem;

        position: absolute;

        top: -5px;
        right: -5px;

        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  .topBarImg {
    width: 2rem;
    height: 2rem;

    border-radius: 50%;
    object-fit: cover;

    cursor: pointer;
  }
`;