import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { PaintBrushBroadBoldIcon } from "../bold";
        import { PaintBrushBroadDuotoneIcon } from "../duotone";
        import { PaintBrushBroadFillIcon } from "../fill";
        import { PaintBrushBroadLightIcon } from "../light";
        import { PaintBrushBroadRegularIcon } from "../regular";
        import { PaintBrushBroadThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const PaintBrushBroadIcon = memo(function PaintBrushBroad(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: PaintBrushBroadBoldIcon,
            duotone: PaintBrushBroadDuotoneIcon,
            fill: PaintBrushBroadFillIcon,
            light: PaintBrushBroadLightIcon,
            regular: PaintBrushBroadRegularIcon,
            thin: PaintBrushBroadThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
