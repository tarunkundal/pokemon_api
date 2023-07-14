const useDebounce = (
  func: (...args: any[]) => void,
  delay: number
): ((...args: any[]) => void) => {
  let timeoutId: NodeJS.Timeout | null;

  return (...args: any[]) => {
    clearTimeout(timeoutId!);

    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

export default useDebounce;
