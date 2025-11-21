import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { SmileyAngryBoldIcon } from "../bold";
        import { SmileyAngryDuotoneIcon } from "../duotone";
        import { SmileyAngryFillIcon } from "../fill";
        import { SmileyAngryLightIcon } from "../light";
        import { SmileyAngryRegularIcon } from "../regular";
        import { SmileyAngryThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const SmileyAngryIcon = memo(function SmileyAngry(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: SmileyAngryBoldIcon,
            duotone: SmileyAngryDuotoneIcon,
            fill: SmileyAngryFillIcon,
            light: SmileyAngryLightIcon,
            regular: SmileyAngryRegularIcon,
            thin: SmileyAngryThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
