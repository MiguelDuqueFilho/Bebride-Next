import styled from 'styled-components';
import imgCatLi from '../../assets/imgmodels/cat_li.png';
import imgFootBg from '../../assets/imgmodels/foot_bg.jpg';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 2rem 0;
  background-color: ${props => props.theme.color.black};
`;

export const FooterWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: row;
  width: 80%;

  @media (max-width: 959px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: stretch;
  }

  @media (max-width: 570px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const WrapContainer = styled.div`
  position: relative;
  padding-top: 2rem;
  > a {
    color: ${props => props.theme.color.text};
  }
  > ul {
    list-style: none;
  }
  > ul > li {
    padding: 5px 0 5px 10px;
    background: url(${imgCatLi}) no-repeat left;
  }
  > ul > li > a {
    text-decoration: none;
    color: ${props => props.theme.color.white};
    &:hover {
      color: ${props => props.theme.color.linkHover};
    }
  }
`;

export const Foot = styled.div`
  font-size: 14px;

  color: ${props => props.theme.color.text};
  text-transform: uppercase;
  background: url(${imgFootBg}) repeat;
  position: relative;
`;

export const FootWrap = styled.div`
  margin: 0 auto;
  text-align: center;
  padding: 35px 0;

  > a {
    color: ${props => props.theme.color.text};
  }
`;

export const FooterTitle = styled.h3`
  font-family: Arial, Helvetica, sans-serif;
  color: ${props => props.theme.color.white};
  font-size: 24px;
  padding: 0 0 18px 0;
  display: block;
  > a {
    color: ${props => props.theme.color.white};
  }
  > a:hover {
    text-decoration: none;
  }
`;

export const Clear = styled.div`
  clear: both;
  line-height: 0;
  height: 0;
  font-size: 1px;
`;
