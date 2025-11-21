import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { SpeakerSimpleLowBoldIcon } from "../bold";
        import { SpeakerSimpleLowDuotoneIcon } from "../duotone";
        import { SpeakerSimpleLowFillIcon } from "../fill";
        import { SpeakerSimpleLowLightIcon } from "../light";
        import { SpeakerSimpleLowRegularIcon } from "../regular";
        import { SpeakerSimpleLowThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const SpeakerSimpleLowIcon = memo(function SpeakerSimpleLow(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: SpeakerSimpleLowBoldIcon,
            duotone: SpeakerSimpleLowDuotoneIcon,
            fill: SpeakerSimpleLowFillIcon,
            light: SpeakerSimpleLowLightIcon,
            regular: SpeakerSimpleLowRegularIcon,
            thin: SpeakerSimpleLowThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
