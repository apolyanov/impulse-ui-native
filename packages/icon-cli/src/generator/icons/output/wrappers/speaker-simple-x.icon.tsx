import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { SpeakerSimpleXBoldIcon } from "../bold";
        import { SpeakerSimpleXDuotoneIcon } from "../duotone";
        import { SpeakerSimpleXFillIcon } from "../fill";
        import { SpeakerSimpleXLightIcon } from "../light";
        import { SpeakerSimpleXRegularIcon } from "../regular";
        import { SpeakerSimpleXThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const SpeakerSimpleXIcon = memo(function SpeakerSimpleX(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: SpeakerSimpleXBoldIcon,
            duotone: SpeakerSimpleXDuotoneIcon,
            fill: SpeakerSimpleXFillIcon,
            light: SpeakerSimpleXLightIcon,
            regular: SpeakerSimpleXRegularIcon,
            thin: SpeakerSimpleXThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
