import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { DevToLogoBoldIcon } from "../bold";
        import { DevToLogoDuotoneIcon } from "../duotone";
        import { DevToLogoFillIcon } from "../fill";
        import { DevToLogoLightIcon } from "../light";
        import { DevToLogoRegularIcon } from "../regular";
        import { DevToLogoThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const DevToLogoIcon = memo(function DevToLogo(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: DevToLogoBoldIcon,
            duotone: DevToLogoDuotoneIcon,
            fill: DevToLogoFillIcon,
            light: DevToLogoLightIcon,
            regular: DevToLogoRegularIcon,
            thin: DevToLogoThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
