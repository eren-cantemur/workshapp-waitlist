import { useState } from "react";
import axios, { AxiosError } from "axios";
import { showNotification } from "@mantine/notifications";
import { Loader } from "@mantine/core";

export default function Hero() {
  const [email, setEmail] = useState<string | undefined>();
  const [loading, toggle] = useState(false);

  interface AddSubscriberResponseBody {
    message: string;
  }

  const handleSubmit = async () => {
    toggle(true);
    try {
      const response = await axios.post<AddSubscriberResponseBody>(
        "/api/send",
        { email }
      );
      showNotification({
        color: "green",
        title: "Başarılı",
        message: "Kaydınız başarıyla alındı! Teşekkürler. ❤",
      });
    } catch (error) {
      showNotification({
        color: "red",
        title: "Başarısız",
        message: "Kaydınızı alamadık! Bu genelde önceden kayıt olduysanız oluyor. İsterseniz tekrar deneyebilir ya da bize ulaşabilirsiniz. 😞",
      });
    }
    toggle(false);
  };

  return (
    <div className="isolate sm:flex overflow-hidden bg-gray-900 px-5 h-screen">
      <div className="mx-auto my-auto max-w-7xl">
        <div className="mx-auto my-10 grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:max-w-none lg:grid-cols-2">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:pt-2 order-last sm:order-1">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                  />
                </svg>
              </div>
              <dt className="mt-4 font-semibold text-white">
                Bizden haberdar ol
              </dt>
              <dd className="mt-2 leading-7 text-gray-400">
                Platformumuzu canlıya çıktığımızda seni bilgilendireceğiz bu
                sayede WorkshApp&apos;ı hemen kullanmaya ve açılışa özel
                fırsatları yakalamaya hazır olacaksın.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002"
                  />
                </svg>
              </div>
              <dt className="mt-4 font-semibold text-white">Spam yok</dt>
              <dd className="mt-2 leading-7 text-gray-400">
                Kimse spam mailleri sevmez, biz de sevmiyoruz bu yüzden sana
                gereksiz, ilgini çekmeyen mailleri asla göndermeyeceğiz.
              </dd>
            </div>
          </dl>
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              WorkshApp ile tanış
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Mail adresini gir, WorkshApp ne zaman çıkıyor ilk bilen sen ol.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email adresin
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:text-sm md:leading-6"
                placeholder="Email adresini gir"
                onChange={(event) => setEmail(event.target.value)}
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-indigo-500 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                disabled={loading}
                onClick={handleSubmit}
              >
                {loading ? <Loader size="xs" color="orange"/> : "Gönder"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
