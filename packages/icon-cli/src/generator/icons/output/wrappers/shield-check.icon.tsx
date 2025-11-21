import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ShieldCheckBoldIcon } from "../bold";
        import { ShieldCheckDuotoneIcon } from "../duotone";
        import { ShieldCheckFillIcon } from "../fill";
        import { ShieldCheckLightIcon } from "../light";
        import { ShieldCheckRegularIcon } from "../regular";
        import { ShieldCheckThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ShieldCheckIcon = memo(function ShieldCheck(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ShieldCheckBoldIcon,
            duotone: ShieldCheckDuotoneIcon,
            fill: ShieldCheckFillIcon,
            light: ShieldCheckLightIcon,
            regular: ShieldCheckRegularIcon,
            thin: ShieldCheckThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
