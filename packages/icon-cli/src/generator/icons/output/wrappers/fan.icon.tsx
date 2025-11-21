import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { FanBoldIcon } from "../bold";
        import { FanDuotoneIcon } from "../duotone";
        import { FanFillIcon } from "../fill";
        import { FanLightIcon } from "../light";
        import { FanRegularIcon } from "../regular";
        import { FanThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const FanIcon = memo(function Fan(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: FanBoldIcon,
            duotone: FanDuotoneIcon,
            fill: FanFillIcon,
            light: FanLightIcon,
            regular: FanRegularIcon,
            thin: FanThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
