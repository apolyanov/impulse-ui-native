import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { FilePlusBoldIcon } from "../bold";
        import { FilePlusDuotoneIcon } from "../duotone";
        import { FilePlusFillIcon } from "../fill";
        import { FilePlusLightIcon } from "../light";
        import { FilePlusRegularIcon } from "../regular";
        import { FilePlusThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const FilePlusIcon = memo(function FilePlus(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: FilePlusBoldIcon,
            duotone: FilePlusDuotoneIcon,
            fill: FilePlusFillIcon,
            light: FilePlusLightIcon,
            regular: FilePlusRegularIcon,
            thin: FilePlusThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
