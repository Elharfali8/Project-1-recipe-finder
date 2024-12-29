export function Footer() {
    return (
      <footer className="border-t py-6 ">
        <div className="container mx-auto text-center">
          <p className="">
            &copy; {new Date().getFullYear()} Recipe Finder. All rights reserved.
          </p>
          <div className="mt-4">
            <a href="#" className="text-gray-400 hover:text-gray-300 mx-2">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300 mx-2">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300 mx-2">
              Contact
            </a>
          </div>
        </div>
      </footer>
    );
  }
  