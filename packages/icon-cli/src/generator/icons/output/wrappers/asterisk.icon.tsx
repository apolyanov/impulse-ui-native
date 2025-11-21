import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { AsteriskBoldIcon } from "../bold";
        import { AsteriskDuotoneIcon } from "../duotone";
        import { AsteriskFillIcon } from "../fill";
        import { AsteriskLightIcon } from "../light";
        import { AsteriskRegularIcon } from "../regular";
        import { AsteriskThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const AsteriskIcon = memo(function Asterisk(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: AsteriskBoldIcon,
            duotone: AsteriskDuotoneIcon,
            fill: AsteriskFillIcon,
            light: AsteriskLightIcon,
            regular: AsteriskRegularIcon,
            thin: AsteriskThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
