import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ReplitLogoBoldIcon } from "../bold";
        import { ReplitLogoDuotoneIcon } from "../duotone";
        import { ReplitLogoFillIcon } from "../fill";
        import { ReplitLogoLightIcon } from "../light";
        import { ReplitLogoRegularIcon } from "../regular";
        import { ReplitLogoThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ReplitLogoIcon = memo(function ReplitLogo(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ReplitLogoBoldIcon,
            duotone: ReplitLogoDuotoneIcon,
            fill: ReplitLogoFillIcon,
            light: ReplitLogoLightIcon,
            regular: ReplitLogoRegularIcon,
            thin: ReplitLogoThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
