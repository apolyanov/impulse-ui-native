import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { FileTsxBoldIcon } from "../bold";
        import { FileTsxDuotoneIcon } from "../duotone";
        import { FileTsxFillIcon } from "../fill";
        import { FileTsxLightIcon } from "../light";
        import { FileTsxRegularIcon } from "../regular";
        import { FileTsxThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const FileTsxIcon = memo(function FileTsx(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: FileTsxBoldIcon,
            duotone: FileTsxDuotoneIcon,
            fill: FileTsxFillIcon,
            light: FileTsxLightIcon,
            regular: FileTsxRegularIcon,
            thin: FileTsxThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
