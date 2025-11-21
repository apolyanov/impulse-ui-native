import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { TextTBoldIcon } from "../bold";
        import { TextTDuotoneIcon } from "../duotone";
        import { TextTFillIcon } from "../fill";
        import { TextTLightIcon } from "../light";
        import { TextTRegularIcon } from "../regular";
        import { TextTThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const TextTIcon = memo(function TextT(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: TextTBoldIcon,
            duotone: TextTDuotoneIcon,
            fill: TextTFillIcon,
            light: TextTLightIcon,
            regular: TextTRegularIcon,
            thin: TextTThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
