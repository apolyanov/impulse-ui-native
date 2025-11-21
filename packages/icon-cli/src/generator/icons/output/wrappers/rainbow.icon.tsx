import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { RainbowBoldIcon } from "../bold";
        import { RainbowDuotoneIcon } from "../duotone";
        import { RainbowFillIcon } from "../fill";
        import { RainbowLightIcon } from "../light";
        import { RainbowRegularIcon } from "../regular";
        import { RainbowThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const RainbowIcon = memo(function Rainbow(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: RainbowBoldIcon,
            duotone: RainbowDuotoneIcon,
            fill: RainbowFillIcon,
            light: RainbowLightIcon,
            regular: RainbowRegularIcon,
            thin: RainbowThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
