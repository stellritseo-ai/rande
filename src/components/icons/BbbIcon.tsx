import type { SVGProps } from "react";

export function BbbIcon({ className = "h-4 w-4", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {/* BBB Torch Flame Center */}
      <path d="M12 2C11.1 3.8 11.2 5.2 12 7C12.8 5.2 12.9 3.8 12 2Z" />
      {/* BBB Torch Flame Left */}
      <path d="M9.8 4.2C9.2 5.5 9.6 6.8 10.6 7.4C10.1 6.5 10.3 5.4 10.9 4.6L9.8 4.2Z" />
      {/* BBB Torch Flame Right */}
      <path d="M14.2 4.2C14.8 5.5 14.4 6.8 13.4 7.4C13.9 6.5 13.7 5.4 13.1 4.6L14.2 4.2Z" />
      {/* BBB Torch Cup / Base */}
      <path d="M9.2 8H14.8C14.4 9.4 13.4 10.1 12 10.1C10.6 10.1 9.6 9.4 9.2 8Z" />
      {/* Letter B 1 */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.6 11.2H6C7.2 11.2 8 11.9 8 13.1C8 14.1 7.3 14.8 6.2 15C7.4 15.3 8.2 16.2 8.2 17.6C8.2 19.1 7.1 20 5.8 20H2.6V11.2ZM4.2 12.6V14.5H5.8C6.3 14.5 6.6 14.2 6.6 13.6C6.6 12.9 6.3 12.6 5.8 12.6H4.2ZM4.2 15.7V18.6H5.9C6.5 18.6 6.8 18.2 6.8 17.3C6.8 16.2 6.4 15.7 5.8 15.7H4.2Z"
      />
      {/* Letter B 2 */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.4 11.2H12.8C14 11.2 14.8 11.9 14.8 13.1C14.8 14.1 14.1 14.8 13 15C14.2 15.3 15 16.2 15 17.6C15 19.1 13.9 20 12.6 20H9.4V11.2ZM11 12.6V14.5H12.6C13.1 14.5 13.4 14.2 13.4 13.6C13.4 12.9 13.1 12.6 12.6 12.6H11ZM11 15.7V18.6H12.7C13.3 18.6 13.6 18.2 13.6 17.3C13.6 16.2 13.2 15.7 12.6 15.7H11Z"
      />
      {/* Letter B 3 */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.2 11.2H19.6C20.8 11.2 21.6 11.9 21.6 13.1C21.6 14.1 20.9 14.8 19.8 15C21 15.3 21.8 16.2 21.8 17.6C21.8 19.1 20.7 20 19.4 20H16.2V11.2ZM17.8 12.6V14.5H19.4C19.9 14.5 20.2 14.2 20.2 13.6C20.2 12.9 19.9 12.6 19.4 12.6H17.8ZM17.8 15.7V18.6H19.5C20.1 18.6 20.4 18.2 20.4 17.3C20.4 16.2 20 15.7 19.4 15.7H17.8Z"
      />
    </svg>
  );
}
