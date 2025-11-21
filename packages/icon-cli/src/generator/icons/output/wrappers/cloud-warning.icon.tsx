import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CloudWarningBoldIcon } from "../bold";
        import { CloudWarningDuotoneIcon } from "../duotone";
        import { CloudWarningFillIcon } from "../fill";
        import { CloudWarningLightIcon } from "../light";
        import { CloudWarningRegularIcon } from "../regular";
        import { CloudWarningThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CloudWarningIcon = memo(function CloudWarning(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CloudWarningBoldIcon,
            duotone: CloudWarningDuotoneIcon,
            fill: CloudWarningFillIcon,
            light: CloudWarningLightIcon,
            regular: CloudWarningRegularIcon,
            thin: CloudWarningThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
