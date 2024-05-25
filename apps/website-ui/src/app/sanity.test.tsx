import '@testing-library/jest-dom'
import { act, render, renderHook, screen } from '@testing-library/react'
import { createContext, useCallback, useContext, useState } from 'react'

describe('Sanity check', () => {
  it('should be testable', () => {
    expect(1 + 1).toBe(2)
  })

  it('should be able to test component', () => {
    const { container } = render(<Component />)
    expect(screen.getByText('Hello, World!')).toBeInTheDocument()
    expect(container).toMatchInlineSnapshot(`
      <div>
        <h1>
          Hello, World!
        </h1>
      </div>
    `)
  })

  // More information, see also: https://react-hooks-testing-library.com/
  it('should be able to test hook', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <CounterStepProvider step={2}>{children}</CounterStepProvider>
    )
    const { result } = renderHook(() => useCounter(), { wrapper })

    act(() => {
      result.current.increment()
    })

    expect(result.current.count).toBe(2)
  })
})

const CounterStepContext = createContext(1)

interface CounterStepProviderProps {
  step: number
  children: React.ReactNode
}

export const CounterStepProvider = ({ step, children }: CounterStepProviderProps) => (
  <CounterStepContext.Provider value={step}>{children}</CounterStepContext.Provider>
)

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue)
  const step = useContext(CounterStepContext)

  const increment = useCallback(() => setCount((x) => x + step), [step])
  const reset = useCallback(() => setCount(initialValue), [initialValue])
  return { count, increment, reset }
}

const Component = () => {
  return <h1>Hello, World!</h1>
}
