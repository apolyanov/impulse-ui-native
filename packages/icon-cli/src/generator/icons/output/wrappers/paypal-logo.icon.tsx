import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { PaypalLogoBoldIcon } from "../bold";
        import { PaypalLogoDuotoneIcon } from "../duotone";
        import { PaypalLogoFillIcon } from "../fill";
        import { PaypalLogoLightIcon } from "../light";
        import { PaypalLogoRegularIcon } from "../regular";
        import { PaypalLogoThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const PaypalLogoIcon = memo(function PaypalLogo(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: PaypalLogoBoldIcon,
            duotone: PaypalLogoDuotoneIcon,
            fill: PaypalLogoFillIcon,
            light: PaypalLogoLightIcon,
            regular: PaypalLogoRegularIcon,
            thin: PaypalLogoThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
