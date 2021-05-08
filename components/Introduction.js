import CodeBlock from './CodeBlock'
import Section from './Section'
import SideTextContent from './SideTextContent'
import { useAsyncAPI } from '../contexts/Asyncapi'
import InfoMetadata from './InfoMetadata'
import Markdown from './Markdown'

export function Introduction({ title, description, license, externalDocs, contact, tags }) {
  const { asyncapi } = useAsyncAPI()
  const details = {
    title: title || (asyncapi ? asyncapi.info().title() : null),
    description: description || (asyncapi ? asyncapi.info().description() : null),
  }

  const content = (
    <>
      <h1 className="inline-block text-4xl font-extrabold text-gray-900 tracking-tight">{details.title}</h1>
      <div className="prose mt-4 text-gray-500">
        <Markdown>{details.description}</Markdown>
      </div>
    </>
  )

  const sideContent = (
    <InfoMetadata
      license={license}
      externalDocs={externalDocs}
      contact={contact}
      tags={tags}
    />
    // <dl>
    //   <SideTextContent>
    //     <h2>Just getting started?</h2>
    //     <p>Check out our <a href="/">development quickstart guide</a>.</p>
    //     <h2>Not a developer?</h2>
    //     <p>Use apps from our partners to get started with Stripe and to do more with your Stripe account—no code required.</p>
    //     <CodeBlock codeBlocks={[{ code: 'const a = 090890890890890809890890809809809809890fasd;' }]}></CodeBlock>
    //   </SideTextContent>
    // </dl>
  )

  return (
    <Section
      content={content}
      sideContent={sideContent}
      stickySideContent={false}
    />
  )
}