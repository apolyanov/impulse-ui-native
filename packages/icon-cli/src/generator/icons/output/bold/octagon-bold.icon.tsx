import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const OctagonBoldIcon = memo(function OctagonBold(props: SvgProps) {
        return (
    <Svg {...props} viewBox="0 0 256 256"
fill={props.color}
 ><Path  d="M230.14,77.41,178.59,25.86A19.85,19.85,0,0,0,164.45,20H91.55a19.85,19.85,0,0,0-14.14,5.86L25.86,77.41A19.85,19.85,0,0,0,20,91.55v72.9a19.85,19.85,0,0,0,5.86,14.14l51.55,51.55A19.85,19.85,0,0,0,91.55,236h72.9a19.85,19.85,0,0,0,14.14-5.86l51.55-51.55A19.85,19.85,0,0,0,236,164.45V91.55A19.85,19.85,0,0,0,230.14,77.41ZM212,162.79,162.79,212H93.21L44,162.79V93.21L93.21,44h69.58L212,93.21Z"
 /></Svg>
  )
    })
