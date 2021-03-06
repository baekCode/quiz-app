import ReactModal from 'react-modal';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import tw from 'twin.macro';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@200;300;400;500;600;700&display=swap');
  :lang(ko){
    font-family: 'IBM Plex Sans KR', sans-serif;
  }
  ${reset}

  * {
    ${tw`break-words antialiased`}
  }

  html, body {
    ${tw`bg-backgroundColor h-screen`}
  }
  #root {
   ${tw`h-full`} 
  }
`;

export const AppContainer = styled.div`
  ${tw`flex justify-center items-center h-full`}
`;

export const Modal = styled(ReactModal)`
  ${tw`w-11/12 sm:w-2/3 min-h-1/4 rounded-xl shadow bg-white`}
`;
