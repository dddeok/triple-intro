import { css } from 'styled-components';

export const fadeIn = css`
  opacity: 0;
  animation-name: fadeIn;
  animation-duration: 0.7s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  @keyframes fadeIn {
    0% {
      transform: translateY(10px);
      opacity: 0;
    }
    66% {
      opacity: 0;
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }
`;
