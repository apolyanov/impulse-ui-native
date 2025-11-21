import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { SketchLogoBoldIcon } from "../bold";
        import { SketchLogoDuotoneIcon } from "../duotone";
        import { SketchLogoFillIcon } from "../fill";
        import { SketchLogoLightIcon } from "../light";
        import { SketchLogoRegularIcon } from "../regular";
        import { SketchLogoThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const SketchLogoIcon = memo(function SketchLogo(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: SketchLogoBoldIcon,
            duotone: SketchLogoDuotoneIcon,
            fill: SketchLogoFillIcon,
            light: SketchLogoLightIcon,
            regular: SketchLogoRegularIcon,
            thin: SketchLogoThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
