import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { LessThanOrEqualBoldIcon } from "../bold";
        import { LessThanOrEqualDuotoneIcon } from "../duotone";
        import { LessThanOrEqualFillIcon } from "../fill";
        import { LessThanOrEqualLightIcon } from "../light";
        import { LessThanOrEqualRegularIcon } from "../regular";
        import { LessThanOrEqualThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const LessThanOrEqualIcon = memo(function LessThanOrEqual(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: LessThanOrEqualBoldIcon,
            duotone: LessThanOrEqualDuotoneIcon,
            fill: LessThanOrEqualFillIcon,
            light: LessThanOrEqualLightIcon,
            regular: LessThanOrEqualRegularIcon,
            thin: LessThanOrEqualThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
