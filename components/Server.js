import Markdown from './Markdown'
import IconLink from './icons/Link'
import IconVariable from './icons/Variable'
import IconShieldCheck from './icons/ShieldCheck'
import { useState } from 'react'
import Tabs from './Tabs'

export default function Server({ url, description, variables = {} }) {
  const chunkColors = ['text-blue-600', 'text-indigo-600', 'text-purple-600', 'text-pink-600', 'text-green-700']
  let colorIndex = 0
  const urlChunks = url.match(/({[\w\d\s\-_]+})|([^{]+)/ig).map((chunk, index) => {
    const isVariable = chunk.startsWith('{')
    const variableName = isVariable && chunk.substr(1).substr(0, chunk.length - 2)
    return (
      <span
        key={index}
        className={isVariable ? chunkColors[colorIndex++ % chunkColors.length] : ''}
        title={variables[variableName] && variables[variableName].description}
      >{chunk}</span>
    )
  })
  const [authTab, setAuthTab] = useState('oauth2')

  const tabs = [
    { id: 'user-password', name: 'User/Password' },
    { id: 'oauth2', name: 'OAuth2' },
    { id: 'api-key', name: 'API key' },
    { id: 'openid', name: 'OpenID' },
  ]

  return (
    <div>
      <h3 className="font-bold text-gray-700">
        <IconLink className="inline-block mr-2 -mt-1 h-6 text-gray-500" />
        {urlChunks}
      </h3>
      <Markdown>{description}</Markdown>
      <h3 className="font-bold text-gray-700 mt-8">
        <IconVariable className="inline-block mr-2 -mt-1 h-6 text-gray-500" />
        URL Variables
      </h3>
      <div className="mt-5 border-t border-gray-200">
        <dl className="sm:divide-y sm:divide-gray-200">
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-500">
              <code className="text-blue-600 font-bold">{`{port}`}</code>
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 prose">
              The port number. Use <code>81</code> if you're a partner. Allowed values are <code>80</code> and <code>81</code>. Defaults to <code>80</code>.
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-500">
              <code className="text-indigo-600 font-bold">{`{userId}`}</code>
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 prose">
              <p>The id of the user you want to use when receiving events.</p>

              <span className="font-bold text-gray-500 mt-4 mr-2">Examples:</span>

              <code>4d72a9c38bb6a</code>, <code>9a3b6d00cc284e7</code>.
            </dd>
          </div>
        </dl>
      </div>
      <h3 className="font-bold text-gray-700 mt-8">
        <IconShieldCheck className="inline-block mr-2 -mt-1 h-6 text-gray-500" />
        Authorization
      </h3>
      <p className="prose text-gray-500 mt-4">
        This server accepts the following authorization mechanisms:
      </p>
      <Tabs tabs={tabs} current={authTab} onChange={setAuthTab} />
        <div className="py-4 prose text-gray-500">
          {
            authTab === 'user-password' && (
              <span>You have to <strong>provide user and password</strong> to connect to this server.</span>
            )
          }
          {
            authTab === 'api-key' && (
              <span>You have to <strong>provide your API key as the user name and leave the password empty</strong> to connect to this server.</span>
            )
          }
          {
            authTab === 'openid' && (
              <>
                <p>
                  You can use OpenID to connect to this server.
                </p>
                <p>
                  The OpenID Connect URL is <a href="https://authserver.example/.well-known">https://authserver.example/.well-known</a>.
                </p>
              </>
            )
          }
          {
            authTab === 'oauth2' && (
              <>
                <div>
                  <h4 className="text-lg leading-6 font-bold text-gray-900">Implicit</h4>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    The Implicit flow is a simplified OAuth flow previously recommended for native apps and JavaScript apps where the access token is returned immediately without an extra authorization code exchange step.
                  </p>
                </div>
                <div className="mt-5 border-t border-gray-200">
                  <dl className="sm:divide-y sm:divide-gray-200">
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                      <dt className="text-sm font-medium text-gray-500">Authorization URL</dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"><a href="https://authserver.example/auth">https://authserver.example/auth</a></dd>
                    </div>
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                      <dt className="text-sm font-medium text-gray-500">Scopes</dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <code>streetlights:on</code>, <code>streetlights:off</code>
                      </dd>
                    </div>
                  </dl>
                </div>
              </>
            )
          }
        </div>
    </div>
  )
}