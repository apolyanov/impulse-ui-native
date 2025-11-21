import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { NumberCircleFiveBoldIcon } from "../bold";
        import { NumberCircleFiveDuotoneIcon } from "../duotone";
        import { NumberCircleFiveFillIcon } from "../fill";
        import { NumberCircleFiveLightIcon } from "../light";
        import { NumberCircleFiveRegularIcon } from "../regular";
        import { NumberCircleFiveThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const NumberCircleFiveIcon = memo(function NumberCircleFive(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: NumberCircleFiveBoldIcon,
            duotone: NumberCircleFiveDuotoneIcon,
            fill: NumberCircleFiveFillIcon,
            light: NumberCircleFiveLightIcon,
            regular: NumberCircleFiveRegularIcon,
            thin: NumberCircleFiveThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
