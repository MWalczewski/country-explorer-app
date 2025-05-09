export type Option = {
    value: string;
    label: string;
};

export type DropdownFilterProps = {
    label: string;
    options: Option[];
    value?: string;
    onChange: (value: string) => void;
};
