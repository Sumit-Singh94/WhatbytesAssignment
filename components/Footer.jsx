import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#00366d] text-white">
      <div className="mx-auto grid max-w-[1250px] grid-cols-1 gap-10 px-10 py-8 sm:grid-cols-3">
        {/* Filters */}
        <div>
          <h3 className="mb-5 text-[20px] font-bold">
            Filters
          </h3>

          <div className="flex flex-wrap gap-6 text-sm">
            <button
              type="button"
              className="text-white transition hover:text-blue-200"
            >
              All
            </button>

            <button
              type="button"
              className="text-white transition hover:text-blue-200"
            >
              Electronics
            </button>
          </div>
        </div>

        {/* About Us */}
        <div>
          <h3 className="mb-5 text-[20px] font-bold">
            About Us
          </h3>

          <div className="space-y-4 text-sm">
            <button
              type="button"
              className="block text-white transition hover:text-blue-200"
            >
              About Us
            </button>

            <button
              type="button"
              className="block text-white transition hover:text-blue-200"
            >
              Contact
            </button>
          </div>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="mb-5 text-[20px] font-bold">
            Follow Us
          </h3>

          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0875d1] transition hover:bg-[#0b8bea]"
            >
              <Facebook size={19} />
            </a>

            <a
              href="#"
              aria-label="Twitter"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0875d1] transition hover:bg-[#0b8bea]"
            >
              <Twitter size={19} />
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0875d1] transition hover:bg-[#0b8bea]"
            >
              <Instagram size={19} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mx-auto max-w-[1250px] px-10 pb-7">
        <p className="text-sm text-white">
          © 2024 American
        </p>
      </div>
    </footer>
  );
}