import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  flex-wrap: wrap;
  border: 1px #000 solid;
  margin-top: 10rem;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 600px),
    screen and (max-width: 768px),
    screen and (max-width: 1000px) {
    width: 90%;
    flex-wrap: wrap;
    border: 1px #000 solid;
    margin-top: 150px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  position: relative;
  top: -5rem;
  @media screen and (max-width: 600px),
    screen and (max-width: 768px),
    screen and (max-width: 1000px) {
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
    position: relative;
    top: -5rem;
  }
`;

export const Img = styled.img`
  border-radius: 50%;
  @media screen and (max-width: 600px),
    screen and (max-width: 768px),
    screen and (max-width: 1000px) {
    border-radius: 50%;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  width: 80%;
  margin-top: -3rem;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 600px),
    screen and (max-width: 768px),
    screen and (max-width: 1000px) {
    display: block;
    width: 80%;
    margin-top: -50px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Details = styled.div`
  width: 50%;
  margin: 1.5rem;
  padding: 1rem;
  line-height: 2em;
  @media screen and (max-width: 600px),
    screen and (max-width: 768px),
    screen and (max-width: 1000px) {
    width: 50%;
    margin: 1.5rem;
    padding: 1rem;
    line-height: 2em;
    font-size: 0.8em;
  }
`;

export const H3 = styled.h3``;

export const ButtonsContainer = styled.div`
  width: 80%;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  display: flex;
  @media screen and (max-width: 600px),
    screen and (max-width: 768px),
    screen and (max-width: 1000px) {
    width: 80%;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    display: flex;
  }
`;

export const Update = styled.button`
  width: 50%;
  margin: 1rem;
  padding: 1rem;
  color: white;
  font-size: 1em;
  border: none;
  background: rgb(48, 72, 211);

  @media screen and (max-width: 600px),
    screen and (max-width: 768px),
    screen and (max-width: 1000px) {
    width: 50%;
    margin: 10px;
    padding: 5px;
    color: white;
    font-size: 1em;
    border: none;
    background: rgb(48, 72, 211);
  }
  &:hover {
    background-color: #e99322;
  }
`;
