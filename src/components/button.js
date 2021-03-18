import {TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import {
  compose,
  color,
  size,
  space,
  flexbox,
  layout,
  borderRadius,
  border,
  position,
  shadow,
} from 'styled-system';

const Button = styled(TouchableOpacity)(
  compose(
    color,
    size,
    space,
    flexbox,
    layout,
    borderRadius,
    border,
    position,
    shadow,
  ),
);

export default Button;

Button.defaultProps = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  activeOpacity: 1,
};
