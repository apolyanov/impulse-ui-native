import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { NumberCircleEightBoldIcon } from "../bold";
        import { NumberCircleEightDuotoneIcon } from "../duotone";
        import { NumberCircleEightFillIcon } from "../fill";
        import { NumberCircleEightLightIcon } from "../light";
        import { NumberCircleEightRegularIcon } from "../regular";
        import { NumberCircleEightThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const NumberCircleEightIcon = memo(function NumberCircleEight(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: NumberCircleEightBoldIcon,
            duotone: NumberCircleEightDuotoneIcon,
            fill: NumberCircleEightFillIcon,
            light: NumberCircleEightLightIcon,
            regular: NumberCircleEightRegularIcon,
            thin: NumberCircleEightThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
