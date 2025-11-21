import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { SelectionAllBoldIcon } from "../bold";
        import { SelectionAllDuotoneIcon } from "../duotone";
        import { SelectionAllFillIcon } from "../fill";
        import { SelectionAllLightIcon } from "../light";
        import { SelectionAllRegularIcon } from "../regular";
        import { SelectionAllThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const SelectionAllIcon = memo(function SelectionAll(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: SelectionAllBoldIcon,
            duotone: SelectionAllDuotoneIcon,
            fill: SelectionAllFillIcon,
            light: SelectionAllLightIcon,
            regular: SelectionAllRegularIcon,
            thin: SelectionAllThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
