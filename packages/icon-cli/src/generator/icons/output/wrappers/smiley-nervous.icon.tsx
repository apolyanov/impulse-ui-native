import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { SmileyNervousBoldIcon } from "../bold";
        import { SmileyNervousDuotoneIcon } from "../duotone";
        import { SmileyNervousFillIcon } from "../fill";
        import { SmileyNervousLightIcon } from "../light";
        import { SmileyNervousRegularIcon } from "../regular";
        import { SmileyNervousThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const SmileyNervousIcon = memo(function SmileyNervous(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: SmileyNervousBoldIcon,
            duotone: SmileyNervousDuotoneIcon,
            fill: SmileyNervousFillIcon,
            light: SmileyNervousLightIcon,
            regular: SmileyNervousRegularIcon,
            thin: SmileyNervousThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
