export enum Action {
  // Keyword
  Any = 'any',

  // Special
  Create = 'create',
  Read = 'read',
  Update = 'update',
  Delete = 'delete',
  Restore = 'restore',

  // Common
  CreateOwn = 'create:own',
  ReadOwn = 'read:own',
  UpdateOwn = 'update:own',
  DeleteOwn = 'delete:own',
  RestoreOwn = 'restore:own',

  CreateShared = 'create:shared',
  ReadShared = 'read:shared',
  UpdateShared = 'update:shared',
  DeleteShared = 'delete:shared',
  RestoreShared = 'restore:shared',

  CreateClient = 'create:client',
  ReadClient = 'read:client',
  UpdateClient = 'update:client',
  DeleteClient = 'delete:client',
  RestoreClient = 'restore:client',
}
