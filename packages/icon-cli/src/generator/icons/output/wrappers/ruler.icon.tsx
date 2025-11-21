import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { RulerBoldIcon } from "../bold";
        import { RulerDuotoneIcon } from "../duotone";
        import { RulerFillIcon } from "../fill";
        import { RulerLightIcon } from "../light";
        import { RulerRegularIcon } from "../regular";
        import { RulerThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const RulerIcon = memo(function Ruler(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: RulerBoldIcon,
            duotone: RulerDuotoneIcon,
            fill: RulerFillIcon,
            light: RulerLightIcon,
            regular: RulerRegularIcon,
            thin: RulerThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
