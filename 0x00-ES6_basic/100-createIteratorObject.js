export default function createIteratorObject(report) {
  const employees = Object.values(report.allEmployees).flat();
  let index = 0;
  return {
    next() {
      if (index < employees.length) {
        const value = employees[index];
        index += 1;
        return { value, done: false };
      }
      return { value: null, done: true };
    },
    [Symbol.iterator]() { return this; },
  };
}
