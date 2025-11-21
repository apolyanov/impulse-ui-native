import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { PlugsBoldIcon } from "../bold";
        import { PlugsDuotoneIcon } from "../duotone";
        import { PlugsFillIcon } from "../fill";
        import { PlugsLightIcon } from "../light";
        import { PlugsRegularIcon } from "../regular";
        import { PlugsThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const PlugsIcon = memo(function Plugs(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: PlugsBoldIcon,
            duotone: PlugsDuotoneIcon,
            fill: PlugsFillIcon,
            light: PlugsLightIcon,
            regular: PlugsRegularIcon,
            thin: PlugsThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
