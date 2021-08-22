import styled from "styled-components";

export const Container = styled.div`
  margin-top: 1.5rem;
  position: relative;
  width: 80%;
  align-items: center;
  justify-items: center;
  left: 5%;
`;

export const H3 = styled.h3`
  margin: 30px;
  text-align: center;
`;

export const MYForm = styled.form`
  margin-top: 1.5rem;
  position: relative;
  width: 60%;
  align-items: center;
  justify-items: center;
  left: 25%;
`;

export const Label = styled.label``;

export const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const Submit = styled.button`
  width: 100%;
  background-color: #4451cc;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
`;

export const Select = styled.select`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const Option = styled.option``;

export const ErrorDiv = styled.div`
  background: rgb(211, 122, 122);
  color: red;
  margin-top: -10px;
  padding: 10px;
`;
