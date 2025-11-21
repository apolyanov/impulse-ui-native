import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { MastodonLogoBoldIcon } from "../bold";
        import { MastodonLogoDuotoneIcon } from "../duotone";
        import { MastodonLogoFillIcon } from "../fill";
        import { MastodonLogoLightIcon } from "../light";
        import { MastodonLogoRegularIcon } from "../regular";
        import { MastodonLogoThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const MastodonLogoIcon = memo(function MastodonLogo(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: MastodonLogoBoldIcon,
            duotone: MastodonLogoDuotoneIcon,
            fill: MastodonLogoFillIcon,
            light: MastodonLogoLightIcon,
            regular: MastodonLogoRegularIcon,
            thin: MastodonLogoThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
