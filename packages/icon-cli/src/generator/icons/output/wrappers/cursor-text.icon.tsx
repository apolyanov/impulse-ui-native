import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CursorTextBoldIcon } from "../bold";
        import { CursorTextDuotoneIcon } from "../duotone";
        import { CursorTextFillIcon } from "../fill";
        import { CursorTextLightIcon } from "../light";
        import { CursorTextRegularIcon } from "../regular";
        import { CursorTextThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CursorTextIcon = memo(function CursorText(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CursorTextBoldIcon,
            duotone: CursorTextDuotoneIcon,
            fill: CursorTextFillIcon,
            light: CursorTextLightIcon,
            regular: CursorTextRegularIcon,
            thin: CursorTextThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
