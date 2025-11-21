import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { TextItalicBoldIcon } from "../bold";
        import { TextItalicDuotoneIcon } from "../duotone";
        import { TextItalicFillIcon } from "../fill";
        import { TextItalicLightIcon } from "../light";
        import { TextItalicRegularIcon } from "../regular";
        import { TextItalicThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const TextItalicIcon = memo(function TextItalic(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: TextItalicBoldIcon,
            duotone: TextItalicDuotoneIcon,
            fill: TextItalicFillIcon,
            light: TextItalicLightIcon,
            regular: TextItalicRegularIcon,
            thin: TextItalicThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
