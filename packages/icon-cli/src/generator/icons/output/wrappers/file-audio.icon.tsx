import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { FileAudioBoldIcon } from "../bold";
        import { FileAudioDuotoneIcon } from "../duotone";
        import { FileAudioFillIcon } from "../fill";
        import { FileAudioLightIcon } from "../light";
        import { FileAudioRegularIcon } from "../regular";
        import { FileAudioThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const FileAudioIcon = memo(function FileAudio(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: FileAudioBoldIcon,
            duotone: FileAudioDuotoneIcon,
            fill: FileAudioFillIcon,
            light: FileAudioLightIcon,
            regular: FileAudioRegularIcon,
            thin: FileAudioThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
