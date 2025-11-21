import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ArrowUDownRightBoldIcon } from "../bold";
        import { ArrowUDownRightDuotoneIcon } from "../duotone";
        import { ArrowUDownRightFillIcon } from "../fill";
        import { ArrowUDownRightLightIcon } from "../light";
        import { ArrowUDownRightRegularIcon } from "../regular";
        import { ArrowUDownRightThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ArrowUDownRightIcon = memo(function ArrowUDownRight(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ArrowUDownRightBoldIcon,
            duotone: ArrowUDownRightDuotoneIcon,
            fill: ArrowUDownRightFillIcon,
            light: ArrowUDownRightLightIcon,
            regular: ArrowUDownRightRegularIcon,
            thin: ArrowUDownRightThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
