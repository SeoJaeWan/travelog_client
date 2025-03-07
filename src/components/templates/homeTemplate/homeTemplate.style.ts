import styled from "styled-components";

const Container = styled.main`
  position: relative;

  width: 1920px;
  height: 1080px;

  overflow: hidden;

  @media (min-width: ${(props) => props.theme.media.desktop}) {
    border-right: 1px solid ${(props) => props.theme.color.gray};
    border-left: 1px solid ${(props) => props.theme.color.gray};
  }

  @media (max-width: ${(props) => props.theme.media.tablet}) {
    width: 100vw;
    height: 100vh;
  }
`;

const HomeTemplateStyle = {
  Container,
};

export default HomeTemplateStyle;
