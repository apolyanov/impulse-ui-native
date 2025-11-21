import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const ChalkboardLightIcon = memo(function ChalkboardLight(props: SvgProps) {
        return (
    <Svg viewBox="0 0 256 256"
fill={props.color}
 ><Path d="M240,194H230V56a14,14,0,0,0-14-14H40A14,14,0,0,0,26,56V194H16a6,6,0,0,0,0,12H240a6,6,0,0,0,0-12ZM38,56a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2V194H198V168a6,6,0,0,0-6-6H120a6,6,0,0,0-6,6v26H70V86H186v50a6,6,0,0,0,12,0V80a6,6,0,0,0-6-6H64a6,6,0,0,0-6,6V194H38ZM186,194H126V174h60Z"
 /></Svg>
  )
    })
