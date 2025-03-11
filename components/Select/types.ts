export interface SelectProps {
  name: string;
  options: Array<{
    value: string
    label: string
  }>
  className?: string;
}
