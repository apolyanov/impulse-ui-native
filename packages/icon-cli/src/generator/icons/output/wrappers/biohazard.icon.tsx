import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { BiohazardBoldIcon } from "../bold";
        import { BiohazardDuotoneIcon } from "../duotone";
        import { BiohazardFillIcon } from "../fill";
        import { BiohazardLightIcon } from "../light";
        import { BiohazardRegularIcon } from "../regular";
        import { BiohazardThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const BiohazardIcon = memo(function Biohazard(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: BiohazardBoldIcon,
            duotone: BiohazardDuotoneIcon,
            fill: BiohazardFillIcon,
            light: BiohazardLightIcon,
            regular: BiohazardRegularIcon,
            thin: BiohazardThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
