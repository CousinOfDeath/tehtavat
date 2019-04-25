import * as htmlUtils from '../src/utils/htmlUtils'

describe("htmlUtils tests", () => {

    let exampleDoc = {
        id: "http://www.stat.fi/tietotrendit/blogit/2019/jo-tanssiva-kongressi-tarvitsi-tilastoja/",
        content_type: "blogi",
        content_date: "2019-03-15T07:55:13Z",
        text_original: "Jo tanssiva kongressi tarvitsi tilastoja Adam Zamoyskin Rites of Peace on mestarillinen kuvaus Napoleonin kaatumisesta ja Wienin kongressista , jossa Euroopan hallitsijat piirtelivät ja siirtelivät maiden rajoja. Kirja on ollut yö­pöydälläni mutta yllätti lopulta niin, että piti laittaa työ­myssy päähän. Adam Zamoyskin Rites of Peace on mestarillinen kuvaus Napoleonin kaatumisesta ja Wienin kongressista Kuninkaat, kanslerit, ministerit, vakoilijat, vaimot ja rakastajat tekevät kirjasta herkullisen luku­kokemuksen. Zamoyski onnistuu kirjoittamaan ihmisten juonitteluista, seikkailuista ja sekoiluista kuin romaania, mutta myös hahmottamaan isot linjat. Eurooppaa muotoiltiin pitkälle eteenpäin kovalla poliittisella pelillä. Niin kuin tehdään nytkin. Kaksi­sataa vuotta sitten tehtiin kauas­kantoisia päätöksiä. Mitkä sellaisia ovat ja mitkä eivät, sitä eivät tietenkään päätöksen­tekijät tiedä. Niin kuin eivät tiedä nytkään. Brexitin perintö briteille ja Euroopalle selviää tulevaisuudessa. Tilastolliset mittarit kertovat jotain vaikutuksista jo piankin. Kansantalouden tilin­pito nousi mahti­mittariksi 1900-luvulla, jonka sodat ja lamat nostivat myös työttömyys­luvut ja inflaation politiikan ytimeen. Varhaisemmilta ajoilta ei muistu mieleen, että tilastot olisivat olleet keskiössä kansojen kohtaloista päätettäessä. Siksi ällistys ilta­lukemiston ääressä. Olin ahminut Rites of Peacea nelisen sataa sivua, kun loputtomien neuvottelujen, vastaan­ottojen, juhlien ja yö­visiittien jälkeen kohtasin sanan, jota en tanssivan kongressin aika­kauteen ollut yhdistänyt. Statistical Committee oli perustettu Britannian ulko­ministerin aloitteesta (Lordi Castlereagh oli myös innokas skottilaisten reelien tanssija, käy kirjasta ilmi, ja surmasi lopulta itsensä kynä­veitsellä). Tilastollinen Komitea ”kahlasi halki usein kyseen­alaisten dokumenttien vuorien tuottaakseen hyväksyttävien lukujen kokonaisuuden joka mahdollistaisi Preussin vaatimusten lopullisen ratkaisemisen”. Kysymys oli ”sieluista”: niitä Preussi halusi alue­liitoksilla 3 411 715 kappaletta päästäkseen takaisin asukas­lukuunsa ennen Napoleonin sotia. Tarvittavaa määrää sieluja haettiin naapuri­maista, mikä tietenkin aiheutti kiistoja. Pinta-alaa enemmän alueitten arvon määritti väki­luku, mutta sekin oli kiistelty mittari. Tokihan koulutetut käsi­työläiset olivat arvokkaampia kuin osaamattomat talon­pojat. Ja tietenkin muillakin kuin Preussilla oli vaatimuksensa. Ja tietenkin päätökset lopulta perustuivat faktojen lisäksi tunteisiin, juonitteluihin, voima­politiikkaan ja vallan­käyttöön – varsinkin jälkimmäisiin. Paraikaa lasketaan kuumeisesti kustannuksia – poliittisia, taloudellisia, inhimillisiä. Brexitin laskua tulevat arvioimaan myöhemmät historioitsijat, toivottavasti yhtä loistavat kirjoittajat kuin Adam Zamoyski. Tilastot ja tunnus­luvut ovat kehittyneet Wienin kongressin ajoista. Kun ihmiset tekevät päätöksiä – äänestys­kopeissa, kongressi­saleissa, kabineteissa – tosiasiat ovat edelleen rikka rokassa.",
        lang: "fi",
        category: ["vrm"],
        statistics: ["vaelaskp"],
        description: "Tilastotiedoilla oli osuutensa Euroopan rajojen siirtelyss&auml; jo parisataa vuotta sitten. Politikointi ja tunteet toki hallitsivat peli&auml;, kuten t&auml;n&auml;kin p&auml;iv&auml;n&auml;.",
        keywords: ["tilastot",
            "Wienin",
            "kongressi",
            "brexit",
            "kirjat",
            "Rites",
            "of",
            "Peace"],
        img_url: "http://www.stat.fi/tietotrendit/media/uploads/blogi2019/kotkavuori/kotkavuori_tanssiva_kongressi_artikkeli_2048x1365.jpg",
        author: ["Jouni Kotkavuori"],
        referer: "http://www.stat.fi/index.html",
        mimetype: "text/html",
        title_original: "Jo tanssiva kongressi tarvitsi tilastoja",
        host: "www.stat.fi",
        site_id: "tietotrendit",
        title_fi: "jo tanssiva kongressi tarvita tilasto",
        text_fi: "jo tanssiva kongressi tarvita tilasto Adam zamoyskin rites of peace olla mestarillinen kuvaus Napoleon kaatua ja Wien kongressi joka Eurooppa hallitsija piirrellä ja siirrellä maa Maa raja kirja olla oltu ollut yö pöytä mutta yllättää loppu niin että pitää laittaa työ myssy pää Adam zamoyskin rites of peace olla mestarillinen kuvaus Napoleon kaatua ja Wien kongressi kuningas kansleri ministeri vakoilija vaimo ja rakastaja tehdä tekevä kirja kirjanen herkullinen luku kokemus zamoyski onnistua kirjoittaa kirjoittama ihminen juonittelu seikkailu ja sekoilu kuu kuin romaani mutta myös hahmottaa hahmottama iso linja Eurooppa muotoilla pitkä eteenpäin kova poliittinen peli niin kuu kuin tehdä nyt kaksi sata sataa vuo vuosi sitten tehdä kauas kantoinen päätös mikä sellainen olla ja mikä ei se ei tieten päätös tekijä tietää niin kuu kuin ei tietää nyt brexitin perintö britti ja Eurooppa selvitä tulevaisuus tilastollinen mittari kertoa kertova jokin vaikutus jo Pia pian kansantalous tili pito nousta mahti mittari luku joka sota ja lama nostaa myös työttömyys luku ja inflaatio politiikka ydin varhainen aika ajoilta ajo ei muistua mieli että tilasto olla ollut keskiö kansa kohtalo päättää siksi se ällistys ilta Ilta lukemisto ääri olka olla ahminut rites of peacea nelisen sata sataa sivu sivuta kun loputon neuvottelu vasta vastaan vastata otto Otto juhla juhlia ja yö visiitti jälkeen jälki kohdata sana joka ei tanssiva kongressi aika kausi oltu ollut yhdistänyt statistical committee olla perustettu Britannia ulko ministeri aloite lordi castlereagh olla myös innokas skottilainen reelien tanssija käydä kirja kirjanen ilmi Ilmi ja surma surmata loppu itse kynä veitsi tilastollinen komitea kahlata halki usea kyse alainen dokumentti vuori Vuori tuottaa hyväksyttävä luku kokonaisuus joka mahdollistaa preussi Preussi vaatimus lopullinen ratkaista kysymys olla sielu sieluinen ne niittää preussi Preussi haluta halu alue liitos kappale päästä taata takainen Asukas asukas luku ennen Napoleon sota sotia tarvittava määrätä määrä sielu hakea naapuri mainen maistaa maa Maa mikä tieten aiheuttaa kiista kiisto pinta-ala enempi enemmän alue arvo arpoa määrittää väki luku mutta se sekki olla kiistelty mittari toki koulutettu käsi työläinen olla arvokas kuu kuin osaamaton talo poika ja tieten muu kuu kuin preussi Preussi olla vaatimus ja tieten päätös loppu perustua fakta lisä tunne juonittelu voima politiikka ja valta Valta käyttö varsi jälkimmäinen paraikaa laskea kuumeinen kustannus poliittinen taloudellinen inhimillinen brexitin lasku tulla tuleva arvioida arvioima myöhä historioitsija toivottava yksi yhtä loistapa loistaa loistava kirjoittaja kuu kuin Adam zamoyski tilasto ja tunnus luku olla kehittynyt Wien kongressi aika ajo kun ihminen tehdä tekevä päätös äänestys kopea koppi kongressi sali kabinetti tosiasia olla edessä rikka rokka Rokka",
        last_indexed: "2019-03-20T07:23:52.276Z",
        group_text: "vaelaskp||Jo_tanssiva_kongressi_tarvitsi_tilastoja",
        facet_child: "tup",
        _version_: 1628500847269773312
    };

    let exampleResponse = {
        response: {
            numFound: 1,
            start: 0,
            docs: [exampleDoc]
        }
    };


    it("With count parameter 1 sets elements textContent property to '1'", () => {

        let element = document.createElement("span");
        let result = htmlUtils.setDocumentCount(element, 1);

        expect(result.textContent).toBe("1");
    });


    it("buildPagination with 10 items and 3 per page returns markup for 4 page selectors", () => {

        let expected = "<div class=\"pagination center\">" +
            "<a id=\"pageSelector1\" href=\"1\" class=\"page-link\">1</a>" +
            "<a id=\"pageSelector2\" href=\"2\" class=\"page-link\">2</a>" +
            "<a id=\"pageSelector3\" href=\"3\" class=\"page-link\">3</a>" +
            "<a id=\"pageSelector4\" href=\"4\" class=\"page-link\">4</a>" +
            "</div>";

        let result = htmlUtils.buildPagination(10, 3);

        expect(result.outerHTML).toBe(expected);
    });

    it("buildPagination with 10 items and 5 per page returns markup for 2 page selectors", () => {

        let expected = "<div class=\"pagination center\">" +
            "<a id=\"pageSelector1\" href=\"1\" class=\"page-link\">1</a>" +
            "<a id=\"pageSelector2\" href=\"2\" class=\"page-link\">2</a>" +
            "</div>";

        let result = htmlUtils.buildPagination(10, 5);

        expect(result.outerHTML).toBe(expected);
    });

    it("buildDocumentGridCell with doc returns markup for a grid cell", () => {

        let expected = "<div class=\"pure-u-1 pure-u-lg-1-4\">" +
            "<div class=\"l-box\">" +
            "<div class=\"document-title tietotrendit\">tietotrendit</div>" +
            "<div class=\"document-img\">" +
                "<img class=\"pure-img\" src=\"http://www.stat.fi/tietotrendit/media/uploads/blogi2019/kotkavuori/kotkavuori_tanssiva_kongressi_artikkeli_2048x1365.jpg\" alt=\"Image not available\">" +
            "</div>" +
            "<div class=\"document-type\">blogi</div>" +
            "<div class=\"document-content-date\">41 päivää sitten Jouni Kotkavuori</div>" +
            "<div class=\"document-original-title\">" +
                "<a href=\"http://www.stat.fi/tietotrendit/blogit/2019/jo-tanssiva-kongressi-tarvitsi-tilastoja/\" class=\"document-link\" target=\"_blank\">Jo tanssiva kongressi tarvitsi tilastoja</a>" +
            "</div>" +
            "</div>" +
            "</div>";

        let result = htmlUtils.buildDocumentGridCell(exampleDoc);

        expect(result.outerHTML).toBe(expected);
    });

    it("buildDocumentListRow with doc returns markup for a list row", () => {

        let expected = "<div class=\"pure-u-1 list-row\">" +
            "<div class=\"document-original-title\">" +
                "<a href=\"http://www.stat.fi/tietotrendit/blogit/2019/jo-tanssiva-kongressi-tarvitsi-tilastoja/\" class=\"document-link\" target=\"_blank\">Jo tanssiva kongressi tarvitsi tilastoja</a>" +
            "</div>" +
            "<div class=\"document-title inline-block\">tietotrendit</div>" +
            "<div class=\"document-type inline-block\">blogi</div>" +
            "<div class=\"document-content-date inline-block\">41 päivää sitten Jouni Kotkavuori</div>" +
            "</div>";

        let result = htmlUtils.buildDocumentListRow(exampleDoc);

        expect(result.outerHTML).toBe(expected);
    });

    describe("highlightSelectedMode tests", () => {

        beforeAll(function() {
            let body = document.getElementsByTagName("body")[0];


            let gridModeSelectorDiv = document.createElement("div");;
            gridModeSelectorDiv.id = "gridModeSelectorDiv";

            let listModeSelectorDiv = document.createElement("div");;
            listModeSelectorDiv.id = "listModeSelectorDiv";

            body.appendChild(gridModeSelectorDiv);
            body.appendChild(listModeSelectorDiv);
        });

        it("With view mode as grid, only the grid mode container div has class 'selected'", () => {

            htmlUtils.highlightSelectedMode("grid");

            expect(document.getElementById("gridModeSelectorDiv").classList.contains("selected")).toBeTruthy();
            expect(document.getElementById("listModeSelectorDiv").classList.contains("selected")).toBeFalsy();
        });

        it("With view mode as list, only the list mode container div has class 'selected'", () => {

            htmlUtils.highlightSelectedMode("list");

            expect(document.getElementById("listModeSelectorDiv").classList.contains("selected")).toBeTruthy();
            expect(document.getElementById("gridModeSelectorDiv").classList.contains("selected")).toBeFalsy();
        });
    });

    describe("buildDocumentPage tests", () => {

        beforeAll(function() {
            let body = document.getElementsByTagName("body")[0];

            let documentCountDiv = document.createElement("div");
            documentCountDiv.id = "documentCount";

            let documentContainerDiv = document.createElement("div");;
            documentContainerDiv.id = "documentContainer";

            let gridModeSelectorDiv = document.createElement("div");;
            gridModeSelectorDiv.id = "gridModeSelectorDiv";

            let listModeSelectorDiv = document.createElement("div");;
            listModeSelectorDiv.id = "listModeSelectorDiv";

            body.appendChild(documentCountDiv);
            body.appendChild(documentContainerDiv);
            body.appendChild(gridModeSelectorDiv);
            body.appendChild(listModeSelectorDiv);
        });


        it("buildDocumentPage with view mode as grid sets document count", () => {

            spyOn(htmlUtils.getWindowLocationSearch, 'get_search').and.returnValue("?mode=grid");

            htmlUtils.buildDocumentPage(exampleResponse);

            expect(document.getElementById("documentCount").textContent).toBe("1");
        });

        it("buildDocumentPage with view mode as grid appends grid cell", () => {

            spyOn(htmlUtils.getWindowLocationSearch, 'get_search').and.returnValue("?mode=grid");

            htmlUtils.buildDocumentPage(exampleResponse);
            let gridCells = document.getElementsByClassName("pure-u-1 pure-u-lg-1-4")

            expect(gridCells.length).toBe(1);
        });

        it("buildDocumentPage with view mode as list appends list row", () => {

            spyOn(htmlUtils.getWindowLocationSearch, 'get_search').and.returnValue("?mode=list");

            htmlUtils.buildDocumentPage(exampleResponse);
            let gridCells = document.getElementsByClassName("pure-u-1  list-row")

            expect(gridCells.length).toBe(1);
        });
    });

});