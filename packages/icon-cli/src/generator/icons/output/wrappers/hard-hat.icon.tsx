import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { HardHatBoldIcon } from "../bold";
        import { HardHatDuotoneIcon } from "../duotone";
        import { HardHatFillIcon } from "../fill";
        import { HardHatLightIcon } from "../light";
        import { HardHatRegularIcon } from "../regular";
        import { HardHatThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const HardHatIcon = memo(function HardHat(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: HardHatBoldIcon,
            duotone: HardHatDuotoneIcon,
            fill: HardHatFillIcon,
            light: HardHatLightIcon,
            regular: HardHatRegularIcon,
            thin: HardHatThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
