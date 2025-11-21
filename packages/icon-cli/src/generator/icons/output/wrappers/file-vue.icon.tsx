import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { FileVueBoldIcon } from "../bold";
        import { FileVueDuotoneIcon } from "../duotone";
        import { FileVueFillIcon } from "../fill";
        import { FileVueLightIcon } from "../light";
        import { FileVueRegularIcon } from "../regular";
        import { FileVueThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const FileVueIcon = memo(function FileVue(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: FileVueBoldIcon,
            duotone: FileVueDuotoneIcon,
            fill: FileVueFillIcon,
            light: FileVueLightIcon,
            regular: FileVueRegularIcon,
            thin: FileVueThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
