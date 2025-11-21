import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { SmileyWinkBoldIcon } from "../bold";
        import { SmileyWinkDuotoneIcon } from "../duotone";
        import { SmileyWinkFillIcon } from "../fill";
        import { SmileyWinkLightIcon } from "../light";
        import { SmileyWinkRegularIcon } from "../regular";
        import { SmileyWinkThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const SmileyWinkIcon = memo(function SmileyWink(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: SmileyWinkBoldIcon,
            duotone: SmileyWinkDuotoneIcon,
            fill: SmileyWinkFillIcon,
            light: SmileyWinkLightIcon,
            regular: SmileyWinkRegularIcon,
            thin: SmileyWinkThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
