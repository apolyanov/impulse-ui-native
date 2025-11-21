import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { HighlighterBoldIcon } from "../bold";
        import { HighlighterDuotoneIcon } from "../duotone";
        import { HighlighterFillIcon } from "../fill";
        import { HighlighterLightIcon } from "../light";
        import { HighlighterRegularIcon } from "../regular";
        import { HighlighterThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const HighlighterIcon = memo(function Highlighter(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: HighlighterBoldIcon,
            duotone: HighlighterDuotoneIcon,
            fill: HighlighterFillIcon,
            light: HighlighterLightIcon,
            regular: HighlighterRegularIcon,
            thin: HighlighterThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
