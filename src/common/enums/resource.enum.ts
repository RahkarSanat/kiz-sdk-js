export enum Resource {
  // Keyword
  All = 'all',

  // Common
  App = 'app',
  User = 'user',
  Asset = 'asset',
  Grant = 'grant',
  Client = 'client',
  Config = 'config',
  Profile = 'profile',
  Session = 'session',
  Workflow = 'workflow',
  Artifact = 'artifact',
  Chat = 'chat',

  // Logistics
  LogisticsLocation = 'logistics_location',
  LogisticsTransportsVehicle = 'logistics_transports_vehicle',
  LogisticsTransportsDriver = 'logistics_transports_drivers',

  // Financial
  Wallet = 'wallet',
  FinancialTransactions = 'financial_transactions',

  // Notifications
  NotificationsNotifier = 'notifications_notifier',
  NotificationsProvider = 'notifications_provider',
  NotificationsTemplate = 'notifications_template',
}

// TODO: remove `s` at the end
