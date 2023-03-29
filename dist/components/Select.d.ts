import { FC } from 'react';
export type SelectOption = {
    label: string;
    value: string | number;
};
type MultipleSelectProps = {
    multiple: true;
    value: SelectOption[];
    onChange: (value: SelectOption[]) => void;
};
type SingleSelectProps = {
    multiple?: false;
    value?: SelectOption;
    onChange: (value: SelectOption | undefined) => void;
};
type SelectProps = {
    options: SelectOption[];
    className?: string;
} & (SingleSelectProps | MultipleSelectProps);
declare const Select: FC<SelectProps>;
export { Select };
