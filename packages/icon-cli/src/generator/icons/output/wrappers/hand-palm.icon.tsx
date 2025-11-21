import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { HandPalmBoldIcon } from "../bold";
        import { HandPalmDuotoneIcon } from "../duotone";
        import { HandPalmFillIcon } from "../fill";
        import { HandPalmLightIcon } from "../light";
        import { HandPalmRegularIcon } from "../regular";
        import { HandPalmThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const HandPalmIcon = memo(function HandPalm(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: HandPalmBoldIcon,
            duotone: HandPalmDuotoneIcon,
            fill: HandPalmFillIcon,
            light: HandPalmLightIcon,
            regular: HandPalmRegularIcon,
            thin: HandPalmThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
