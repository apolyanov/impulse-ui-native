import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { WifiMediumBoldIcon } from "../bold";
        import { WifiMediumDuotoneIcon } from "../duotone";
        import { WifiMediumFillIcon } from "../fill";
        import { WifiMediumLightIcon } from "../light";
        import { WifiMediumRegularIcon } from "../regular";
        import { WifiMediumThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const WifiMediumIcon = memo(function WifiMedium(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: WifiMediumBoldIcon,
            duotone: WifiMediumDuotoneIcon,
            fill: WifiMediumFillIcon,
            light: WifiMediumLightIcon,
            regular: WifiMediumRegularIcon,
            thin: WifiMediumThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
