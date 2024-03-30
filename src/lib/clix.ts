import { useCallback, useLayoutEffect, useRef, useState } from 'react'

let anchor: HTMLAnchorElement | null
let firstmount = true
const useCapture = true

export const useClix = (classes: [string, string, string?], exit?: number) => {
  const ref = useRef(classes)
  const [hasDelay, setHasDelay] = useState(false)
  const [state, setState] = useState('')

  const getClientClassElement = useCallback(() => {
    const oneClassElement = document.getElementsByClassName(ref.current[0])[0]
    if (oneClassElement instanceof HTMLElement) return oneClassElement
    else return null
  }, [])

  const eventTargetHTMLElement = (e: MouseEvent) => {
    const clickTarget = e.target
    if (clickTarget instanceof HTMLElement) return clickTarget
    else return null
  }

  const clickHandler = useCallback(
    (e: MouseEvent) => {
      const target = eventTargetHTMLElement(e)
      if (target == null) return

      const anchorElement = target.closest('a')
      if (anchorElement == null) return
      if (window.location.href === anchorElement.href) return

      const classElement = getClientClassElement()
      if (classElement == null) return

      if (!ref.current[2]) return
      setState(ref.current[0] + ' ' + ref.current[2])
      e.preventDefault()
      if (typeof exit != 'undefined')
        setTimeout(() => {
          setHasDelay(true)
        }, exit * 1000)
      anchor = anchorElement
    },
    [exit, getClientClassElement]
  )

  const innerEffect = useCallback(() => {
    const clickEvent = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true
    })
    if (!hasDelay) return
    if (anchor == null) return

    anchor.dispatchEvent(clickEvent)
    anchor = null
  }, [hasDelay])

  // ---------- Entry Effect//
  // ---------- Exits styles. entry the class third of array //
  useLayoutEffect(() => {
    innerEffect()
    document.body.addEventListener('click', clickHandler, useCapture)

    return () => {
      document.body.removeEventListener('click', clickHandler, useCapture)      
    }
  }, [clickHandler, innerEffect])

  // ---------- Initial styles. entry the class second of array //
  useLayoutEffect(() => {
    if(firstmount) setState(ref.current[1])
    else setState(ref.current[0] + ' ' + ref.current[1])
      
    firstmount = false
    const cleanup = ref.current[0]

    return () => {
      setState(cleanup)
    }
  }, [])

  return state !== '' ? state : ref.current[0]
}
