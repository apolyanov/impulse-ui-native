import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { VectorThreeBoldIcon } from "../bold";
        import { VectorThreeDuotoneIcon } from "../duotone";
        import { VectorThreeFillIcon } from "../fill";
        import { VectorThreeLightIcon } from "../light";
        import { VectorThreeRegularIcon } from "../regular";
        import { VectorThreeThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const VectorThreeIcon = memo(function VectorThree(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: VectorThreeBoldIcon,
            duotone: VectorThreeDuotoneIcon,
            fill: VectorThreeFillIcon,
            light: VectorThreeLightIcon,
            regular: VectorThreeRegularIcon,
            thin: VectorThreeThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
