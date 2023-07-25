export default function createIteratorObject(report) {
  let departments = Object.keys(report.allEmployees);
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  return {
    next: function() {
      if (currentEmployeeIndex >= report.allEmployees[departments[currentDepartmentIndex]].length) {
        currentEmployeeIndex = 0;
        currentDepartmentIndex++;
      }

      if (currentDepartmentIndex >= departments.length) {
        return {
          done: true
        };
      }

      let department = departments[currentDepartmentIndex];
      let employee = report.allEmployees[department][currentEmployeeIndex];
      currentEmployeeIndex++;

      return {
        value: employee,
        done: false
      };
    }
  };
}
