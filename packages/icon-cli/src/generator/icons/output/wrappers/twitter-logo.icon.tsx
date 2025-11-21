import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { TwitterLogoBoldIcon } from "../bold";
        import { TwitterLogoDuotoneIcon } from "../duotone";
        import { TwitterLogoFillIcon } from "../fill";
        import { TwitterLogoLightIcon } from "../light";
        import { TwitterLogoRegularIcon } from "../regular";
        import { TwitterLogoThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const TwitterLogoIcon = memo(function TwitterLogo(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: TwitterLogoBoldIcon,
            duotone: TwitterLogoDuotoneIcon,
            fill: TwitterLogoFillIcon,
            light: TwitterLogoLightIcon,
            regular: TwitterLogoRegularIcon,
            thin: TwitterLogoThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
