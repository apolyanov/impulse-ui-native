import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { SpeakerSimpleHighBoldIcon } from "../bold";
        import { SpeakerSimpleHighDuotoneIcon } from "../duotone";
        import { SpeakerSimpleHighFillIcon } from "../fill";
        import { SpeakerSimpleHighLightIcon } from "../light";
        import { SpeakerSimpleHighRegularIcon } from "../regular";
        import { SpeakerSimpleHighThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const SpeakerSimpleHighIcon = memo(function SpeakerSimpleHigh(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: SpeakerSimpleHighBoldIcon,
            duotone: SpeakerSimpleHighDuotoneIcon,
            fill: SpeakerSimpleHighFillIcon,
            light: SpeakerSimpleHighLightIcon,
            regular: SpeakerSimpleHighRegularIcon,
            thin: SpeakerSimpleHighThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
