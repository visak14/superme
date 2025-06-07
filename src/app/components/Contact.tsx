export default function Contact() {
  return (
    <section className="bg-[#0067B1] text-white px-4 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Get in touch</h2>
          <div className="h-1 w-12 bg-white mb-4"></div>
          <p className="mb-6">For general enquiries</p>
          <div className="mb-4">
            <p className="font-bold">Address :</p>
            <p>110, 16th Road, Chembur, Mumbai - 400071</p>
          </div>
          <div className="mb-4">
            <p className="font-bold">Phone :</p>
            <p>+91 22 25208822</p>
          </div>
          <div>
            <p className="font-bold">Email :</p>
            <p>info@supremegroup.co.in</p>
          </div>
        </div>

        <form className="space-y-6">
          <input
            type="text"
            placeholder="Full name"
            className="w-full text-white placeholder-white p-2 bg-transparent border-b border-white focus:outline-none"
          />
          <input
            type="email"
            placeholder="E-mail"
            className="w-full p-2 text-white placeholder-white bg-transparent border-b border-white focus:outline-none"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-2  text-white placeholder-white bg-transparent border-b border-white focus:outline-none"
          />
          <textarea
            placeholder="Message"
            className="w-full p-2 text-white placeholder-white  bg-transparent border-b border-white focus:outline-none h-32"
          ></textarea>
          <button
            type="submit"
            className="bg-[0067B1] text-white px-6 py-2 rounded-full font-semibold hover:bg-white border-1 hover:text-black transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
