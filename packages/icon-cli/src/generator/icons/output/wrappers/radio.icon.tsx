import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { RadioBoldIcon } from "../bold";
        import { RadioDuotoneIcon } from "../duotone";
        import { RadioFillIcon } from "../fill";
        import { RadioLightIcon } from "../light";
        import { RadioRegularIcon } from "../regular";
        import { RadioThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const RadioIcon = memo(function Radio(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: RadioBoldIcon,
            duotone: RadioDuotoneIcon,
            fill: RadioFillIcon,
            light: RadioLightIcon,
            regular: RadioRegularIcon,
            thin: RadioThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
