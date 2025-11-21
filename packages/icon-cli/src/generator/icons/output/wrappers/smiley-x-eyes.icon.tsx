import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { SmileyXEyesBoldIcon } from "../bold";
        import { SmileyXEyesDuotoneIcon } from "../duotone";
        import { SmileyXEyesFillIcon } from "../fill";
        import { SmileyXEyesLightIcon } from "../light";
        import { SmileyXEyesRegularIcon } from "../regular";
        import { SmileyXEyesThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const SmileyXEyesIcon = memo(function SmileyXEyes(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: SmileyXEyesBoldIcon,
            duotone: SmileyXEyesDuotoneIcon,
            fill: SmileyXEyesFillIcon,
            light: SmileyXEyesLightIcon,
            regular: SmileyXEyesRegularIcon,
            thin: SmileyXEyesThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
