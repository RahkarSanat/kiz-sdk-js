export enum Scope {
  Whole = 'whole',

  AppsRead = 'apps:read',
  AppsWrite = 'apps:write',
  AppsManage = 'apps:manage',

  UsersRead = 'users:read',
  UsersWrite = 'users:write',
  UsersManage = 'users:manage',

  GrantsRead = 'grants:read',
  GrantsWrite = 'grants:write',
  GrantsManage = 'grants:manage',

  ClientsRead = 'clients:read',
  ClientsWrite = 'clients:write',
  ClientsManage = 'clients:manage',
}
