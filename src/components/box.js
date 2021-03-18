import {View} from 'react-native';
import styled from 'styled-components';
import {
  compose,
  color,
  size,
  space,
  flexbox,
  borderRadius,
  position,
  shadow,
} from 'styled-system';

const Box = styled(View)(
  compose(color, size, space, flexbox, borderRadius, position, shadow),
);

export default Box;
