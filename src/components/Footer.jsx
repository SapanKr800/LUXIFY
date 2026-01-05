



const Footer = () => {
    return (
        <footer className="bg-[#0f0c0a] text-[#b6b6b6] border-t border-[#322D2A] pt-16 md:pt-20 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    <div>
                        <a to="/" className="font1 text-2xl font1 font-semibold tracking-wide">
                            LUXIFY
                        </a>
                        <p className="text-sm mt-4 leading-relaxed">
                            Curating timeless pieces for the modern connoisseur. Crafted with precision, designed for distinction.
                        </p>

                        <div>

                     

                        </div>

                    </div>


                    <div>
                        <h4 className="text-sm font-medium tracking-wider mb-6">SHOP</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-sm text-[#b6b6b6] hover:text-[#ffffff]">New Arrivals</a></li>
                            <li><a href="#" className="text-sm text-[#b6b6b6] hover:text-[#ffffff]">Women</a></li>
                            <li><a href="#" className="text-sm text-[#b6b6b6] hover:text-[#ffffff]">Men</a></li>
                            <li><a href="#" className="text-sm text-[#b6b6b6] hover:text-[#ffffff]">Accessories</a></li>
                            <li><a href="#" className="text-sm text-[#b6b6b6] hover:text-[#ffffff]">Sale</a></li>
                        </ul>
                    </div>


                    <div>
                        <h4 className="text-sm font-medium tracking-wider mb-6">HELP</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-sm text-[#b6b6b6] hover:text-[#ffffff]">Contact Us</a></li>
                            <li><a href="#" className="text-sm text-[#b6b6b6] hover:text-[#ffffff]">Shipping & Returns</a></li>
                            <li><a href="#" className="text-sm text-[#b6b6b6] hover:text-[#ffffff]">Size Guide</a></li>
                            <li><a href="#" className="text-sm text-[#b6b6b6] hover:text-[#ffffff]">FAQ</a></li>
                            <li><a href="#" className="text-sm text-[#b6b6b6] hover:text-[#ffffff]">Track Order</a></li>
                        </ul>
                    </div>


                    <div>
                        <h4 className="text-sm font-medium tracking-wider mb-6">ABOUT</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-sm text-[#b6b6b6] hover:text-[#ffffff]">Our Story</a></li>
                            <li><a href="#" className="text-sm text-[#b6b6b6] hover:text-[#ffffff]">Sustainability</a></li>
                            <li><a href="#" className="text-sm text-[#b6b6b6] hover:text-[#ffffff]">Careers</a></li>
                            <li><a href="#" className="text-sm text-[#b6b6b6] hover:text-[#ffffff]">Press</a></li>
                            <li><a href="#" className="text-sm text-[#b6b6b6] hover:text-[#ffffff]">Affiliates</a></li>
                        </ul>
                    </div>
                </div>


                <div className="pt-8 border-t border-[#322D2A] flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs">
                        © 2026 LUXIFY. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-sm text-[#b6b6b6] hover:text-[#ffffff]">Privacy Policy</a>
                        <a href="#" className="text-sm text-[#b6b6b6] hover:text-[#ffffff]">Terms of Service</a>
                        <a href="#" className="text-sm text-[#b6b6b6] hover:text-[#ffffff]">Cookie Settings</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
