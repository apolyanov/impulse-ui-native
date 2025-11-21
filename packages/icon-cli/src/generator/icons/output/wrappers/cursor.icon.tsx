import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CursorBoldIcon } from "../bold";
        import { CursorDuotoneIcon } from "../duotone";
        import { CursorFillIcon } from "../fill";
        import { CursorLightIcon } from "../light";
        import { CursorRegularIcon } from "../regular";
        import { CursorThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CursorIcon = memo(function Cursor(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CursorBoldIcon,
            duotone: CursorDuotoneIcon,
            fill: CursorFillIcon,
            light: CursorLightIcon,
            regular: CursorRegularIcon,
            thin: CursorThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
