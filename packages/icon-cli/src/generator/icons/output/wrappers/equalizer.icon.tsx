import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { EqualizerBoldIcon } from "../bold";
        import { EqualizerDuotoneIcon } from "../duotone";
        import { EqualizerFillIcon } from "../fill";
        import { EqualizerLightIcon } from "../light";
        import { EqualizerRegularIcon } from "../regular";
        import { EqualizerThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const EqualizerIcon = memo(function Equalizer(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: EqualizerBoldIcon,
            duotone: EqualizerDuotoneIcon,
            fill: EqualizerFillIcon,
            light: EqualizerLightIcon,
            regular: EqualizerRegularIcon,
            thin: EqualizerThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
