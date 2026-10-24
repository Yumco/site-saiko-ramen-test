import logo from '../public/images/logo.png';
import eventImg from '../public/images/image-1-logo-de-l-evenement-que-notre-restaurant.png';

const PLATFORM_URL = 'https://platform.yumco.fr/yumco-restaurant-6';
const HAS_ORDER = true;
const HAS_BOOKING = true;

const steps = [
  {
    ja: 'スープ',
    title: 'Le bouillon',
    text: 'Porc, volaille ou légumes : la base qui donne toute sa profondeur au bol.',
  },
  {
    ja: 'タレ',
    title: 'La tare',
    text: 'Shoyu, miso ou shio : l’assaisonnement qui signe chaque recette.',
  },
  {
    ja: '麺',
    title: 'Les nouilles',
    text: 'Fines ou épaisses, droites ou ondulées, cuites à la seconde près.',
  },
  {
    ja: '具',
    title: 'Les garnitures',
    text: 'Chashu, œuf mariné, nori, oignon vert, pousses de bambou…',
  },
];

const dishes = [
  {
    ja: '豚骨',
    latin: 'TONKOTSU',
    title: 'Tonkotsu Ramen',
    text: 'Bouillon d’os de porc crémeux, chashu fondant, œuf mariné, oignon vert et nori.',
    tag: 'Signature',
    sig: true,
  },
  {
    ja: '醤油',
    latin: 'SHOYU',
    title: 'Shoyu Ramen',
    text: 'Bouillon clair de volaille à la sauce soja, menma, chashu et naruto.',
    tag: 'Classique',
    sig: false,
  },
  {
    ja: '味噌',
    latin: 'MISO',
    title: 'Miso épicé',
    text: 'Bouillon au miso relevé d’huile pimentée, porc haché, maïs et pousses de soja.',
    tag: 'Épicé',
    sig: false,
  },
  {
    ja: '塩',
    latin: 'SHIO',
    title: 'Shio Yuzu',
    text: 'Bouillon léger au sel et zeste de yuzu, légumes croquants et tofu.',
    tag: 'Végétarien',
    sig: false,
  },
  {
    ja: '餃子',
    latin: 'GYOZA',
    title: 'Gyoza',
    text: 'Raviolis grillés au porc et chou, sauce soja vinaigrée.',
    tag: 'À partager',
    sig: false,
  },
  {
    ja: '唐揚げ',
    latin: 'KARAAGE',
    title: 'Karaage',
    text: 'Poulet mariné au gingembre, frit et croustillant, mayonnaise japonaise.',
    tag: 'À partager',
    sig: false,
  },
];

const hours: { day: string; value: string; closed: boolean }[] = [
  { day: 'Lundi', value: 'fermé', closed: true },
  { day: 'Mardi', value: '12:00-14:30, 19:00-22:30', closed: false },
  { day: 'Mercredi', value: '12:00-14:30, 19:00-22:30', closed: false },
  { day: 'Jeudi', value: 'fermé', closed: true },
  { day: 'Vendredi', value: '12:00-14:30, 19:00-22:30', closed: false },
  { day: 'Samedi', value: '12:00-14:30, 19:00-22:30', closed: false },
  { day: 'Dimanche', value: '12:00-14:30, 19:00-23:00', closed: false },
];

