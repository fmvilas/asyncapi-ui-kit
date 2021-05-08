import classNames from '../helpers/classNames'

export default function VerticalNavigation({ serverNames = [], current }) {
  current = current || serverNames[0]

  return (
    <nav className="space-y-1 w-max" aria-label="Sidebar">
      {serverNames.map((name) => (
        <a
          key={name}
          className={classNames(
            current === name ? 'border-l-4 border-gray-300 text-gray-900' : 'text-gray-600 hover:text-gray-900',
            'flex items-center px-3 py-2 text-sm font-medium capitalize cursor-pointer'
          )}
        >
          <span className="truncate">{name}</span>
        </a>
      ))}
    </nav>
  )
}