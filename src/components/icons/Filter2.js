import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgFilter2(props) {
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
        d="M8.73 17.823c0 .442.346.803.772.803.426 0 .772-.36.772-.803v-3.984a.82.82 0 00-.21-.55L3.703 6.216a.623.623 0 01-.158-.416V4.217c0-.335.263-.608.585-.608h3.089c.426 0 .772-.36.772-.804C7.99 2.36 7.644 2 7.218 2H4.129C2.955 2 2 2.994 2 4.217v1.582c0 .566.204 1.103.575 1.516l6.155 6.842v3.666zm.16 3.718c.13.289.41.459.7.459.11 0 .22-.024.325-.074l4.321-2.07c.271-.13.446-.41.446-.72v-5.09l6.679-6.756c.406-.41.639-.98.639-1.565V4.193C22 2.983 21.044 2 19.87 2h-8.899a.785.785 0 00-.772.795c0 .44.346.797.772.797h8.899c.323 0 .585.27.585.601v1.532a.61.61 0 01-.175.428l-6.91 6.993a.808.808 0 00-.233.567v4.915l-3.873 1.855a.807.807 0 00-.375 1.058z"
        fill="currentColor"
      />
    </Svg>
  );
}

export default SvgFilter2;