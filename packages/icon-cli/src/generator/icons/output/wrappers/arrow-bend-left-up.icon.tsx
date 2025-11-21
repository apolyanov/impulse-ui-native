import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ArrowBendLeftUpBoldIcon } from "../bold";
        import { ArrowBendLeftUpDuotoneIcon } from "../duotone";
        import { ArrowBendLeftUpFillIcon } from "../fill";
        import { ArrowBendLeftUpLightIcon } from "../light";
        import { ArrowBendLeftUpRegularIcon } from "../regular";
        import { ArrowBendLeftUpThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ArrowBendLeftUpIcon = memo(function ArrowBendLeftUp(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ArrowBendLeftUpBoldIcon,
            duotone: ArrowBendLeftUpDuotoneIcon,
            fill: ArrowBendLeftUpFillIcon,
            light: ArrowBendLeftUpLightIcon,
            regular: ArrowBendLeftUpRegularIcon,
            thin: ArrowBendLeftUpThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
