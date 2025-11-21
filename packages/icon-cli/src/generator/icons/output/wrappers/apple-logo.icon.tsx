import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { AppleLogoBoldIcon } from "../bold";
        import { AppleLogoDuotoneIcon } from "../duotone";
        import { AppleLogoFillIcon } from "../fill";
        import { AppleLogoLightIcon } from "../light";
        import { AppleLogoRegularIcon } from "../regular";
        import { AppleLogoThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const AppleLogoIcon = memo(function AppleLogo(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: AppleLogoBoldIcon,
            duotone: AppleLogoDuotoneIcon,
            fill: AppleLogoFillIcon,
            light: AppleLogoLightIcon,
            regular: AppleLogoRegularIcon,
            thin: AppleLogoThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
