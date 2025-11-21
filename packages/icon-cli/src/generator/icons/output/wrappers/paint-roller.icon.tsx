import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { PaintRollerBoldIcon } from "../bold";
        import { PaintRollerDuotoneIcon } from "../duotone";
        import { PaintRollerFillIcon } from "../fill";
        import { PaintRollerLightIcon } from "../light";
        import { PaintRollerRegularIcon } from "../regular";
        import { PaintRollerThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const PaintRollerIcon = memo(function PaintRoller(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: PaintRollerBoldIcon,
            duotone: PaintRollerDuotoneIcon,
            fill: PaintRollerFillIcon,
            light: PaintRollerLightIcon,
            regular: PaintRollerRegularIcon,
            thin: PaintRollerThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
