export const remove = (arr: any[], item: number) => {
  const newArr = [...arr];
  newArr.splice(
    newArr.findIndex((i) => i === item),
    1
  );
  return newArr;
};

export const add = (arr: any[], message: string) => {
  console.log(`the shit that got added : `, message);
  return [...arr, { message }];
};

export const contains = (original: any, filter: any) => {
  const res = filter.map((item: any) => {
    return original.includes(item);
  });
  return !res.includes(false);
};

export const hasDuplicate = (array: any[]) => {
  return new Set(array).size !== array.length;
};
