import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { AmazonLogoBoldIcon } from "../bold";
        import { AmazonLogoDuotoneIcon } from "../duotone";
        import { AmazonLogoFillIcon } from "../fill";
        import { AmazonLogoLightIcon } from "../light";
        import { AmazonLogoRegularIcon } from "../regular";
        import { AmazonLogoThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const AmazonLogoIcon = memo(function AmazonLogo(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: AmazonLogoBoldIcon,
            duotone: AmazonLogoDuotoneIcon,
            fill: AmazonLogoFillIcon,
            light: AmazonLogoLightIcon,
            regular: AmazonLogoRegularIcon,
            thin: AmazonLogoThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
