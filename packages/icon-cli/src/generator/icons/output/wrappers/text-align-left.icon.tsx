import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { TextAlignLeftBoldIcon } from "../bold";
        import { TextAlignLeftDuotoneIcon } from "../duotone";
        import { TextAlignLeftFillIcon } from "../fill";
        import { TextAlignLeftLightIcon } from "../light";
        import { TextAlignLeftRegularIcon } from "../regular";
        import { TextAlignLeftThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const TextAlignLeftIcon = memo(function TextAlignLeft(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: TextAlignLeftBoldIcon,
            duotone: TextAlignLeftDuotoneIcon,
            fill: TextAlignLeftFillIcon,
            light: TextAlignLeftLightIcon,
            regular: TextAlignLeftRegularIcon,
            thin: TextAlignLeftThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
