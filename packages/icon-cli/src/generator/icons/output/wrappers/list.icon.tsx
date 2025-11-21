import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ListBoldIcon } from "../bold";
        import { ListDuotoneIcon } from "../duotone";
        import { ListFillIcon } from "../fill";
        import { ListLightIcon } from "../light";
        import { ListRegularIcon } from "../regular";
        import { ListThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ListIcon = memo(function List(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ListBoldIcon,
            duotone: ListDuotoneIcon,
            fill: ListFillIcon,
            light: ListLightIcon,
            regular: ListRegularIcon,
            thin: ListThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
