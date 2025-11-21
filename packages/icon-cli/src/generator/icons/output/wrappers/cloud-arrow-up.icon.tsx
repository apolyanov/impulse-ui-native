import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CloudArrowUpBoldIcon } from "../bold";
        import { CloudArrowUpDuotoneIcon } from "../duotone";
        import { CloudArrowUpFillIcon } from "../fill";
        import { CloudArrowUpLightIcon } from "../light";
        import { CloudArrowUpRegularIcon } from "../regular";
        import { CloudArrowUpThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CloudArrowUpIcon = memo(function CloudArrowUp(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CloudArrowUpBoldIcon,
            duotone: CloudArrowUpDuotoneIcon,
            fill: CloudArrowUpFillIcon,
            light: CloudArrowUpLightIcon,
            regular: CloudArrowUpRegularIcon,
            thin: CloudArrowUpThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
