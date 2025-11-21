import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { GearSixBoldIcon } from "../bold";
        import { GearSixDuotoneIcon } from "../duotone";
        import { GearSixFillIcon } from "../fill";
        import { GearSixLightIcon } from "../light";
        import { GearSixRegularIcon } from "../regular";
        import { GearSixThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const GearSixIcon = memo(function GearSix(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: GearSixBoldIcon,
            duotone: GearSixDuotoneIcon,
            fill: GearSixFillIcon,
            light: GearSixLightIcon,
            regular: GearSixRegularIcon,
            thin: GearSixThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
