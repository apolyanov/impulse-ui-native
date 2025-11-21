import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { DeviceMobileSpeakerBoldIcon } from "../bold";
        import { DeviceMobileSpeakerDuotoneIcon } from "../duotone";
        import { DeviceMobileSpeakerFillIcon } from "../fill";
        import { DeviceMobileSpeakerLightIcon } from "../light";
        import { DeviceMobileSpeakerRegularIcon } from "../regular";
        import { DeviceMobileSpeakerThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const DeviceMobileSpeakerIcon = memo(function DeviceMobileSpeaker(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: DeviceMobileSpeakerBoldIcon,
            duotone: DeviceMobileSpeakerDuotoneIcon,
            fill: DeviceMobileSpeakerFillIcon,
            light: DeviceMobileSpeakerLightIcon,
            regular: DeviceMobileSpeakerRegularIcon,
            thin: DeviceMobileSpeakerThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
