import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ReadCvLogoBoldIcon } from "../bold";
        import { ReadCvLogoDuotoneIcon } from "../duotone";
        import { ReadCvLogoFillIcon } from "../fill";
        import { ReadCvLogoLightIcon } from "../light";
        import { ReadCvLogoRegularIcon } from "../regular";
        import { ReadCvLogoThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ReadCvLogoIcon = memo(function ReadCvLogo(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ReadCvLogoBoldIcon,
            duotone: ReadCvLogoDuotoneIcon,
            fill: ReadCvLogoFillIcon,
            light: ReadCvLogoLightIcon,
            regular: ReadCvLogoRegularIcon,
            thin: ReadCvLogoThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
