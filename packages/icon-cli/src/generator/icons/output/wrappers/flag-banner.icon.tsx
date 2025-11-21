import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { FlagBannerBoldIcon } from "../bold";
        import { FlagBannerDuotoneIcon } from "../duotone";
        import { FlagBannerFillIcon } from "../fill";
        import { FlagBannerLightIcon } from "../light";
        import { FlagBannerRegularIcon } from "../regular";
        import { FlagBannerThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const FlagBannerIcon = memo(function FlagBanner(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: FlagBannerBoldIcon,
            duotone: FlagBannerDuotoneIcon,
            fill: FlagBannerFillIcon,
            light: FlagBannerLightIcon,
            regular: FlagBannerRegularIcon,
            thin: FlagBannerThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
