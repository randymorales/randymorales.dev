import styled from 'styled-components'

const black = '#000'
const white = '#fff'

export const Nav = styled.div`
  width: 100%;
  height: 85px;
  background-color: ${white};
  color: ${black};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`

export const NavBar = styled.div`
  width: 98%;
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  position: relative;
  justify-content: center;

  @media screen and (max-width: 976px) {
    padding: 0;
    width: 90%;
  }
`

export const LeftNav = styled.section`
  display: flex;
  align-items: center;
`

export const RightNav = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 976px) {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    position: absolute;
    background-color: ${white};
    width: 100%;
    padding: 1.75rem;
    margin-top: 20rem;
    border-radius: 0.25rem;
    transition: all 0.5s;
    z-index: ${props => (props.slide.mode === 'no_slide' ? '-10' : '10')};
    opacity: ${props => (props.slide.mode === 'no_slide' ? '0' : '1')};
  }
`

export const NavUl = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  @media screen and (max-width: 976px) {
    flex-direction: column;
  }
`
export const NavList = styled.li`
  padding: 1rem 0;
  @media screen and (max-width: 976px) {
    padding: 0;
    margin-bottom: 1.5rem;
  }
`

export const Linkhref = styled.a`
  color: ${black};
  cursor: pointer;
  :hover {
    opacity: 0.9;
    text-decoration: underline;
  }
`

// Toggle
export const MenuToggle = styled.div`
  display: none;
  @media screen and (max-width: 976px) {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 25px;
    position: relative;
    align-items: flex-end;
  }
`
export const InputToggle = styled.input`
  cursor: pointer;
  position: absolute;
  width: 28px;
  height: 40px;
  opacity: 0;
  top: -5px;
  z-index: 10;
  :checked ~ span:nth-child(2) {
    transform: rotate(45deg) translate(0, 2px);
  }
  :checked ~ span:nth-child(3) {
    transform: scale(0);
    opacity: 0;
  }
  :checked ~ span:nth-child(4) {
    transform: rotate(-45deg) translate(-1px, -1px);
  }
`
export const SpanToggle = styled.span`
  width: 30px;
  height: 3px;
  background-color: ${black};
  display: block;
  border-radius: 0.25rem;
  transition: all 0.5s;
  :nth-child(2) {
    transform-origin: 0 0;
  }
  :nth-child(4) {
    transform-origin: 0 100%;
  }
`
