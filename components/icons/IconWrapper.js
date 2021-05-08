export default function IconWrapper({ className, children, ...props }) {
  return (
    <svg className={className || 'inline-block'} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      {children}
    </svg>
  )
}