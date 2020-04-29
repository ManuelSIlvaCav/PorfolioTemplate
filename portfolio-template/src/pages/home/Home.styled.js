import styled from "styled-components";

export const StyledHome = styled.div`
  height: 100vh;
  width: ${({ open }) => (open ? "75vw" : "100vw")};
  position: absolute;
  top: 0;
  left: ${({ open }) => (open ? "25vw" : "0")};

  .content-grid {
    display: grid;
    grid-template-columns: auto;
    grid-gap: 10px;

    position: absolute;
    top: 20%;
    left: 10vw;
    right: 10vw;
  }

  .my-grid-container {
    text-align: center;
    height: auto;
  }

  .in-line-title {
    display: inline-block;
    font-size: 3rem;
    font-family: "Fredoka One";
    font-weight: 400;
    letter-spacing: 0.5rem;
    text-align: center;
    position: relative;
    color: ${({ theme }) => theme.secondaryLight};
  }

  .in-line-title-highlight {
    display: inline-block;
    font-size: 3rem;
    font-family: "Fredoka One";
    font-weight: 400;
    padding-left: 10px;
    letter-spacing: 0.5rem;
    text-align: center;
    position: relative;
    color: ${({ theme }) => theme.primaryLight};
  }

  .rrssicons {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }

  .icons {
    color: ${({ theme }) => theme.secondaryLight};
    transition: color 0.3s ease-out;
    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }

  h2 {
    font-size: 1.5rem;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    padding: 1rem 0;
    letter-spacing: 0.5rem;
    text-align: center;
    position: relative;
    color: ${({ theme }) => theme.secondaryLight};
  }

  h3 {
    font-size: 1rem;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    padding: 1rem 0;
    letter-spacing: 0.5rem;
    text-align: center;
    position: relative;
    color: ${({ theme }) => theme.secondaryLight};
  }
`;
