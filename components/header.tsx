import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed bottom-0 py-5 z-30 w-full">
      <nav className="bg-transparent border-gray-200 px-4 lg:px-6">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link href="/" className="flex items-center" passHref>
            <Image
              src="/logo.png"
              className="mr-3"
              alt="Flowbite Logo"
              height={100}
              width={100}
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap hidden md:block dark:text-white">
              WorkshApp
            </span>
          </Link>

          <div className="flex items-center lg:order-2">
            <a
              target="_blank"
              href="https://forms.gle/2SRUTaNFL93QE7fq6"
              className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-md px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Bize katıl
            </a>
            <a
              target="_blank"
              href="https://api.whatsapp.com/send/?phone=%2B905363104981&text=Merhaba%2C+bilgi+almak+istiyorum.%0A%0A&app_absent=0"
              className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-md px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
              Bize ulaşın
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
