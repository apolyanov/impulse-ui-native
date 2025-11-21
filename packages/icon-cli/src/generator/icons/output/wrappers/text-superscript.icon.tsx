import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { TextSuperscriptBoldIcon } from "../bold";
        import { TextSuperscriptDuotoneIcon } from "../duotone";
        import { TextSuperscriptFillIcon } from "../fill";
        import { TextSuperscriptLightIcon } from "../light";
        import { TextSuperscriptRegularIcon } from "../regular";
        import { TextSuperscriptThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const TextSuperscriptIcon = memo(function TextSuperscript(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: TextSuperscriptBoldIcon,
            duotone: TextSuperscriptDuotoneIcon,
            fill: TextSuperscriptFillIcon,
            light: TextSuperscriptLightIcon,
            regular: TextSuperscriptRegularIcon,
            thin: TextSuperscriptThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
