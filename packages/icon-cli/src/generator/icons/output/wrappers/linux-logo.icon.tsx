import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { LinuxLogoBoldIcon } from "../bold";
        import { LinuxLogoDuotoneIcon } from "../duotone";
        import { LinuxLogoFillIcon } from "../fill";
        import { LinuxLogoLightIcon } from "../light";
        import { LinuxLogoRegularIcon } from "../regular";
        import { LinuxLogoThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const LinuxLogoIcon = memo(function LinuxLogo(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: LinuxLogoBoldIcon,
            duotone: LinuxLogoDuotoneIcon,
            fill: LinuxLogoFillIcon,
            light: LinuxLogoLightIcon,
            regular: LinuxLogoRegularIcon,
            thin: LinuxLogoThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
