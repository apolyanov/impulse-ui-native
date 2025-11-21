import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { TextAaBoldIcon } from "../bold";
        import { TextAaDuotoneIcon } from "../duotone";
        import { TextAaFillIcon } from "../fill";
        import { TextAaLightIcon } from "../light";
        import { TextAaRegularIcon } from "../regular";
        import { TextAaThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const TextAaIcon = memo(function TextAa(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: TextAaBoldIcon,
            duotone: TextAaDuotoneIcon,
            fill: TextAaFillIcon,
            light: TextAaLightIcon,
            regular: TextAaRegularIcon,
            thin: TextAaThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
