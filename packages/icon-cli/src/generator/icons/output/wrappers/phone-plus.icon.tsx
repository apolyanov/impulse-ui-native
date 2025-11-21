import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { PhonePlusBoldIcon } from "../bold";
        import { PhonePlusDuotoneIcon } from "../duotone";
        import { PhonePlusFillIcon } from "../fill";
        import { PhonePlusLightIcon } from "../light";
        import { PhonePlusRegularIcon } from "../regular";
        import { PhonePlusThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const PhonePlusIcon = memo(function PhonePlus(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: PhonePlusBoldIcon,
            duotone: PhonePlusDuotoneIcon,
            fill: PhonePlusFillIcon,
            light: PhonePlusLightIcon,
            regular: PhonePlusRegularIcon,
            thin: PhonePlusThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
