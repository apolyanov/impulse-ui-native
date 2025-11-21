import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { LastfmLogoBoldIcon } from "../bold";
        import { LastfmLogoDuotoneIcon } from "../duotone";
        import { LastfmLogoFillIcon } from "../fill";
        import { LastfmLogoLightIcon } from "../light";
        import { LastfmLogoRegularIcon } from "../regular";
        import { LastfmLogoThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const LastfmLogoIcon = memo(function LastfmLogo(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: LastfmLogoBoldIcon,
            duotone: LastfmLogoDuotoneIcon,
            fill: LastfmLogoFillIcon,
            light: LastfmLogoLightIcon,
            regular: LastfmLogoRegularIcon,
            thin: LastfmLogoThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
