import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { MusicNotesBoldIcon } from "../bold";
        import { MusicNotesDuotoneIcon } from "../duotone";
        import { MusicNotesFillIcon } from "../fill";
        import { MusicNotesLightIcon } from "../light";
        import { MusicNotesRegularIcon } from "../regular";
        import { MusicNotesThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const MusicNotesIcon = memo(function MusicNotes(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: MusicNotesBoldIcon,
            duotone: MusicNotesDuotoneIcon,
            fill: MusicNotesFillIcon,
            light: MusicNotesLightIcon,
            regular: MusicNotesRegularIcon,
            thin: MusicNotesThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
