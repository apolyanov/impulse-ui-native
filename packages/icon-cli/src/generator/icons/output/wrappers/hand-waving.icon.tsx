import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { HandWavingBoldIcon } from "../bold";
        import { HandWavingDuotoneIcon } from "../duotone";
        import { HandWavingFillIcon } from "../fill";
        import { HandWavingLightIcon } from "../light";
        import { HandWavingRegularIcon } from "../regular";
        import { HandWavingThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const HandWavingIcon = memo(function HandWaving(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: HandWavingBoldIcon,
            duotone: HandWavingDuotoneIcon,
            fill: HandWavingFillIcon,
            light: HandWavingLightIcon,
            regular: HandWavingRegularIcon,
            thin: HandWavingThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
