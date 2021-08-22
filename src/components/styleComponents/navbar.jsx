import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
`;
export const Nav = styled.nav`
  align-items: center;
  background: #0e43df;
`;
export const Ul = styled.ul`
  list-style-type: none;
  padding: 1.5rem;
  justify-content: space-between;

  @media screen and (max-width: 600px) {
    list-style-type: none;
    padding: 2px;
  }
`;
export const Li = styled.li`
  padding: 1.5rem;
  display: inline;
  align-items: center;
  @media screen and (max-width: 600px) {
    display: block;
    align-items: center;
    text-align: center;
    justify-content: center;
    border-bottom: 2px black solid;
  }
`;
//  export const A = styled.a`
//     text-decoration: none;
//     color: white;
//     font-size: 1.4em;
//     &:hover{
//         color: #000;
//         text-decoration: none;
//     }
//  `;
