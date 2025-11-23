import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const CirclesThreePlusLightIcon = memo(function CirclesThreePlusLight(props: SvgProps) {
        return (
    <Svg {...props} viewBox="0 0 256 256"
fill={props.color}
 ><Path  d="M80,42a38,38,0,1,0,38,38A38,38,0,0,0,80,42Zm0,64a26,26,0,1,1,26-26A26,26,0,0,1,80,106Zm96,12a38,38,0,1,0-38-38A38,38,0,0,0,176,118Zm0-64a26,26,0,1,1-26,26A26,26,0,0,1,176,54ZM80,138a38,38,0,1,0,38,38A38,38,0,0,0,80,138Zm0,64a26,26,0,1,1,26-26A26,26,0,0,1,80,202Zm134-26a6,6,0,0,1-6,6H182v26a6,6,0,0,1-12,0V182H144a6,6,0,0,1,0-12h26V144a6,6,0,0,1,12,0v26h26A6,6,0,0,1,214,176Z"
 /></Svg>
  )
    })
