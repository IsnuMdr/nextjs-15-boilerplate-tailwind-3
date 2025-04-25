const Footer = () => {
  return (
    <footer className="bg-background border-t py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <p className="text-center text-sm text-gray-600">
            © {new Date().getFullYear()} YourAppName. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-primary-600">
              Terms
            </a>
            <a href="#" className="text-gray-600 hover:text-primary-600">
              Privacy
            </a>
            <a href="#" className="text-gray-600 hover:text-primary-600">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
