import React from "react";

const Main = () => {
	return (
		<main id="main" className="w-full flex items-center flex-col px-3">
			<div className="container">
				<article className="w-full my-12">
					<p className="text-4xl text-emerald-500 font-bold ">
						Что такое микрозелень ?
					</p>
					<hr className="w-full bg-neutral-400 rounded-md my-5" />
					<p className="text-xl text-slate-700">
						Микрозелень - это молодые ростки, которые собирают всего через
						несколько недель после прорастания, когда у них отрастают первые
						настоящие листья. Эта крошечная зелень богата питательными
						веществами и имеет широкий выбор вкусов и цветов.
					</p>
				</article>
				<article className="w-full my-12">
					<p className="text-4xl text-emerald-500 font-bold ">
						Где используют микрозелень?
					</p>
					<hr className="w-full bg-neutral-400 rounded-md my-5" />
					<p className="text-xl text-slate-700">
						Её часто используют в качестве гарнира или ингредиента в салатах,
						бутербродах и других блюдах для придания вкуса и визуального
						интереса.
					</p>
				</article>

				<article className="w-full my-12">
					<p className="text-4xl text-emerald-500 font-bold ">
						В чем польза и преемущества микрозелени?
					</p>
					<hr className="w-full bg-neutral-400 rounded-md my-5" />
					<ul className="w-full list-none flex flex-col items-center leading-7">
						<li className="text-xl text-slate-700 mb-4">
							<span className="underline decoration-emerald-500 decoration-wavy">
								Высокое содержание питательных веществ
							</span>
							: Микрогрины богаты витаминами, минералами и другими питательными
							веществами и могут обеспечить даже более концентрированное
							питание, чем их полностью выращенные аналоги.
						</li>
						<li className="text-xl text-slate-700 mb-4">
							<span className="underline decoration-emerald-500  decoration-wavy">
								Универсальность
							</span>
							: Микрозелени бывают самых разных вкусов и цветов и могут быть
							использованы в самых разных блюдах в качестве гарнира или
							ингредиента.
						</li>
						<li className="text-xl text-slate-700 mb-4">
							<span className="underline decoration-emerald-500   decoration-wavy">
								Потенциальная польза для здоровья
							</span>
							: Некоторые исследования показывают, что микрогрины могут
							оказывать противовоспалительное, противоопухолевое и другие
							укрепляющие здоровье эффекты.
						</li>
					</ul>
				</article>

				<article className="w-full my-12">
					<p className="text-4xl text-emerald-500 font-bold ">
						Так вот почему же все таки стоит купить микрозелень:
					</p>
					<hr className="w-full bg-neutral-400 rounded-md my-5" />
					<ul className="w-full list-none flex flex-col items-center leading-7">
						<li className="text-xl text-slate-700 mb-4 ">
							<span className="underline decoration-emerald-500 decoration-dashed">
								Питательная ценность
							</span>
							: Микрозелень собирают, когда они
							достигают всего нескольких сантиметров в высоту. Несмотря на их
							небольшой размер, они богаты питательными веществами и, как было
							обнаружено, содержат более высокий уровень витаминов и минералов,
							чем их зрелые аналоги.
						</li>
						<li className="text-xl text-slate-700 mb-4">
							<span className="underline decoration-emerald-500  decoration-dashed">
								Уникальность
							</span>
							: Микрозелень бывает самых разных вкусов и цветов и могут быть
							использованы в самых разных блюдах в качестве гарнира или
							ингредиента.
						</li>
						<li className="text-xl text-slate-700 mb-4">
							<span className="underline decoration-emerald-500   decoration-dashed">
								Удобство
							</span>
							: Микрозелень легко выращивать в домашних условиях, а
							это значит, что вы всегда можете иметь под рукой свежие запасы,
							когда они вам понадобятся. Их также можно приобрести во многих
							продуктовых магазинах и на фермерских рынках.
						</li>
						<li className="text-xl text-slate-700 mb-4">
							<span className="underline decoration-emerald-500   decoration-dashed">
								Экологичность
							</span>
							: Микрозелень является устойчивым источником продовольствия,
							поскольку для их выращивания требуется меньше воды и места, чем
							для традиционных культур. Их также можно выращивать круглый год,
							что делает их надежным источником свежих продуктов.
						</li>
						<li className="text-xl text-slate-700 mb-4">
							<span className="underline decoration-emerald-500   decoration-dashed">
								Польза для здоровья
							</span>
							: Употребление микрогринов связано с целым рядом преимуществ для
							здоровья, включая улучшение пищеварения, уменьшение воспаления и
							снижение риска хронических заболеваний, таких как болезни сердца и
							рак.
						</li>
					</ul>
				</article>
			</div>
		</main>
	);
};

export default Main;
