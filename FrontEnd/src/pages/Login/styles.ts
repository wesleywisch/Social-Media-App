import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f0f2f5;
  display: flex;
  align-items: center;
  justify-content: center;

  .loginWrapper {
    width: 70%;
    height: 70%;
    display: flex;

    .loginLeft, .loginRight {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .loginLeft {
      .loginLogo {
        font-size: 3.125rem;
        font-weight: 800;
        color: #1775ee;
        margin-bottom: 0.625rem;
      }

      .loginDesc {
        font-size: 1.5rem;
      }
    }

    .loginRight {
      .loginBox {
        height: 18.75rem;
        padding: 1.25rem;
        background-color: #fff;
        border-radius: 0.625rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .loginInput {
        height: 3.125rem;;
        border-radius: 0.625rem;
        border: 1px solid gray;
        font-size: 1.125rem;
        padding-left: 1.25rem
      }

      .loginButton {
        height: 3.125rem;
        border-radius: 0.625rem;
        border: none;
        background-color: #1775ee;
        color: #fff;
        font-size: 1.25rem;
        font-weight: 500;
        cursor: pointer;
      }

      .loginForgot {
        text-align: center;
        color: #1775ee;
      }

      .loginRegisterButton {
        width: 50%;
        align-self: center;
        height: 3.125rem;
        border-radius: 0.625rem;
        border: none;
        background-color: #42b72a;
        color: #fff;
        font-size: 1.25rem;
        font-weight: 500;
        cursor: pointer;
      }
    }
  }
`;