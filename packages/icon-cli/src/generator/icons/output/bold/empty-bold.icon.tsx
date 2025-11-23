import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const EmptyBoldIcon = memo(function EmptyBold(props: SvgProps) {
        return (
    <Svg {...props} viewBox="0 0 256 256"
fill={props.color}
 ><Path  d="M203.63,62.65l13.25-14.58a12,12,0,0,0-17.76-16.14L185.88,46.49A100,100,0,0,0,52.37,193.35L39.12,207.93a12,12,0,1,0,17.76,16.14l13.24-14.56A100,100,0,0,0,203.63,62.65ZM52,128A75.94,75.94,0,0,1,169.58,64.43l-100.91,111A75.6,75.6,0,0,1,52,128Zm76,76a75.52,75.52,0,0,1-41.58-12.43l100.91-111A75.94,75.94,0,0,1,128,204Z"
 /></Svg>
  )
    })
