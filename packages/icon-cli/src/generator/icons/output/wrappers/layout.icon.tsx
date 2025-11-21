import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { LayoutBoldIcon } from "../bold";
        import { LayoutDuotoneIcon } from "../duotone";
        import { LayoutFillIcon } from "../fill";
        import { LayoutLightIcon } from "../light";
        import { LayoutRegularIcon } from "../regular";
        import { LayoutThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const LayoutIcon = memo(function Layout(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: LayoutBoldIcon,
            duotone: LayoutDuotoneIcon,
            fill: LayoutFillIcon,
            light: LayoutLightIcon,
            regular: LayoutRegularIcon,
            thin: LayoutThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
