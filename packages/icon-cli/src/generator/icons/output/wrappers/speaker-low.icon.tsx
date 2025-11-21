import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { SpeakerLowBoldIcon } from "../bold";
        import { SpeakerLowDuotoneIcon } from "../duotone";
        import { SpeakerLowFillIcon } from "../fill";
        import { SpeakerLowLightIcon } from "../light";
        import { SpeakerLowRegularIcon } from "../regular";
        import { SpeakerLowThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const SpeakerLowIcon = memo(function SpeakerLow(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: SpeakerLowBoldIcon,
            duotone: SpeakerLowDuotoneIcon,
            fill: SpeakerLowFillIcon,
            light: SpeakerLowLightIcon,
            regular: SpeakerLowRegularIcon,
            thin: SpeakerLowThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
