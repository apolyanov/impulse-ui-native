import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { DropHalfBoldIcon } from "../bold";
        import { DropHalfDuotoneIcon } from "../duotone";
        import { DropHalfFillIcon } from "../fill";
        import { DropHalfLightIcon } from "../light";
        import { DropHalfRegularIcon } from "../regular";
        import { DropHalfThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const DropHalfIcon = memo(function DropHalf(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: DropHalfBoldIcon,
            duotone: DropHalfDuotoneIcon,
            fill: DropHalfFillIcon,
            light: DropHalfLightIcon,
            regular: DropHalfRegularIcon,
            thin: DropHalfThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
