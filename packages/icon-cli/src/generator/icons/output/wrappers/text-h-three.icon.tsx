import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { TextHThreeBoldIcon } from "../bold";
        import { TextHThreeDuotoneIcon } from "../duotone";
        import { TextHThreeFillIcon } from "../fill";
        import { TextHThreeLightIcon } from "../light";
        import { TextHThreeRegularIcon } from "../regular";
        import { TextHThreeThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const TextHThreeIcon = memo(function TextHThree(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: TextHThreeBoldIcon,
            duotone: TextHThreeDuotoneIcon,
            fill: TextHThreeFillIcon,
            light: TextHThreeLightIcon,
            regular: TextHThreeRegularIcon,
            thin: TextHThreeThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
