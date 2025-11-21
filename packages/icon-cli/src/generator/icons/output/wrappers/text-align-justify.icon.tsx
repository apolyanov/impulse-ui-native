import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { TextAlignJustifyBoldIcon } from "../bold";
        import { TextAlignJustifyDuotoneIcon } from "../duotone";
        import { TextAlignJustifyFillIcon } from "../fill";
        import { TextAlignJustifyLightIcon } from "../light";
        import { TextAlignJustifyRegularIcon } from "../regular";
        import { TextAlignJustifyThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const TextAlignJustifyIcon = memo(function TextAlignJustify(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: TextAlignJustifyBoldIcon,
            duotone: TextAlignJustifyDuotoneIcon,
            fill: TextAlignJustifyFillIcon,
            light: TextAlignJustifyLightIcon,
            regular: TextAlignJustifyRegularIcon,
            thin: TextAlignJustifyThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
