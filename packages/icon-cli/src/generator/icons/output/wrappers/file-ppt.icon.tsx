import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { FilePptBoldIcon } from "../bold";
        import { FilePptDuotoneIcon } from "../duotone";
        import { FilePptFillIcon } from "../fill";
        import { FilePptLightIcon } from "../light";
        import { FilePptRegularIcon } from "../regular";
        import { FilePptThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const FilePptIcon = memo(function FilePpt(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: FilePptBoldIcon,
            duotone: FilePptDuotoneIcon,
            fill: FilePptFillIcon,
            light: FilePptLightIcon,
            regular: FilePptRegularIcon,
            thin: FilePptThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
