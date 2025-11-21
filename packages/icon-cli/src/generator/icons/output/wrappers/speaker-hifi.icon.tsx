import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { SpeakerHifiBoldIcon } from "../bold";
        import { SpeakerHifiDuotoneIcon } from "../duotone";
        import { SpeakerHifiFillIcon } from "../fill";
        import { SpeakerHifiLightIcon } from "../light";
        import { SpeakerHifiRegularIcon } from "../regular";
        import { SpeakerHifiThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const SpeakerHifiIcon = memo(function SpeakerHifi(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: SpeakerHifiBoldIcon,
            duotone: SpeakerHifiDuotoneIcon,
            fill: SpeakerHifiFillIcon,
            light: SpeakerHifiLightIcon,
            regular: SpeakerHifiRegularIcon,
            thin: SpeakerHifiThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
