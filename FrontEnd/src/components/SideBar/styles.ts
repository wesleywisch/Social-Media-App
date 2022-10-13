import styled from "styled-components";

export const SideBarContainer = styled.div`
  flex: 3;
  height: calc(100vh - 3.125rem);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgb(179, 179, 179);
  }

  .sidebarWrapper {
    padding: 1.25rem;

    .sidebarList {
      .sidebarListItem {
        display: flex;
        align-items: center;
        margin-bottom: 1.25rem;

        .sidebarIcon {
          margin-right: 0.93rem;
        }

        .sidebarListItemText {}
      }
    }

    .sidebarButton {
      width: 9.375rem;
      border: none;
      padding: 0.625rem;
      border-radius: 0.3rem;
      font-weight: 500;
    }

    .sidebarHr {
      margin: 1.25rem 0;
    }

    .sidebarFriendList {
      .sidebarFriend {
        display: flex;
        align-items: center;
        margin-bottom: 0.93rem; 

        .sidebarFriendImg {
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          object-fit: cover;
          margin-right: 0.625rem;
        }

        .sidebarFriendName {}
      }
    }
  }
`;