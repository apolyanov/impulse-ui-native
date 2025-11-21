import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { TrayArrowDownBoldIcon } from "../bold";
        import { TrayArrowDownDuotoneIcon } from "../duotone";
        import { TrayArrowDownFillIcon } from "../fill";
        import { TrayArrowDownLightIcon } from "../light";
        import { TrayArrowDownRegularIcon } from "../regular";
        import { TrayArrowDownThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const TrayArrowDownIcon = memo(function TrayArrowDown(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: TrayArrowDownBoldIcon,
            duotone: TrayArrowDownDuotoneIcon,
            fill: TrayArrowDownFillIcon,
            light: TrayArrowDownLightIcon,
            regular: TrayArrowDownRegularIcon,
            thin: TrayArrowDownThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
