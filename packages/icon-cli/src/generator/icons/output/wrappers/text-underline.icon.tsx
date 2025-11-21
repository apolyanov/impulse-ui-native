import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { TextUnderlineBoldIcon } from "../bold";
        import { TextUnderlineDuotoneIcon } from "../duotone";
        import { TextUnderlineFillIcon } from "../fill";
        import { TextUnderlineLightIcon } from "../light";
        import { TextUnderlineRegularIcon } from "../regular";
        import { TextUnderlineThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const TextUnderlineIcon = memo(function TextUnderline(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: TextUnderlineBoldIcon,
            duotone: TextUnderlineDuotoneIcon,
            fill: TextUnderlineFillIcon,
            light: TextUnderlineLightIcon,
            regular: TextUnderlineRegularIcon,
            thin: TextUnderlineThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
