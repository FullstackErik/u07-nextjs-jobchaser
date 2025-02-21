# Teoretiska Frågor

## Vecka 1

### Allmänt om Ramverket React
- **Hur/Varför uppkom React? Vad är centralt i React?**
  - React är ett open source ramverk skapat av Facebook och skapades för att göra det effektivare att använda stora dynamiska hemsidor där man kan rendera om en liten del av en hemsida om det är något litet som ändras.
  - Centralt i React är komponenter, JSX, Reacts virtuella DOM, props och hooks.

### Vad är JSX?
- **JSX** står för "JavaScript XML" och är en syntax extension till JavaScript som gör det möjligt att skriva kod liknande HTML direkt i en JS-fil och är väldigt centralt i React.

### Vad är en komponent?
- Det är en egen fil i ett projekt som har en funktion som returnerar ett JSX-element, oftast med hjälp av props och hooks som t.ex. "useState" och "useEffect".

### Vad är props?
- **Props** är som parametrar för en komponent för att göra dem mer återanvändbara. T.ex. skicka med en "img" prop i en komponent med en bild istället för bildens länk för att kunna återanvända komponenten för andra bilder utan att skapa en ny.

### Vad menas med one-way data flow?
- Det betyder att man skickar med data (i formen av props) från en förälder till ett child-komponent för att minska buggar och göra felsökning enklare.

### Hur kan man använda sig av konditionell rendering i React?
- Man kan välja att rendera olika element/komponenter beroende på vad en viss operator säger eller välja att inte rendera dem alls. T.ex. att man bara renderar händelse-komponenter i en lista om datumen är inom 1 vecka från dagens datum, annars renderas de inte alls.

### Vad menas med en återanvändbar komponent?
- Att man skapar komponenter med props som gör att de går att återanvända för andra saker, som att t.ex. skapa en knapp-komponent men istället för att göra en eventlistener som submittar en form i komponenten så har den en "onClick" som tar in en prop med "onClickDoThis", så kan man använda knappen till andra saker också genom att ändra propen till det man vill att den ska göra.

---

## Vecka 2

### Vad är state i React?
- **State** är en inbyggd hook i React som gör att en enskild komponent kan renderas om utan att rendera om hela hemsidan när staten uppdateras.

### Vad är det för skillnad mellan state och props?
- **State** är låst till komponenten den är skapad i, medan **props** skickas med till child-komponenter.
- Props som skickas in i en komponent kan inte ändras i komponenten utan måste ändras i förälder-komponenten för att ändras i komponenten den skickats till.

### Vad menas med en kontrollerad komponent i React?
- En komponent där värdet ändras via state istället för att tas från DOM-en, t.ex. ett inputfält.

### Vad är en callback handler?
- En funktion som skickas som en prop till en komponent och körs vid ett event, t.ex. "onClick" eller "onSubmit", liknande en eventlistener.

### Vad menas med "lifting state up"?
- Att man flyttar upp en state från en child-komponent till förälder-komponenten så att staten kan skickas som props och delas av flera komponenter.

### Vad är syftet med useEffect-hook i React?
- Framförallt för att hantera API-calls men även sideeffects från React, som t.ex. att hindra en funktion från att köras vid varje rendering istället för bara en gång.

### Vad är syftet kring den s.k dependency-arrayen i useEffect?
- Att välja när/om hooken ska köras igen efter att komponenten har mountats. T.ex. vid en tom array körs useEffect enbart vid mount.

---

## Vecka 3

### Vilka fördelar finns det med att använda NextJS?
- Ett nytt och bra system för routing baserat på mappar i projektet.
- Server side rendering vilket gör att sidor kan laddas på servern istället för klienten och appen blir mycket mer responsiv.
- Inbyggd optimering av bilder och typsnitt.
- Enkel hosting med Vercel och möjligheten att ha frontend och backend kod i samma mapp.

### Nackdelar (NextJS)?
- Stor inlärningskurva, väldigt komplicerat för mindre appar istället för att göra ett projekt med t.ex. Vite.

### Vad menas med Routing? På vilket sätt löser NextJS Routing v.s "vanliga React"?
- **Routing** är sättet att växla mellan olika sidor i en app.
- React är en SPA men kan ha olika routes för att visa olika sidor som t.ex. en login page eller en cart på en e-handelssida.
- NextJS löser detta genom att använda "App Router" som gör att varje route är en egen mapp i projektet med en page-fil och innehållet i den page-filen är det som visas på den routen.
- "Vanilla" React använder ett bibliotek som heter "React Router" och man behöver då definiera routes manuellt och skriva kod för övergångarna mellan olika komponenter.

### Vad menas med Reacts ekosystem? Nämn några viktiga bibliotek i Reacts ekosystem?
- **Reacts ekosystem** är alla bibliotek och ramverk som är gjorda för att användas tillsammans med React.
- Några av dessa är: NextJS, Redux/Redux Toolkit, React Router (om man inte använder NextJS), React Query, shadCN, Material UI och många fler.

### Vad är syftet med useContext? Vilket problem med props löser den?
- **useContext** är en React hook som gör att man kan dela en variabel eller state genom hela appen (eller de delar av appen man vill ska ha tillgång till den) som t.ex. dark themes eller användardata.
- Man använder det för att lösa problemet med "prop drilling" som gör att koden kan bli väldigt svårt att läsa och förstå men även för att göra prestandan bättre i appen.

---

## Vecka 4

### Vad är Redux Toolkit?
- **Redux Toolkit** är ett JS-bibliotek som är baserat på Redux men gjort för att förenkla Redux-koden och minska boilerplate-kod som behövs.
- Det används för att skapa Redux stores som innehåller olika reducers istället för att använda Reacts inbyggda "useReducer" tillsammans med "useContext".
- Det används oftast till React-projekt men går att använda till andra appar också.

### När, i vilka situationer vill man använda Redux Toolkit?
- När man har många eller komplexa states/variabler som man måste hålla koll på i en app.
- När man börjar få ett större projekt så kan Redux Toolkit hjälpa att hantera all den datan på ett bättre sätt än Reacts egna hooks.
- När man behöver asynkrona funktioner i reducern då React inte har något stöd utan Redux för att hantera det med enbart "useContext".
