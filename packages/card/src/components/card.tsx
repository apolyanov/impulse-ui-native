import { memo } from "react";

import type { CardProps } from "../types";
import { Card } from "./card-parts";

export const CardComponent = memo(function CardComponent({
  children,
  header,
  media,
  footer,
  ...props
}: CardProps) {
  const hasMedia = media !== null && media !== undefined;
  const hasHeader = header !== null && header !== undefined;
  const hasFooter = footer !== null && footer !== undefined;

  return (
    <Card.Root {...props}>
      {hasMedia ? <Card.Media>{media}</Card.Media> : null}
      {hasHeader ? <Card.Header>{header}</Card.Header> : null}
      <Card.Content>{children}</Card.Content>
      {hasFooter ? <Card.Footer>{footer}</Card.Footer> : null}
    </Card.Root>
  );
});
