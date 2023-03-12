import AppRouter from './router/AppRouter';
import ThemeProvider from "styled-components";
import { useEffect, useState } from 'react';
import {darktheme, lightheme} from "./styles/theme"


function App() {
  const [myTheme, setMyTheme] = useState(
    sessionStorage.getItem("theme") || "light"
  )//kullanıcı seçimi için. eğer başlangıcta storage da veri varsa onu getir yoksa light olarak initial degerini belirle
  const [themes, setThemes] = useState(lightheme)//Themeprovidera vereceğimiz theme state.başlangıç için lighttheme yi seçtik
  useEffect(() => {
    sessionStorage.setItem("theme", myTheme)//kullanıcı refresh atsa bile theme seçimi değişmeyecek
    setThemes(myTheme === "light" ? lightheme : darktheme)
  }, [myTheme])//myTheme değiştikçe storage ve themes güncelenecek. Böylelikle Themeprovidera verdiğimiz theme güncellenmiş olacak. Ve sayfa refresh olduğunda kullanıcının theme tercihi değişmemesi için storage da güncellenmiş oluyor. 
  
  return (
    <ThemeProvider theme={themes}>
      <AppRouter myTheme={myTheme} setMyTheme={setMyTheme} />{/* statelerimizi approuter aracılığıyla footera yollayacağız */}
    </ThemeProvider>
  );
}

export default App;
