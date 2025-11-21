import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { GooglePodcastsLogoBoldIcon } from "../bold";
        import { GooglePodcastsLogoDuotoneIcon } from "../duotone";
        import { GooglePodcastsLogoFillIcon } from "../fill";
        import { GooglePodcastsLogoLightIcon } from "../light";
        import { GooglePodcastsLogoRegularIcon } from "../regular";
        import { GooglePodcastsLogoThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const GooglePodcastsLogoIcon = memo(function GooglePodcastsLogo(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: GooglePodcastsLogoBoldIcon,
            duotone: GooglePodcastsLogoDuotoneIcon,
            fill: GooglePodcastsLogoFillIcon,
            light: GooglePodcastsLogoLightIcon,
            regular: GooglePodcastsLogoRegularIcon,
            thin: GooglePodcastsLogoThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
