import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { RectangleDashedBoldIcon } from "../bold";
        import { RectangleDashedDuotoneIcon } from "../duotone";
        import { RectangleDashedFillIcon } from "../fill";
        import { RectangleDashedLightIcon } from "../light";
        import { RectangleDashedRegularIcon } from "../regular";
        import { RectangleDashedThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const RectangleDashedIcon = memo(function RectangleDashed(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: RectangleDashedBoldIcon,
            duotone: RectangleDashedDuotoneIcon,
            fill: RectangleDashedFillIcon,
            light: RectangleDashedLightIcon,
            regular: RectangleDashedRegularIcon,
            thin: RectangleDashedThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
