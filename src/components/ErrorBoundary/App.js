import * as React from 'react'
import {ErrorBoundary as ReactErrorBoundary} from 'react-error-boundary'

function ErrorFallback({error}) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{color: 'red'}}>{error.message}</pre>
    </div>
  )
}
function Greeting({subject}) {
  return <div>Hello {subject.toUpperCase()}</div>
}
function Farewell({subject}) {
  return <div>Goodbye {subject.toUpperCase()}</div>
}
function App() {
  return (
    <ReactErrorBoundary FallbackComponent={ErrorFallback}>
      <Greeting />
      <Farewell />
    </ReactErrorBoundary>
  )
}

export default App
