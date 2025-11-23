import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const TagChevronRegularIcon = memo(function TagChevronRegular(props: SvgProps) {
        return (
    <Svg {...props} viewBox="0 0 256 256"
fill={props.color}
 ><Path  d="M246.66,123.56,201,55.12A16,16,0,0,0,187.72,48H32a8,8,0,0,0-6.66,12.44L70.39,128l-45,67.56A8,8,0,0,0,32,208H187.72A16,16,0,0,0,201,200.88l45.63-68.44A8,8,0,0,0,246.66,123.56ZM187.72,192H47l39.71-59.56a8,8,0,0,0,0-8.88L47,64H187.72l42.67,64Z"
 /></Svg>
  )
    })
