import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { TextAUnderlineBoldIcon } from "../bold";
        import { TextAUnderlineDuotoneIcon } from "../duotone";
        import { TextAUnderlineFillIcon } from "../fill";
        import { TextAUnderlineLightIcon } from "../light";
        import { TextAUnderlineRegularIcon } from "../regular";
        import { TextAUnderlineThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const TextAUnderlineIcon = memo(function TextAUnderline(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: TextAUnderlineBoldIcon,
            duotone: TextAUnderlineDuotoneIcon,
            fill: TextAUnderlineFillIcon,
            light: TextAUnderlineLightIcon,
            regular: TextAUnderlineRegularIcon,
            thin: TextAUnderlineThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
