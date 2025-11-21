import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ArrowBendLeftDownBoldIcon } from "../bold";
        import { ArrowBendLeftDownDuotoneIcon } from "../duotone";
        import { ArrowBendLeftDownFillIcon } from "../fill";
        import { ArrowBendLeftDownLightIcon } from "../light";
        import { ArrowBendLeftDownRegularIcon } from "../regular";
        import { ArrowBendLeftDownThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ArrowBendLeftDownIcon = memo(function ArrowBendLeftDown(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ArrowBendLeftDownBoldIcon,
            duotone: ArrowBendLeftDownDuotoneIcon,
            fill: ArrowBendLeftDownFillIcon,
            light: ArrowBendLeftDownLightIcon,
            regular: ArrowBendLeftDownRegularIcon,
            thin: ArrowBendLeftDownThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
