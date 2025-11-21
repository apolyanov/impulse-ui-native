import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { TextColumnsBoldIcon } from "../bold";
        import { TextColumnsDuotoneIcon } from "../duotone";
        import { TextColumnsFillIcon } from "../fill";
        import { TextColumnsLightIcon } from "../light";
        import { TextColumnsRegularIcon } from "../regular";
        import { TextColumnsThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const TextColumnsIcon = memo(function TextColumns(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: TextColumnsBoldIcon,
            duotone: TextColumnsDuotoneIcon,
            fill: TextColumnsFillIcon,
            light: TextColumnsLightIcon,
            regular: TextColumnsRegularIcon,
            thin: TextColumnsThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
