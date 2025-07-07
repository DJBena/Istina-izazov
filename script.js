const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");

const playerInput = document.getElementById("playerInput");
const addPlayer = document.getElementById("addPlayer");
const playerList = document.getElementById("playerList");
const toCategory = document.getElementById("toCategory");
const bottle = document.getElementById("bottle");
const currentPlayer = document.getElementById("currentPlayer");
const challengeText = document.getElementById("challengeText");
const sound = document.getElementById("spinSound");

let truthBtn, dareBtn;

let players = [];
let category = "";
let previousPlayer = "";
let spinning = false;
let nameInterval;
let totalRotation = 0;

let database = {
  casual: {
    truth: ["Koja ti je bila prva simpatija?",
"Koja ti je najneugodnija situacija u školi?",
"Jesi li ikad varao/la na testu ili ispitu?",
"Koja ti je bila najgora frizura?",
"Jesi li se ikad zabunio/la pa zvao/la osobu pogrešnim imenom?",
"Na čemu si posljednji put plakao/la?",
"Imaš li neku neobičnu naviku kad si sam/a?",
"Jesi li ikad hodao/la unatrag i udario/la u nešto?",
"Što prvo pojedeš ili popiješ ujutro?",
"Imaš li neku tajnu koju nikome nisi rekao/la?",
"Jesi li se ikad izgubio/la i posramio/la?",
"Koji ti je bio najčudniji san?",
"Koju pjesmu najčešće slušaš kad si tužan/na?",
"S kojim likom iz crtića si se poistovjećivao/la kao dijete?",
"Koji je tvoj najčudniji strah?",
"Jesi li ikad zaboravio/la važan rođendan?",
"Koje je tvoje najveće žaljenje?",
"Jesi li ikad plakao/la u javnosti?",
"Što bi radije – zauvijek sladoled ili čokoladu?",
"Jesi li ikad nekoga špijunirao/la?",
"Koji ti je bio najgluplji izgovor?",
"Da možeš biti bilo koja životinja na jedan dan – što bi bio/la?",
"Koje ti je najneugodnije pitanje postavio netko iz obitelji?",
"Jesi li se ikad zaljubio/la u osobu koju nisi poznavao/la uživo?",
"Da moraš jesti samo jednu hranu cijeli život – koju bi izabrao/la?",
"Imaš li skriveni talent?",
"Postoji li šala koju nikako ne možeš zapamtiti?",
"Jesi li ikad pričao/la sam sa sobom naglas?",
"Koju si najneugodniju poruku slučajno poslao/la krivoj osobi?",
"Koji ti je bio najsramotniji nadimak u djetinjstvu?",
"Jesi li ikad nekoga okrivio/la za nešto što si ti napravio/la?",
"Koja je tvoja omiljena loša odluka?",
"Bi li radije bio/la uvijek ozbiljan/na ili uvijek smiješan/na?",
"Koja je tvoja najsretnija uspomena u jednoj rečenici?",
"Jesi li ikad izdao/la tajnu prijatelja?",
"Koja je najčudnija kombinacija hrane koju si volio/la?",
"Jesi li ikad prevario/la u društvenoj igri?",
"Koliko si najduže bio/la bez sna?",
"Gdje bi živio/la da možeš izabrati bilo koje mjesto na svijetu?",
"Bi li dao/la zadnji komad hrane prijatelju?",
"Bi li htio/la imati zmaja kao ljubimca?",
"Koju čudnu kombinaciju hrane si probao/la i zavolio/la?",
"Koju neobičnu naviku imaš kad si nervozan/na?",
"Jesi li ikad poljubio/la pogrešnu osobu u mraku?",
"Što bi priznao/la samo pod prisilom?",
"Jesi li ikad zaboravio/la vlastitu ideju?",
"Koji je bio tvoj najčudniji modni izbor?",
"Koji je bio najčudniji učenik/ca u tvojoj školi?",
"Jesi li ikad nasmijao/la cijeli razred (ili grupu)?",
"Radije ples ili kvantna fizika?",
"Jesi li ikad pokušao/la imitirati slavnu osobu i ispao/la smiješan/na?",
"Koju stvar si rekao/la, a poslije zažalio/la?",
"Koja ti je najčudnija teorija zavjere?",
"Jesi li ikad slučajno nazvao/la krivi broj i ostao/la na liniji?",
"Koji ti je bio najgluplji komentar online?",
"Jesi li ikad snimio/la svoj glas i posramio/la se?",
"Koju priču uvijek pričaš, a svi je već znaju?",
"Jesi li ikad zalupio/la vrata od bijesa?",
"Kad si zadnji put naučio/la nešto novo o nekome bliskom?",
"Da se možeš teleportirati – gdje bi prvo otišao/la?",
"Jesi li ikad sakrio/la nešto namjerno od obitelji ili prijatelja?",
"Imaš li kućnog ljubimca kojeg svi zaboravljaju da postoji?",
"Jesi li ikad išao/la spavati bez večere?",
"Koju si glupost napravio/la kao dijete?",
"Jesi li ikad dobio/la nešto besplatno i osjećao/la se neugodno?",
"Koja ti je najsmješnija fobija?",
"Jesi li ikad slagao/la roditeljima gdje ideš?",
"Da moraš promijeniti ime – koje bi izabrao/la?",
"Jesi li ikad nosio/la pidžamu u školu?",
"Koja ti je najčudnija trauma iz igranja?",
"Jesi li ikad mislio/la da te netko prati?",
"Koji ti je najsmješniji video ikad?",
"Jesi li ikad plakao/la od smijeha?",
"Koji je tvoj idealan večernji izlazak?",
"Jesi li ikad pokušao/la organizirati iznenađenje koje je propalo?",
"Imaš li tajnu želju koju još nisi rekao/la nikome?",
"Jesi li ikad ostao/la bez interneta više od 24 sata?",
"Gdje si najdalje bio/la bez mobitela?",
"Jesi li ikad kupio/la nešto što nisi znao/la koristiti?",
"Imaš li izmišljenu riječ koju stalno koristiš?",
"Jesi li ikad pogledao/la cijelu sezonu serije u jednom danu?",
"Što misliš da će se dogoditi za 10 godina?",
"Jesi li ikad napravio/la nešto da impresioniraš nekoga?",
"Koji ti je bio najčudniji zadatak u životu?",
"Jesi li ikad varao/la u igri da pobijediš prijatelja?",
"Koliko dugo možeš izdržati bez da se nasmiješ?",
"Imaš li neizgovorenu pjesmu koju si napisao/la u glavi?",
"Jesi li ikad glumio/la pred kamerom?",
"Koja ti je najsmješnija slika na mobitelu?",
"Jesi li ikad zaželio/la da dan traje duže samo za igru?",
"Postoji li poruka koju nikad nisi poslao/la, a htio/la si?",
"Što smatraš svojim najboljim talentom?",
"Koji ti je bio najsmješniji trenutak u školi?",
"Koji crtić još uvijek potajno voliš?",
"Jesi li ikad pobjegao/la iz dosadnog razgovora pod izlikom?",
"Koji ti je najčudniji ukus hrane koji zapravo voliš?",
"Jesi li ikad uslikao/la selfi u wc-u i nikad ga objavio/la?",
"Da moraš svakog dana nositi jedan kostim – koji bi bio?",
"Koja je tvoja najveća „white lie” koju stalno ponavljaš?",
"Koji predmet ti je bio najdosadniji u školi?",
"Koju poznatu osobu bi najradije upoznao/la uživo?",
"Koju aplikaciju koristiš više nego što bi trebao/la?",
"Što ti je zadnje nasmijalo do suza?"
],
    dare: ["Imitiraj majmuna 30 sekundi",
"Napravi smiješnu grimasu i drži je 1 minutu",
"Pretvaraj se da si klaun u cirkusu 30 sekundi",
"Hodaj kroz sobu na jednoj nozi dva puta",
"Pleši kao da te nitko ne gleda 20 sekundi",
"Glumi bijesnog lava 10 sekundi",
"Pokaži najbolji ples robota koji znaš",
"Imitiraj životinju koju netko iz grupe izabere",
"Otpjevaj refren svoje omiljene pjesme",
"Zastani kao kip i ne miči se 15 sekundi",
"Uzmi neki predmet iz sobe i razgovaraj s njim 2 minute",
"Popij čašu vode bez korištenja ruku",
"Hodaj unatrag po sobi bez da pogledaš dolje",
"Pokušaj dodirnuti lakat svojim jezikom",
"Smij se kao prase 10 sekundi",
"Stani kao flamingo i drži ravnotežu 30 sekundi",
"Ponašaj se kao robot dok netko ne zaplješće",
"Nacrtaj lice na svojoj ruci i pričaj s njim",
"Smiješi se bez prestanka 20 sekundi",
"Kašljucaj kao patka 10 sekundi",
"Izgovori abecedu unatrag na glas",
"Otpjevaj 'Sretan rođendan' na najdramatičniji mogući način",
"Imitiraj poznatu osobu dok netko ne pogodi tko je to",
"Izmisli pjesmu o osobi s desne strane i otpjevaj je",
"Stavi što više predmeta na glavu i hodaj 10 sekundi",
"Hodaj po sobi kao rak 15 sekundi",
"Napravi ozbiljnu facu i drži je 20 sekundi",
"Glumi superjunaka i reci mu ime",
"Sljedeće dvije ture pričaj čudnim glasom",
"Napiši tajnu poruku osobi s lijeve strane",
"Pleši s metlom kao da je tvoj plesni partner",
"Hodaj po sobi na prstima i šapći",
"Izvedi popularni TikTok ples (bez glazbe)",
"Glumi konobara i posluži nevidljivu večeru",
"Zagrli osobu s lijeve strane 10 sekundi",
"Na kraj svake rečenice dodaj riječ 'kiselo' – jednu minutu",
"Oponašaj osobu s desne strane dok netko ne pogodi tko je to",
"Ponašaj se kao da si kuhar koji priprema tortu",
"Pleši kao robot 20 sekundi",
"Nacrtaj smiješno lice i pokaži ga grupi",
"Otpjevaj neku pjesmu bez riječi – samo na 'la la la'",
"Hodaj kao pingvin kroz sobu i nazad",
"Izmisli pjesmicu o cijeloj grupi i recitiraj je",
"Otvori vrata i vikni 'Woohoo!' što glasnije možeš",
"Zamotaj osobu s lijeve strane toaletnim papirom kao mumiju",
"Drži neki predmet u ruci 5 minuta bez da ga ispustiš",
"Pročitaj zadnju poruku koju si nekome poslao/la – naglas",
"Izmisli ples koji ćeš nazvati svojim imenom i izvedi ga",
"Pričaj 30 sekundi samo koristeći engleske riječi koje znaš",
"Stavi predmet na glavu i pokušaj hodati ravno 10 sekundi",
"Ponašaj se kao beba 20 sekundi"]
  },
  funny: {
    truth: ["Što ti je najsmješnija stvar koju si ikad napravio/la pred svima?",
"Jesi li ikad plesao/la kao da te nitko ne gleda i mislio/la da si sasvim normalan/na?",
"Jeste li ikada zaspali na javnom mjestu?",
"Koju si najluđu ispriku izmislio/la da izbjegneš obavezu?",
"Je li ti se dogodilo da pričaš sam sa sobom u publici?",
"Što ti se dogodilo kad si pokušao/la biti ozbiljan/a, pa si se nasmijao/la?",
"Izmisli smiješno ime za sebe i tako te od sada oslovljavati.",
"Što misliš da radiš kad se netko smije iza tvojih leđa?",
"Jesi li ikad prihvatio/la izazov da glumiš nevidljivog superjunaka?",
"Što ti je najčudniji talent koji skrivaš?",
"Jesi li ikad posl'o/la preglasnu poruku i požalio/la?",
"Koji zvuk ili riječ uvijek izgovoriš pogrešno?",
"Jesi li ikad plesao/la bez glazbe pa mislili da glazba svira?",
"Što ti je najneugodniji TikTok trend kojeg si isprobao/la?",
"Jesi li ikad hodao/la unatrag i udario/la u nešto smiješno?",
"Što bi bio/la kad bi bio kruh ili palačinka?",
"Kad bi bio/la životinja tjedan dana – koju i zašto?",
"Koji je najgluplji film koji si gledao/la i učinio/la da izgledaš pametno?",
"Jesi li ikad pogriješno poslao/la poruku o nekome toj osobi?",
"Recitiraj abecedu unatrag i pogledaj koliko možeš bez greške.",
"Koja je najčudnija hrana koju bi probao/la samo da iznenadiš prijatelja?",
"Jesi li ikad nosio/la odjeću unatrag čitav dan, a da nisi znao/la?",
"Koji ti je bio najgluplji nadimak koji si ikad imao/la?",
"Što misliš – koliko kalorija trošiš smijući se 10 minuta?",
"Što bi radio/la da odjednom počneš kašljati kao patka?",
"Jesi li ikad pokušao/la imitirati slavnu osobu i ispao/la komično?",
"Ako bi morao/a piti samo jedan napitak zauvijek – što bi izabrao/la?",
"Jesi li ikad pričao/la viceve sam/a sebi i smijao/la se?",
"Što najviše voliš raditi kad si sam/a i smiješno ti je?",
"Da ti netko da plažu i pingvina – što bi napravio/la?",
"Možeš li reći ‘abeceda’ na jeziku životinja?",
"Koliko puta možeš reći šalu prije nego pukneš od smijeha?",
"Što ti je najluđi hobi kojeg su ti roditelji primijetili?",
"Jesi li ikad pokušao/la plesati s fantazijom da si na pozornici?",
"Što bi napravio/la kad bi tvom telefonu zazvonio najgluplji alarm?",
"Koju pjesmu najglasnije slušaš kad si sam/a, a misliš da nitko ne čuje?",
"Koliko puta si prekrivao/la oči kad si se bojao/cijeg crteža?",
"Izmisli naglasku kao iz crtanog i pričaj tri rečenice.",
"Što bi rekao/la ako netko pita čiji si život volio/la živjeti?",
"Ako bi bio/la emoji, koji bi to bio i zašto?",
"Jesi li ikad plesao/la na stolu samo u fantaziji?",
"Koja je najčudnija stvar koju si povukao/la na TikToku?",
"Jesi li ikad stavio/la čašu na glavu radi šale?",
"Što ti je bilo najgore kad si imitirao/la nekoga?",
"Možeš li u 10 sekundi napraviti vic o supu?",
"Što bi učinio/la da si radio s pingvinom na poslu?",
"Ako bi izabrao/la supermoć smijeha – što bi bila?",
"Koja ti je najčudnija glazbena nota koju si ikad otpjevao/la?",
"Jesi li ikad pokušao/la plesati bez zemlje ispod nogu?",
"Koja je najudarnija riječ koju si izmislio/la i koristiš?"],
    dare: ["Napravi najčudniji ples koji znaš 30 sekundi",
"Govori 1 minutu kao robot",
"Pokušaj hodati kao rak kroz sobu",
"Pjevaj sve što kažeš sljedeće 2 minute",
"Imitiraj slavnu osobu dok netko ne pogodi tko je to",
"Drži ravnotežu s knjigom na glavi 30 sekundi",
"Nacrtaj lice na dlanu i pričaj s njim 1 minutu",
"Ponašaj se kao starac/starica 1 minutu",
"Smij se bez prestanka 20 sekundi",
"Ponašaj se kao da si kokoš 15 sekundi",
"Izvedi opernu verziju omiljene pjesme",
"Stani kao kip dok netko ne kaže tvoje ime",
"Pričaj kao beba sljedećih 5 rečenica",
"Oponašaj osobu s desne strane 30 sekundi",
"Hodaj po zamišljenom konopcu i pravi se da ćeš pasti",
"Zaveži oči i pokušaj pronaći vrata sobe",
"Recitiraj ABC naopako uz ples",
"Zamrzni lice u najčudnijem izrazu na 15 sekundi",
"Pokušaj hodati s balonom između koljena",
"Ponašaj se kao robot kojem se pokvarila ruka",
"Pokušaj nasmijati grupu bez govora – pantomima",
"Objašnjavaj kako se pere zubi kao da si s druge planete",
"Imitiraj ljutog kuhara 20 sekundi",
"Odglumi reklamu za smiješni izmišljeni proizvod",
"Glumi zubara koji radi na dinosauru",
"Glumi da hodaš po vrućem pijesku 15 sekundi",
"Oponašaj kako ideš na prvi spoj (sve zvukove uključi)",
"Ispričaj vic koji si sam upravo izmislio",
"Izmisli novi ples i pokaži ga",
"Glumi DJ-a koji ne zna koristiti miksetu",
"Zamisli da si pas i ponašaj se tako 20 sekundi",
"Govori sve rečenice kao da si jako uzbuđen/a",
"Govori sve rečenice šapatom dok netko ne primijeti",
"Pokušaj otpjevati 'Twinkle Twinkle' kao heavy metal verziju",
"Glumi da si lutka na koncu i netko te kontrolira",
"Glumi superjunaka čija je moć – prdac",
"Pričaj kao da imaš žvakaću u ustima 1 minutu",
"Imitiraj sve članove grupe jedan po jedan",
"Ponašaj se kao da si u slow motionu 20 sekundi",
"Skini čarape bez korištenja ruku",
"Objašnjavaj kako se koristi WC papir kao da nikad nisi čuo za to",
"Pokušaj napraviti salto (samo pantomima)",
"Nosi čarape na rukama 5 minuta",
"Pokušaj ispričati bajku unazad",
"Pjevaj sve rečenice kao da si u mjuziklu",
"Hodaj kao model na modnoj pisti s ozbiljnom facom",
"Napravi najglasniji mogući 'tihi smijeh'",
"Imitiraj svoju mamu kad se ljuti",
"Objašnjavaj kako se koristi vilica kao da je to banana",
"Ponašaj se kao da si nevidljiv i sve moraš šaptati"]
  },
  deep: {
    truth: ["Koje najveće postignuće u životu te najviše ispunjava?",
"Ako bi imao/la neograničeno vrijeme i resurse, što bi radio/la?",
"Koja tri razloga te ponajviše čine zahvalnim/zahvalnom?",
"Tko te najviše oblikovao u osobu koja si danas?",
"Koja pogreška ti je promijenila pogled na život?",
"Kada bi mogao/la ponovno proživjeti jedan trenutak, što bi to bilo i zašto?",
"Koje tri stvari te uvijek oraspolože kad si tužan/na?",
"Što misliš daje smisao tvom životu?",
"Koja je tvoja najveća neostvarena želja?",
"Koji strah te najviše koči u životu?",
"Koja je najteža odluka koju si morao/la donijeti?",
"Što se nalazi na vrhu tvoje liste želja?",
"Izbaci jednu vrijednost koju želiš prenijeti budućim generacijama.",
"Kako se suočavaš s nepravdom ili konfliktom?",
"Kada se osjećaš najsigurnije u životu?",
"Što bi volio/la naučiti ako imaš vremena od sada?",
"Što je najdublja tvoja misao kad si sam/a?",
"Koji trenutak iz djetinjstva te definirao?",
"Koju si lekciju naučio/la iz poraza?",
"Što znači biti autentičan/a za tebe?",
"Kako bi opisao/la svoje emocionalno stanje ovih dana?",
"Što te najviše motivira u teškim trenucima?",
"Koje ponašanje ti je najvažnije u odnosima s drugima?",
"Kako želiš da te se zapamti kad te više ne bude?",
"Koje tri riječi bi upotrijebio/la da opišeš sebe?",
"Čime bi želio/la doprinijeti svijetu?",
"Što ti donosi najviše mira u duši?",
"Ako možeš promijeniti jednu stvar u svijetu, što bi to bilo?",
"Za koji svoj izbor se najviše ponosiš?",
"Koja navika ti radi štetu koja ti se čini mala sad, ali bit će značajna kasnije?",
"Što ti stvara najveći osjećaj svrhe?",
"Čega se najviše bojiš za svoju budućnost?",
"Što znači uspjeh za tebe osobno?",
"Imaš li trenutak koji bi želio/la ponovno proživjeti?",
"Kako definiraš ravnotežu između posla i života?",
"Koja je tvoja najveća unutarnja borba danas?",
"Što bi volio/la da netko pita, ali se bojiš odgovoriti?",
"U čemu si zadovoljan/a u životu?",
"Što te prvo asocira na sreću?",
"Koja je tvoja najveća moralna dilema?",
"Koliko si često slijedio/la svoje srce, a ne razum?",
"Koja je tvoja najiskrenija nada?",
"Koliko ti znače odnosi s ljudima koje voliš?",
"Ako bi te netko pitao za savjet, što bi rekao/la?",
"Što ti je najvažnije u međuljudskim odnosima?",
"Koju lekciju o sebi si teško prihvatio/la?",
"Što si naučio/la iz svojih najvećih razočaranja?",
"Kako se nosiš sa stresom i pritiskom?",
"Što si otkrio/la o sebi kroz prijateljstva?",
"Koje ponašanje te najviše iznenadi kod drugih?",
"Koja je najsnažnija lekcija koju si naučio/la ove godine?"],
    dare: ["Reci nečiju dobru osobinu koju nikada nisi rekao/la naglas",
"Ispovjedi nešto što ti je već dugo na duši",
"Ispričaj trenutak kada si se osjećao/la istinski povrijeđeno",
"Ispričaj događaj koji te zauvijek promijenio",
"Pokaži neku staru sliku i ispričaj priču iza nje",
"Izaberi nekoga i reci mu što ti znači, iskreno",
"Podijeli nešto što bi volio/la da ti roditelji znaju, ali im nikad nisi rekao/la",
"Opisi svoj najveći strah bez šale",
"Ispričaj nešto za što si se godinama sramio/la",
"Ispuni rečenicu: 'Oprostio/la sam sebi kada sam...'",
"Podijeli svoje najveće razočaranje u nekoj osobi",
"Recitiraj naglas što bi rekao/la mlađoj verziji sebe",
"Reci što ti najviše nedostaje iz djetinjstva",
"Opisi jedan trenutak kad si se osjećao/la potpuno izgubljeno",
"Ispričaj situaciju u kojoj si lagao/la da bi zaštitio/la nekoga",
"Izaberi osobu u grupi i podijeli što te kod nje potajno inspirira",
"Reci što bi najradije promijenio/la kod sebe – i zašto to još nisi",
"Podijeli san koji si odustao/la pratiti – i zašto",
"Odgovori iskreno: što te najviše boli iz prošlosti?",
"Ispričaj priču kada si razočarao/la sebe",
"Odgovori bez razmišljanja: koga si najviše povrijedio/la u životu?",
"Reci nešto što nikome do sada nisi priznao/la",
"Zatvori oči i u tišini 30 sekundi razmisli o osobi koju si izgubio/la – pa reci što bi joj sada rekao/la",
"Izaberi jednu osobu i podijeli svoje prvo mišljenje o njoj i što se promijenilo",
"Podijeli svoje najveće pitanje o životu na koje nemaš odgovor",
"Ispričaj trenutak kad si osjetio/la istinsku sreću",
"Priznaj kada si zadnji put plakao/la i zašto",
"Izaberi nekoga i pohvali ga iskreno za nešto što nikad nije čuo/la od tebe",
"Odgovori: bojiš li se više uspjeha ili neuspjeha – i zašto?",
"Reci nešto što bi volio/la da ti više ljudi govori",
"Ispričaj situaciju kada si bio/la iskren/a i to te koštalo",
"Što najčešće skrivaš iza šale?",
"Priznaj kojoj osobi u životu još nisi oprostio/la",
"Opisi kako izgleda tvoj idealan dan duševnog mira",
"Reci što te najviše frustrira kod sebe, i kako to pokušavaš promijeniti",
"Odgovori: u čemu si najviše pretvarao/la da si nešto što nisi?",
"Priznaj što si učinio/la iz ega, a znaš da nije bilo ispravno",
"Ispričaj što bi napisao/la u oproštajnom pismu svijetu",
"Odgovori: što te najviše sprječava da budeš svoj/svoja?",
"Iskreno reci kako se trenutno osjećaš",
"Zamoli nekoga u grupi da ti postavi teško pitanje – i odgovori bez izbjegavanja",
"Odaberi trenutak kad si se osjećao/la najmanje vrijedno i podijeli zašto",
"Reci jednu stvar koju skrivaš jer se bojiš osude",
"Ispričaj kad si se zadnji put istinski otvorio/la nekome",
"Iskreno – imaš li nekoga koga voliš, a da ta osoba to ne zna?",
"Recitiraj rečenicu koju bi volio/la da ti je netko rekao kad si bio/la tužan/na",
"Ispričaj jedan trenutak zbog kojeg si postao bolja osoba",
"Priznaj što ti najviše fali u životu trenutno",
"Odgovori: kad si zadnji put napravio/la nešto hrabro – i što je to bilo?"]
  },
  dirty18: {
    truth: ["Jesi li ikad imao/la 'one‑night stand'?",
"Koja je tvoja najluđa fantazija koju još nisi ispričao/la nikome?",
"Jesi li ikad sanjao/la o nekome tko ti nije trebao/la?",
"Koja ti je najneugodnija seksualna situacija?",
"Jesi li ikad imao/la spolni odnos na javnom mjestu?",
"Koliko si imao/la godina kad si izgubio/la nevinost?",
"Koji je najzanimljiviji (ili čudan) položaj isprobao/la?",
"Jesi li ikad koristio/la seksualnu igračku?",
"Jesi li ikad glumio/la orgazam?",
"Koja ti je najviše priča seksualna maštarija?",
"Jesi li ikad varao/la u vezi?",
"Jesi li ikad snimio/la erotiku sam/a za sebe ili za nekog?",
"Koji ti je najneugodniji trenutak dok si bio/la intiman/a?",
"Imaš li omiljeni dio nečijeg tijela? Kojeg?",
"Jesi li ikad bio/la u strip clubu ili slično?",
"Jesi li ikad isprobao/la BDSM ili vezanje?",
"Jesi li ikad dominirao/la ili bio/la podređen/a u krevetu?",
"Da možeš birati trojku – s kime iz grupe bi to bila?",
"Koja je tvoja najveća seksualna tajna?",
"Jesi li ikad s nekim imao/la seksualni odnos iz osvete?",
"Jesi li ikad poslao/la seksi poruku pogrešnoj osobi?",
"Koji najviše tekst ti je bio 'too much' kad si poslao/la?",
"Jesi li ikad masturbirao/la javno (npr. u wc‑u)?",
"Koji te miris najviše uzbuđuje?",
"Koji seks‑poza najviše preferiraš?",
"Preferiraš brzi seks ili dulji, spori?",
"Jesi li ikad isprobao/la seks s više od jedne osobe u jednom danu?",
"Jesi li ikad gledao/la porno dok si bio/la s nekim?",
"Jesi li ikad sudjelovao/la u sextingu?",
"Koja je tvoja najpoznatija poruka u seks‑chatu?",
"Što te najviše pali u seksu?",
"Što te totalno odbija u krevetu?",
"Najbizarnije mjesto gdje si bio/la intiman/a?",
"Jesi li ikad držao/la brzi seks (quickie)?",
"Jesi li ikad bio/la uhvaćen/a u intimnoj situaciji?",
"Da promijeniš spol na jedan dan – što bi radio/la?",
"Jesi li ikad razmišljao/la o trojki s prijateljem?",
"Jesi li ikad bio/la s partnerom viših ili nižih godina?",
"Koliko put si imao/la seksualni odnos u jednom danu?",
"Jesi li ikad eksperimentirao/la s neobičnim dodatkom (npr. hrana)?",
"Koja je tvoja najveća seksualna laž koju si sam/a ispričao/la?",
"Jesi li ikad dirnuo/la nekoga bez dozvole?",
"Jesi li ikad fantazirao/la o nekome iz grupe?",
"Jesi li ikad podsjetio nekoga na seks šalom?",
"Preferiraš predigru ili direktan odnos?",
"Jesi li ikad gledao/la porno sa svojim partnerom?",
"Jesi li ikad bio/la u fetiš klubu?",
"Da te netko platiti milijun – bi li spavao/la s nepoznatom osobom?",
"Jesi li ikad simulirao/la seks da bi izbjegao/la stvaran?",
"Koliko si puta imao/la orgazam u jednom danu?",
"Jesi li ikad bio/la intiman/a s više osoba u jednom tjednu?",
"Jesi li ikad pisao/la erotiku ili priču na tu temu?",
"Koja te glazba najviše pali u krevetu?",
"Jesi li ikad imao/la prijateljstvo bazirano na seksu?",
"Preferiraš biti dominantan/na ili pasivan/na?",
"Jesi li ikad imao/la seks u vodi (tuš, bazen, kupaonica)?",
"Jesi li ikad bio/la vezan/a u seksu?",
"Što bi najradije probao/la, a još nisi?",
"Jesi li ikad koristio/la tekstualne igrice za seks?",
"Jesi li ikad imao/la poljubac koji nije trebao postojati?",
"Jesi li ikad bio/la u grupnom seksu?",
"Jesi li ikad sudjelovao/la u seksualnom eksperimentu?",
"Jesi li ikad bio/la inspiriran/a nekom seksualnom fantazijom?",
"Da si na sekundu nevidljiv/a – koga bi poljubio/la?",
"Koji ti je najprljaviji san o nekom poznatom?",
"Što bi napravio/la da dobiješ seks od 100 ljudi?",
"Jesi li ikad nosio/la seksi donje rublje samo za sebe?",
"Jesi li ikad posl'o/la 'nude selfie' nekom?",
"Da si pjevač/ica – kakvu bi seks‑pjesmu otpjevao/la?",
"Jesi li ikad bio/la uhvaćen/a gledajući pornografiju?",
"Preferiraš seks u mraku ili osvijetljenom prostoru?",
"Koju riječ najradije koristiš u seksi igri?",
"Što misliš o seksu u automobilu?",
"Preferiraš spontani ili planirani seks?",
"Jesi li ikad fantazirao/la o osobi van tvoje vrste?",
"Koji ti je omiljeni erotski film (ako si gledao/la)?",
"Da sve zvuči glasnije – bi li zvao/la seksi?",
"Koji ti je omiljeni način diranja?",
"Jesi li ikad imao/la superintenzivan seksualan san?"],
    dare: ["Poljubi osobu s lijeve strane u obraz... ili više, ako želiš.",
"Sjedni nekome u krilo i ostani tamo 30 sekundi.",
"Ispričaj svoju najprljaviju fantaziju naglas.",
"Pokaži svoju omiljenu pozu (pantomima, bez riječi).",
"Pošalji nekom iz grupe seksi emoji – bez objašnjenja.",
"Poljubi nekoga u vrat (ili tamo gdje dozvoli).",
"Šapni osobi s desne strane što bi joj radio/la kad biste bili sami.",
"Poljubi jastuk kao da ljubiš nekoga tko ti se jako sviđa.",
"Reci osobi nasuprot tebe što ti je najprivlačnije na njoj.",
"Stavi ruku na nečije bedro i zadrži 20 sekundi bez smijeha.",
"Imitiraj kako zvučiš kad si uzbuđen/a (bez pretjerivanja).",
"Zagrli nekoga jako blizu i zadrži zagrljaj 10 sekundi.",
"Ispričaj najluđu seksualnu priču koju imaš (ili izmisli).",
"Zatvori oči i pusti nekoga iz grupe da te poljubi gdje želi.",
"Flertuj s nekim iz grupe kao da ga prvi put vidiš.",
"Skini jedan komad odjeće (ili zamijeni za nešto drugo, smiješno).",
"Zatraži nekoga da ti zada izazov koji uključuje fizički kontakt.",
"Demonstriraj kako šalješ seksi poruku – čitaj naglas.",
"Poljubi nekoga u ruku kao u romantičnom filmu.",
"Ispričaj kako je izgledao tvoj prvi put – iskreno i bez zadrške.",
"Obliži nečiju ruku ili obraz (uz njegov/njezin pristanak).",
"Reci kome iz grupe bi najradije poslao/la golišavu sliku.",
"Odaberi nekoga i ispričaj što bi radio/la s njim da ste sami.",
"Zatraži nekoga da ti šapne najprljaviju misao koju ima.",
"Zatvori oči – netko te iz grupe poljubi, ti moraš pogoditi tko je.",
"Pošalji osobi iz imenika poruku: 'Mislio/la sam na tebe pod tušem.'",
"Ispričaj što te najviše pali kod partnera.",
"Prošetaj kao model u donjem rublju (ili samo glumi to).",
"Drži nečiju ruku i gledaj ga/je 15 sekundi bez riječi.",
"Glumi reklamu za pastu za zube – ali zavodljivo.",
"Glumi seksi telefonski razgovor s nepoznatom osobom.",
"Zatraži od nekoga da te ocijeni kako ljubiš (verbalno).",
"Drži kontakt očima s nekim 20 sekundi i reci što ti pada na pamet.",
"Zatraži osobu iz grupe da ti pošalje izazov porukom.",
"Zavodi nekoga iz grupe kao da si u filmu.",
"Objasni što je za tebe idealan seks – ozbiljno, kao da daješ intervju.",
"Zatraži izazov koji uključuje nešto neugodno, ali podnošljivo.",
"Recitiraj ljubavnu poruku kao da je namijenjena nekome iz grupe.",
"Pokaži točku na tijelu gdje si najosjetljiviji/a (bez riječi).",
"Šapni nekome iz grupe što bi mu/joj radio/la kad nitko ne gleda.",
"Napravite 'zavodljivi pogled' u paru – neka ostali ocijene.",
"Pokaži kako pišeš seksi poruku i pošalji je u prazno.",
"Reci nekome iz grupe što bi radio/la s njim u mraku.",
"Zatraži kompliment od svake osobe u grupi.",
"Zatvori oči – neka te netko dodirne prstom, ti moraš pogoditi gdje.",
"Pokaži lice koje imaš kad te netko uhvati 'na djelu'.",
"Oblikuj usnama riječ 'želim te' bez zvuka – neka netko pogodi.",
"Pošalji nekome poruku: 'Zamisli nas dvoje večeras...'",
"Zatraži izazov od nekoga – i napravi ga bez prigovora."]
  }
};

