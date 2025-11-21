import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { PhosphorLogoBoldIcon } from "../bold";
        import { PhosphorLogoDuotoneIcon } from "../duotone";
        import { PhosphorLogoFillIcon } from "../fill";
        import { PhosphorLogoLightIcon } from "../light";
        import { PhosphorLogoRegularIcon } from "../regular";
        import { PhosphorLogoThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const PhosphorLogoIcon = memo(function PhosphorLogo(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: PhosphorLogoBoldIcon,
            duotone: PhosphorLogoDuotoneIcon,
            fill: PhosphorLogoFillIcon,
            light: PhosphorLogoLightIcon,
            regular: PhosphorLogoRegularIcon,
            thin: PhosphorLogoThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
