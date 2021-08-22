import styled from "styled-components";

// title
export const Title = styled.div`
  text-align: center;
  font-size: 0.8em;
  margin-bottom: 20px;
  margin-top: 20px;
  @media screen and (max-width: 650px),
    screen and (max-width: 768px),
    screen and (max-width: 1000px) {
    text-align: center;
    font-size: 0.8em;
    margin-bottom: 20px;
  }
`;

export const H1 = styled.h1``;

// form
export const Search = styled.div`
  text-align: center;
  display: block;
`;

export const Form = styled.form``;

export const Input = styled.input`
  width: 40%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  @media screen and (max-width: 650px),
    screen and (max-width: 768px),
    screen and (max-width: 1000px) {
    width: 40%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
`;

export const SearchButton = styled.button`
  background-color: #6d1f98;
  color: white;

  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  @media screen and (max-width: 650px),
    screen and (max-width: 768px),
    screen and (max-width: 1000px) {
    background-color: #6d1f98;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  &:hover {
    background-color: #e99322;
  }
`;

export const AddPatient = styled.button`
  background-color: #6d1f98;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #e99322;
  }
`;

// main container
export const Container = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 650px),
    screen and (max-width: 768px),
    screen and (max-width: 1000px) {
    width: 100%;
    display: block;
    flex-wrap: wrap;
    margin-left: auto;
    margin-right: auto;
    justify-content: flex-start;
  }
`;

export const Row = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
  width: 23%;
  margin-bottom: 0.5rem;
  border: 1px #000 solid;
  align-items: center;
  justify-content: center;
  text-align: center;
  display: block;

  @media screen and (max-width: 650px), screen and (max-width: 768px) {
    width: 80%;
  }
  @media screen and (max-width: 1250px), screen and (max-width: 1000px) {
    width: 40%;
  }
`;

export const ImgContainer = styled.div``;

export const Img = styled.img`
  width: 100%;
`;

export const DetailContainer = styled.div`
  display: flex;
  align-items: left;
  text-align: left;
  margin: 0.5rem;
`;

export const H3 = styled.h3`
  margin: 0.5rem;
`;

export const Buttons = styled.div`
  width: 100%;
`;

export const Delete = styled.button`
  background: rgb(207, 45, 45);
  width: 40%;
  margin: 1rem;
  padding: 1rem;
  color: white;
  font-size: 1em;
  border: none;
  @media screen and (max-width: 650px),
    screen and (max-width: 768px),
    screen and (max-width: 1000px) {
    width: 40%;
    margin: 10px;
    padding: 5px;
    color: white;
    font-size: 1em;
    border: none;
  }
`;

export const Update = styled.button`
  background: rgb(48, 72, 211);
  width: 40%;
  margin: 1rem;
  padding: 1rem;
  color: white;
  font-size: 1em;
  border: none;
  @media screen and (max-width: 650px),
    screen and (max-width: 768px),
    screen and (max-width: 1000px) {
    width: 40%;
    margin: 10px;
    padding: 5px;
    color: white;
    font-size: 1em;
    border: none;
  }
`;
