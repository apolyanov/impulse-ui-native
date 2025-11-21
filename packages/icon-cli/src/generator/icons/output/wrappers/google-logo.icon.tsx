import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { GoogleLogoBoldIcon } from "../bold";
        import { GoogleLogoDuotoneIcon } from "../duotone";
        import { GoogleLogoFillIcon } from "../fill";
        import { GoogleLogoLightIcon } from "../light";
        import { GoogleLogoRegularIcon } from "../regular";
        import { GoogleLogoThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const GoogleLogoIcon = memo(function GoogleLogo(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: GoogleLogoBoldIcon,
            duotone: GoogleLogoDuotoneIcon,
            fill: GoogleLogoFillIcon,
            light: GoogleLogoLightIcon,
            regular: GoogleLogoRegularIcon,
            thin: GoogleLogoThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
