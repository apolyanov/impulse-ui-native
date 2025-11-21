import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ArrowBendUpRightBoldIcon } from "../bold";
        import { ArrowBendUpRightDuotoneIcon } from "../duotone";
        import { ArrowBendUpRightFillIcon } from "../fill";
        import { ArrowBendUpRightLightIcon } from "../light";
        import { ArrowBendUpRightRegularIcon } from "../regular";
        import { ArrowBendUpRightThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ArrowBendUpRightIcon = memo(function ArrowBendUpRight(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ArrowBendUpRightBoldIcon,
            duotone: ArrowBendUpRightDuotoneIcon,
            fill: ArrowBendUpRightFillIcon,
            light: ArrowBendUpRightLightIcon,
            regular: ArrowBendUpRightRegularIcon,
            thin: ArrowBendUpRightThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
