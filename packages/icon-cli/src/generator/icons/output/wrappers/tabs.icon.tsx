import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { TabsBoldIcon } from "../bold";
        import { TabsDuotoneIcon } from "../duotone";
        import { TabsFillIcon } from "../fill";
        import { TabsLightIcon } from "../light";
        import { TabsRegularIcon } from "../regular";
        import { TabsThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const TabsIcon = memo(function Tabs(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: TabsBoldIcon,
            duotone: TabsDuotoneIcon,
            fill: TabsFillIcon,
            light: TabsLightIcon,
            regular: TabsRegularIcon,
            thin: TabsThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
