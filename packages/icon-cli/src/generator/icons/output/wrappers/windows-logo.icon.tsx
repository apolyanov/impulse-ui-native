import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { WindowsLogoBoldIcon } from "../bold";
        import { WindowsLogoDuotoneIcon } from "../duotone";
        import { WindowsLogoFillIcon } from "../fill";
        import { WindowsLogoLightIcon } from "../light";
        import { WindowsLogoRegularIcon } from "../regular";
        import { WindowsLogoThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const WindowsLogoIcon = memo(function WindowsLogo(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: WindowsLogoBoldIcon,
            duotone: WindowsLogoDuotoneIcon,
            fill: WindowsLogoFillIcon,
            light: WindowsLogoLightIcon,
            regular: WindowsLogoRegularIcon,
            thin: WindowsLogoThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
