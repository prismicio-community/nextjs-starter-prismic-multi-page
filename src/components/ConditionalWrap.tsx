import type { ElementType, ReactNode } from "react";

type ConditionalWrapProps = {
  condition: boolean;
  wrap: ElementType;
  children: ReactNode;
};

/**
 * Adds a wrapper around children if a condition is true.
 */
export function ConditionalWrap({
  condition,
  wrap: Wrap,
  children,
}: ConditionalWrapProps) {
  return condition ? <Wrap>{children}</Wrap> : children;
}
