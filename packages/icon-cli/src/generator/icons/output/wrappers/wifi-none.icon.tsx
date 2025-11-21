import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { WifiNoneBoldIcon } from "../bold";
        import { WifiNoneDuotoneIcon } from "../duotone";
        import { WifiNoneFillIcon } from "../fill";
        import { WifiNoneLightIcon } from "../light";
        import { WifiNoneRegularIcon } from "../regular";
        import { WifiNoneThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const WifiNoneIcon = memo(function WifiNone(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: WifiNoneBoldIcon,
            duotone: WifiNoneDuotoneIcon,
            fill: WifiNoneFillIcon,
            light: WifiNoneLightIcon,
            regular: WifiNoneRegularIcon,
            thin: WifiNoneThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
