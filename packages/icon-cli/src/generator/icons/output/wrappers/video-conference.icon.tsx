import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { VideoConferenceBoldIcon } from "../bold";
        import { VideoConferenceDuotoneIcon } from "../duotone";
        import { VideoConferenceFillIcon } from "../fill";
        import { VideoConferenceLightIcon } from "../light";
        import { VideoConferenceRegularIcon } from "../regular";
        import { VideoConferenceThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const VideoConferenceIcon = memo(function VideoConference(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: VideoConferenceBoldIcon,
            duotone: VideoConferenceDuotoneIcon,
            fill: VideoConferenceFillIcon,
            light: VideoConferenceLightIcon,
            regular: VideoConferenceRegularIcon,
            thin: VideoConferenceThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
