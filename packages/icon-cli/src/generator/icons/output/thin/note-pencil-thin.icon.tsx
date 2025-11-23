import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const NotePencilThinIcon = memo(function NotePencilThin(props: SvgProps) {
        return (
    <Svg {...props} viewBox="0 0 256 256"
fill={props.color}
 ><Path  d="M226.83,61.17l-32-32a4,4,0,0,0-5.66,0l-96,96A4,4,0,0,0,92,128v32a4,4,0,0,0,4,4h32a4,4,0,0,0,2.83-1.17l96-96A4,4,0,0,0,226.83,61.17ZM126.34,156H100V129.66l68-68L194.34,88ZM200,82.34,173.66,56,192,37.66,218.34,64ZM220,128v80a12,12,0,0,1-12,12H48a12,12,0,0,1-12-12V48A12,12,0,0,1,48,36h80a4,4,0,0,1,0,8H48a4,4,0,0,0-4,4V208a4,4,0,0,0,4,4H208a4,4,0,0,0,4-4V128a4,4,0,0,1,8,0Z"
 /></Svg>
  )
    })
