import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const PlusMinusFillIcon = memo(function PlusMinusFill(props: SvgProps) {
        return (
    <Svg {...props} viewBox="0 0 256 256"
fill={props.color}
 ><Path  d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM56,96a8,8,0,0,1,8-8H80V72a8,8,0,0,1,16,0V88h16a8,8,0,0,1,0,16H96v16a8,8,0,0,1-16,0V104H64A8,8,0,0,1,56,96Zm24,96a8,8,0,0,1-5.66-13.66l96-96a8,8,0,0,1,11.32,11.32l-96,96A8,8,0,0,1,80,192Zm112-8H144a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16Z"
 /></Svg>
  )
    })
