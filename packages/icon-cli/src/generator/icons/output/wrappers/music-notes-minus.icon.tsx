import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { MusicNotesMinusBoldIcon } from "../bold";
        import { MusicNotesMinusDuotoneIcon } from "../duotone";
        import { MusicNotesMinusFillIcon } from "../fill";
        import { MusicNotesMinusLightIcon } from "../light";
        import { MusicNotesMinusRegularIcon } from "../regular";
        import { MusicNotesMinusThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const MusicNotesMinusIcon = memo(function MusicNotesMinus(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: MusicNotesMinusBoldIcon,
            duotone: MusicNotesMinusDuotoneIcon,
            fill: MusicNotesMinusFillIcon,
            light: MusicNotesMinusLightIcon,
            regular: MusicNotesMinusRegularIcon,
            thin: MusicNotesMinusThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
