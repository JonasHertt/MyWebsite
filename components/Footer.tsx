export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-300 py-12">
      <div className="mx-auto" style={{ paddingRight: 'clamp(3vw, 5vw, 10vw)', paddingLeft: 'clamp(3vw, 5vw, 10vw)' }}>
        {/* Hauptinhalt */}
        <div className="flex flex-col md:flex-row gap-8 mb-8 w-full">
          {/* Über mich */}
          <div className="flex-1 min-w-0 text-center">
            <h3 className="text-lg font-bold text-txt mb-4">Über mich</h3>
            <p className="text-sm text-txt opacity-80">
              Interdisciplinary Engineer mit Leidenschaft für innovative Lösungen. 
              Ich entwickle Produkte, die komplexe Herausforderungen elegant lösen.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex-1 min-w-0 text-center">
            <h3 className="text-lg font-bold text-txt mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#intro"
                  className="text-sm text-txt hover:text-gray-300 transition-colors duration-200"
                >
                  Startseite
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-sm text-txt hover:text-gray-300 transition-colors duration-200"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#roadmap"
                  className="text-sm text-txt hover:text-gray-300 transition-colors duration-200"
                >
                  Journey
                </a>
              </li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div className="flex-1 min-w-0 text-center">
            <h3 className="text-lg font-bold text-txt mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#impressum"
                  className="text-sm text-txt hover:text-gray-300 transition-colors duration-200"
                >
                  Impressum
                </a>
              </li>
              <li>
                <a
                  href="#datenschutz"
                  className="text-sm text-txt hover:text-gray-300 transition-colors duration-200"
                >
                  Datenschutz
                </a>
              </li>
              <li>
                <a
                  href="#agb"
                  className="text-sm text-txt hover:text-gray-300 transition-colors duration-200"
                >
                  AGB
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright & Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-700">
          <p className="text-sm text-txt">
            &copy; {new Date().getFullYear()} Jonas Herdlitschke. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <a
              href="#kontakt"
              className="text-sm text-txt hover:text-gray-300 transition-colors duration-200"
            >
              Kontakt
            </a>
            <a
              href="https://www.linkedin.com/in/jonas-herdlitschke-320b2a28b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-txt hover:text-gray-300 transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/JonasHertt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-txt hover:text-gray-300 transition-colors duration-200"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}