export default function Home() {
  return (
    <main className="bg-white font-montserrat mt-[2rem]">
      
<nav className="hidden lg:flex justify-between items-center ml-[12rem] mr-[5rem] mb-[5rem]">
  <img src="logo.png" className="cursor-pointer hover:scale-110 transition-transform"/>
  <ul className="flex gap-[2.5rem] text-[1rem] font-semibold">
    <li className="menu-item">Начало</li>
    <li className="menu-item">За нас</li>
    <li className="menu-item">Услуги</li>
    <li className="menu-item">Цени</li>
    <li className="menu-item">Как работи</li>
    <li className="menu-item">Контакти</li>
  </ul>
  <div className="flex gap-[2.5rem] items-center text-[1rem] font-semibold">
    <ul>
      <li className="menu-item">Профил</li>
    </ul>
    <button className="border-2 bg-white border-black rounded-md px-4 py-2 text-black hover:text-white hover:bg-black transition-colors">Заявка за пратка</button>
  </div>
</nav>
      <div className="xl:px-[17rem] flex flex-col items-center">
        <div className="max-w-[56rem]">
        <h1 className="text-center mb-[1.5rem] lg:mb-[4rem] text-[2rem] lg:text-[4.5rem] font-bold font-montserrat tracking-tight leading-[2.3rem] lg:leading-[4.8rem]">
          Гъвкави решения за сухопътен транспорт за всеки клиент.
        </h1>
        </div>
        <img src="/hero-image.png" className="px-[5%] w-full mb-[2rem] lg:mb-[5rem]"></img>
        <div className="mb-[2rem] lg:mb-[4rem] px-[5%] lg:px-[7rem]">
          <h2 className="mb-[0.5rem] lg:mb-[2.5rem] text-[1.7rem] lg:text-[3rem] font-bold tracking-tight">Решения</h2>
          <p className="mb-[2rem] text-[0.8rem] lg:text-[1rem]">
            Фокусът ни върху клиентите е същността на нашата работа. Ние
            доставяме услуги за всички видове бизнес – от малки местни
            предприятия до мултинационални компании.
          </p>
          <p className="text-[0.8rem] lg:text-[1rem]">
            Ние обработваме вашата пратка като всяка друга голяма товарна пратка
            – старателно и професионално.
          </p>
          <ul className="list-disc list-inside text-[0.8rem] lg:text-[1rem]">
            <li>
              Решения за всички видове стоки (конвенционални, изискващи
              температурен режим, опасни товари)
            </li>
            <li>
              Превоз на стоки от и до Балканите и всички страни на ЕС, цели и
              частични товари;
            </li>
            <li>Взимане на стоки и доставки за от и в България;</li>
            <li>
              Съчетаване на дълги и къси дестинации за ефективно планиране и
              разходи;
            </li>
            <li>Регулярни групажни линии;</li>
            <li>Транспортни услуги до Турция и Близкия изток;</li>
            <li>
              Спазване на изискванията за качество и стандарти на клиентите
              и/или на техни специфични изисквания.
            </li>
          </ul>
        </div>
        <div className="mb-[2rem] lg:mb-[4rem] px-[5%] lg:px-[7rem]">
        <h2 className="mb-[0.5rem] lg:mb-[2.5rem] text-[1.7rem] lg:text-[3rem] font-bold tracking-tight">Предимства</h2>
          <p className="mb-[2rem] text-[0.8rem] lg:text-[1rem]">
            Фокусът ни върху клиентите е същността на нашата работа. Ние
            доставяме услуги за всички видове бизнес – от малки местни
            предприятия до мултинационални компании.
          </p>
          <p className="text-[0.8rem] lg:text-[1rem]">
            Ние обработваме вашата пратка като всяка друга голяма товарна пратка
            – старателно и професионално.
          </p>
        </div>
      </div>
      <div className="bg-custom-gray xl:px-[25rem] py-[2rem] lg:py-[5rem] mb-[2rem] lg:mb-[4rem] flex flex-col items-center">
        <div className="max-w-[43rem] flex flex-col items-center">
        <h1 className="text-white text-center mb-[1.5rem] lg:mb-[2rem] text-[2rem] lg:text-[4.5rem] font-bold font-montserrat tracking-tight leading-[2.3rem] lg:leading-[4.6rem]">
          Готови ли сте да работим заедно?
        </h1>
        <p className="text-white text-center px-[5%] lg:px-[7rem] text-[0.8rem] lg:text-[1rem] tracking-wider">
          Оставете вашият телефон и ние ще се свържем с вас, за да отговорим на
          всички въпроси
        </p>
        </div>
        <form action="/submit" method="post" className="flex justify-center mt-8">
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Мобилен телефон"
            className="py-5 px-7 border border-gray-300 rounded-l-md shadow-sm focus:outline-none focus:border-custom-dark-yellow"
            required
          />
          <button
            type="submit"
            className="py-5 px-7 bg-custom-yellow rounded-r-md shadow-sm hover:bg-custom-dark-yellow"
          >
            Изпрати
          </button>
        </form>
      </div>
      <div className="px-[8%] mb-[2rem] lg:mb-[5rem]">
      <h2 className="mb-[1rem] lg:mb-[2.5rem] text-[1.7rem] lg:text-[3rem] font-bold tracking-tight">Други услуги</h2>
        <div className="flex flex-col lg:flex-row gap-[2rem] w-full justify-center">
          <div className="">
            <img src="opasni-tovari.png" className="w-full mb-[0.5rem] lg:mb-[1.5rem] hover:scale-105 cursor-pointer transition-transform" />
            <p className="text:[1rem] lg:text-[1.5rem] font-bold">Опасни товари (ADR)</p>
          </div>
          <div>
            <img src="hladilen-transport.png" className="w-full mb-[0.5rem] lg:mb-[1.5rem] hover:scale-105 cursor-pointer transition-transform" />
            <p className="text:[1rem] lg:text-[1.5rem] font-bold">Опасни товари (ADR)</p>
          </div>
          <div>
            <img src="izvyngabaritni-tovari.png" className="w-full mb-[0.5rem] lg:mb-[1.5rem] hover:scale-105 cursor-pointer transition-transform" />
            <p className="text:[1rem] lg:text-[1.5rem] font-bold">Извънгабаритни товари</p>
          </div>
        </div>
      </div>
    </main>
  );
}
