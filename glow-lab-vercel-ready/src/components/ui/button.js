export const Button = ({ children, className, ...props }) => (
<button className={`bg-black text-white ${className}`} {...props}>{children}</button>
);