addPlayer.onclick = () => {
  const name = playerInput.value.trim();
  if (name && !players.includes(name)) {
    players.push(name);

    const li = document.createElement("li");
    li.textContent = name;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = " ✕";
    removeBtn.style.marginLeft = "10px";
    removeBtn.style.color = "red";
    removeBtn.style.background = "transparent";
    removeBtn.style.border = "none";
    removeBtn.style.cursor = "pointer";
    removeBtn.style.fontWeight = "bold";
    removeBtn.style.fontSize = "18px";

    removeBtn.onclick = () => {
      // Makni iz memorije i s ekrana
      players = players.filter(p => p !== name);
      li.remove();
    };

    li.appendChild(removeBtn);
    playerList.appendChild(li);
    playerInput.value = "";
  }
};

    li.appendChild(removeBtn);
    playerList.appendChild(li);
    playerInput.value = "";
  }
};

toCategory.onclick = () => {
  if (players.length >= 2) {
    screen1.classList.remove("active");
    screen2.classList.add("active");
  } else {
    alert("Dodaj barem 2 igrača.");
  }
};

document.querySelectorAll(".category").forEach(btn => {
  btn.onclick = () => {
    category = btn.dataset.cat;

    // 🚨 RESET STANJA IGRE
    clearInterval(nameInterval); // zaustavi ako je ostao interval
    spinning = false;            // resetiraj da dopusti ponovno vrtnju
    currentPlayer.textContent = "";
    challengeText.innerHTML = "";
    bottle.style.transition = 'none'; // makni animaciju privremeno
    bottle.style.transform = `rotate(${totalRotation}deg)`; // zadrži zadnji kut

    screen2.classList.remove("active");
    screen3.classList.add("active");
  };
});


