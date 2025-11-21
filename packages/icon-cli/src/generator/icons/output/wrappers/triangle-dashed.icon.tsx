import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { TriangleDashedBoldIcon } from "../bold";
        import { TriangleDashedDuotoneIcon } from "../duotone";
        import { TriangleDashedFillIcon } from "../fill";
        import { TriangleDashedLightIcon } from "../light";
        import { TriangleDashedRegularIcon } from "../regular";
        import { TriangleDashedThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const TriangleDashedIcon = memo(function TriangleDashed(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: TriangleDashedBoldIcon,
            duotone: TriangleDashedDuotoneIcon,
            fill: TriangleDashedFillIcon,
            light: TriangleDashedLightIcon,
            regular: TriangleDashedRegularIcon,
            thin: TriangleDashedThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
