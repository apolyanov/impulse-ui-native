import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { NotepadBoldIcon } from "../bold";
        import { NotepadDuotoneIcon } from "../duotone";
        import { NotepadFillIcon } from "../fill";
        import { NotepadLightIcon } from "../light";
        import { NotepadRegularIcon } from "../regular";
        import { NotepadThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const NotepadIcon = memo(function Notepad(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: NotepadBoldIcon,
            duotone: NotepadDuotoneIcon,
            fill: NotepadFillIcon,
            light: NotepadLightIcon,
            regular: NotepadRegularIcon,
            thin: NotepadThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
