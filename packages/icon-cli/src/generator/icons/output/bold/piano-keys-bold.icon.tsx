import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const PianoKeysBoldIcon = memo(function PianoKeysBold(props: SvgProps) {
        return (
    <Svg viewBox="0 0 256 256"
fill={props.color}
 ><Path d="M208,28H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28ZM92,132V52h24v80Zm52,24v48H112V156Zm20-24H140V52h24ZM52,52H68v92a12,12,0,0,0,12,12h8v48H52ZM204,204H168V156h8a12,12,0,0,0,12-12V52h16Z"
 /></Svg>
  )
    })
