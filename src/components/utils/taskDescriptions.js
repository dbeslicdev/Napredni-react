export const taskDescriptions = {
  "React Hooks": {
    UseState: {
      Counter: `Implementiraj counter koji koristi useState hook.
  

  1. Inicijalizacija state varijable:


  - Implementiraj useState hook za praćenje countera

  - Postavi početnu vrijednost na 0

  
  2. Definiraj potrebne funkcije:


   - Funkcija za povećanje countera


     
  - Funkcija za smanjenje countera


  - Funkcija za reset countera

  
  3. Postavi JSX strukturu:


  - Prikaži trenutnu vrijednost countera


  - Dodaj gumbe za povećanje i smanjenje`,

      Toggler: `
      Implementiraj 'switcher' koji će ovisno o vrijednosti state varijable prikazivati "Hide" ili "Show". 
      
      


      -Inicijaliziraj state varijablu:


- Koristi useState hook za deklariranje state varijable  (isVisible) i funkcije za ažuriranje state-a (setIsVisible). Postavi početno stanje na true.

Definiraj switcher funkciju (Toggle Function):

- Kreiraj funkciju (toggleVisibility) koja mijenja vrijednost state varijable iz true u false i obrnuto.

U return (JSX) dijelu dodaj sljedeće:


- onClick event koji poziva funkciju toggleVisibility.

- Prikaz riječi "Hide" ili "Show", ovisno o vrijednosti isVisible (koristi ternarni operator).

- Uvjetno <p> element koji prikazuje tekst samo ako je isVisible postavljen na true (koristi ternarni operator).`,

      "Dynamic Input": `Implementiraj dinamički input 
      
      koji koristi useState hook.

      
  
  1. Inicijalizacija state varijable:


  - Koristi useState hook za praćenje vrijednosti inputa


  - Postavi početnu vrijednost na prazan string


  
  2. Definiraj potrebne funkcije:


  - Funkcija za ažuriranje vrijednosti inputa

  

  3. Postavi JSX strukturu:


  - Dodaj input element


  - Prikaži trenutnu vrijednost ispod inputa`,

      "List Search": `Implementiraj pretraživanje liste  koristeći useState hook.
  


  1. Inicijalizacija state varijable:


  - Koristi useState hook za praćenje vrijednosti pretrage


  - Postavi početnu vrijednost na prazan string
  


  2. Implementiraj sljedeće funkcionalnosti:


  - funkcionalnost za filtriranje liste

    
  3. Postavi JSX strukturu:


  - Dodaj input za pretragu


  - Prikaži filtriranu listu`,
    },
    UseEffect: {
      "Counter with useEffect": `Ažuriraj naslov dokumenta (stranice) svaki put kada se stanje count varijable promijeni.


  
  1. Inicijalizacija state varijable:


  - Koristi useState hook za praćenje brojača


  - Postavi početnu vrijednost na 0


  
  2. Definiraj potrebne funkcije:


  - Funkcija za povećanje brojača


  - Funkcija za smanjenje brojača

  - Funkcija za reset brojača


  
  3. Postavi JSX strukturu:


  - Prikaži trenutnu vrijednost brojača


  - Dodaj gumbe za povećanje i smanjenje


  - Dodaj useEffect koji će se izvršiti i promijeniti naziv stranice svaki put kada se brojač promijeni (koristi document.title za promjenu naslova.)`,

      "Data Fetching": `Dohvati i prikaži postove s endpointa u listi.


  
  1. Inicijalizacija state varijable:


  - Koristi useState hook 


  - Postavi početnu vrijednost na prazan array


  
  2. Definiraj funkciju za fetch podataka


3. Dodaj useEffect koji će dohvatiti podatke kada se komponenta mounta

  
  3. Postavi JSX strukturu:


  - Prikaži podatke u listi

  `,

      Timer: `Implementiraj timer koji koristi useEffect hook.
      

      1. Inicijalizacija state varijable:


  - Koristi useState hook za praćenje sekundi


  - Postavi početnu vrijednost na 0


  
  2. Implementiraj useEffect:


  - Koristi setInterval za ažuriranje sekundi svake sekunde


  - Dodaj cleanup funkciju koja će očistiti interval kada se komponenta unmounta


  
  3. Postavi JSX strukturu:


  - Prikaži trenutni broj sekundi


  - Dodaj opis funkcionalnosti`,

      "Message Display": `Implementiraj prikaz poruke koji koristi useEffect hook.


  
  1. Inicijalizacija state varijable:


  - Koristi useState hook za praćenje povijesti poruka


  - Postavi početnu vrijednost na prazan array


  
  2. Implementiraj useEffect:


  - Pratite promjene u message prop-u


  - Dodajte novu poruku u povijest kada se promijeni


  - Logirajte promjene u konzolu


  
  3. Postavi JSX strukturu:


  - Prikaži trenutnu poruku


  - Prikaži povijest poruka


  - Dodaj opis funkcionalnosti`,
    },
    UseRef: {
      "Component Render": `
Uz pomoć useRef hook-a prikaži koliko puta se komponenta renderala nakon svakog novog input-a.

`,

      "Input Focus": `Implementiraj fokusiranje inputa koji koristi useRef hook.


  
  1. Inicijalizacija ref-a:


  - Koristi useRef hook za referencu na input element


  - Postavi početnu vrijednost na null


  
  2. Definiraj potrebne funkcije:


  - Funkcija za fokusiranje inputa


  
  3. Postavi JSX strukturu:


  - Dodaj ref na input element


  - Dodaj gumb za fokusiranje inputa`,

      Validation: `Implementiraj validaciju forme koristeći useRef hook.

1. Inicijalizacija ref-a:

- Koristi useRef hook za referencu na input elemente

- Postavi početne vrijednosti na null

2. Definiraj potrebne funkcije:

- Funkcija za submit s validacijom za email

`,

      "Previous Counter": `Implementiraj brojač koji koristi useRef hook za praćenje prethodne vrijednosti.

1. Inicijalizacija state varijable i ref-a:

- Koristi useState hook za praćenje brojača

- Koristi useRef hook za praćenje prethodne vrijednosti

- Postavi početne vrijednosti na 0


2. Implementiraj useEffect:

- Pratite promjene u brojaču

- Ažurirajte prethodnu vrijednost u ref-u


`,
    },
    UseReducer: {
      Counter: `Implementiraj brojač koji koristi useReducer hook.


  
  1. Inicijalizacija reducera i state varijable:


  - Definiraj reducer funkciju


  - Koristi useReducer hook za praćenje brojača


  - Postavi početnu vrijednost na 0


  
  2. Definiraj potrebne funkcije:


  - Funkcija za povećanje brojača


  - Funkcija za smanjenje brojača


  
  3. Postavi JSX strukturu:


  - Prikaži trenutnu vrijednost brojača


  - Dodaj gumbe za povećanje i smanjenje`,

      "Toggle Boolean": `Implementiraj switcher koji koristi useReducer hook.


  
  1. Inicijalizacija reducera i state varijable:

  
  
  - Definiraj reducer funkciju
  
  
  - Koristi useReducer hook za praćenje stanja switchera


  
  - Definiraj početno stanje isOn i postavi mu vrijednost na false.

  - Definiraj reducer koji poziva "toggle" akciju za postavljanje vrijednosti varijable 'isOn' na true ili false.

  - Integriraj useReducer: Koristi useReducer za upravljanje stanjem isOn.



 


  
2. Postavi JSX strukturu:


  - Prikaži trenutno stanje prekidača


  - Dodaj gumb koji na klik prebacuje state 'isOn' varijable na true ili false.`,
    },
    UseContext: {
      "Theme Switcher": `Implementiraj toggler za teme koji koristi useContext hook.


  
  1. Inicijalizacija contexta:

  - Kreiraj ThemeContext

  - Kreiraj ThemeProvider komponentu

  

  
  2. Definiraj potrebne funkcije:

  - Funkcija za promjenu teme

  - Funkcija za prikazivanje trenutne teme

  
  3. Postavi JSX strukturu:

  - Dodaj ThemeProvider

  - Dodaj ThemeSwitcher komponentu
  

  - Dodaj prikaz trenutne teme`,
    },
    UseMemo: {
      "Slow Function": `Implementiraj optimizaciju spore funkcije koristeći useMemo hook.


  
  1. Inicijalizacija state varijable:


  - Koristi useState hook za praćenje broja


  - Postavi početnu vrijednost na 1


  
  2. Implementiraj sporu funkciju:


  - Kreiraj funkciju koja izvršava teške izračune



  - Funkcija bi trebala biti spora da bi se vidjela optimizacija


  
  3. Implementiraj useMemo:


  - Koristi useMemo za memoizaciju rezultata spore funkcije


`,
    },

    UseCallback: {
      UseCallbackCounter: `Implementiraj useCallback hook kako bi se spriječilo pozivanje funkcije nakon svakog re-rendera komponente`,
    },
  },
};
