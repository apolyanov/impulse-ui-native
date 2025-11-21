import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { NumberCircleSevenBoldIcon } from "../bold";
        import { NumberCircleSevenDuotoneIcon } from "../duotone";
        import { NumberCircleSevenFillIcon } from "../fill";
        import { NumberCircleSevenLightIcon } from "../light";
        import { NumberCircleSevenRegularIcon } from "../regular";
        import { NumberCircleSevenThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const NumberCircleSevenIcon = memo(function NumberCircleSeven(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: NumberCircleSevenBoldIcon,
            duotone: NumberCircleSevenDuotoneIcon,
            fill: NumberCircleSevenFillIcon,
            light: NumberCircleSevenLightIcon,
            regular: NumberCircleSevenRegularIcon,
            thin: NumberCircleSevenThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
