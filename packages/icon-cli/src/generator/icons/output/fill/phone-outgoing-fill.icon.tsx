import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const PhoneOutgoingFillIcon = memo(function PhoneOutgoingFill(props: SvgProps) {
        return (
    <Svg {...props} viewBox="0 0 256 256"
fill={props.color}
 ><Path  d="M146.34,109.66a8,8,0,0,1,0-11.32L180.69,64H160a8,8,0,0,1,0-16h40a8,8,0,0,1,8,8V96a8,8,0,0,1-16,0V75.31l-34.34,34.35a8,8,0,0,1-11.32,0Zm68,56.8-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L126.87,168c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L89.54,41.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,24,88c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,214.37,166.46Z"
 /></Svg>
  )
    })
