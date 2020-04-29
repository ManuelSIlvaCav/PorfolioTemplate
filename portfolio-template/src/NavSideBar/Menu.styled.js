import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryDark};
  height: 100vh;
  text-align: left;
  padding: 1.5rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  a {
    font-size: 1.3rem;
    font-family: "Raleway", sans-serif;
    font-weight: 800;
    text-transform: uppercase;
    padding: 1rem 0;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.secondaryLight};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }

  .avatar {
    margin-left: auto;
    margin-right: auto;
    width: 200px;
    border-radius: 50%;
    background: ${({ theme }) => theme.primaryDark};
  }

  .imgAvatar {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 50%;
  }
`;
