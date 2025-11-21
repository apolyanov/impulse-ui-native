import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CarSimpleBoldIcon } from "../bold";
        import { CarSimpleDuotoneIcon } from "../duotone";
        import { CarSimpleFillIcon } from "../fill";
        import { CarSimpleLightIcon } from "../light";
        import { CarSimpleRegularIcon } from "../regular";
        import { CarSimpleThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CarSimpleIcon = memo(function CarSimple(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CarSimpleBoldIcon,
            duotone: CarSimpleDuotoneIcon,
            fill: CarSimpleFillIcon,
            light: CarSimpleLightIcon,
            regular: CarSimpleRegularIcon,
            thin: CarSimpleThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
