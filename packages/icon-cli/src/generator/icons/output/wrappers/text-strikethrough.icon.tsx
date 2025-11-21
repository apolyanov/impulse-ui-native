import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { TextStrikethroughBoldIcon } from "../bold";
        import { TextStrikethroughDuotoneIcon } from "../duotone";
        import { TextStrikethroughFillIcon } from "../fill";
        import { TextStrikethroughLightIcon } from "../light";
        import { TextStrikethroughRegularIcon } from "../regular";
        import { TextStrikethroughThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const TextStrikethroughIcon = memo(function TextStrikethrough(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: TextStrikethroughBoldIcon,
            duotone: TextStrikethroughDuotoneIcon,
            fill: TextStrikethroughFillIcon,
            light: TextStrikethroughLightIcon,
            regular: TextStrikethroughRegularIcon,
            thin: TextStrikethroughThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
