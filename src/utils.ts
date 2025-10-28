type PlainObject = Record<string, any>;

export const transformObject = (
  obj: PlainObject,
  callback: (key: string, value: any) => [string, any]
) => {
  if (typeof obj !== "object") {
    return obj;
  }

  return Object.entries(obj).reduce((acc, [key, value]) => {
    const [newKey, newValue] = callback(key, value);
    return {
      ...acc,
      [newKey]: newValue,
    };
  }, {});
};
