import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { HandsPrayingBoldIcon } from "../bold";
        import { HandsPrayingDuotoneIcon } from "../duotone";
        import { HandsPrayingFillIcon } from "../fill";
        import { HandsPrayingLightIcon } from "../light";
        import { HandsPrayingRegularIcon } from "../regular";
        import { HandsPrayingThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const HandsPrayingIcon = memo(function HandsPraying(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: HandsPrayingBoldIcon,
            duotone: HandsPrayingDuotoneIcon,
            fill: HandsPrayingFillIcon,
            light: HandsPrayingLightIcon,
            regular: HandsPrayingRegularIcon,
            thin: HandsPrayingThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
