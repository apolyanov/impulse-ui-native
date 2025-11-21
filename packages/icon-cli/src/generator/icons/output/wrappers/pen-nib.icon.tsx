import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { PenNibBoldIcon } from "../bold";
        import { PenNibDuotoneIcon } from "../duotone";
        import { PenNibFillIcon } from "../fill";
        import { PenNibLightIcon } from "../light";
        import { PenNibRegularIcon } from "../regular";
        import { PenNibThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const PenNibIcon = memo(function PenNib(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: PenNibBoldIcon,
            duotone: PenNibDuotoneIcon,
            fill: PenNibFillIcon,
            light: PenNibLightIcon,
            regular: PenNibRegularIcon,
            thin: PenNibThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
