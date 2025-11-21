import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { TreeStructureBoldIcon } from "../bold";
        import { TreeStructureDuotoneIcon } from "../duotone";
        import { TreeStructureFillIcon } from "../fill";
        import { TreeStructureLightIcon } from "../light";
        import { TreeStructureRegularIcon } from "../regular";
        import { TreeStructureThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const TreeStructureIcon = memo(function TreeStructure(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: TreeStructureBoldIcon,
            duotone: TreeStructureDuotoneIcon,
            fill: TreeStructureFillIcon,
            light: TreeStructureLightIcon,
            regular: TreeStructureRegularIcon,
            thin: TreeStructureThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
