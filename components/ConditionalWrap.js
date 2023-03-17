/**
 * Adds a wrapper around children if a condition is true.
 */
export const ConditionalWrap = ({ condition, wrap: Wrap, children }) => {
  return condition ? <Wrap>{children}</Wrap> : children;
};
