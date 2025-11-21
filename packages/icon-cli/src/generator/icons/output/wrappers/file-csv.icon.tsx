import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { FileCsvBoldIcon } from "../bold";
        import { FileCsvDuotoneIcon } from "../duotone";
        import { FileCsvFillIcon } from "../fill";
        import { FileCsvLightIcon } from "../light";
        import { FileCsvRegularIcon } from "../regular";
        import { FileCsvThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const FileCsvIcon = memo(function FileCsv(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: FileCsvBoldIcon,
            duotone: FileCsvDuotoneIcon,
            fill: FileCsvFillIcon,
            light: FileCsvLightIcon,
            regular: FileCsvRegularIcon,
            thin: FileCsvThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
