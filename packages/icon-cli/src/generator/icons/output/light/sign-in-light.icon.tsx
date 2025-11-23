import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const SignInLightIcon = memo(function SignInLight(props: SvgProps) {
        return (
    <Svg {...props} viewBox="0 0 256 256"
fill={props.color}
 ><Path  d="M140.24,132.24l-40,40a6,6,0,0,1-8.48-8.48L121.51,134H24a6,6,0,0,1,0-12h97.51L91.76,92.24a6,6,0,0,1,8.48-8.48l40,40A6,6,0,0,1,140.24,132.24ZM200,34H136a6,6,0,0,0,0,12h58V210H136a6,6,0,0,0,0,12h64a6,6,0,0,0,6-6V40A6,6,0,0,0,200,34Z"
 /></Svg>
  )
    })
