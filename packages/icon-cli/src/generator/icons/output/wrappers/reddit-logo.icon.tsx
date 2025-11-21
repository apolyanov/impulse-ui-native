import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { RedditLogoBoldIcon } from "../bold";
        import { RedditLogoDuotoneIcon } from "../duotone";
        import { RedditLogoFillIcon } from "../fill";
        import { RedditLogoLightIcon } from "../light";
        import { RedditLogoRegularIcon } from "../regular";
        import { RedditLogoThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const RedditLogoIcon = memo(function RedditLogo(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: RedditLogoBoldIcon,
            duotone: RedditLogoDuotoneIcon,
            fill: RedditLogoFillIcon,
            light: RedditLogoLightIcon,
            regular: RedditLogoRegularIcon,
            thin: RedditLogoThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
