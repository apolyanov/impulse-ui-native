import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const CornersInLightIcon = memo(function CornersInLight(props: SvgProps) {
        return (
    <Svg viewBox="0 0 256 256"
fill={props.color}
 ><Path d="M154,96V48a6,6,0,0,1,12,0V90h42a6,6,0,0,1,0,12H160A6,6,0,0,1,154,96ZM96,154H48a6,6,0,0,0,0,12H90v42a6,6,0,0,0,12,0V160A6,6,0,0,0,96,154Zm112,0H160a6,6,0,0,0-6,6v48a6,6,0,0,0,12,0V166h42a6,6,0,0,0,0-12ZM96,42a6,6,0,0,0-6,6V90H48a6,6,0,0,0,0,12H96a6,6,0,0,0,6-6V48A6,6,0,0,0,96,42Z"
 /></Svg>
  )
    })
