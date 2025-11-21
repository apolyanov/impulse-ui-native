import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ChalkboardBoldIcon } from "../bold";
        import { ChalkboardDuotoneIcon } from "../duotone";
        import { ChalkboardFillIcon } from "../fill";
        import { ChalkboardLightIcon } from "../light";
        import { ChalkboardRegularIcon } from "../regular";
        import { ChalkboardThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ChalkboardIcon = memo(function Chalkboard(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ChalkboardBoldIcon,
            duotone: ChalkboardDuotoneIcon,
            fill: ChalkboardFillIcon,
            light: ChalkboardLightIcon,
            regular: ChalkboardRegularIcon,
            thin: ChalkboardThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
