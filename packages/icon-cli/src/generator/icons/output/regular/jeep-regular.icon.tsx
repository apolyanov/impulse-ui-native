import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const JeepRegularIcon = memo(function JeepRegular(props: SvgProps) {
        return (
    <Svg {...props} viewBox="0 0 256 256"
fill={props.color}
 ><Path  d="M240,88h-9.53l-9.29-43.35A16.08,16.08,0,0,0,205.53,32H50.47A16.08,16.08,0,0,0,34.82,44.65L25.53,88H16a8,8,0,0,0,0,16h8v96a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V176h96v24a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V104h8a8,8,0,0,0,0-16ZM50.47,48H205.53l8.57,40H41.9ZM64,200H40V176H64Zm128,0V176h24v24Zm24-40H152V128a8,8,0,0,0-16,0v32H120V128a8,8,0,0,0-16,0v32H40V104H216ZM56,132a12,12,0,1,1,12,12A12,12,0,0,1,56,132Zm120,0a12,12,0,1,1,12,12A12,12,0,0,1,176,132Z"
 /></Svg>
  )
    })
