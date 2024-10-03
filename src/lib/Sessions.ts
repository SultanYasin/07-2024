export enum UserRole {
  EMPLOYEE = "EMPLOYEE",
  MANAGER = "MANAGER",
  ADMIN = "ADMIN",
}


export let userRole: UserRole = UserRole.ADMIN; // Default role

export const setUserRole = (newRole: UserRole) => {
  userRole = newRole;
};
console.log(userRole)