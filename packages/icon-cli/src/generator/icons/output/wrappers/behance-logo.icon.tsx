import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { BehanceLogoBoldIcon } from "../bold";
        import { BehanceLogoDuotoneIcon } from "../duotone";
        import { BehanceLogoFillIcon } from "../fill";
        import { BehanceLogoLightIcon } from "../light";
        import { BehanceLogoRegularIcon } from "../regular";
        import { BehanceLogoThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const BehanceLogoIcon = memo(function BehanceLogo(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: BehanceLogoBoldIcon,
            duotone: BehanceLogoDuotoneIcon,
            fill: BehanceLogoFillIcon,
            light: BehanceLogoLightIcon,
            regular: BehanceLogoRegularIcon,
            thin: BehanceLogoThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
