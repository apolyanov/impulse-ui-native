import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ShieldBoldIcon } from "../bold";
        import { ShieldDuotoneIcon } from "../duotone";
        import { ShieldFillIcon } from "../fill";
        import { ShieldLightIcon } from "../light";
        import { ShieldRegularIcon } from "../regular";
        import { ShieldThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ShieldIcon = memo(function Shield(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ShieldBoldIcon,
            duotone: ShieldDuotoneIcon,
            fill: ShieldFillIcon,
            light: ShieldLightIcon,
            regular: ShieldRegularIcon,
            thin: ShieldThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
