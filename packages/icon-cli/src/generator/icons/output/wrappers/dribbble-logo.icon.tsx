import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { DribbbleLogoBoldIcon } from "../bold";
        import { DribbbleLogoDuotoneIcon } from "../duotone";
        import { DribbbleLogoFillIcon } from "../fill";
        import { DribbbleLogoLightIcon } from "../light";
        import { DribbbleLogoRegularIcon } from "../regular";
        import { DribbbleLogoThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const DribbbleLogoIcon = memo(function DribbbleLogo(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: DribbbleLogoBoldIcon,
            duotone: DribbbleLogoDuotoneIcon,
            fill: DribbbleLogoFillIcon,
            light: DribbbleLogoLightIcon,
            regular: DribbbleLogoRegularIcon,
            thin: DribbbleLogoThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
