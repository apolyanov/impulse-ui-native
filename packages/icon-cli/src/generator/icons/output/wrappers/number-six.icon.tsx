import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { NumberSixBoldIcon } from "../bold";
        import { NumberSixDuotoneIcon } from "../duotone";
        import { NumberSixFillIcon } from "../fill";
        import { NumberSixLightIcon } from "../light";
        import { NumberSixRegularIcon } from "../regular";
        import { NumberSixThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const NumberSixIcon = memo(function NumberSix(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: NumberSixBoldIcon,
            duotone: NumberSixDuotoneIcon,
            fill: NumberSixFillIcon,
            light: NumberSixLightIcon,
            regular: NumberSixRegularIcon,
            thin: NumberSixThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
