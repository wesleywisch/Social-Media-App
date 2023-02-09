import styled from "styled-components";

export const RegisterContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f0f2f5;
  display: flex;
  align-items: center;
  justify-content: center;

  .registerWrapper {
    width: 70%;
    height: 70%;
    display: flex;

    .registerLeft, .registerRight {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .registerLeft {
      .registerLogo {
        font-size: 3.125rem;
        font-weight: 800;
        color: #1775ee;
        margin-bottom: 0.625rem;
      }

      .registerDesc {
        font-size: 1.5rem;
      }
    }

    .registerRight {
      .registerBox {
        height: 25rem;
        padding: 1.25rem;
        background-color: #fff;
        border-radius: 0.625rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .registerInput {
        height: 3.125rem;;
        border-radius: 0.625rem;
        border: 1px solid gray;
        font-size: 1.125rem;
        padding-left: 1.25rem
      }

      .registerButton {
        height: 3.125rem;
        border-radius: 0.625rem;
        border: none;
        background-color: #1775ee;
        color: #fff;
        font-size: 1.25rem;
        font-weight: 500;
        cursor: pointer;
      }

      .registerRegisterButton {
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