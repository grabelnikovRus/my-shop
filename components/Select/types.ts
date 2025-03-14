export interface SelectProps {
  name: string;
  value: number;
  options: Array<{
    id: number
    name: string
  }>
  onChange: (...event: unknown[]) => void;
  className?: string;
}
