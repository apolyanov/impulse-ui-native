import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const TrafficConeThinIcon = memo(function TrafficConeThin(props: SvgProps) {
        return (
    <Svg {...props} viewBox="0 0 256 256"
fill={props.color}
 ><Path  d="M232,212H210.84L149.65,36.06A12,12,0,0,0,138.31,28H117.69a12,12,0,0,0-11.34,8.06L45.16,212H24a4,4,0,0,0,0,8H232a4,4,0,0,0,0-8ZM92.58,100h70.84l19.47,56H73.11Zm21.33-61.31A4,4,0,0,1,117.69,36h20.62a4,4,0,0,1,3.78,2.69L160.63,92H95.37ZM70.32,164H185.68l16.69,48H53.63Z"
 /></Svg>
  )
    })
