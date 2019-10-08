class Format {
  constructor(size, width, height, dimension, dimensionCM, dimensionInch) {
    this.size = size;
    this.width = width;
    this.height = height;
    this.dimension = dimension;
    this.dimensionCM = dimensionCM;
    this.dimensionInch = dimensionInch;
  }
}

const popup = () => {
  const formatSize = {
    A0: new Format(
      "A0",
      "1189mm",
      "841mm",
      "1189 x 841mm",
      "118.9 x 84.1cm",
      "46.81'' x 33.11''"
    ),
    A1: new Format(
      "A1",
      "841mm",
      "594mm",
      "841 x 594mm",
      "84.1 x 59.4cm",
      "33.11'' x 23.39''"
    ),
    A2: new Format(
      "A2",
      "594mm",
      "420mm",
      "594 x 420mm",
      "59.4 x 42.0cm",
      "23.39'' x 16.54''"
    ),
    A3: new Format(
      "A3",
      "420mm",
      "297mm",
      "420 x 297mm",
      "42.0 x 29.7cm",
      "16.54'' x 11.69''"
    ),
    A4: new Format(
      "A4",
      "297mm",
      "210mm",
      "297 x 210mm",
      "84.1 x 59.4cm",
      "11.69'' x 8.27''"
    ),
    A5: new Format(
      "A5",
      "210mm",
      "148mm",
      "210 x 148mm",
      "21.0 x 14.8cm",
      "8.27'' x 5.83''"
    ),
    A6: new Format(
      "A6",
      "148mm",
      "105mm",
      "148 x 105mm",
      "14.8 x 10.5cm",
      "5.83'' x 4.13''"
    ),
    A7: new Format(
      "A7",
      "105mm",
      "74mm",
      "105 x 74mm",
      "10.5 x 7.4cm",
      "4.13'' x 2.91''"
    ),
    A8: new Format(
      "A8",
      "74mm",
      "52mm",
      "74 x 52mm",
      "7.4 x 5.2cm",
      "2.91'' x 2.05''"
    ),
    A9: new Format(
      "A9",
      "52mm",
      "37mm",
      "52 x 37mm",
      "5.2 x 3.7cm",
      "2.05'' x 1.46''"
    ),
    A10: new Format(
      "A10",
      "37mm",
      "26mm",
      "37 x 26mm",
      "3.7 x 2.6cm",
      "1.46'' x 1.02''"
    ),
    B0: new Format(
      "B0",
      "1414mm",
      "1000mm",
      "1414 x 1000mm",
      "141.4 x 100.0cm",
      "55.67'' x 39.37''"
    ),
    B1: new Format(
      "B1",
      "1000mm",
      "707mm",
      "1000 x 707mm",
      "100.0 x 70.7cm",
      "39.37'' x 27.83''"
    ),
    B2: new Format(
      "B2",
      "707mm",
      "500mm",
      "707 x 500mm",
      "70.7 x 50.0c",
      "27.83'' x 19.69''"
    ),
    B3: new Format(
      "B3",
      "500mm",
      "353mm",
      "500 x 353mm",
      "50.0 x 35.3cm",
      "19.69'' x 13.90''"
    ),
    B4: new Format(
      "B4",
      "353mm",
      "250mm",
      "353 x 250mm",
      "35.3 x 25.0cm",
      "13.90'' x 9.84''"
    ),
    B5: new Format(
      "B5",
      "250mm",
      "176mm",
      "250 x 176mm",
      "25.0 x 17.6cm",
      "9.84'' x 6.93''"
    ),
    B6: new Format(
      "B6",
      "176mm",
      "125mm",
      "176 x 125mm",
      "17.6 x 12.5cm",
      "6.93'' x 4.92''"
    ),
    B7: new Format(
      "B7",
      "125mm",
      "88mm",
      "125 x 88mm",
      "12.5 x 8.8cm",
      "4.92'' x 3.46''"
    ),
    B8: new Format(
      "B8",
      "88mm",
      "62mm",
      "88 x 62mm",
      "8.8 x 6.2cm",
      "3.46'' x 2.44''"
    ),
    B9: new Format(
      "B9",
      "62mm",
      "44mm",
      "62 x 44mm",
      "6.2 x 4.4cm",
      "2.44'' x 1.73''"
    ),
    B10: new Format(
      "B10",
      "44mm",
      "31mm",
      "44 x 31mm",
      "4.4 x 3.1cm",
      "1.73'' x 1.22''"
    ),
    C0: new Format(
      "C0",
      "1297mm",
      "917mm",
      "1297 x 917mm",
      "129.7 x 91.7cm",
      "51.5'' x 36.10''"
    ),
    C1: new Format(
      "C1",
      "917mm",
      "648mm",
      "917 x 648mm",
      "91.7 x 64.8cm",
      "36.10'' x 25.51''"
    ),
    C2: new Format(
      "C2",
      "648mm",
      "458mm",
      "648 x 458mm",
      "64.8 x 45.8cm",
      "25.51'' x 18.03''"
    ),
    C3: new Format(
      "C3",
      "458mm",
      "324mm",
      "458 x 324mm",
      "45.8 x 32.4cm",
      "18.03'' x 12.76''"
    ),
    C4: new Format(
      "C4",
      "324mm",
      "229mm",
      "324 x 229mm",
      "32.4 x 22.9cm",
      "12.76'' x 9.02''"
    ),
    C5: new Format(
      "C5",
      "229mm",
      "162mm",
      "229 x 162mm",
      "22.9 x 16.2cm",
      "9.02'' x 6.38''"
    ),
    C6: new Format(
      "C6",
      "162mm",
      "114mm",
      "162 x 114mm",
      "16.2 x 11.4cm",
      "6.38'' x 4.49''"
    ),
    C7: new Format(
      "C7",
      "114mm",
      "81mm",
      "114 x 81mm",
      "11.4 x 8.1cm",
      "4.49'' x 3.19''"
    ),
    C8: new Format(
      "C8",
      "81mm",
      "57mm",
      "81 x 57mm",
      "8.1 x 5.7cm",
      "3.19'' x 2.24''"
    ),
    C9: new Format(
      "C9",
      "57mm",
      "40mm",
      "57 x 40mm",
      "5.7 x 4.0cm",
      "2.24'' x 1.57''"
    ),
    C10: new Format(
      "C10",
      "40mm",
      "28mm",
      "40 x 28mm",
      "4.0 x 2.8cm",
      "1.57'' x 1.10''"
    )
  };

  const popup__block = document.querySelector(".popup__block");
  const popup__size = document.querySelector(".popup__size");
  const popup__width = document.querySelector(".popup__width");
  const popup__height = document.querySelector(".popup__height");
  const popup__dimension = document.querySelector(
    ".popup__dimension--generall"
  );
  const popup__dimensionCM = document.querySelector(".popup__dimension--CM");
  const popup__dimensionInch = document.querySelector(
    ".popup__dimension--Inch"
  );
  const format__block = document.querySelectorAll(".format__block");
  const format__popup = document.querySelector(".format__popup");
  const popup__close = document.querySelector(".popup__close");

  // Popup after click
  const showPopup = format => {
    // Change color depending on format A, B, C
    if (format.startsWith("A")) {
      popup__block.style.backgroundColor = "#5A9EDC";
    } else if (format.startsWith("B")) {
      popup__block.style.backgroundColor = "#127E32";
    } else {
      popup__block.style.backgroundColor = "#FFB238";
    }
    // Add format info to popup
    popup__size.textContent = `Size ${formatSize[format].size}:`;
    popup__dimension.innerHTML = `<strong>${formatSize[format].dimension}</strong>`;
    popup__width.innerHTML = `Width: <strong>${formatSize[format].width}</strong>`;
    popup__height.innerHTML = `Height: <strong>${formatSize[format].height}</strong>`;
    popup__dimensionCM.innerHTML = `Dimension in centimetre: <br><strong>${formatSize[format].dimensionCM}</strong>`;
    popup__dimensionInch.innerHTML = `Dimension in inch: <br><strong>${formatSize[format].dimensionInch}</strong>`;
  };

  // Open popup after 0.3s to see visualization clicking
  format__block.forEach(block => {
    block.addEventListener("click", () => {
      setTimeout(function() {
        for (let format in formatSize) {
          if (block.firstChild.nextSibling.textContent === format) {
            format__popup.classList.add("format__popup--active");
            showPopup(format);
          }
        }
      }, 300);
    });
  });

  // Close popup
  popup__close.addEventListener("click", e => {
    e.target.parentNode.parentNode.classList.remove("format__popup--active");
  });
};

// Simple visualization on clicking
const showClick = () => {
  const format__block = [...document.querySelectorAll(".format__block")];
  format__block.forEach(block => {
    block.addEventListener("mousedown", () => {
      block.classList.add("format__block--click");
    });
    block.addEventListener("mouseup", () => {
      block.classList.remove("format__block--click");
    });
  });
};

showClick();
popup();
