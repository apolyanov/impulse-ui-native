import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { TelegramLogoBoldIcon } from "../bold";
        import { TelegramLogoDuotoneIcon } from "../duotone";
        import { TelegramLogoFillIcon } from "../fill";
        import { TelegramLogoLightIcon } from "../light";
        import { TelegramLogoRegularIcon } from "../regular";
        import { TelegramLogoThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const TelegramLogoIcon = memo(function TelegramLogo(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: TelegramLogoBoldIcon,
            duotone: TelegramLogoDuotoneIcon,
            fill: TelegramLogoFillIcon,
            light: TelegramLogoLightIcon,
            regular: TelegramLogoRegularIcon,
            thin: TelegramLogoThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
