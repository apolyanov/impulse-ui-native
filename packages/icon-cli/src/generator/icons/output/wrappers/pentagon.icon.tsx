import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { PentagonBoldIcon } from "../bold";
        import { PentagonDuotoneIcon } from "../duotone";
        import { PentagonFillIcon } from "../fill";
        import { PentagonLightIcon } from "../light";
        import { PentagonRegularIcon } from "../regular";
        import { PentagonThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const PentagonIcon = memo(function Pentagon(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: PentagonBoldIcon,
            duotone: PentagonDuotoneIcon,
            fill: PentagonFillIcon,
            light: PentagonLightIcon,
            regular: PentagonRegularIcon,
            thin: PentagonThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