export default function Page() {
  return (
    <>
      <header className="hero" data-section="hero">
        <div className="hero-ja" aria-hidden="true" lang="ja">最高</div>
        <div className="wrap">
          <div className="topbar">
            <a className="brand" href="#">
              <img src={logo.src} alt="Logo Saiko Ramen" width={44} height={44} />
              Saiko Ramen
            </a>
            {HAS_ORDER && (
              <a className="btn btn-order" href={PLATFORM_URL}>Commander</a>
            )}
          </div>
          <div className="hero-grid">
            <div>
              <span className="kicker">Restaurant japonais · Spécialiste ramen</span>
              <h1>Saiko<span>Ramen</span></h1>
              <p className="tagline">Des bouillons mijotés longuement, des nouilles qui ont du ressort : le bol qui réchauffe, fait avec soin.</p>
              <div className="ctas">
                {HAS_ORDER && (
                  <a className="btn btn-order" href={PLATFORM_URL}>Commander</a>
                )}
                {HAS_BOOKING && (
                  <a className="btn btn-book" href={PLATFORM_URL}>Réserver</a>
                )}
              </div>
            </div>
            <div className="bowl-art" aria-hidden="true">
              <span className="steam s1"></span>
              <span className="steam s2"></span>
              <span className="steam s3"></span>
              <span className="sticks"></span>
              <span className="nori"></span>
              <span className="broth"></span>
              <span className="egg"></span>
              <span className="naruto"></span>
              <div className="bowl"><b lang="ja">ラーメン</b></div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="ramen-band" data-section="ramen-band" aria-label="Nos bouillons">
          <div className="wrap">
            <p>
              <span>Tonkotsu</span><i>✦</i><span>Shoyu</span><i>✦</i><span>Miso</span><i>✦</i><span>Shio</span><i>✦</i><span>Tantanmen</span>
            </p>
          </div>
        </section>

        <section className="about" data-section="about">
          <div className="wrap about-grid">
            <div>
              <span className="kicker">最高 — Saikō, « le meilleur »</span>
              <h2>Ici, tout tourne autour du bol.</h2>
              <p>Chez Saiko Ramen, le ramen n’est pas un plat parmi d’autres : c’est notre spécialité et notre obsession. Chaque bol est construit comme au Japon, autour d’un bouillon profond, d’un assaisonnement précis et de nouilles à la juste mâche.</p>
              <p>Que vous passiez pour un déjeuner rapide ou pour un dîner entre amis, on vous sert un bol généreux, chaud et réconfortant, à déguster sur place ou à emporter.</p>
            </div>
            <ul className="promises">
              <li><strong>Bouillon maison</strong>Préparé chaque jour, mijoté longuement.</li>
              <li><strong>Nouilles choisies</strong>Une texture adaptée à chaque bouillon.</li>
              <li><strong>Bol fait minute</strong>Assemblé au moment de la commande.</li>
            </ul>
          </div>
        </section>

        <section className="anatomy" data-section="ramen-anatomy">
          <div className="wrap">
            <span className="kicker">Anatomie d’un ramen</span>
            <h2>Quatre gestes, un bol.</h2>
            <ol className="steps">
              {steps.map((s) => (
                <li key={s.title}>
                  <span className="ja" lang="ja" aria-hidden="true">{s.ja}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="menu" data-section="menu-preview">
          <div className="wrap">
            <span className="kicker">Aperçu de la carte</span>
            <h2>Nos bols et à-côtés</h2>
            <p className="menu-intro">Une sélection de nos incontournables. Les ramens restent les stars de la maison.</p>
            <ul className="dishes">
              {dishes.map((d) => (
                <li className="dish" key={d.title}>
                  <span className="ja"><span lang="ja">{d.ja}</span>{' · '}{d.latin}</span>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                  <span className={d.sig ? 'tag sig' : 'tag'}>{d.tag}</span>
                </li>
              ))}
            </ul>
            {HAS_ORDER && (
              <div className="menu-more">
                <a className="btn btn-book" href={PLATFORM_URL}>Voir la carte</a>
              </div>
            )}
          </div>
        </section>

        <section className="events" data-section="events">
          <div className="wrap events-grid">
            <img
              src={eventImg.src}
              alt="Logo de l’événement Sous les Lampions — Un moment qui conte…"
              width={eventImg.width}
              height={eventImg.height}
              loading="lazy"
            />
            <div>
              <span className="kicker">Événements</span>
              <h2>Sous les Lampions</h2>
              <p>Saiko Ramen a eu le plaisir de prendre en charge l’événement Sous les Lampions. Vous préparez un moment à partager ? Nos bols peuvent s’inviter à votre événement : parlons-en par téléphone ou par e-mail.</p>
            </div>
          </div>
        </section>

        <section className="order-booking" data-section="order-booking">
          <div className="wrap ob-grid">
            {HAS_ORDER && (
              <div className="ob-card ob-order" id="commander">
                <h2>Commander en ligne</h2>
                <p>Choisissez votre ramen, on le prépare minute. Il ne vous reste qu’à venir le chercher, encore fumant.</p>
                <a className="btn" href={PLATFORM_URL}>Commander</a>
              </div>
            )}
            {HAS_BOOKING && (
              <div className="ob-card ob-book" id="reserver">
                <h2>Réserver une table</h2>
                <p>Midi ou soir, gardez votre place au comptoir ou en salle. Vous pouvez aussi nous appeler directement.</p>
                <a className="btn btn-book" href={PLATFORM_URL}>Réserver</a>
              </div>
            )}
          </div>
        </section>

        <div className="info">
          <section className="wrap" style={{ padding: '72px 0' }}>
            <div className="info-grid">
              <section className="panel" data-section="hours" aria-labelledby="h-hours">
                <h2 id="h-hours">Horaires</h2>
                <table>
                  <tbody>
                    {hours.map((h) => (
                      <tr key={h.day} className={h.closed ? 'closed' : undefined}>
                        <th scope="row">{h.day}</th>
                        <td>{h.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
              <section className="panel" data-section="contact" aria-labelledby="h-contact">
                <h2 id="h-contact">Nous trouver</h2>
                <ul className="contact-list">
                  <li><span>Adresse</span><address>3bis rue jean jaurès</address></li>
                  <li><span>Téléphone</span><a href="tel:0666694831">0666694831</a></li>
                  <li><span>E-mail</span><a href="mailto:dwain@gmail.com">dwain@gmail.com</a></li>
                </ul>
              </section>
            </div>
          </section>
        </div>
      </main>
      <footer className="footer" data-section="footer">
        <div className="wrap">
          <div className="foot-grid">
            <a className="brand" href="#">
              <img src={logo.src} alt="Logo Saiko Ramen" width={44} height={44} loading="lazy" />
              Saiko Ramen
            </a>
            <nav aria-label="Navigation du pied de page">
              {HAS_ORDER && <a href={PLATFORM_URL}>Commander</a>}
              {HAS_BOOKING && <a href={PLATFORM_URL}>Réserver</a>}
              <a href="tel:0666694831">0666694831</a>
              <a href="mailto:dwain@gmail.com">dwain@gmail.com</a>
            </nav>
          </div>
          <small>© Saiko Ramen — Restaurant japonais, spécialiste du ramen · 3bis rue jean jaurès</small>
        </div>
      </footer>
    </>
  );
}
