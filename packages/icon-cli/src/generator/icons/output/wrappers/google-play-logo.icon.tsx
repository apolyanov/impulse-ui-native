import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { GooglePlayLogoBoldIcon } from "../bold";
        import { GooglePlayLogoDuotoneIcon } from "../duotone";
        import { GooglePlayLogoFillIcon } from "../fill";
        import { GooglePlayLogoLightIcon } from "../light";
        import { GooglePlayLogoRegularIcon } from "../regular";
        import { GooglePlayLogoThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const GooglePlayLogoIcon = memo(function GooglePlayLogo(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: GooglePlayLogoBoldIcon,
            duotone: GooglePlayLogoDuotoneIcon,
            fill: GooglePlayLogoFillIcon,
            light: GooglePlayLogoLightIcon,
            regular: GooglePlayLogoRegularIcon,
            thin: GooglePlayLogoThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
