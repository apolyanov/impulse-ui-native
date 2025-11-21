import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { WechatLogoBoldIcon } from "../bold";
        import { WechatLogoDuotoneIcon } from "../duotone";
        import { WechatLogoFillIcon } from "../fill";
        import { WechatLogoLightIcon } from "../light";
        import { WechatLogoRegularIcon } from "../regular";
        import { WechatLogoThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const WechatLogoIcon = memo(function WechatLogo(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: WechatLogoBoldIcon,
            duotone: WechatLogoDuotoneIcon,
            fill: WechatLogoFillIcon,
            light: WechatLogoLightIcon,
            regular: WechatLogoRegularIcon,
            thin: WechatLogoThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
