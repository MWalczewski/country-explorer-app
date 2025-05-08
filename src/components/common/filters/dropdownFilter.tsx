'use client';

import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { DropdownFilterProps } from '@/types/filters/dropdownFilters';

const DropdownFilter = ({ label, options, value = "", onChange }: DropdownFilterProps) => {
    const selected = options.find((o) => o.value === value) ?? { value: '', label: '—' };

    return (
        <div className="flex flex-col gap-1 w-52">
            <span className="text-sm text-gray-700 dark:text-gray-200 font-medium">{label}</span>
            <Listbox value={value} onChange={onChange}>
                <div className="relative">
                    <ListboxButton className="w-full cursor-default rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 py-2 pl-3 pr-10 text-left text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500">
                        <span className="block truncate">{selected.label}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon className="h-4 w-4 text-gray-400" />
                        </span>
                    </ListboxButton>
                    <ListboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-gray-900 py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {options.map((option) => (
                            <ListboxOption
                                key={option.value}
                                value={option.value}
                                className={({ active }) =>
                                    `relative cursor-default select-none px-4 py-2 ${active ? 'bg-blue-100 dark:bg-blue-700 text-blue-900 dark:text-white' : ''
                                    }`
                                }
                            >
                                {option.label}
                            </ListboxOption>
                        ))}
                    </ListboxOptions>
                </div>
            </Listbox>
        </div>
    );
};

export default DropdownFilter;
