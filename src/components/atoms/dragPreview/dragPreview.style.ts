import styled from "styled-components";

const Container = styled.div`
  @media (max-width: ${(props) => props.theme.media.tablet}) {
    display: none;
  }
`;

const DragPreviewStyle = {
  Container,
};

export default DragPreviewStyle;
