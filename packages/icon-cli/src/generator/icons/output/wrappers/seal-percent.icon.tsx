import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { SealPercentBoldIcon } from "../bold";
        import { SealPercentDuotoneIcon } from "../duotone";
        import { SealPercentFillIcon } from "../fill";
        import { SealPercentLightIcon } from "../light";
        import { SealPercentRegularIcon } from "../regular";
        import { SealPercentThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const SealPercentIcon = memo(function SealPercent(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: SealPercentBoldIcon,
            duotone: SealPercentDuotoneIcon,
            fill: SealPercentFillIcon,
            light: SealPercentLightIcon,
            regular: SealPercentRegularIcon,
            thin: SealPercentThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
