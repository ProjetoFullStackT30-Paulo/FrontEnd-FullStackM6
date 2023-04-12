import styled from "styled-components";

const StyledMenu = styled.section`
  width: 100%;
  height: 80vh;

  display: flex;
  align-items: center;

  img {
    width: 100%;
    height: 175px;
    object-fit: contain;
    transition: 1s;
  }

  section {
    width: 100%;
    height: 80vh;

    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );

    position: absolute;
  }

  div {
    width: 100%;
    height: 60%;
    padding: 20px;

    position: absolute;
    top: -50px;
    transition: 1s;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
  }

  div p {
    width: 90%;
    color: var(--grey10);
    transition: 1s;
    text-align: center;
  }

  @media (min-width: 350px) {
    img {
      width: 100%;
      height: 100%;
    }
  }
  @media (min-width: 440px) {
    img {
      width: 100%;
      height: 70%;
    }

    div {
      position: absolute;
      top: 0px;
    }
  }
  @media (min-width: 700px) {
    img {
      width: 100%;
      height: 80%;
    }

    div {
      position: absolute;
      top: 0px;
    }
  }
  @media (min-width: 900px) {
    img {
      width: 100%;
      height: 90%;
    }

    div {
      position: absolute;
      top: 0px;
    }
  }
`;

export default StyledMenu;