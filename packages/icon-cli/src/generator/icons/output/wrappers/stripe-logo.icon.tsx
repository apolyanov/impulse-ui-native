import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { StripeLogoBoldIcon } from "../bold";
        import { StripeLogoDuotoneIcon } from "../duotone";
        import { StripeLogoFillIcon } from "../fill";
        import { StripeLogoLightIcon } from "../light";
        import { StripeLogoRegularIcon } from "../regular";
        import { StripeLogoThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const StripeLogoIcon = memo(function StripeLogo(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: StripeLogoBoldIcon,
            duotone: StripeLogoDuotoneIcon,
            fill: StripeLogoFillIcon,
            light: StripeLogoLightIcon,
            regular: StripeLogoRegularIcon,
            thin: StripeLogoThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
