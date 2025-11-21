import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { AndroidLogoBoldIcon } from "../bold";
        import { AndroidLogoDuotoneIcon } from "../duotone";
        import { AndroidLogoFillIcon } from "../fill";
        import { AndroidLogoLightIcon } from "../light";
        import { AndroidLogoRegularIcon } from "../regular";
        import { AndroidLogoThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const AndroidLogoIcon = memo(function AndroidLogo(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: AndroidLogoBoldIcon,
            duotone: AndroidLogoDuotoneIcon,
            fill: AndroidLogoFillIcon,
            light: AndroidLogoLightIcon,
            regular: AndroidLogoRegularIcon,
            thin: AndroidLogoThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
