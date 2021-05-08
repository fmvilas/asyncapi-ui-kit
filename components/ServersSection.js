import Section from './Section'
import VerticalNavigation from './VerticalNavigation'
import Server from './Server'

export default function ServersSection() {
  const serverNames = ['Development', 'Testing', 'Production']

  return (
    <Section
      title="Connecting to a server"
      content={
        <Server
          url="wss://localhost:{port}/{userId}"
          description="This is our development WebSockets server. **Make sure you run the server yourself.**"
          variables={{
            port: {
              description: 'Secure connection (TLS) is available through port 8883.',
            },
            userId: {
              description: 'The id of the user',
            },
          }}
        />
      }
      sideContent={<VerticalNavigation serverNames={serverNames} />}
      stickySideContent={true}
    />
  )
}