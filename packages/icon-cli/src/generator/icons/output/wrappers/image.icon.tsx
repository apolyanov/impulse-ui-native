import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ImageBoldIcon } from "../bold";
        import { ImageDuotoneIcon } from "../duotone";
        import { ImageFillIcon } from "../fill";
        import { ImageLightIcon } from "../light";
        import { ImageRegularIcon } from "../regular";
        import { ImageThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ImageIcon = memo(function Image(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ImageBoldIcon,
            duotone: ImageDuotoneIcon,
            fill: ImageFillIcon,
            light: ImageLightIcon,
            regular: ImageRegularIcon,
            thin: ImageThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
