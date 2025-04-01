import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

export default function Navbar() {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-10 w-36">
              <Image
                src="/placeholder.svg?height=40&width=150"
                alt="Finsmart Logo"
                width={150}
                height={40}
                className="object-contain"
              />
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/nosotros" className="text-gray-700 hover:text-primary">
              Nosotros
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-primary">
                Financiamiento <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/financiamiento/factoring" className="w-full">
                    Factoring
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/financiamiento/confirming" className="w-full">
                    Confirming
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/inversiones" className="text-gray-700 hover:text-primary">
              Inversiones
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-primary">
                Recursos <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/en-construccion" className="w-full">
                    Blog
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/en-construccion" className="w-full">
                    Preguntas Frecuentes
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Link href="/en-construccion" className="hidden md:inline-block text-gray-700 hover:text-primary">
              Inicia sesión
            </Link>
            <Link href="/en-construccion">
              <Button className="bg-primary hover:bg-primary-800 text-white">Regístrate</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

