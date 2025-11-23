import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const PathThinIcon = memo(function PathThin(props: SvgProps) {
        return (
    <Svg {...props} viewBox="0 0 256 256"
fill={props.color}
 ><Path  d="M200,172a28,28,0,0,0-27.71,24H72a36,36,0,0,1,0-72h96a36,36,0,0,0,0-72H72a4,4,0,0,0,0,8h96a28,28,0,0,1,0,56H72a44,44,0,0,0,0,88H172.29A28,28,0,1,0,200,172Zm0,48a20,20,0,1,1,20-20A20,20,0,0,1,200,220Z"
 /></Svg>
  )
    })
