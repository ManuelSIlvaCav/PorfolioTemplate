import styled from "styled-components";

export const StyledResume = styled.div`
  height: 100%;
  width: ${({ open }) => (open ? "75vw" : "100vw")};
  position: absolute;
  top: 0;
  left: ${({ open }) => (open ? "25vw" : "0")};
  overflow-y: scroll;

  .content-grid {
    display: grid;
    grid-template-columns: auto;
    grid-gap: 10px;
    position: absolute;
    top: 15%;
    left: 300px;
    right: 10vw;
  }

  .title-div-container {
    height: auto;
  }

  .resume-title {
    font-size: 2.5rem;
    font-family: "Fredoka One";
    font-weight: 400;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.secondaryLight};
  }

  .custom-separator-decorator {
    display: block;
    border-radius: 25px;
    background: ${({ theme }) => theme.primaryLight};
    width: 150px;
    height: 5px;
  }

  .main-grid-content {
    display: grid;
    grid-template-columns: auto;
    grid-gap: 10px;
  }

  .particular-content-steps {
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-gap: 10px;
  }

  .stepper {
    width: 300px;
    height: 400px;
    background: #ffffff;
  }

  .content {
    width: 500px;
    height: 400px;
    background: #ffffff;
  }
`;
