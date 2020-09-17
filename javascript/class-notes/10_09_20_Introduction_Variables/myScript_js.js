// ES6'dan önce
var dummy_1 = "Hello";

// --------------------------

// ES6'dan sonra
let dummy_2 = 100;
const dummy_3 = 5;

// --------------------------
// "const"'un değerini değiştiremeyiz 🤬
const dummy_4 = "World!";
// dummy_4 = "Dünya!"

console.log("dummy_4: ", dummy_4);

// ERROR: Uncaught TypeError: Assignment to constant variable

// ama "let"'in değiştirebiliriz! 🔥
let dummy_5 = 1200;
dummy_5 = 30;

console.log("dummy_5: ", dummy_5);
// --------------------------

{
    // Bunları bu scope'da tanımladık
    var dummy_6 = "We";
    const dummy_7 = "Are";
    let dummy_8 = "the Champions";

    // Elbette tanımlandıkları scope içinde erişebiliyoruz
    console.log(dummy_6, dummy_7, dummy_8);
    {
        // ve bu noktada da erişebiliyoruz. Çünkü? "hiyerarşi" 
        console.log(dummy_6, dummy_7, dummy_8);

        // Şimdi, ben burada bir de bunları tanımlayayım;
        var dummy_9 = "Kaşı Kara";
        const dummy_10 = "Ceylan";
        let dummy_11 = "Gözlüm";
    }
    // Ve, buradan erişmeye çalışayım bakayım,
    console.log(dummy_9); // Sıkıntı yok ✅
    console.log(dummy_10); // Hata ❌
    console.log(dummy_11); // Hata ❌

    /* 
        Kara kaşlıma erişebildim, fakat ceylan gözlüm bu scope'ları, bu diyarları terk etti..
        Çünkü "var" ile tanımlananlar her yerden erişime açık kalırlar. Bellekte "sürekli" tutulurlar.
        Bu yüzden uzak durmamız gerekir. Belleğe yüklenmek istemiyoruz. Bellek neydi? Bellek emekti..
    */
}

console.log(dummy_9) // Buradan bile erişilebiliyor, yazıklar olsun...

// 💪