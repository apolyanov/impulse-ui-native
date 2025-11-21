import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ImagesBoldIcon } from "../bold";
        import { ImagesDuotoneIcon } from "../duotone";
        import { ImagesFillIcon } from "../fill";
        import { ImagesLightIcon } from "../light";
        import { ImagesRegularIcon } from "../regular";
        import { ImagesThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ImagesIcon = memo(function Images(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ImagesBoldIcon,
            duotone: ImagesDuotoneIcon,
            fill: ImagesFillIcon,
            light: ImagesLightIcon,
            regular: ImagesRegularIcon,
            thin: ImagesThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
