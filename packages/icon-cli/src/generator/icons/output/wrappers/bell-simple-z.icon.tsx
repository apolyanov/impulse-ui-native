import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { BellSimpleZBoldIcon } from "../bold";
        import { BellSimpleZDuotoneIcon } from "../duotone";
        import { BellSimpleZFillIcon } from "../fill";
        import { BellSimpleZLightIcon } from "../light";
        import { BellSimpleZRegularIcon } from "../regular";
        import { BellSimpleZThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const BellSimpleZIcon = memo(function BellSimpleZ(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: BellSimpleZBoldIcon,
            duotone: BellSimpleZDuotoneIcon,
            fill: BellSimpleZFillIcon,
            light: BellSimpleZLightIcon,
            regular: BellSimpleZRegularIcon,
            thin: BellSimpleZThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
