import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ArrowDownRightBoldIcon } from "../bold";
        import { ArrowDownRightDuotoneIcon } from "../duotone";
        import { ArrowDownRightFillIcon } from "../fill";
        import { ArrowDownRightLightIcon } from "../light";
        import { ArrowDownRightRegularIcon } from "../regular";
        import { ArrowDownRightThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ArrowDownRightIcon = memo(function ArrowDownRight(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ArrowDownRightBoldIcon,
            duotone: ArrowDownRightDuotoneIcon,
            fill: ArrowDownRightFillIcon,
            light: ArrowDownRightLightIcon,
            regular: ArrowDownRightRegularIcon,
            thin: ArrowDownRightThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
