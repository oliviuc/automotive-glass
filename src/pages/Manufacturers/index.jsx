import React, { } from 'react';
import CSSModules from 'CSSModules';
import { useParams } from 'react-router-dom';
import styles from "./index.module.css";

function MyComponent(props) {

	const info = {
		benson: {
			title: "Benson",
			description: [
				"Эта китайская фирма использует современное оборудование из Канады, США, Италии и Японии. Мировая слава к производителю из Поднебесной пришла довольно быстро – высокое качество продукции и приемлемая цена не могли остаться незамеченными на рынке.",
				"Бренд на равных конкурирует с европейскими компаниями по изготовлению закаленных и ламинированных (триплекс) лобовых стекол, выпуская изделия, полностью соответствующие европейским стандартам. Это подтверждают имеющиеся сертификаты качества и оценки независимых экспертных организаций, а также представленность продукции в 50 странах мира, включая и Россию.",
				"Отличные характеристики продукции подтверждаются наличием у бренда крупных контрактов с автозаводами на поставку лобовых стекол для комплектации. В этот список входят такие иномарки, как Toyota, Alfa Romeo, Acura, Audi и другие. Многочисленные отзывы владельцев продукции Benson, отмечают современность продукции (есть модели с интегрированным обогревом, внешней защитной пленкой и т.п.) и лучшую прозрачность стекла, не искажающую обзор."
			],
		},
		fuyao: {
			title: "Fuyao Glass",
			description: [
				"FYG – это целая группа компаний, основанная в 1987 году в Китае. Группа специализируется на производстве не только автомобильных стекол, но и технических зеркал, а также стекол, которые применяются в строительстве.",
				"В отличие от соотечественников-конкурентов, продукция FYG отличается очень даже неплохим качеством. Со временем стекла не желтеют, процент брака относительно невысок. Также стоит отметить, что стекла идут с уже приклеенными молдингами, креплениями зеркал, датчиками дождя, обогревом и другими элементами, присущими той или иной модели автомобиля.",
				"Стекла этого производителя устанавливаются с завода на машины BMW, Volvo, Ford, Audi и некоторых других. Имеются в ассортименте производителя стекла и для давно снятых с производства авто."
			],
		},
		guardian: {
			title: "Guardian",
			description: [
				"Guardian является мировым лидером в производстве автомобильного стекла, флоат-стекла и стеклоизоляционных материалов. Ключевая особенность продукции – магнитронное напыление от SunGuard. Оно придает стеклу дополнительную механическую и химическую стойкость, а также чуть лучше защищает от солнечных лучей.",
				"Да и появляющийся при этом специфический оттенок вовсю используется автомобильными дизайнерами для создания уникального облика. Конечно, стекол этой фирмы со сколами, неровностями, «линзами» и тем более трещинами вы не найдете. Имеются и все необходимые крепления."
			],
		},
		nordglass: {
			title: "NordGlass",
			description: [
				"Польский производитель, который изготавливает стекла отличного качества. До «оригинала» они не дотягивают совсем чуть-чуть, но для рядового пользователя и этого хватит с головой. Бракованные стекла практически не попадают в продажу.",
				"Лобовые стекла под маркой Nordglass (как и боковые и задние) представляют потребителю очень качественный продукт. В большей мере ассортимент представлен триплексом, как в серийном, так и в малосерийном производстве (например, для нишевых и прототипных авто).",
				"Уже с завода на стекла устанавливаются все необходимые молдинги, крепления для датчика дождя и зеркала заднего вида. Единственный нюанс – большая часть продукции производится не в Польше, а в Китае. Хотя контроль качества все равно отличный."
			],
		},
		pilkington: {
			title: "Pilkington",
			description: [
				"Наконец, несомненным лидером в производстве автомобильного (и не только) стекла является британская компания, основанная в невероятно далеком 1826 году. Как вы понимаете, опыт производства просто огромный. Как и география продаж.",
				"Судя по официальным данным, Pilkington на данный момент присутствует в 130 странах и поставляет продукцию на треть (!) всех новых автомобилей мира.",
				"Такая популярность достигнута благодаря отменному качеству и применению инновационных технологий. К примеру, компания занимается разработкой специальных тепловых датчиков и системой самостоятельной очистки стекла."
			],
		},
		sekurit: {
			title: "Sekurit Saint-Gobain",
			description: [
				"Компания Sekurit Saint-Gobain по накопленному опыту запросто заткнет за пояс практически любую современную компанию, ведь ее история начинается в… 1665 году, когда ее основал король Людовик XIV. С тех пор много воды утекло, но компания продолжает создавать стекла отличного качества.",
				"Также стоит отметить, что компания считается изобретателем одного из способов закаливания. На сегодняшний день в составе компании есть 5 исследовательских центров и 38 производственных линий по всему миру.",
				"Продукция поставляется на конвейеры марок премиум класса – Audi, Mercedes-Benz, BMW и Volkswagen."
			],
		},
		xyg: {
			title: "Xinyi Glass",
			description: [
				"XYG полностью подтверждает стереотипы о продукции, произведенной в Китае. На первый взгляд, претензий никаких – процент брака низкий, явных сколов, трещин и неровностей нет. Также отсутствуют эффект линзы и несоответствие паспортным габаритам, чем грешат многие еще более дешевые стекла. Но вот качество в долгосрочной перспективе разочаровывает.",
				"Стекло мягкое, а потому быстро затирается щетками стеклоочистителя. Но несмотря на эти недостатки, около 68% стекол на отечественном рынке произведены именно XYG. Обусловлено это очень большим ассортиментом и самой низкой ценой в классе."
			],
		},
		shatterprufe: {
			title: "Shatterprufe",
			description: [
				"Компания Shatterprufe производит стекла по двум технологиям: триплекс (Safevue) и закаливание (Armourplate). Оба вида стекол надежны и устойчивы к механическим воздействиям. Они обеспечивают высокий уровень безопасности и комфорта езды на автомобиле.",
				"Стекла от торговой марки Shatterprufe можно увидеть на автомобилях таких популярных марок, как Mazda, Toyota, Subaru, Ford, Mitsubishi и многих других. Факт, что такие крупные производители с мировым именем отдают предпочтение продукции Shatterprufe, говорит о ее соответствии высокому уровню стандартов.",
				"Отличное качество автостекол сочетается с доступной ценой, что привлекает владельцев автомобилей, приобретающих стекла в частном порядке.При производстве автомобильных стекол Shatterprufe большое внимание уделяется стабильности их технических характеристик. Специалисты компании ведут работы в этом направлении, делая все возможное для того, чтобы со временем свойства продукции не изменялись.",
				"Все используемые в производстве материалы проходят предварительное тестирование. Результатом такого подхода к производственному процессу становятся высококачественные стекла, устойчивые к перепадам температур и воздействию ультрафиолетовых лучей."
			],
		},
		agc: {
			title: "AGC Glass",
			description: [
				"AGC японская фирма была создана еще в 1900 году. Более чем столетний опыт и знаменитое японское внимание к деталям делают стекла от AGC одними из лучших в мире. Уже с завода их продукция устанавливается на такие известнейшие марки, как Honda, Nissan, BMW, Toyota и др.",
				"В настоящее время компания имеет порядка 350 дочерних предприятий по всему миру. В том числе, AGC открыла линию на Борском стекольном заводе, а значит стекла есть и для отечественных авто: УАЗ, ГАЗ, ВАЗ, ПАЗ.",
				"Что еще более приятно, при соответствии всем отечественным и международным стандартам качества, стоимость продукции относительно невысока."
			],
		},
		bor: {
			title: "Борский стекольный завод",
			description: [
				"Борский стекольный завод – лидер среди российских производителей автомобильных стекол, фабрика работает уже больше 80 лет. Компания делает продукцию высокого качества, которая соответствуют ГОСТу и мировым стандартам. Сегодня БОР относится к японскому концерну AGC Automotive, применяет их технологии и высокоточную технику. Стекла идут на первичный рынок, но в нашем сервисе есть варианты на замену. С 1934 года завод ни разу не менял свою профориентацию.",
				"Для изготовления автостекол завод использует многослойные листы, которые повышают безопасность и минимизируют риск травмирования при ДТП. Автостекла г Бор подойдут для всех видов российских машин. В нашем центре можно сделать замену лобовых стекол бор на ВАЗ, ГАЗ, УАЗ и другие модели, где есть маркировка Борского завода. Компания выпускает также автостекла бор для иномарок."
			]
		},
		lemson: {
			title: "Lemson",
			description: [
				`Российский бренд делает недорогие стекла. Раньше они выпускали изделия под маркой «СтеклоЛюкс», а недавно создали отдельное предприятие, которое производит бюджетные стекла на авто в РФ.
				Сегодня компания – одна из лидеров российских производителей автостекол. Продукция сделана на стекольном заводе в г. Бор.`,
				"Стекло сертифицировано по ГОСТу, отвечает мировым нормам безопасности. Особенность стекол LEMSON – разграничение продукции при производстве. Лобовые автостекла – это триплекс, а боковые и задние – сталинит.",
				"Компания производит остекление для легковых, грузовых автомобилей, автобусов, сельскохозяйственной техники. Преимущество «Лемсон» - низкая цена. Они намного дешевле материалов иностранного производства, но качество соответствует государственным нормам и стандартам безопасности."
			]
		},
		kmk: {
			title: "KMK-Glass",
			description: [
				"Уже больше 20 лет производитель поставляет автостекла для крупных российских автоконцернов. Компания выпускает аксессуары для российских и иностранных автомобилей, легковой и грузотехники, автобусов, сельхозмашин.",
				"Продукция соответствует мировым нормам безопасности и качества, поэтому автостекла расходятся по доступным расценкам. Производственные базы расположены в г. Бор, на знаменитом стекольном заводе.",
				"Компания производит лобовые, боковые, задние стекла, молдинги, остекление с тонировкой, обогревом, шелкографией. Стекла характеризуются точной геометрией, высокой прозрачностью, ударопрочностью. Преимущество – низкая цена и широкое распространение на вторичном рынке."
			]
		},
		sat: {
			title: "SAT",
			description: [
				"Российский производитель автомобильных стекол, производственные базы которого расположены на острове Тайвань.",
				"Продукция широко распространена в России. У производителя большой ассортимент, что дает возможность покрыть потребности в автостеклах на территории страны. Компания успешно конкурирует с крупными производителями, отправляет продукцию в ведущие автоконцерны и салоны.",
				"Многочисленные положительные отзывы на российские автостекла доказывают их высокое качество."
			]
		},
		spektr: {
			title: "Spektr Glass",
			description: [
				"Компания выпускает российские автомобильные стекла для легкового, грузового транспорта, автобусов иностранного и российского производства. Кроме массового производства автостекол компания занимается изготовлением нестандартных окон под заказ. Производственные базы расположены в г. Бор.",
				"Преимущества автостекол: высокая прочность, безопасность при разбивании, стойкость к атмосферным воздействиям, улучшенные варианты с дополнительными опциями, штучное производство нестандартных стекол.",
				"Автостекла, сделанные в России, помечены маркировкой ru. Автостекла из РФ есть всегда в наличии в нашем магазине. Мы продаем только сертифицированную продукцию, на стеклах есть маркировки, подтверждающие оригинальность продукции."
			]
		}
	}

	const { manufacturer } = useParams();
	const pageInfo = info[manufacturer];

	return (
		<CSSModules styles={styles}>
			<div styleName="card">
				<div styleName="inner">
					<div styleName="img">
						<img src={require(`resources/images/manufacturers/${manufacturer}-large.png`)} alt={manufacturer} />
					</div>
					<h1 styleName='name'>{pageInfo.title}</h1>
					<div styleName="description">
						{pageInfo.description.map((description, i) => <p key={i}>{description}</p>)}
					</div>
				</div>
			</div>
		</CSSModules>
	);
}

export default MyComponent;