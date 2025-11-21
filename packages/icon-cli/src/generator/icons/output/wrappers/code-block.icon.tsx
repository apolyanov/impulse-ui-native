import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CodeBlockBoldIcon } from "../bold";
        import { CodeBlockDuotoneIcon } from "../duotone";
        import { CodeBlockFillIcon } from "../fill";
        import { CodeBlockLightIcon } from "../light";
        import { CodeBlockRegularIcon } from "../regular";
        import { CodeBlockThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CodeBlockIcon = memo(function CodeBlock(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CodeBlockBoldIcon,
            duotone: CodeBlockDuotoneIcon,
            fill: CodeBlockFillIcon,
            light: CodeBlockLightIcon,
            regular: CodeBlockRegularIcon,
            thin: CodeBlockThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
