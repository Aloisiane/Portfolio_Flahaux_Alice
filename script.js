const cards = [
    {
        image: "menuAgBC.png",
        link: "https://aloisiane.github.io/WF15-06--WEB-_F._Alice/",
        theme: "theme2",
        title: "Webコンテスト",
        description: `こちらの作品は、HAL名古屋・HAL大阪・HAL東京の3校合同コンテストで制作したWebサイトです。私はこのコンテストで銀賞を受賞しました。

このコンテストでは、アーティストをテーマにしたWebサイトを企画・制作し、その内容を発表することが求められました。私はベルギーの歌手アンジェル（Angèle）をテーマに選びました。

この課題の目的は、HTMLとCSSの理解度や実装力を確認することでした。当時はまだJavaScriptの授業を受けていませんでしたが、JavaScriptの基礎を学ぶ専科を受講していました。また、授業でまだ扱っていない機能の中で実現したいものについては、自分で調べながら制作を進めました。`
    },
    {
        image: "menuCh.png",
        link: "https://aloisiane.github.io/WF15-05-PI11A203-25-Fla-Alice/",
        theme: "theme3",
        title: "Chicken Run",
        description: `この課題では、映画をテーマにしたWebサイトを制作することが求められました。私は、オリジナリティがあると感じたことと、ストップモーション作品が好きだったことから、『Chicken Run』を題材に選びました。

この作品は比較的初期の課題の一つで、コーディングにはHTMLとCSSのみを使用しました。

また、メニューボタンのロゴはIllustratorを使用して制作し、映画のキャラクターの切り抜きや茂みの作成にはPhotoshopを使用しました。`
    },
    {
        image: "menuBelgique.png",
        link: "https://aloisiane.github.io/WF15_03_PI11A203_25_Fla_Alice/",
        theme: "theme4",
        title: "ベルギー料理",
        description: `この課題は、Web制作の授業で2番目に取り組んだ課題です。そのため、CSSを使用するのはこの時が初めてでした。

この課題では、朝食・昼食・夕食を紹介するWebサイトを制作することが求められました。私は、ベルギーで普段食べていた料理を紹介することにしました。

この課題の制作はとても楽しく、WebプログラミングやWebデザインに興味を持つきっかけになりました。この頃から、Web制作の面白さを実感するようになりました。
制作にはHTML、CSS、そしてPhotoshopを使用しました。`
    },
    {
        image: "menuShuushokuSakuhin.png",
        link: "https://aloisiane.github.io/-_HalNagoya_2026_Fla_Alice/",
        theme: "theme5",
        title: "就職作品",
        description: `こちらの作品は、2026年2月に開催されたHALの「就職作品プレゼンテーション」で発表した就職作品です。

現在ご覧いただけるのはビジュアル部分のみです。本来の機能を利用するためには、私がMySQLで構築したデータベースとの接続が必要ですが、そのデータベースは私のパソコン上で管理されているため、実際の動作をお見せすることはできません。

制作には、HTML、CSS、JavaScript、Illustrator、Photoshop、Web Speech API、JSON API、そしてMySQLを使用しました。

この就職作品のテーマは、日本人のフランス語学習者向けの発音練習Webアプリケーションの開発です。ユーザーはミニゲームを通してフランス語の発音を練習できるほか、自分で単語を登録して学習することもできます。`
    }
];

let current = 0;

const carouselSection = document.querySelector(".carousel-section");
const elements = document.querySelectorAll(".card");

function updateCarousel() {
    const total = cards.length;

    const left = (current + 1) % total;
    const top = (current + 2) % total;
    const active = current;
    const right = (current + 3) % total;

    const positions = [left, top, active, right];
    const classes = ["left", "top", "active", "right"];

    elements.forEach((element, index) => {
        const cardIndex = positions[index];
        const card = cards[cardIndex];

        element.className = `card ${classes[index]}`;
        element.href = card.link;
        element.setAttribute("aria-label", `Voir le projet ${card.title}`);

        element.innerHTML = `
            <img
                src="${card.image}"
                alt="${card.title}"
                loading="${classes[index] === "active" ? "eager" : "lazy"}"
            >
        `;
    });

    carouselSection.className = `carousel-section ${cards[active].theme}`;

    document.getElementById("active-title").textContent =
        cards[active].title;

    document.getElementById("active-text").textContent =
        cards[active].description;
}

document.getElementById("next").addEventListener("click", () => {
    current = (current + 1) % cards.length;
    updateCarousel();
});

document.getElementById("prev").addEventListener("click", () => {
    current = (current - 1 + cards.length) % cards.length;
    updateCarousel();
});

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
        current = (current + 1) % cards.length;
        updateCarousel();
    }

    if (event.key === "ArrowLeft") {
        current = (current - 1 + cards.length) % cards.length;
        updateCarousel();
    }
});

updateCarousel();
