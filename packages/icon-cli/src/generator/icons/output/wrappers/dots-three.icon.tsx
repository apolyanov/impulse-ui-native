import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { DotsThreeBoldIcon } from "../bold";
        import { DotsThreeDuotoneIcon } from "../duotone";
        import { DotsThreeFillIcon } from "../fill";
        import { DotsThreeLightIcon } from "../light";
        import { DotsThreeRegularIcon } from "../regular";
        import { DotsThreeThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const DotsThreeIcon = memo(function DotsThree(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: DotsThreeBoldIcon,
            duotone: DotsThreeDuotoneIcon,
            fill: DotsThreeFillIcon,
            light: DotsThreeLightIcon,
            regular: DotsThreeRegularIcon,
            thin: DotsThreeThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
