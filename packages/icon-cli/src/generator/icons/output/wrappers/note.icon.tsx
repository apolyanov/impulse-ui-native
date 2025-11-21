import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { NoteBoldIcon } from "../bold";
        import { NoteDuotoneIcon } from "../duotone";
        import { NoteFillIcon } from "../fill";
        import { NoteLightIcon } from "../light";
        import { NoteRegularIcon } from "../regular";
        import { NoteThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const NoteIcon = memo(function Note(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: NoteBoldIcon,
            duotone: NoteDuotoneIcon,
            fill: NoteFillIcon,
            light: NoteLightIcon,
            regular: NoteRegularIcon,
            thin: NoteThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
