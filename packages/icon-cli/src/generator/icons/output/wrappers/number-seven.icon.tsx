import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { NumberSevenBoldIcon } from "../bold";
        import { NumberSevenDuotoneIcon } from "../duotone";
        import { NumberSevenFillIcon } from "../fill";
        import { NumberSevenLightIcon } from "../light";
        import { NumberSevenRegularIcon } from "../regular";
        import { NumberSevenThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const NumberSevenIcon = memo(function NumberSeven(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: NumberSevenBoldIcon,
            duotone: NumberSevenDuotoneIcon,
            fill: NumberSevenFillIcon,
            light: NumberSevenLightIcon,
            regular: NumberSevenRegularIcon,
            thin: NumberSevenThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
