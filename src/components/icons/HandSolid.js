import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgHandSolid(props) {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.353 3.23a4.264 4.264 0 011.195 2.97v7.378l9.652 2.8L26.541 30h-15.47L3.743 19.948a3.93 3.93 0 01-.74-2.444 3.914 3.914 0 01.91-2.382 3.714 3.714 0 012.161-1.267 3.645 3.645 0 012.455.409l1.862 1.05V6.2c0-1.114.43-2.182 1.195-2.97A4.02 4.02 0 0114.469 2a4.02 4.02 0 012.884 1.23z"
        fill="currentColor"
      />
    </Svg>
  );
}

export default SvgHandSolid;
