const Form = () => {
  return (
    <form className="flex flex-col gap-y-2 max-lg:items-center px-2 text-sm lg:text-base lg:flex-row lg:justify-center">
      <input
        className="w-80 h-12 bg-white ps-8 shadow-lg max-lg:rounded-full border border-black lg:rounded-l-full focus:outline-orange-500 hover:border-orange-500"
        type="text"
        placeholder="Insira os nomes dos participantes"
      />
      <button
        className="w-40 h-12 bg-stone-300 max-lg:rounded-full shadow-lg border border-black cursor-pointer lg:rounded-r-full hover:brightness-75 duration-150"
        disabled={true}
      >
        Adicionar
      </button>
    </form>
  );
};

export default Form;
