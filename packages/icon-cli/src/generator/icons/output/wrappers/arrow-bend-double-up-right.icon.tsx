import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ArrowBendDoubleUpRightBoldIcon } from "../bold";
        import { ArrowBendDoubleUpRightDuotoneIcon } from "../duotone";
        import { ArrowBendDoubleUpRightFillIcon } from "../fill";
        import { ArrowBendDoubleUpRightLightIcon } from "../light";
        import { ArrowBendDoubleUpRightRegularIcon } from "../regular";
        import { ArrowBendDoubleUpRightThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ArrowBendDoubleUpRightIcon = memo(function ArrowBendDoubleUpRight(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ArrowBendDoubleUpRightBoldIcon,
            duotone: ArrowBendDoubleUpRightDuotoneIcon,
            fill: ArrowBendDoubleUpRightFillIcon,
            light: ArrowBendDoubleUpRightLightIcon,
            regular: ArrowBendDoubleUpRightRegularIcon,
            thin: ArrowBendDoubleUpRightThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
