import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-10  ">
      <div className="container mx-auto px-4 py-8 bg-[#507a72] text-primary-foreground">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            {/* <h3 className="text-lg font-semibold mb-4">Sobre Última Chance</h3> */}
            <p className="font-semibold">Economize hoje, preserve amanhã.</p>
          </div>
          <div>
            {/* <h3 className="text-lg font-semibold mb-4">Links</h3> */}
            <ul className="space-y-2">
              <li>
                <Link href="/about">Sobre Nós</Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
              <li>
                <Link href="/terms">Termos de Serviço</Link>
              </li>
              <li>
                <Link href="/privacy">Política de Privacidade</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <p>Email: info@ultimachance.com</p>
            <p>Telefone: +55 (53) 987654321</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Última Chance. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
