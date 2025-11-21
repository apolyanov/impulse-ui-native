import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { WallBoldIcon } from "../bold";
        import { WallDuotoneIcon } from "../duotone";
        import { WallFillIcon } from "../fill";
        import { WallLightIcon } from "../light";
        import { WallRegularIcon } from "../regular";
        import { WallThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const WallIcon = memo(function Wall(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: WallBoldIcon,
            duotone: WallDuotoneIcon,
            fill: WallFillIcon,
            light: WallLightIcon,
            regular: WallRegularIcon,
            thin: WallThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
