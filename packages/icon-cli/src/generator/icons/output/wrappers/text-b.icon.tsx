import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { TextBBoldIcon } from "../bold";
        import { TextBDuotoneIcon } from "../duotone";
        import { TextBFillIcon } from "../fill";
        import { TextBLightIcon } from "../light";
        import { TextBRegularIcon } from "../regular";
        import { TextBThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const TextBIcon = memo(function TextB(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: TextBBoldIcon,
            duotone: TextBDuotoneIcon,
            fill: TextBFillIcon,
            light: TextBLightIcon,
            regular: TextBRegularIcon,
            thin: TextBThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
