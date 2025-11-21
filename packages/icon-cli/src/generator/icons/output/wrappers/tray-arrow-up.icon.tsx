import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { TrayArrowUpBoldIcon } from "../bold";
        import { TrayArrowUpDuotoneIcon } from "../duotone";
        import { TrayArrowUpFillIcon } from "../fill";
        import { TrayArrowUpLightIcon } from "../light";
        import { TrayArrowUpRegularIcon } from "../regular";
        import { TrayArrowUpThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const TrayArrowUpIcon = memo(function TrayArrowUp(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: TrayArrowUpBoldIcon,
            duotone: TrayArrowUpDuotoneIcon,
            fill: TrayArrowUpFillIcon,
            light: TrayArrowUpLightIcon,
            regular: TrayArrowUpRegularIcon,
            thin: TrayArrowUpThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
