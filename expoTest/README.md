# React Native ExpoTest

## Expo Go Quicstart

- npm 

```bash
npx create-expo-app AwesomeProject/current directory name 

cd AwesomeProject or expoTest 
npx expo start
```



- yarn 

```bash
yarn create expo-app AwesomeProject

cd AwesomeProject
yarn expo start
```


React Nativr 0.74.0 dev doc link : (https://reactnative.dev/docs/environment-setup)


1. Om npm install inte fungerar som förväntat, här är några steg för att felsöka och lösa problemet:

Rensa cache och installera igen:

bash
Copy code
npm cache clean --force
npm install
Använd yarn i stället för npm:
Om du har yarn installerat kan du prova att använda det för att installera paketen:

bash
Copy code
yarn install
Kontrollera Node.js-versionen:
Se till att du använder en version av Node.js som är kompatibel med ditt projekt. Du kan använda verktyget nvm (Node Version Manager) för att byta Node.js-versioner:

Installera nvm om du inte redan har det.
Byt till en kompatibel Node.js-version: nvm use <version>
Uppdatera Node.js och npm:
Se till att du har den senaste versionen av Node.js och npm installerad. Du kan uppdatera dem genom att köra:

bash
Copy code
npm install -g npm
Kontrollera projektets package.json:
Se till att package.json-filen i ditt projekt är korrekt och att det inte finns några fel i den.

Manuell installation av Expo:
Om inget annat fungerar kan du manuellt installera Expo CLI globalt:

bash
Copy code
npm install -g expo-cli
Kontrollera Internet-anslutningen:
Se till att din dator har en fungerande internetanslutning när du kör npm install, eftersom det kan kräva att ladda ner paket från npm-registret.

Om problemet kvarstår efter att du har följt dessa steg, kan det vara värt att kontrollera om det finns ytterligare felmeddelanden som genereras under installationsprocessen och inkludera dem för mer specifik hjälp.

User
hur ska fixa för det, Logs for your project will appear below. Press Ctrl+C to exit.
It looks like you're trying to use web support but don't have the required dependencies
installed.

Please install @expo/webpack-config@^19.0.0 by running:

npx expo install @expo/webpack-config@^19.0.0

If you're not using web, please ensure you remove the "web" string from the platforms array
in the project Expo config.
ChatGPT


- För att åtgärda detta felmeddelande behöver du installera den angivna paketversionen av @expo/webpack-config. Följ dessa steg:

Öppna ett terminalfönster.

Kör följande kommando för att installera @expo/webpack-config i din Expo-projektmapp:

bash
Copy code
npx expo install @expo/webpack-config@^19.0.0
Om du får en fråga om att ange plattform, välj "web" om du använder webbstöd, annars tryck bara på Enter.

Efter installationen bör du inte längre se det tidigare felmeddelandet. Försök sedan starta Expo-projektet igen med:

bash
Copy code

```bash
npx expo start
```

Om problemet kvarstår eller om det uppstår andra problem, kontrollera Expo-dokumentationen eller felmeddelandena för ytterligare vägledning. Ibland kan det också vara användbart att kontrollera om det finns några uppdateringar för Expo CLI och Expo-paket i ditt projekt. Du kan uppdatera Expo CLI med npm install -g expo-cli och dina projektberoenden med npm install.



-  
```bash
npm install react-native-reanimated

```


