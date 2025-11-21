import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CursorClickBoldIcon } from "../bold";
        import { CursorClickDuotoneIcon } from "../duotone";
        import { CursorClickFillIcon } from "../fill";
        import { CursorClickLightIcon } from "../light";
        import { CursorClickRegularIcon } from "../regular";
        import { CursorClickThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CursorClickIcon = memo(function CursorClick(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CursorClickBoldIcon,
            duotone: CursorClickDuotoneIcon,
            fill: CursorClickFillIcon,
            light: CursorClickLightIcon,
            regular: CursorClickRegularIcon,
            thin: CursorClickThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
