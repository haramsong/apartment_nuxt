export interface ISetLabelValueOptions {
  labelKey: string,
  valueKey: string
}

export type ILabelValueOptionsData<T extends any> = T & {
  label: string,
  value: any
};
