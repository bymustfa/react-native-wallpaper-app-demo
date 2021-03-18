import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgArrowLeft(props) {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className=""
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.256 4.243a.814.814 0 01-.002 1.164l-4.866 4.765-.086.073a.847.847 0 01-1.097-.077.813.813 0 01.002-1.163l4.865-4.765.086-.074a.847.847 0 011.098.077zm.073 14.435a.814.814 0 01-.073 1.08.847.847 0 01-1.184.001l-7.325-7.176-.076-.084a.81.81 0 01.073-1.08.846.846 0 011.184-.002l7.326 7.177.075.084z"
      />
    </Svg>
  );
}

export default SvgArrowLeft;
