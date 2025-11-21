import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { GuitarBoldIcon } from "../bold";
        import { GuitarDuotoneIcon } from "../duotone";
        import { GuitarFillIcon } from "../fill";
        import { GuitarLightIcon } from "../light";
        import { GuitarRegularIcon } from "../regular";
        import { GuitarThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const GuitarIcon = memo(function Guitar(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: GuitarBoldIcon,
            duotone: GuitarDuotoneIcon,
            fill: GuitarFillIcon,
            light: GuitarLightIcon,
            regular: GuitarRegularIcon,
            thin: GuitarThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
