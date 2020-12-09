import React from 'react'
import {ErrorBoundary as ReactErrorBoundary} from 'react-error-boundary'

function ErrorFallback({error, resetErrorBoundary}) {
  return (
    <div role="alert">
      <p data-testid="something">Something Went Wrong</p>
      <pre>
        ${error.name} : {error.message}
      </pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

function Bomb() {
  throw new Error('💥 CABOOM 💥')
}

function ErrorRecovery() {
  const initialExplode = false
  const [explode, setExplode] = React.useState(initialExplode)
  return (
    <div>
      <button onClick={() => setExplode((e) => !e)}>Toggle Explode</button>
      <ReactErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => setExplode(false)}
      >
        {explode ? <Bomb /> : null}
      </ReactErrorBoundary>
    </div>
  )
}

export default ErrorRecovery
