import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'Poppins', sans-serif;
  min-height: 100vh;
  background: linear-gradient(to right top, #65dfc9, #6cdbeb);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Glass = styled.section`
  background: white;
  min-height: 80vh;
  width: 70%;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  border-radius: 2rem;
  z-index: 2;
  backdrop-filter: blur(2rem);
  display: flex;
`;

export const Circle = styled.div`
  background: white;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.3)
  );
  height: 20rem;
  width: 20rem;
  position: absolute;
  border-radius: 50%;
`;

export const Circle1 = styled(Circle)`
  top: 5%;
  right: 10%;
`;

export const Circle2 = styled(Circle)`
  bottom: 5%;
  left: 10%;
`;

export const Dashboard = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  border-radius: 2rem;
`;

export const User = styled.div``;

export const Links = styled.div``;

export const Item = styled.div`
  display: flex;
  margin: 2rem 0rem;
  padding: 0rem 5rem;
  align-items: center;

  > h2 {
    padding: 0rem 2rem;
  }
`;

export const Pro = styled.div`
  background: linear-gradient(to right top, #65dfc9, #6cdbeb);
  border-radius: 2rem;
  color: white;
  padding: 1rem;
  position: relative;
  > img {
    position: absolute;
    top: -10%;
    right: 10%;
  }
  > h2 {
    width: 40%;
    color: white;
  }
`;

export const Games = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 5rem;
`;

export const Imageiguals = styled.img``;

export const H1 = styled.h1`
  color: #426696;
  font-weight: 600;
  font-size: 3rem;
  opacity: 0.8;
`;

export const P = styled.p`
  color: #658ec6;
  font-weight: 500;
  opacity: 0.8;
`;

export const H2 = styled.h2`
  color: #658ec6;
  font-weight: 500;
  opacity: 0.8;
`;

export const H3 = styled.h3`
  color: #426696;
  font-weight: 600;
  opacity: 0.8;
`;

export const Status = styled.div`
  margin-bottom: 3;
  > input {
    background: linear-gradient(
      to right bottom,
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.3)
    );
    border: none;
    width: 50%;
    padding: 0.5rem;
    border-radius: 2rem;
  }
`;

export const Card = styled.div`
  display: flex;
  background: linear-gradient(
    to left top,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.5)
  );
  border-radius: 1rem;
  margin: 1rem 0rem;
  padding: 2rem;
  /* box-shadow: 6px 6px 20px rgba(122, 122, 122, 0.212); */
  justify-content: space-between;

  > .percentage {
    font-weight: bold;
    background: linear-gradient(to right top, #65dfc9, #6cdbeb);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const Progress = styled.div`
  background: linear-gradient(to right top, #65dfc9, #6cdbeb);
  width: 100%;
  height: 25%;
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
  ::after {
    content: '';
    height: 100%;
    width: 100%;
    background: rgb(236, 236, 236);
    position: absolute;
    left: 60%;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
