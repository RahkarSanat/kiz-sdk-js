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
  Stat = 'stat',

  // Chat
  ChatRoom = 'chat_room',
  ChatMessage = 'chat_message',

  // OTP
  AuthOtp = 'auth_otp',

  // Logistics
  LogisticLocation = 'logistic_location',
  LogisticTransportVehicle = 'logistic_transport_vehicle',
  LogisticTransportDriver = 'logistic_transport_driver',

  // Financial
  Wallet = 'wallet',
  FinancialTransaction = 'financial_transaction',

  // Notifications
  NotificationNotifier = 'notification_notifier',
  NotificationProvider = 'notification_provider',
  NotificationTemplate = 'notification_template',
  NotificationRecipient = 'notification_recipient',
  NotificationRole = 'notification_role',
}

// TODO: remove `s` at the end
