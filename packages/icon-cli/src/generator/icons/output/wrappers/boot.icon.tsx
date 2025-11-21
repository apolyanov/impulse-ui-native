import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { BootBoldIcon } from "../bold";
        import { BootDuotoneIcon } from "../duotone";
        import { BootFillIcon } from "../fill";
        import { BootLightIcon } from "../light";
        import { BootRegularIcon } from "../regular";
        import { BootThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const BootIcon = memo(function Boot(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: BootBoldIcon,
            duotone: BootDuotoneIcon,
            fill: BootFillIcon,
            light: BootLightIcon,
            regular: BootRegularIcon,
            thin: BootThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
