import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { SnapchatLogoBoldIcon } from "../bold";
        import { SnapchatLogoDuotoneIcon } from "../duotone";
        import { SnapchatLogoFillIcon } from "../fill";
        import { SnapchatLogoLightIcon } from "../light";
        import { SnapchatLogoRegularIcon } from "../regular";
        import { SnapchatLogoThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const SnapchatLogoIcon = memo(function SnapchatLogo(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: SnapchatLogoBoldIcon,
            duotone: SnapchatLogoDuotoneIcon,
            fill: SnapchatLogoFillIcon,
            light: SnapchatLogoLightIcon,
            regular: SnapchatLogoRegularIcon,
            thin: SnapchatLogoThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
