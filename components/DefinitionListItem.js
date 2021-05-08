export default function DefinitionListItem({
  IconClass,
  term,
  visibleTerm = true,
  text,
  href,
  vertical = false,
  className = '',
}) {
  const Wrapper = href ? props => <a href={href} target="_blank" {...props} /> : props => <div {...props} />
  return (
    <div className={`${!vertical && 'flex'} ${className}`}>
      <dt>
        <Wrapper className="flex">
          {IconClass && (<IconClass className="w-5 h-5" title={term} alt={term} />)}
          {visibleTerm ? <span className="pl-2 text-sm">{term}</span> : <span className="sr-only">{term}</span>}
        </Wrapper>
      </dt>
      
      <dd className={`${vertical && 'pt-2'} pl-2 text-sm`}>
        <Wrapper>
          {text}
        </Wrapper>
      </dd>
    </div>
  )
}