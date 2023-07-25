export default function createIteratorObject(report) {
  const departments = Object.keys(report.allEmployees);
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  return {
    next() {
      if (currentEmployeeIndex >= report.allEmployees[departments[currentDepartmentIndex]].length) {
        currentEmployeeIndex = 0;
        currentDepartmentIndex += 1;
      }

      if (currentDepartmentIndex >= departments.length) {
        return {
          done: true,
        };
      }

      const department = departments[currentDepartmentIndex];
      const employee = report.allEmployees[department][currentEmployeeIndex];
      currentEmployeeIndex += 1;

      return {
        value: employee,
        done: false,
      };
    },
  };
}
