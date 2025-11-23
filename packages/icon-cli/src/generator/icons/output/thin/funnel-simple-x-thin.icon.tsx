import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const FunnelSimpleXThinIcon = memo(function FunnelSimpleXThin(props: SvgProps) {
        return (
    <Svg {...props} viewBox="0 0 256 256"
fill={props.color}
 ><Path  d="M192,140H64a4,4,0,0,1,0-8H192a4,4,0,0,1,0,8Zm40-56H24a4,4,0,0,0,0,8H232a4,4,0,0,0,0-8ZM128,180H104a4,4,0,0,0,0,8h24a4,4,0,0,0,0-8Zm90.83-6.83a4,4,0,0,0-5.66,0L192,194.34l-21.17-21.17a4,4,0,0,0-5.66,5.66L186.34,200l-21.17,21.17a4,4,0,0,0,5.66,5.66L192,205.66l21.17,21.17a4,4,0,0,0,5.66-5.66L197.66,200l21.17-21.17A4,4,0,0,0,218.83,173.17Z"
 /></Svg>
  )
    })
