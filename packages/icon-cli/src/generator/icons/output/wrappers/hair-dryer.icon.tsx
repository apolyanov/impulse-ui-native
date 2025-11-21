import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { HairDryerBoldIcon } from "../bold";
        import { HairDryerDuotoneIcon } from "../duotone";
        import { HairDryerFillIcon } from "../fill";
        import { HairDryerLightIcon } from "../light";
        import { HairDryerRegularIcon } from "../regular";
        import { HairDryerThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const HairDryerIcon = memo(function HairDryer(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: HairDryerBoldIcon,
            duotone: HairDryerDuotoneIcon,
            fill: HairDryerFillIcon,
            light: HairDryerLightIcon,
            regular: HairDryerRegularIcon,
            thin: HairDryerThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
