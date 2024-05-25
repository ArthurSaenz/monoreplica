export enum EAppConfigFieldType {
  Categories = 'categories',
  AppVersion = 'appVersion',
  GlobalPopup = 'globalPopup',
  Payments = 'payments',
}

export interface IAppConfig {
  [EAppConfigFieldType.Categories]: any
  [EAppConfigFieldType.AppVersion]: any
}
