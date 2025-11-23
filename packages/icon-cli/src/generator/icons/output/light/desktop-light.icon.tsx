import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const DesktopLightIcon = memo(function DesktopLight(props: SvgProps) {
        return (
    <Svg {...props} viewBox="0 0 256 256"
fill={props.color}
 ><Path  d="M208,42H48A22,22,0,0,0,26,64V176a22,22,0,0,0,22,22h74v20H96a6,6,0,0,0,0,12h64a6,6,0,0,0,0-12H134V198h74a22,22,0,0,0,22-22V64A22,22,0,0,0,208,42ZM48,54H208a10,10,0,0,1,10,10v82H38V64A10,10,0,0,1,48,54ZM208,186H48a10,10,0,0,1-10-10V158H218v18A10,10,0,0,1,208,186Z"
 /></Svg>
  )
    })
