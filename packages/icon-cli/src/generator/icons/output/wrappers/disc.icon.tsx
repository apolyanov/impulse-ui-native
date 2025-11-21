import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { DiscBoldIcon } from "../bold";
        import { DiscDuotoneIcon } from "../duotone";
        import { DiscFillIcon } from "../fill";
        import { DiscLightIcon } from "../light";
        import { DiscRegularIcon } from "../regular";
        import { DiscThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const DiscIcon = memo(function Disc(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: DiscBoldIcon,
            duotone: DiscDuotoneIcon,
            fill: DiscFillIcon,
            light: DiscLightIcon,
            regular: DiscRegularIcon,
            thin: DiscThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
