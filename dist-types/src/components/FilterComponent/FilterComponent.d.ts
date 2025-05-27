interface FilterComponentProps {
    onFilterChange: (filters: {
        owner: string;
        type: string;
    }) => void;
}
export declare const FilterComponent: ({ onFilterChange }: FilterComponentProps) => import("react/jsx-runtime").JSX.Element;
export {};
