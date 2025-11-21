import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { BreadBoldIcon } from "../bold";
        import { BreadDuotoneIcon } from "../duotone";
        import { BreadFillIcon } from "../fill";
        import { BreadLightIcon } from "../light";
        import { BreadRegularIcon } from "../regular";
        import { BreadThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const BreadIcon = memo(function Bread(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: BreadBoldIcon,
            duotone: BreadDuotoneIcon,
            fill: BreadFillIcon,
            light: BreadLightIcon,
            regular: BreadRegularIcon,
            thin: BreadThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
