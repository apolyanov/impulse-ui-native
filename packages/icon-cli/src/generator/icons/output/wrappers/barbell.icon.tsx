import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { BarbellBoldIcon } from "../bold";
        import { BarbellDuotoneIcon } from "../duotone";
        import { BarbellFillIcon } from "../fill";
        import { BarbellLightIcon } from "../light";
        import { BarbellRegularIcon } from "../regular";
        import { BarbellThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const BarbellIcon = memo(function Barbell(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: BarbellBoldIcon,
            duotone: BarbellDuotoneIcon,
            fill: BarbellFillIcon,
            light: BarbellLightIcon,
            regular: BarbellRegularIcon,
            thin: BarbellThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
