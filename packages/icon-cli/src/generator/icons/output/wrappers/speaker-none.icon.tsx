import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { SpeakerNoneBoldIcon } from "../bold";
        import { SpeakerNoneDuotoneIcon } from "../duotone";
        import { SpeakerNoneFillIcon } from "../fill";
        import { SpeakerNoneLightIcon } from "../light";
        import { SpeakerNoneRegularIcon } from "../regular";
        import { SpeakerNoneThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const SpeakerNoneIcon = memo(function SpeakerNone(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: SpeakerNoneBoldIcon,
            duotone: SpeakerNoneDuotoneIcon,
            fill: SpeakerNoneFillIcon,
            light: SpeakerNoneLightIcon,
            regular: SpeakerNoneRegularIcon,
            thin: SpeakerNoneThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
