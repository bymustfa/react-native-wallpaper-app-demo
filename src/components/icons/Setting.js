import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgSetting(props) {
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
        d="M8.942 6.874a2.709 2.709 0 01-2.65-.017l-.036-.035a.755.755 0 01-.252-1.054.795.795 0 011.08-.246c.163.094.35.145.539.15.291.011.575-.09.79-.283.214-.193.34-.46.352-.745C8.76 3.215 9.921 2.043 11.383 2h1.232c1.49 0 2.698 1.18 2.698 2.635a.993.993 0 00.144.527c.144.247.382.428.662.502.28.074.58.036.831-.107 1.267-.673 2.851-.255 3.598.949a.772.772 0 01-.287 1.045.802.802 0 01-1.07-.272 1.112 1.112 0 00-1.494-.387 2.755 2.755 0 01-2.644-.028 2.626 2.626 0 01-1.35-2.22 1.05 1.05 0 00-.305-.775 1.101 1.101 0 00-.783-.323h-1.232a1.11 1.11 0 00-.786.323 1.058 1.058 0 00-.312.775 2.582 2.582 0 01-1.343 2.23zm1.343 12.517a1.085 1.085 0 001.098 1.063l-.01.018c.28 0 .539.145.678.382.14.236.14.527 0 .764a.786.786 0 01-.677.382c-1.49 0-2.699-1.18-2.699-2.635a.992.992 0 00-.144-.527 1.112 1.112 0 00-1.493-.395c-1.266.673-2.85.255-3.598-.949L2.83 16.45c-.69-1.237-.262-2.784.971-3.514.164-.093.3-.226.396-.386.18-.246.245-.554.178-.85a1.065 1.065 0 00-.529-.696c-1.233-.73-1.66-2.277-.971-3.513a.798.798 0 011.088-.21c.341.226.44.674.225 1.018a1.05 1.05 0 00.405 1.449c.391.234.714.564.935.957.69 1.237.262 2.784-.971 3.514a1.05 1.05 0 00-.405 1.45l.62 1.044c.142.25.381.431.663.504.282.073.582.03.83-.117a2.647 2.647 0 011.323-.343c1.49 0 2.698 1.18 2.698 2.635zm9.904-6.464a1.067 1.067 0 01-.51-.649 1.041 1.041 0 01.114-.81c.096-.159.232-.292.396-.386a.754.754 0 00.27-1.045.811.811 0 00-1.062-.29c-1.233.73-1.66 2.277-.971 3.513.219.432.559.795.98 1.046.25.14.434.371.508.644.074.272.034.562-.112.805L19.19 16.8a1.093 1.093 0 01-1.493.386 2.755 2.755 0 00-2.648.031 2.626 2.626 0 00-1.346 2.227c.043.393.383.69.787.69a.785.785 0 00.787-.69 1.05 1.05 0 01.54-.933c.34-.192.761-.188 1.098.01 1.266.674 2.85.256 3.597-.948l.612-1.045c.755-1.247.337-2.856-.935-3.601zm-8.195-4.225c-1.368 0-2.602.805-3.125 2.04a3.246 3.246 0 00.737 3.6 3.442 3.442 0 003.689.711c1.263-.514 2.085-1.72 2.081-3.057 0-.876-.356-1.715-.99-2.333a3.415 3.415 0 00-2.392-.961zm0 5.06c-.993 0-1.799-.787-1.799-1.758 0-.97.806-1.756 1.8-1.756.993 0 1.798.786 1.798 1.756s-.805 1.757-1.799 1.757z"
        fill="currentColor"
      />
    </Svg>
  );
}

export default SvgSetting;