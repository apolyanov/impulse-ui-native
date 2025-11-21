import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { MusicNotesSimpleBoldIcon } from "../bold";
        import { MusicNotesSimpleDuotoneIcon } from "../duotone";
        import { MusicNotesSimpleFillIcon } from "../fill";
        import { MusicNotesSimpleLightIcon } from "../light";
        import { MusicNotesSimpleRegularIcon } from "../regular";
        import { MusicNotesSimpleThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const MusicNotesSimpleIcon = memo(function MusicNotesSimple(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: MusicNotesSimpleBoldIcon,
            duotone: MusicNotesSimpleDuotoneIcon,
            fill: MusicNotesSimpleFillIcon,
            light: MusicNotesSimpleLightIcon,
            regular: MusicNotesSimpleRegularIcon,
            thin: MusicNotesSimpleThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
