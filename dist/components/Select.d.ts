import { FC } from 'react';
import './Select.css';
export type SelectOption = {
    label: string;
    value: string | number;
    id?: string | number;
    avatar?: string;
};
type MultipleSelectProps = {
    multiple: true;
    avatars?: boolean | undefined;
    divider?: boolean | undefined;
    value: SelectOption[];
    onChange: (value: SelectOption[]) => void;
};
type SingleSelectProps = {
    multiple?: false;
    avatars?: boolean | undefined;
    divider?: boolean | undefined;
    value?: SelectOption;
    onChange: (value: SelectOption | undefined) => void;
};
type SelectProps = {
    options: SelectOption[];
    className?: string;
} & (SingleSelectProps | MultipleSelectProps);
declare const Select: FC<SelectProps>;
export { Select };
