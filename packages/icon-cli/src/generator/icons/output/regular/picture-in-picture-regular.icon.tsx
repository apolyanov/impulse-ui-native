import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const PictureInPictureRegularIcon = memo(function PictureInPictureRegular(props: SvgProps) {
        return (
    <Svg viewBox="0 0 256 256"
fill={props.color}
 ><Path d="M216,48H40A16,16,0,0,0,24,64V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V64A16,16,0,0,0,216,48ZM40,64H216v56H136a8,8,0,0,0-8,8v64H40ZM216,192H144V136h72v56Z"
 /></Svg>
  )
    })
