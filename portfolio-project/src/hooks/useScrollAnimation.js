import { useInView } from 'react-intersection-observer'

export const useScrollAnimation = (threshold = 0.1, triggerOnce = true) => {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce
  })

  const animationClass = inView 
    ? 'opacity-100 translate-y-0' 
    : 'opacity-0 translate-y-10'

  return [ref, animationClass]
}