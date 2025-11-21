import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { SubtitlesBoldIcon } from "../bold";
        import { SubtitlesDuotoneIcon } from "../duotone";
        import { SubtitlesFillIcon } from "../fill";
        import { SubtitlesLightIcon } from "../light";
        import { SubtitlesRegularIcon } from "../regular";
        import { SubtitlesThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const SubtitlesIcon = memo(function Subtitles(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: SubtitlesBoldIcon,
            duotone: SubtitlesDuotoneIcon,
            fill: SubtitlesFillIcon,
            light: SubtitlesLightIcon,
            regular: SubtitlesRegularIcon,
            thin: SubtitlesThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
