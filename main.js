const pets = [
    {
      ime: "Georgie",
      vrsta: "mačka",
      hrana: ["Vlažna hrana", "Miševi"],
      godinaRodenja: 2011,
      slika: "https://sklonistedobrote.hr/wp/wp-content/uploads/2021/05/190236155_471662870755276_3414526882235137458_n-e1622024690948.jpg"
    },
    {
      ime: "Ellie",
      vrsta: "mačka",
      hrana: ["Suhi Krekeri"],
      godinaRodenja: 2008,
      slika: "https://sklonistedobrote.hr/wp/wp-content/uploads/2021/05/185108391_197755112061283_7109918657018267178_n-e1621783141638.jpg"
    },
    {
        ime: "Leni",
        vrsta: "Mačka",
        hrana: ["Kukci, ribice"],
        godinaRodenja: 2020,
        slika: "https://sklonistedobrote.hr/wp/wp-content/uploads/2021/05/185884461_504418874073881_1313710230238470222_n-1140x713.jpg"
      },
      {
        ime: "Augustino",
        vrsta: "Mačka",
        hrana: ["Salama"],
        godinaRodenja: 2016,
        slika: "https://sklonistedobrote.hr/wp/wp-content/uploads/2021/04/IMG_20210514_195235-e1621778869337.jpg"
      },
      {
        ime: "Diaz",
        vrsta: "Pas",
        hrana: ["Kosti"],
        godinaRodenja: 2018,
        slika: "http://www.azilzagreb.com/Image.ashx?img=Img/DSC_0135uDfkMlAXL0WDCTwt72KpEQ.JPG&w=400"
      },
      {
        ime: "Astro",
        vrsta: "Pas",
        hrana: ["Ukradena hrana sa stola, krekeri, piletina"],
        godinaRodenja: 2016,
        slika: "http://www.azilzagreb.com/Image.ashx?img=Img/DSC_0144Wy4dXZzri0yUC6IzmptFqQ.JPG&w=400"
      }
  ];
  
  function godine(godinaRodenja) {
    return  new Date().getFullYear() - godinaRodenja;
  }
  
  function hrane(hrane) {
    return `
  <h4>Omiljena hrana</h4>
  <ul class="hrane-lista">
  ${hrane.map(hrane => `<li>${hrane}</li>`).join("")}
  </ul>
  `;
  }
  
  function ljubimci(pet) {
    return `
      <div class="zivotinja">
      <img class="zivotinja-slika" src="${pet.slika}">
      <h2 class="zivotinja-ime">${pet.ime} <span class="vrsta">(${pet.vrsta})</span></h2>
      <p><strong>Starost:</strong> ${godine(pet.godinaRodenja)} godina</p>
      ${pet.hrana ? hrane(pet.hrana) : ""}
      </div>
    `;
  }
  
  document.getElementById("wrap").innerHTML = `
    ${pets.map(ljubimci).join("")}
  `;
  

