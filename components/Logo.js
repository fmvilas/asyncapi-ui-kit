import { useAsyncAPI } from '../contexts/Asyncapi'

export function Logo ({ url }) {
  const { asyncapi } = useAsyncAPI()
  const logoUrl = url || (asyncapi ? asyncapi.info().ext('x-logo') : null)

  return (
    <div className="xl:pl-4 xl:pr-12">
      <img src={logoUrl} className="max-h-36 w-full" role="presentation" />
    </div>
  )
}