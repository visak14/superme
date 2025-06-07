import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#F5F2F2] text-black px-4 py-10">
      <div className="max-w-7xl mx-auto flex flex-col items-start gap-8">
        <Image
          src="/images/super.png"
          alt="Supreme Group"
          className="w-32"
          width={200}
          height={200}
        />

        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          <div>
            <h4 className="font-bold mb-2">APPLICATIONS</h4>
            <ul className="space-y-1">
              <li>Apparel</li>
              <li>Automotive</li>
              <li>Filtration</li>
              <li>Customized Solutions</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2">COMPANY</h4>
            <ul className="space-y-1">
              <li>Innovation</li>
              <li>Global Competency</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2">MORE</h4>
            <ul className="space-y-1">
              <li>Careers</li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2">FOLLOW US</h4>
            <ul className="space-y-1">
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Instagram</li>
              <li>Medium</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between text-xs text-gray-500 w-full mt-6">
          <p>©2023. All Rights Reserved.</p>
          <p>Supreme house: 110, 16th Road, Chembur, Mumbai - 400071.</p>
        </div>
      </div>
    </footer>
  );
}
