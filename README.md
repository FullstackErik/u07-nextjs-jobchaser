Teoretiska frågor

Vecka 1.

Allmänt om ramverket React: Hur/Varför uppkom det? Vad är centralt i React?
React är ett open source ramverk skapat av facebook och skapades för att göra det effektivare att använda stora dynamiska hemsidor där man kan rendera om en liten del av en hemsida om det är något litet som ändas. Centralt i react är komponenter, JSX, reacts virtuella DOM, props och hooks.

Vad är JSX? JSX står för "JavaScript XML" och är en syntax extension till JavaScript som gör det möjligt att skriva kod liknande HTML direkt i en JS fil och är väldigt centralt i React.

Vad är en komponent? Det är en egen fil i ett projekt som har en funktion som returnerar ett JSX-element, oftast med hjälp av props och hooks som te.x useState och useEffect.

Vad är props? Props är som parametrar för en komponent för att göra dom mer återanvändbara, te. x skicka med en "img" prop i en komponent med en bild istället för bildens länk för att kunna återanvända komponentet för andra bilder utan att göra en ny.

Vad menas med one-way-dataflow? Det betyder att man skickar med data (i formen av props) från en förälder till ett child(komponent) för att minska buggar och göra felsökning enklare.

Hur kan man använda sig av konditionell rendering i React? Man kan välja att rendera olika element/komponenter beroende på vad en viss operator säger eller välja att inte rendera dom alls. Te.x. att man bara renderar händelse-komponenter i en lista om datumen är inom 1 vecka från dagens datum, annars renderas dom inte alls.

Vad menas med en återanvändbar komponent? Att man skapar komponenter med props som gör att de går att återanvända för andra saker, som att te.x. skapa en knapp-komponent men istället för att göra en eventlistener som submittar en form i komponenten så har den en onClick som tar in en prop med "onClickDoThis" så kan man använda knappen till andra saker också genom att ändra propen till det man vill att den ska göra.

Vecka 2.

Vad är state i React? State är en inbyggt hook i React som gör att en enskild komponent kan renderas om utan att rendera om hela hemsidan när staten uppdateras. 

Vad är det för skillnad mellan state och props? State är låst till komponenten den är skapad i medans props skickas med till child-komponenter. Props som skickas in i en komponent kan inte ändras i komponenten utan måste ändras i förälder-komponenten för att ändras i komponenten den skickats till.

Vad menas med en kontrollerad komponent i React? En komponent där värdet ändras via state istället för att tas från DOMen, te.x ett inputfield.

Vad är en callback handler? En funktion som skickas som en prop till en komponent och körs vid ett event, te. x onClick eller onSubmit liknande en eventlistener.

Vad menas med "lifting state up"? Att man flyttar upp en state från en child-komponent till förälder-komponentet så att staten kan skickas som props och delas av flera komponenter.

Vad är syftet med useEffect-hook i React? Framförallt för att hantera API-calls men även sideeffects från react som te.x. att hindra en funktion från att köras vid varje rendering istället för bara en gång.

Vad är syftet kring den s.k dependency-arrayen i useEffect? Att välja när/om hooken ska köras igen efter att komponenten har mountats. Te.x vid en tom array körs useEffect enbarts vid mount. 
