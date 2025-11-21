import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { BombBoldIcon } from "../bold";
        import { BombDuotoneIcon } from "../duotone";
        import { BombFillIcon } from "../fill";
        import { BombLightIcon } from "../light";
        import { BombRegularIcon } from "../regular";
        import { BombThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const BombIcon = memo(function Bomb(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: BombBoldIcon,
            duotone: BombDuotoneIcon,
            fill: BombFillIcon,
            light: BombLightIcon,
            regular: BombRegularIcon,
            thin: BombThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
