import { useAsyncAPI } from '../contexts/Asyncapi'
import IconScale from './icons/Scale'
import IconExternalLink from './icons/ExternalLink'
import IconAtSymbol from './icons/AtSymbol'
import IconGlobe from './icons/Globe'
import IconTag from './icons/Tag'
import DefinitionListItem from './DefinitionListItem'
import Tag from './Tag'

export default function Metadata ({
  license,
  externalDocs,
  contact,
  tags,
}) {
  const { asyncapi } = useAsyncAPI()
  const details = {
    licenseName: license && license.name ? license.name : (asyncapi ? asyncapi.info().license().name() : null),
    licenseUrl: license && license.url ? license.url : (asyncapi ? asyncapi.info().license().url() : null),
    externalDocsTitle: externalDocs && externalDocs.title ? externalDocs.title : 'External documentation',
    externalDocsUrl: externalDocs && externalDocs.url ? externalDocs.url : (asyncapi ? asyncapi.externalDocs().url() : null),
    externalDocsDescription: externalDocs && externalDocs.description ? externalDocs.description : (asyncapi ? asyncapi.externalDocs().description() : null),
    contactName: contact && contact.name ? contact.name : (asyncapi ? asyncapi.info().contact().name() : null),
    contactUrl: contact && contact.url ? contact.url : (asyncapi ? asyncapi.info().contact().url() : null),
    contactEmail: contact && contact.email ? contact.email : (asyncapi ? asyncapi.info().contact().email() : null),
    tags: tags || (asyncapi ? asyncapi.tags().map(t => t.json()) : null),
  }

  return (
    <dl>
      <DefinitionListItem IconClass={IconScale} text={`${details.licenseName} License`} term="License" visibleTerm={false} href={details.licenseUrl} className="inline-block mb-4 text-gray-700 hover:text-pink-500" />
      <DefinitionListItem IconClass={IconExternalLink} text="External documentation" href={details.externalDocsUrl} term="External documentation" visibleTerm={false} title={details.externalDocsDescription} className="inline-block mb-4 text-gray-700 hover:text-indigo-500" />
      <DefinitionListItem IconClass={IconAtSymbol} text={`Email ${details.contactName}`} term="Email" visibleTerm={false} href={`mailto:${details.contactEmail}`} className="inline-block mb-4 text-gray-700 hover:text-green-500" />
      <DefinitionListItem IconClass={IconGlobe} text={`Contact ${details.contactName}`} term="Contact" visibleTerm={false} href={details.contactUrl} className="inline-block mb-4 text-gray-700 hover:text-green-500" />
      <DefinitionListItem
        IconClass={IconTag}
        term="Tags"
        className="inline-block mb-2 text-gray-700"
        vertical
        text={
          details.tags && details.tags.map((tag, index) => (
            <Tag
              key={index}
              href={tag.externalDocs && tag.externalDocs.url}
              title={tag.description || (tag.externalDocs && tag.externalDocs.description ? tag.externalDocs.description : null)}
              name={tag.name}
            />
          ))
        }
      />
    </dl>
  )
}