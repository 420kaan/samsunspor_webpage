document.addEventListener("DOMContentLoaded", function () {
  const mainElement = document.getElementById("playerTables");
});

const players = [
  {
    name: "Okan Kocuk",
    country: "Türkiye",
    position: "Kaleci",
    placeOfBirth: "Bursa",
    dateOfBirth: "27.07.1995",
    image: "../takim/okan.jpeg",
  },
  {
    name: "Jakub Szumski",
    country: "Polonya",
    position: "Kaleci",
    placeOfBirth: "Polonya",
    dateOfBirth: "06.03.1992",
    image: "../takim/jakub.jpeg",
  },
  {
    name: "Halil Yeral",
    country: "Türkiye",
    position: "Kaleci",
    placeOfBirth: "Manisa",
    dateOfBirth: "01.01.2000",
    image: "../takim/halil.jpeg",
  },
  {
    name: "Taha Tosun",
    country: "Türkiye",
    position: "Kaleci",
    placeOfBirth: "İstanbul",
    dateOfBirth: "28.04.2005",
    image: "../takim/taha.jpeg",
  },
  {
    name: "Yunus Emre Çiftçi",
    country: "Türkiye",
    position: "Defans",
    placeOfBirth: "Samsun",
    dateOfBirth: "01.09.2003",
    image: "../takim/yunus.jpeg",
  },
  {
    name: "Bedirhan Çetin",
    country: "Türkiye",
    position: "Defans",
    placeOfBirth: "Samsun",
    dateOfBirth: "29.06.2006",
    image: "../takim/bedirhan.jpeg",
  },
  {
    name: "Alim Öztürk",
    country: "Türkiye",
    position: "Defans",
    placeOfBirth: "Hollanda",
    dateOfBirth: "17.11.1992",
    image: "../takim/alim.jpeg",
  },
  {
    name: "Rick van Drongelen",
    country: "Hollanda",
    position: "Defans",
    placeOfBirth: "Axel",
    dateOfBirth: "20.12.1998",
    image: "../takim/rickvan.jpeg",
  },
  {
    name: "Lubomir Satka",
    country: "Slovakya",
    position: "Defans",
    placeOfBirth: "Ilava",
    dateOfBirth: "02.12.1995",
    image: "../takim/lubomir.jpeg",
  },
  {
    name: "Zeki Yavru",
    country: "Türkiye",
    position: "Defans",
    placeOfBirth: "Trabzon",
    dateOfBirth: "05.09.1991",
    image: "../takim/zeki.jpeg",
  },
  {
    name: "Kingsley Schindler",
    country: "Gana",
    position: "Defans",
    placeOfBirth: "Hamburg",
    dateOfBirth: "02.12.1995",
    image: "../takim/kingsley.jpeg",
  },
  {
    name: "Nanu (Eulanio Gomes)",
    country: "Guinea-Bissau - Portekiz",
    position: "Defans",
    placeOfBirth: "Coimbra",
    dateOfBirth: "17.05.1994",
    image: "../takim/nanu.jpeg",
  },
  {
    name: "Enes Albak",
    country: "Türkiye",
    position: "Defans",
    placeOfBirth: "Ordu",
    dateOfBirth: "16.05.2005",
    image: "../takim/enes.jpeg",
  },
  {
    name: "Soner Gönül",
    country: "Türkiye",
    position: "Defans",
    placeOfBirth: "Giresun",
    dateOfBirth: "11.06.1997",
    image: "../takim/soner.jpeg",
  },
  {
    name: "Marc Bola",
    country: "İngiltere",
    position: "Defans",
    placeOfBirth: "Londra",
    dateOfBirth: "09.12.1997",
    image: "../takim/marc.jpeg",
  },
  {
    name: "Muhammmet Ali Özbaskıcı",
    country: "Türkiye",
    position: "Ortasaha",
    placeOfBirth: "Samsun",
    dateOfBirth: "27.09.2005",
    image: "../takim/mami.jpeg",
  },
  {
    name: "Osman Çelik",
    country: "Türkiye",
    position: "Ortasaha",
    placeOfBirth: "Antalya",
    dateOfBirth: "27.11.1991",
    image: "../takim/osman.jpeg",
  },
  {
    name: "Soner Aydoğdu",
    country: "Türkiye",
    position: "Ortasaha",
    placeOfBirth: "Ankara",
    dateOfBirth: "05.01.1991",
    image: "../takim/soneraydogdu.jpeg",
  },
  {
    name: "Carlo Holse",
    country: "Danimarka",
    position: "Ortasaha",
    placeOfBirth: "Kopenhag",
    dateOfBirth: "02.06.1999",
    image: "../takim/carlo.jpeg",
  },
  {
    name: "Flavien Tait",
    country: "Fransa",
    position: "Ortasaha",
    placeOfBirth: "Longjumeau",
    dateOfBirth: "02.02.1993",
    image: "../takim/flavien.jpeg",
  },
  {
    name: "Olivier Nitcham",
    country: "Kamerun - Fransa",
    position: "Ortasaha",
    placeOfBirth: "Longjumeau",
    dateOfBirth: "09.02.1996",
    image: "../takim/olivier.jpeg",
  },
  {
    name: "Muhammed Gümüşkaya",
    country: "Türkiye",
    position: "Ortasaha",
    placeOfBirth: "Istanbul",
    dateOfBirth: "01.01.2001",
    image: "../takim/mamigumuskaya.jpeg",
  },
  {
    name: "Emre Kılınç",
    country: "Türkiye",
    position: "Ortasaha",
    placeOfBirth: "Sakarya",
    dateOfBirth: "23.08.1994",
    image: "../takim/emrekilinc.jpeg",
  },
  {
    name: "Taylan Antalyalı",
    country: "Türkiye",
    position: "Ortasaha",
    placeOfBirth: "Muğla",
    dateOfBirth: "08.01.1995",
    image: "../takim/taylan.jpeg",
  },
  {
    name: "Mickael Tırpan",
    country: "Türkiye",
    position: "Ortasaha",
    placeOfBirth: "Anderlecht",
    dateOfBirth: "23.10.1993",
    image: "../takim/mickael.jpeg",
  },
  {
    name: "Youssef Ait Bennaser",
    country: "Fas - Fransa",
    position: "Ortasaha",
    placeOfBirth: "Toul",
    dateOfBirth: "07.07.1996",
    image: "../takim/youssef.jpeg",
  },
  {
    name: "Moryke Fofana",
    country: "Fildişi Sahili",
    position: "Ortasaha",
    placeOfBirth: "Fildişi Sahili",
    dateOfBirth: "23.11.1991",
    image: "../takim/moryke.jpeg",
  },
  {
    name: "Gaetan Loamba Laura",
    country: "Fransa",
    position: "Forvet",
    placeOfBirth: "Fransa",
    dateOfBirth: "06.08.1995",
    image: "../takim/laura.jpeg",
  },
  {
    name: "Marius Mouandilmadji",
    country: "Çad",
    position: "Forvet",
    placeOfBirth: "Doba",
    dateOfBirth: "22.01.1998",
    image: "../takim/marius.jpeg",
  },
  {
    name: "Ercan Kara",
    country: "Türkiye - Avusturya",
    position: "Forvet",
    placeOfBirth: "Wien",
    dateOfBirth: "03.01.1996",
    image: "../takim/ercan.jpeg",
  },
  {
    name: "Landry Nany Dimata",
    country: "Belçika",
    position: "Forvet",
    placeOfBirth: "Mbuji-Mayi",
    dateOfBirth: "01.10.1997",
    image: "../takim/dimata.jpeg",
  },
  {
    name: "Alper Çamlı",
    country: "Kırklareli",
    position: "Genç Yıldız",
    placeOfBirth: "İstanbul",
    dateOfBirth: "04.05.2003",
    image: "../stuff/a.jpg",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const playerButtonsTable = document.getElementById("playerButtonsTable");
  const playerInfo = document.getElementById("playerInfo");

  // Player Info Creater Function
  if (playerButtonsTable && playerInfo) {
    function showPlayerInfo(player) {
      playerInfo.innerHTML = ""; // clear previous player info

      const infoDiv = document.createElement("div");
      infoDiv.innerHTML = `
        <h2>${player.name}</h2>
        <p>Ülke: ${player.country}</p>
        <p>Pozisyon: ${player.position}</p>
        <p>Doğum Yeri: ${player.placeOfBirth}</p>
        <p>Doğum Tarihi: ${player.dateOfBirth}</p>
        <img src="${player.image}" alt="${player.name}" />
      `;
      playerInfo.appendChild(infoDiv);
    }

    // create rows for each player in the table
    players.forEach((player) => {
      const row = playerButtonsTable.insertRow();

      // First column
      const jerseyCell = row.insertCell();
      const jerseyImage = document.createElement("img");
      jerseyImage.src = "../stuff/jersey.png";
      jerseyImage.alt = "Jersey";
      jerseyCell.appendChild(jerseyImage);

      // Second column
      const nameCell = row.insertCell();
      const button = document.createElement("button");
      button.textContent = player.name;
      button.addEventListener("click", () => {
        showPlayerInfo(player);
      });
      nameCell.appendChild(button);
    });
  } else {
    console.error("oyuncu bulunamadı");
  }
});
