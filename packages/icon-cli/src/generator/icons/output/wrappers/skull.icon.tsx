import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { SkullBoldIcon } from "../bold";
        import { SkullDuotoneIcon } from "../duotone";
        import { SkullFillIcon } from "../fill";
        import { SkullLightIcon } from "../light";
        import { SkullRegularIcon } from "../regular";
        import { SkullThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const SkullIcon = memo(function Skull(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: SkullBoldIcon,
            duotone: SkullDuotoneIcon,
            fill: SkullFillIcon,
            light: SkullLightIcon,
            regular: SkullRegularIcon,
            thin: SkullThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
