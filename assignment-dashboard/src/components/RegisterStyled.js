import styled from "styled-components";

export const RegisterWrapper = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #cfe2ff;
`;

export const RegisterWrapperInner = styled.div`
  position: relative;
  width: 32%;
  background-color: #FFF;
  padding: 2rem 2rem;
  text-align: center;
  border-radius: 3px;
  box-shadow: 1px 2px 2px rgba(0,0,0,.25);
`;

export const InputField = styled.input`
  position: relative;
  width:100%;
  padding: .5rem 1rem;
  margin-bottom: 1rem;
`;

export const InputLabel = styled.p `
  margin-bottom:.2rem;
`;

export const SubmitBtn = styled.button `
  margin: 1rem auto;
  background-color: #084298;
  color: #FFF;
  outline: none;
  width: 100%;
  padding: .5rem 1rem;
  border: 0;
`;

export const ErrorField = styled.p `
  position:relative;
  top: -.8rem;
  margin-bottom: .5rem;
  color: #dc3545;
`;