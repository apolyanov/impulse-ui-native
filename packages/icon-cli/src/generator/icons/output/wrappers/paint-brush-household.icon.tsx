import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { PaintBrushHouseholdBoldIcon } from "../bold";
        import { PaintBrushHouseholdDuotoneIcon } from "../duotone";
        import { PaintBrushHouseholdFillIcon } from "../fill";
        import { PaintBrushHouseholdLightIcon } from "../light";
        import { PaintBrushHouseholdRegularIcon } from "../regular";
        import { PaintBrushHouseholdThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const PaintBrushHouseholdIcon = memo(function PaintBrushHousehold(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: PaintBrushHouseholdBoldIcon,
            duotone: PaintBrushHouseholdDuotoneIcon,
            fill: PaintBrushHouseholdFillIcon,
            light: PaintBrushHouseholdLightIcon,
            regular: PaintBrushHouseholdRegularIcon,
            thin: PaintBrushHouseholdThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
