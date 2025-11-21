import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { TreePalmBoldIcon } from "../bold";
        import { TreePalmDuotoneIcon } from "../duotone";
        import { TreePalmFillIcon } from "../fill";
        import { TreePalmLightIcon } from "../light";
        import { TreePalmRegularIcon } from "../regular";
        import { TreePalmThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const TreePalmIcon = memo(function TreePalm(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: TreePalmBoldIcon,
            duotone: TreePalmDuotoneIcon,
            fill: TreePalmFillIcon,
            light: TreePalmLightIcon,
            regular: TreePalmRegularIcon,
            thin: TreePalmThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
