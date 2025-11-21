import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { GifBoldIcon } from "../bold";
        import { GifDuotoneIcon } from "../duotone";
        import { GifFillIcon } from "../fill";
        import { GifLightIcon } from "../light";
        import { GifRegularIcon } from "../regular";
        import { GifThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const GifIcon = memo(function Gif(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: GifBoldIcon,
            duotone: GifDuotoneIcon,
            fill: GifFillIcon,
            light: GifLightIcon,
            regular: GifRegularIcon,
            thin: GifThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
