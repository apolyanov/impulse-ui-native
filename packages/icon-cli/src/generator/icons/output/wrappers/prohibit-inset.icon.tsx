import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ProhibitInsetBoldIcon } from "../bold";
        import { ProhibitInsetDuotoneIcon } from "../duotone";
        import { ProhibitInsetFillIcon } from "../fill";
        import { ProhibitInsetLightIcon } from "../light";
        import { ProhibitInsetRegularIcon } from "../regular";
        import { ProhibitInsetThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ProhibitInsetIcon = memo(function ProhibitInset(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ProhibitInsetBoldIcon,
            duotone: ProhibitInsetDuotoneIcon,
            fill: ProhibitInsetFillIcon,
            light: ProhibitInsetLightIcon,
            regular: ProhibitInsetRegularIcon,
            thin: ProhibitInsetThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
