import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ShieldWarningBoldIcon } from "../bold";
        import { ShieldWarningDuotoneIcon } from "../duotone";
        import { ShieldWarningFillIcon } from "../fill";
        import { ShieldWarningLightIcon } from "../light";
        import { ShieldWarningRegularIcon } from "../regular";
        import { ShieldWarningThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ShieldWarningIcon = memo(function ShieldWarning(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ShieldWarningBoldIcon,
            duotone: ShieldWarningDuotoneIcon,
            fill: ShieldWarningFillIcon,
            light: ShieldWarningLightIcon,
            regular: ShieldWarningRegularIcon,
            thin: ShieldWarningThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
