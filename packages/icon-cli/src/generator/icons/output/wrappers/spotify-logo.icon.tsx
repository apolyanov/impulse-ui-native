import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { SpotifyLogoBoldIcon } from "../bold";
        import { SpotifyLogoDuotoneIcon } from "../duotone";
        import { SpotifyLogoFillIcon } from "../fill";
        import { SpotifyLogoLightIcon } from "../light";
        import { SpotifyLogoRegularIcon } from "../regular";
        import { SpotifyLogoThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const SpotifyLogoIcon = memo(function SpotifyLogo(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: SpotifyLogoBoldIcon,
            duotone: SpotifyLogoDuotoneIcon,
            fill: SpotifyLogoFillIcon,
            light: SpotifyLogoLightIcon,
            regular: SpotifyLogoRegularIcon,
            thin: SpotifyLogoThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
