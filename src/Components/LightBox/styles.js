import styled from "styled-components";

export const BackgroundBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(31, 31, 31, 0.7);
  z-index: 10;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
`

export const Closed = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  color: #444;
  font-size: 14px;
  font-weight: 600;
  text-decoration: underline;
`

export const ContainerBox = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  top: 0;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 11;
  left: 0;
`

export const Box = styled.div`
  width: 500px;
  height: 200px;
  // max-height: 90vh;
  background: #ffffff;
  position: relative;
  border-radius: 4px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  z-index: 21;
  will-change: transform;
  transition: 300ms cubic-bezier(0, 0.8, 0.8, 1);
  display: flex;
  flex-direction: column; 
  z-index: 11;
  transform: ${props => props.active ? "translateY(0)" : "translateY(100vh)"} ;
`