function spinBottleWithNameSpin() {
  if (spinning) return;
  spinning = true;

  challengeText.innerHTML = "";

  nameInterval = setInterval(() => {
    let random = players[Math.floor(Math.random() * players.length)];
    currentPlayer.textContent = random;
  }, 100);

  let newPlayer;
  do {
    newPlayer = players[Math.floor(Math.random() * players.length)];
  } while (newPlayer === previousPlayer);

  previousPlayer = newPlayer;

  let minRotations = 50;
  let extraRotations = Math.floor(Math.random() * 10);
  let angle = 360 * (minRotations + extraRotations) + Math.floor(Math.random() * 360);
  totalRotation += angle;

  bottle.style.transition = 'transform 8s cubic-bezier(0.1, 1, 0.2, 1)';
  bottle.style.transform = `rotate(${totalRotation}deg)`;
  sound.currentTime = 0;
  sound.play();

  setTimeout(() => {
    clearInterval(nameInterval);
    currentPlayer.textContent = newPlayer;
    if (category === "custom") {
      challengeText.innerHTML = "";
    } else {
      showTruthDareButtons(newPlayer);
    }
    spinning = false;
  }, 8100);
}

function showTruthDareButtons(player) {
  challengeText.innerHTML = "";

  truthBtn = document.createElement("button");
  dareBtn = document.createElement("button");
  truthBtn.textContent = "ISTINA";
  dareBtn.textContent = "IZAZOV";

  truthBtn.onclick = () => {
    showQuestion(player, "truth");
  };

  dareBtn.onclick = () => {
    showQuestion(player, "dare");
  };

  challengeText.appendChild(truthBtn);
  challengeText.appendChild(dareBtn);
}

function showQuestion(player, type) {
  const questionSet = database[category][type];
  const randomQuestion = questionSet[Math.floor(Math.random() * questionSet.length)];
  challengeText.innerHTML = type.toUpperCase() + ": " + randomQuestion;
}

bottle.onclick = () => {
  if (spinning) return;
  spinBottleWithNameSpin();
};
document.querySelectorAll(".backBtn").forEach(btn => {
  btn.onclick = () => {
    const target = btn.dataset.back;
    if (target === "1") {
      // Nazad na unos igrača
      screen2.classList.remove("active");
      screen1.classList.add("active");
    } else if (target === "2") {
      // Nazad na izbor kategorije
      screen3.classList.remove("active");
      screen2.classList.add("active");
    }
  };
});
