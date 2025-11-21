import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const LadderSimpleBoldIcon = memo(function LadderSimpleBold(props: SvgProps) {
        return (
    <Svg viewBox="0 0 256 256"
fill={props.color}
 ><Path d="M192,20a12,12,0,0,0-12,12V60H76V32a12,12,0,0,0-24,0V224a12,12,0,0,0,24,0V196H180v28a12,12,0,0,0,24,0V32A12,12,0,0,0,192,20ZM180,84v32H76V84ZM76,172V140H180v32Z"
 /></Svg>
  )
    })
