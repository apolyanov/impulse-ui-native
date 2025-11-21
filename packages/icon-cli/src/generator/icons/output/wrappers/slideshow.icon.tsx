import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { SlideshowBoldIcon } from "../bold";
        import { SlideshowDuotoneIcon } from "../duotone";
        import { SlideshowFillIcon } from "../fill";
        import { SlideshowLightIcon } from "../light";
        import { SlideshowRegularIcon } from "../regular";
        import { SlideshowThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const SlideshowIcon = memo(function Slideshow(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: SlideshowBoldIcon,
            duotone: SlideshowDuotoneIcon,
            fill: SlideshowFillIcon,
            light: SlideshowLightIcon,
            regular: SlideshowRegularIcon,
            thin: SlideshowThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
