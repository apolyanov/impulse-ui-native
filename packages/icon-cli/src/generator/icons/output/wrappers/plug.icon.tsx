import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { PlugBoldIcon } from "../bold";
        import { PlugDuotoneIcon } from "../duotone";
        import { PlugFillIcon } from "../fill";
        import { PlugLightIcon } from "../light";
        import { PlugRegularIcon } from "../regular";
        import { PlugThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const PlugIcon = memo(function Plug(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: PlugBoldIcon,
            duotone: PlugDuotoneIcon,
            fill: PlugFillIcon,
            light: PlugLightIcon,
            regular: PlugRegularIcon,
            thin: PlugThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
