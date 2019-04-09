import styled from 'styled-components';
import { headerHeight } from '../../header/HeaderWrapper';

const maxHeight = window.innerHeight - headerHeight - 5;

const PostWrapper = styled.div`
  overflow: scroll;
  max-height: ${maxHeight};
`;

export default PostWrapper;
