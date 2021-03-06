import React, { Component } from 'react'
import News from './News'
import PropTypes  from 'prop-types';

export default class Newsitem extends Component {

    articles = [
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Steve Dent",
            "title": "'Mystery Science Theater 3000' is back on a dedicated streaming platform",
            "description": "The world never run out of bad 'B' movies to mock, apparently, because Mystery Science Theater 3000 (MST3K) is back for a 13th season, Variety has reported. Thanks to a Kickstarter campaign last year that raised $6.52 million, a full 13-episode season of the …",
            "url": "https://www.engadget.com/mystery-science-theater-3000-is-back-on-the-gizmoplex-indie-streaming-platform-070504379.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-03/a4c9f120-ac03-11ec-9671-ab8b0407f27c",
            "publishedAt": "2022-03-25T07:05:04Z",
            "content": "The world never run out of bad 'B' movies to mock, apparently, because Mystery Science Theater 3000 (MST3K) is back for a 13th season, Variety has reported. Thanks to a Kickstarter campaign last year… [+1989 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Analysis: New EU rules regulating U.S. tech giants likely to set global standard - Reuters.com",
            "description": "Landmark EU rules targeting Alphabet <a href=\"https://www.reuters.com/companies/GOOGL.O\" target=\"_blank\">(GOOGL.O)</a> unit Google, Amazon <a href=\"https://www.reuters.com/companies/AMZN.O\" target=\"_blank\">(AMZN.O)</a>, Apple <a href=\"https://www.reuters.com/…",
            "url": "https://www.reuters.com/technology/new-eu-rules-regulating-us-tech-giants-likely-set-global-standard-2022-03-25/",
            "urlToImage": "https://www.reuters.com/resizer/9Ffttu0-0GFQcoTxssDG7-Gz364=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/UCCHLGKVZBL3JDCTWAGYJS4CKE.jpg",
            "publishedAt": "2022-03-25T01:42:00Z",
            "content": "BRUSSELS, March 25 (Reuters) - Landmark EU rules targeting Alphabet (GOOGL.O) unit Google, Amazon (AMZN.O), Apple (AAPL.O), Meta (FB.O) and Microsoft (MSFT.O) are likely to set a global benchmark and… [+2995 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Phil Harrison",
            "title": "Moon Knight to Slow Horses: the seven best shows to stream this week",
            "description": "Oscar Isaac is Marvel’s trippiest superhero to date, while Gary Oldman and Kristin Scott Thomas star in a new spy thriller about a motley band of MI5 outcasts Continue reading...",
            "url": "https://amp.theguardian.com/tv-and-radio/2022/mar/25/moon-knight-to-slow-horses-the-seven-best-shows-to-stream-this-week",
            "urlToImage": "https://i.guim.co.uk/img/media/b2badf59582415efc4270a6120e114b80ae7bb94/0_0_5000_3000/master/5000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=694d91cdc63debb018abd55fc82b1740",
            "publishedAt": "2022-03-25T07:00:22Z",
            "content": "Pick of the week\r\nMoon Knight\r\nOscar Isaac as Moon Knight. Photograph: Marvel Studios\r\nPossibly Marvels trippiest offering to date, this series stars Oscar Isaac as Marc Spector, a crime-fighting sup… [+4404 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Interviews by Georgina Lawton",
            "title": "You be the judge: should my husband start trying new cuisines?",
            "description": "After 63 years of marriage, she wants to try spicy dishes, he wants to stick to meat and two veg. You deliver a verdict on this food fight<ul><li>If you have a disagreement you’d like settled, or want to be part of our jury, click here</li></ul>We’ve been mar…",
            "url": "https://amp.theguardian.com/lifeandstyle/2022/mar/25/you-be-the-judge-should-my-husband-start-trying-new-cuisines",
            "urlToImage": "https://i.guim.co.uk/img/media/623ccc0ee202c3f1eb50d000152214a8388cb71f/0_0_3000_1800/master/3000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=59733f13a7644182cbb877d0676b3e2e",
            "publishedAt": "2022-03-25T08:00:22Z",
            "content": "The prosecution: Alice\r\nWeve been married for 63 years and are stuck in a food rut. Its time to try something new\r\nI have been cooking for my husband, Lyndon, for most of my adult life, but after 63 … [+6160 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNET"
            },
            "author": "David Lumb",
            "title": "Apple's Next Green Initiative: Making the iPhone SE With Low-Carbon Aluminum - CNET",
            "description": "Making its iPhone SE out of aluminum smelted with reduced carbon emissions is another step toward more sustainable phones.",
            "url": "https://www.cnet.com/tech/mobile/apples-next-green-initiative-making-the-iphone-se-with-low-carbon-aluminum/",
            "urlToImage": "https://www.cnet.com/a/img/resize/dd2ea63455bb79c4931470fbdf61bf6061321dda/2022/03/14/49c00f4b-bb6c-470c-a82a-84f348b00f5e/iphone-se-2022-camera2-macro.jpg?auto=webp&fit=crop&height=630&width=1200",
            "publishedAt": "2022-03-25T00:44:24Z",
            "content": "Kevin Heinz/CNET\r\nApple's latest environmentally friendly endeavor will put more sustainably-made metal in its new iPhone SE models.\r\nThe aluminum, which is used in the metal frame around the sides o… [+702 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MacRumors"
            },
            "author": "Tim Hardwick",
            "title": "HomePod Mini Launches in Belgium, Netherlands, and Switzerland",
            "description": "Apple today started taking orders for the HomePod mini in Belgium, the Netherlands, and Switzerland for the first time, as spotted by iCulture.\n\n\n\n\n\nApple said earlier this month that it would make the ‌HomePod mini‌ available to order in the above countries …",
            "url": "https://www.macrumors.com/2022/03/25/homepod-mini-belgium-netherlands-switzerland/",
            "urlToImage": "https://images.macrumors.com/t/kQ0rks2mmX--3lnU0mUhIOht5Hc=/2158x/article-new/2021/10/homepod-mini-five-colors.jpg",
            "publishedAt": "2022-03-25T09:45:14Z",
            "content": "Apple today started taking orders for the HomePod mini in Belgium, the Netherlands, and Switzerland for the first time, as spotted by iCulture.\r\nApple said earlier this month that it would make the ‌… [+1092 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MarketBeat"
            },
            "author": "MarketBeat Staff",
            "title": "MarketBeat Podcast: 3 Stocks for Your Watchlist",
            "description": "MarketBeat’s own Chris Markoch is back as a guest on The MarketBeat Podcast , and he and Kate discuss three stocks that Chris sees as having potential for your watch...",
            "url": "https://www.marketbeat.com/originals/marketbeat-podcast-3-stocks-for-your-watchlist/",
            "urlToImage": "https://assets.entrepreneur.com/providers/marketbeat/hero-image-marketbeat-423109.jpeg",
            "publishedAt": "2022-03-25T09:00:00Z",
            "content": "MarketBeats own Chris Markoch is back as a guest on The MarketBeat Podcast , and he and Kate discuss three stocks that Chris sees as having potential for your watch list, even during the market downt… [+1201 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "Himani Jha",
            "title": "Green iPhone 13 Pro price drop rolled out! Cheaper by 23000, know how to get it - HT Tech",
            "description": "<ol><li>Green iPhone 13 Pro price drop rolled out! Cheaper by 23000, know how to get it  HT Tech\r\n</li><li>Fido 'Clearance' Pricing Hits Apple's iPhone 12 and iPhone 11 Lineup  iPhone in Canada\r\n</li><li>Apple iPhone 13 Exchange And Cashback Offer: Here’s How…",
            "url": "https://tech.hindustantimes.com/mobile/news/green-iphone-13-pro-price-drop-rolled-out-cheaper-by-23000-know-how-to-get-it-71648186036479.html",
            "urlToImage": "https://images.hindustantimes.com/tech/img/2022/03/25/1600x900/Apple-iPhone13-Pro-alpine-green-hero-2up-220308_big_carousel.jpg.large_1646909085170_1648186667539.jpg",
            "publishedAt": "2022-03-25T05:39:34Z",
            "content": "Apple premium reseller iStore India is giving away an exciting deal on the green iPhone 13 Pro. The tech giant has recently introduced two new colour shades to iPhone 13 series - Green and Alpine Gre… [+1573 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hipertextual"
            },
            "author": "Luis Miranda",
            "title": "La Ley de Mercados Digitales aprueba la interoperabilidad de WhatsApp, iMessage y Facebook Messenger con otros clientes de mensajería",
            "description": "Tras ocho horas de negociación, legisladores de la Unión Europea lograron un acuerdo de cara a la aprobación de la Ley de Mercados Digitales (DMA). La nueva legislación buscará poner fin a las prácticas abusivas de empresas como Google, Meta, Apple o Amazon, …",
            "url": "https://hipertextual.com/2022/03/ley-de-mercados-digitales-interoperabilidad-whatsapp-imessage-facebook-messenger",
            "urlToImage": "https://hipertextual.com/wp-content/uploads/2022/03/whatsapp-messenger-imessage.jpg",
            "publishedAt": "2022-03-25T00:49:25Z",
            "content": "Tras ocho horas de negociación, legisladores de la Unión Europea lograron un acuerdo de cara a la aprobación de la Ley de Mercados Digitales (DMA). La nueva legislación buscará poner fin a las prácti… [+2734 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Fast Company"
            },
            "author": "Katie Schlott",
            "title": "Leaders: Your Sandwich Generation employees need help. Here’s what to do",
            "description": "Veteran innovation consultant Katie Schlott explains how to tackle a topic as broad and daunting as “caregiving in America” by focusing on the people who are desperately seeking solutions: members of the Sandwich Generation.\nLike most Millennials, I didn’t ex…",
            "url": "https://www.fastcompany.com/90733764/leaders-your-sandwich-generation-employees-need-help-heres-what-to-do?partner=rss&utm_source=twitter.com&utm_medium=social&utm_campaign=rss+fastcompany&utm_content=rss",
            "urlToImage": "https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/wp-cms/uploads/2022/03/p-1-leaders-your-sandwich-generation-employees-need-help-heres-what-to-do.jpg",
            "publishedAt": "2022-03-25T05:30:40Z",
            "content": "Like most Millennials, I didn’t expect to join the realm of caring for aging parents for at least another decade. That all changed on Christmas Eve 2019, when my mom suddenly became disabled from the… [+9723 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Xataka.com"
            },
            "author": "Ricardo Aguilar",
            "title": "Enviar un mensaje desde WhatsApp, recibirlo en Telegram: la UE quiere apps de mensajería compatibles",
            "description": "Europa está acordando nuevas normas que \"limiten el poder de mercado de las grandes plataformas en línea\". Bajo el paraguas de la Ley de Mercados Digitales (DMA), quiere permitir que los gigantes de los servicios de mensajería sean interoperables con platafor…",
            "url": "https://www.xataka.com/aplicaciones/enviar-mensaje-whatsapp-recibirlo-telegram-ue-quiere-apps-mensajeria-compatibles",
            "urlToImage": "https://i.blogs.es/5cf951/whatsapp/840_560.jpeg",
            "publishedAt": "2022-03-25T07:47:56Z",
            "content": "Europa está acordando nuevas normas que \"limiten el poder de mercado de las grandes plataformas en línea\". Bajo el paraguas de la Ley de Mercados Digitales (DMA), quiere permitir que los gigantes de … [+2575 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Xataka.com"
            },
            "author": "Eva Rodríguez de Luis",
            "title": "Cazando Gangas en informática y gaming: ahorra 300 euros en el MacBook Pro, chollo Zelda Game & Watch, rebajas en GPU de última generación y más",
            "description": "Si tienes un PC gaming y quieres montarle una gráfica de última generación (o lo estás actualizando) sin arruinarte, buscas rebajas en ordenadores, quieres hacerte con un MacBook Pro a precio de MacBook Air o quieres comprar los mejores videojuegos en oferta,…",
            "url": "https://www.xataka.com/cazando-gangas/cazando-gangas-informatica-gaming-ahorra-300-euros-macbook-pro-chollo-zelda-game-watch-rebajas-gpu-ultima-generacion",
            "urlToImage": "https://i.blogs.es/e3df1a/ama-copia/840_560.jpg",
            "publishedAt": "2022-03-25T09:31:35Z",
            "content": "Si tienes un PC gaming y quieres montarle una gráfica de última generación (o lo estás actualizando) sin arruinarte, buscas rebajas en ordenadores, quieres hacerte con un MacBook Pro a precio de MacB… [+9582 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Atlantic"
            },
            "author": "John Hendrickson",
            "title": "The Tension at the Heart of CODA",
            "description": "Even after two viewings, I’m still trying to answer a fundamental question: Who is this movie for?",
            "url": "https://www.theatlantic.com/ideas/archive/2022/03/coda-deaf-actors-supporting-roles/627609/?utm_source=feed",
            "urlToImage": null,
            "publishedAt": "2022-03-25T09:00:00Z",
            "content": "In a 1993 episode of Seinfeld, Jerry dates a deaf woman named Laura. Naturally, George views Laura’s disability as something to be exploited. He wants her to read lips from across the room at a party… [+9617 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gutenberg.org"
            },
            "author": null,
            "title": "Roman Catholic Priest: 30 Yrs in 17c France, Published Posthumous Atheistic Book",
            "description": "Comments",
            "url": "https://www.gutenberg.org/files/17607/17607-h/17607-h.htm",
            "urlToImage": null,
            "publishedAt": "2022-03-25T01:21:04Z",
            "content": "Project Gutenberg's Superstition In All Ages (1732), by Jean Meslier\r\nThis eBook is for the use of anyone anywhere at no cost and with\r\nalmost no restrictions whatsoever. You may copy it, give it awa… [+518929 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "heise online"
            },
            "author": "Frank Schräer",
            "title": "Freitag: Apple iPhones im Abo, britische Teenager als Cyber-Kriminelle",
            "description": "Abomodell für iPhones + Teenager als Hacker festgenommen + Speichernot in Russland + PHEV-Effizienz-Studie + Körperfunktionen ohne Gehirn + Datenschutz-Podcast",
            "url": "https://www.heise.de/news/Freitag-Apple-iPhones-im-Abo-britische-Teenager-als-Cyber-Kriminelle-6629442.html",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/4/1/8/7/0/2/freitag-67919a34438fca1d.webp",
            "publishedAt": "2022-03-25T05:30:00Z",
            "content": "Apple will seine iPhones wohl zusätzlich auch als Abonnement unter die Leute bringen. Statt die Geräte komplett zu kaufen oder in Raten abzubezahlen, soll es angeblich zukünftig ein Abo-Modell mit mo… [+4075 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "heise online"
            },
            "author": "Frank Schräer",
            "title": "Bericht: Apple will iPhones über Abo-Modelle anbieten",
            "description": "Monatlich statt einmal zahlen: Das könnte das nächste Finanzierungsmodell von Apple werden, um iPhones und iPads abzusetzen und Kunden an sich zu binden.",
            "url": "https://www.heise.de/news/Bericht-Apple-will-iPhones-ueber-Abo-Modelle-anbieten-6628608.html",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/4/1/7/8/7/0/Apple_Logo-f38daf49a7a581d3.jpg",
            "publishedAt": "2022-03-25T02:21:00Z",
            "content": "Apple plant angeblich neue Wege für Kunden, iPhones zu nutzen. Durch Abonnementmodelle können die Nutzer monatlich für neue Hardware zahlen, statt sie einmalig zu kaufen. Dies soll unabhängig sein vo… [+2292 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "heise online"
            },
            "author": "Holger Zelder",
            "title": "heise+ | Sechs Gadgets für Apple im Test: HomePod-Basis, HomeKit-Sensor und mehr",
            "description": "Hersteller bieten viel Zubehör für Apple-Produkte an. Wir werfen einen kritischen Blick auf Gadgets, von cool bis Kernschrott. Diesmal: Viel fürs Home.",
            "url": "https://www.heise.de/tests/Sechs-Gadgets-fuer-Apple-im-Test-HomePod-Basis-HomeKit-Sensor-und-mehr-6612835.html",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/4/0/3/1/7/2/mi_hze_gadget_inspektor_aufmacher_rund_a_digital_kopie-4a547128ab7e23f9.png",
            "publishedAt": "2022-03-25T08:30:00Z",
            "content": "Inhaltsverzeichnis\r\nIn der Mac &amp; i-Redaktion schlagen jede Woche zahllose Produkte auf, die sich zu testen lohnen und viele auch nicht. In unserem Schnelltest gibt es diesmal sechs Produkte, die … [+3316 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "heise online"
            },
            "author": "Michel Winde, dpa",
            "title": "Weniger Macht für Google und Co – EU einig bei Digital-Gesetz",
            "description": "Internet-Schwergewichte dominieren das Netz – die Konkurrenz hat es oft schwer. Die EU hat nun ein Gesetz beschlossen, das den Wettbewerb fairer machen soll.",
            "url": "https://www.heise.de/news/Weniger-Macht-fuer-Google-und-Co-EU-einig-bei-Digital-Gesetz-6630739.html",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/4/1/9/8/8/2/shutterstock_497068513-d4b9d9e79b02dafc.jpg",
            "publishedAt": "2022-03-25T09:18:00Z",
            "content": "Als die EU sich zuletzt umfassende Regeln fürs Internet gab, war die Welt eine andere. Google war gerade gegründet, Amazon verkaufte hauptsächlich Bücher, Facebook entstand erst Jahre später. Problem… [+6020 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "Filipe Espósito",
            "title": "Apple Maps expands detailed 3D buildings and enhanced navigation to Canada",
            "description": "Apple on Thursday announced that it is bringing the new Apple Maps experience with detailed 3D buildings and enhanced navigation to Canada. The new maps, which were built from scratch, will be available in selected Canadian cities.\n more…\nThe post Apple Maps …",
            "url": "https://9to5mac.com/2022/03/24/apple-maps-expands-detailed-3d-buildings-and-enhanced-navigation-to-canada/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/03/apple-maps-canada.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2022-03-25T02:02:29Z",
            "content": "Apple on Thursday announced that it is bringing the new Apple Maps experience with detailed 3D buildings and enhanced navigation to Canada. The new maps, which were built from scratch, will be availa… [+1629 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "Benjamin Mayo",
            "title": "How to watch Pachinko on Apple TV+",
            "description": "The international epic drama series Pachinko debuts today on Apple TV+. Pachinko tells the story of a Korean family who immigrate to Japan in the 20th century, at a time when Japanese attitudes towards Koreans was far from amicable. The first three episodes a…",
            "url": "https://9to5mac.com/2022/03/24/how-to-watch-pachinko-on-apple-tv/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/03/pachinko-how-to-watch.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2022-03-25T04:56:00Z",
            "content": "The international epic drama series Pachinko debuts today on Apple TV+. Pachinko tells the story of a Korean family who immigrate to Japan in the 20th century, at a time when Japanese attitudes towar… [+2511 chars]"
        }
    ]
    constructor(){
        super();
        this.state = {
            articles : this.articles,
            loading : false,
            totalre : 927,
            page : 1
        }
    }
    static defaultProps = {
        country: 'in',
        pagesize: 15,
        category: 'sports',
      }

      static propsTypes = {
        country: PropTypes.string,
        pagesize: PropTypes.number,
        category: PropTypes.string,
      }

    async componentDidMount()
    {
        console.log("Last");
        let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&language=en&apiKey=9caf7cc0514c43a6a4f9f36bcdfe06c7&page=1&pageSize=${this.props.pagesize}`;
                  
        let data = await fetch(url);
        let pasedData = await data.json()
        console.log(pasedData);
        this.setState({articles: pasedData.articles})
    }

    prevbtn = async () => {
        console.log("Prev Button");
        let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&language=en&apiKey=9caf7cc0514c43a6a4f9f36bcdfe06c7&page=${this.state.page-1}&pageSize=${this.props.pagesize}`;
                  
        let data = await fetch(url);
        let pasedData = await data.json()
        console.log(pasedData);
        this.setState({
            page : this.state.page-1,
            articles: pasedData.articles
        })
    }

    Nextbtn = async () => {
        if(this.state.page+1 > Math.ceil(this.state.totalre/16))
        {
        }
        console.log("Next Button");
        let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&language=en&apiKey=9caf7cc0514c43a6a4f9f36bcdfe06c7&page=${this.state.page+1}&pageSize=${this.props.pagesize}`;
                
        let data = await fetch(url);
        let pasedData = await data.json()
        console.log(pasedData);
        this.setState({
            page : this.state.page+1,
            articles: pasedData.articles
        })
    }

  render() {
    return (
    <div className='container my-4'>
        <div className='row'>

        {this.state.articles.map((element)=>{
    return <div className='col-md-4' key={element.url}>
      <News title = {element.title.slice(0,45)} description = {element.description?element.description.slice(0,88):""} imageUrl = {!element.urlToImage?"https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg":element.urlToImage} newsUrl = {element.url} />
      </div>})}
      
    </div>
    <div className='consainer d-flex justify-content-between'>

    <button type="button" disabled={this.state.page<=1} className="btn btn-danger" onClick={this.prevbtn}>&#8701; Previous</button>
    <button type="button" disabled={this.state.page+1 > Math.ceil(this.state.totalre/this.props.pagesize)} className="btn btn-danger" onClick={this.Nextbtn}>Next &#8702;</button>
    </div>
      </div>
    )
  }
}
