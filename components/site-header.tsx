import Link from "next/link"
import { Button } from "@/components/atoms/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center justify-between space-x-4 sm:space-x-0">
        <ThemeToggle />
        <nav className="flex items-center space-x-4">
          <Link href="/login" passHref>
            <Button variant="outline">Connexion</Button>
          </Link>
          <Link href="/register" passHref>
            <Button variant="outline">Inscription</Button>
          </Link>
          <Link href="/info" passHref>
            <Button variant="outline">Info</Button>
        </Link>
        </nav>
      </div>
    </header>
  )
}