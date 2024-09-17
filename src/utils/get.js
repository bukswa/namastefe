export function get(obj, path, defaultValue = undefined) {
  if (obj === null || obj === undefined) {
    return defaultValue;
  }

  const paths = Array.isArray(path) ? path : path.split(".");
  let current = obj;

  for (const key of paths) {
    if (current[key] === undefined) {
      return defaultValue;
    }
    current = current[key];
  }

  return current;
}
