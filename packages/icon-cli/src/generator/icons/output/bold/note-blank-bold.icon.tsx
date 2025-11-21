import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const NoteBlankBoldIcon = memo(function NoteBlankBold(props: SvgProps) {
        return (
    <Svg viewBox="0 0 256 256"
fill={props.color}
 ><Path d="M208,28H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H156.69a19.86,19.86,0,0,0,14.14-5.86l51.31-51.31A19.86,19.86,0,0,0,228,156.69V48A20,20,0,0,0,208,28ZM52,52H204v92H156a12,12,0,0,0-12,12v48H52ZM168,191V168h23Z"
 /></Svg>
  )
    })
