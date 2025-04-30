import Link from 'next/link'

interface CTAButtonProps {
  href: string
  text: string
  small?: boolean
}

export default function CTAButton({ href, text, small = false }: CTAButtonProps) {
  return (
    <Link 
      href={href} 
      className={`bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition ${small ? 'px-4 py-2 text-sm' : 'px-6 py-3'}`}
    >
      {text}
    </Link>
  )
}