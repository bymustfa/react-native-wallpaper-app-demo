import {Text} from 'react-native';
import styled from 'styled-components';
import {
  compose,
  color,
  size,
  space,
  flexbox,
  borderRadius,
  position,
  typography,
} from 'styled-system';

export default styled(Text)(
  compose(color, size, space, flexbox, borderRadius, position, typography),
);
