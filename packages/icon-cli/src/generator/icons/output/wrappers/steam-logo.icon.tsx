import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { SteamLogoBoldIcon } from "../bold";
        import { SteamLogoDuotoneIcon } from "../duotone";
        import { SteamLogoFillIcon } from "../fill";
        import { SteamLogoLightIcon } from "../light";
        import { SteamLogoRegularIcon } from "../regular";
        import { SteamLogoThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const SteamLogoIcon = memo(function SteamLogo(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: SteamLogoBoldIcon,
            duotone: SteamLogoDuotoneIcon,
            fill: SteamLogoFillIcon,
            light: SteamLogoLightIcon,
            regular: SteamLogoRegularIcon,
            thin: SteamLogoThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
