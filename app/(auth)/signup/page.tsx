export const metadata = {
  title: "Sign Up - Simple",
  description: "Page description",
};



export default function SignUp() {
  return (
    <>
      <div className="mb-10">
        <h1 className="text-4xl font-bold">Ainda não faz parte do time touch?</h1>
        <h3 className="text-1x4 font-regular">Nosso time entrará em contato o mais rápido possível!</h3>
      </div>

      {/* Form */}
      <form>
        <div className="space-y-4">
          <div>
            <label
              className="mb-1 block text-sm font-medium text-gray-700"
              htmlFor="name"
            >
              Nome completo
            </label>
            <input
              id="name"
              className="form-input w-full py-2"
              type="text"
              placeholder="Coronel Enjalin Rabei"
              required
            />
          </div>
          <div>
            <label
              className="mb-1 block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              className="form-input w-full py-2"
              type="email"
              placeholder="enjamin123@email.com"
              required
            />
          </div>
          <div>
            <label
              className="mb-1 block text-sm font-medium text-gray-700"
              htmlFor="phone"
            >
              Telefone (Whatsapp de preferência)
            </label>
            <input
              id="phone"
              className="form-input w-full py-2"
              type="text"
              placeholder="(+55) 31 9 9876-5432"
              required
            />
          </div>
          
        </div>
        <div className="mt-6 space-y-3">
          <button className="btn w-full bg-gradient-to-t from-purple-700 to-purple-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%]">
            Enviar
          </button>
          
          
        </div>
      </form>

      
    </>
  );
}
