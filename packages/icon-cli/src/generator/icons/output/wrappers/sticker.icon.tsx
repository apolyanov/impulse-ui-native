import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { StickerBoldIcon } from "../bold";
        import { StickerDuotoneIcon } from "../duotone";
        import { StickerFillIcon } from "../fill";
        import { StickerLightIcon } from "../light";
        import { StickerRegularIcon } from "../regular";
        import { StickerThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const StickerIcon = memo(function Sticker(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: StickerBoldIcon,
            duotone: StickerDuotoneIcon,
            fill: StickerFillIcon,
            light: StickerLightIcon,
            regular: StickerRegularIcon,
            thin: StickerThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
