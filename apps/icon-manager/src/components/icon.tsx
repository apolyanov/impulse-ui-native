import { type CSSProperties, memo, useEffect, useMemo, useState } from "react";
import { useTheme } from "../hooks/use-theme.hook";
import type { RawSvgModule } from "../utils";

interface IconProps {
  svg: RawSvgModule;
  color: string;
  selected?: boolean;
  renamed?: boolean;
  onClick?: () => void;
}

export const Icon = memo(function Icon(props: IconProps) {
  const { theme } = useTheme();
  const [svg, setSvg] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);

  const style = useMemo<CSSProperties>(
    () => ({
      borderWidth: 2,
      borderColor: props.renamed
        ? "green"
        : props.selected
        ? "#FFF"
        : theme.colors.border,
      borderStyle: "solid",
      color: "#FFF",
      backgroundColor: theme.colors.background.primary,
      borderRadius: 16,
      width: "128px",
      height: "128px",
      display: "grid",
      placeItems: "center",
      cursor: "pointer",
      transition: "all 0.2s ease",
    }),
    [theme, props.selected, props.renamed]
  );

  useEffect(() => {
    setLoading(true);

    props.svg
      .loader()
      .then((rawSvg) => setSvg(rawSvg))
      .finally(() => setLoading(false));
  }, [props.svg]);

  const innerHtml = useMemo(() => (svg ? { __html: svg } : null), [svg]);

  return (
    <div
      style={style}
      onClick={props.onClick}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.1)";
        e.currentTarget.style.zIndex = "1";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.zIndex = "unset";
      }}
    >
      {loading ? <span>Loading...</span> : null}
      {innerHtml ? (
        <>
          <div dangerouslySetInnerHTML={innerHtml} />
          <span
            style={{
              textAlign: "center",
              overflow: "hidden",
              color: theme.colors.text.primary,
              textOverflow: "ellipsis",
              width: "80%",
              wordBreak: "keep-all",
              whiteSpace: "nowrap",
            }}
          >
            {props.svg.name}
          </span>
        </>
      ) : null}
    </div>
  );
});
