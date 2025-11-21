import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { GolfBoldIcon } from "../bold";
        import { GolfDuotoneIcon } from "../duotone";
        import { GolfFillIcon } from "../fill";
        import { GolfLightIcon } from "../light";
        import { GolfRegularIcon } from "../regular";
        import { GolfThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const GolfIcon = memo(function Golf(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: GolfBoldIcon,
            duotone: GolfDuotoneIcon,
            fill: GolfFillIcon,
            light: GolfLightIcon,
            regular: GolfRegularIcon,
            thin: GolfThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
