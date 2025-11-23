import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const TrayBoldIcon = memo(function TrayBold(props: SvgProps) {
        return (
    <Svg {...props} viewBox="0 0 256 256"
fill={props.color}
 ><Path  d="M208,28H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28Zm-4,24v92H179.31a19.86,19.86,0,0,0-14.14,5.86L147,168H109L90.83,149.86A19.86,19.86,0,0,0,76.69,144H52V52ZM52,204V168H75l18.14,18.14A19.86,19.86,0,0,0,107.31,192h41.38a19.86,19.86,0,0,0,14.14-5.86L181,168h23v36Z"
 /></Svg>
  )
    })
