export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white h-50 flex flex-col items-center justify-center ">
      <div className="max-w-6xl mx-auto text-center space-y-3 ">
        {/* Company Name */}
        <h2 className="text-2xl font-bold">EventEase</h2>

        {/* Address */}
        <p className="text-gray-300">
          123 Main Street, New Delhi, India
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mt-2">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-400">
            Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-blue-400">
            Twitter
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-400">
            Instagram
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-500">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
