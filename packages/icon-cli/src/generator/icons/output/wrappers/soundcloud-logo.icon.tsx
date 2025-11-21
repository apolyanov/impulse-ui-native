import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { SoundcloudLogoBoldIcon } from "../bold";
        import { SoundcloudLogoDuotoneIcon } from "../duotone";
        import { SoundcloudLogoFillIcon } from "../fill";
        import { SoundcloudLogoLightIcon } from "../light";
        import { SoundcloudLogoRegularIcon } from "../regular";
        import { SoundcloudLogoThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const SoundcloudLogoIcon = memo(function SoundcloudLogo(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: SoundcloudLogoBoldIcon,
            duotone: SoundcloudLogoDuotoneIcon,
            fill: SoundcloudLogoFillIcon,
            light: SoundcloudLogoLightIcon,
            regular: SoundcloudLogoRegularIcon,
            thin: SoundcloudLogoThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
