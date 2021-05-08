export default function Section({
  title,
  content,
  sideContent,
  stickySideContent = false
}) {
  return (
    <>
      { title && (<h2 className="inline-block text-2xl font-bold text-gray-900 tracking-tight mb-8">{title}</h2>)}
      <section className="pb-10 border-b border-gray-200 text-lg mb-10 xl:flex">
        <div className="xl:w-prose">
          {content}
        </div>
        <div className="pl-0 pt-8 xl:pl-12 xl:pt-0 xl:w-144">
          <div className={stickySideContent && 'sticky top-4'}>
            {sideContent}
          </div>
        </div>
      </section>
    </>
  )
}