import { useEffect, useState } from 'react'
import { parse } from '@asyncapi/parser'
import Sidebar from './Sidebar'
import { AsyncapiContext } from '../contexts/Asyncapi'
import { Introduction } from './Introduction'
import ServersSection from './ServersSection'

export default function AsyncAPIDocs({
  asyncapi,
}) {
  const [doc, setDoc] = useState()

  useEffect(() => {
    (async function () {
      setDoc(await parse(asyncapi))
    })()
  }, [asyncapi])

  return (
    <AsyncapiContext.Provider value={{asyncapi: doc}}>
      <div className="w-full max-w-9xl mx-auto pt-4">
        <div className="lg:flex">
          <Sidebar />
          <div className="min-w-0 w-full flex-auto lg:static lg:max-h-full lg:overflow-visible">
            <div className="w-full flex">
              <main className="min-w-0 flex-auto px-4 sm:px-6 xl:px-8 pt-2 pb-24 lg:pb-16">
                <Introduction />
                <ServersSection />
              </main>
            </div>
          </div>
        </div>
      </div>
    </AsyncapiContext.Provider>
  )
}
