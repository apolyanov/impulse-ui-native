import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { SealWarningBoldIcon } from "../bold";
        import { SealWarningDuotoneIcon } from "../duotone";
        import { SealWarningFillIcon } from "../fill";
        import { SealWarningLightIcon } from "../light";
        import { SealWarningRegularIcon } from "../regular";
        import { SealWarningThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const SealWarningIcon = memo(function SealWarning(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: SealWarningBoldIcon,
            duotone: SealWarningDuotoneIcon,
            fill: SealWarningFillIcon,
            light: SealWarningLightIcon,
            regular: SealWarningRegularIcon,
            thin: SealWarningThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
