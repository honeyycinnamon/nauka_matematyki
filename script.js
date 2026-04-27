            const pole= document.getElementById("pole");
            let x, y, wynik, aktualnyTyp;

            function losuj(typ) {
                let znak = "";
                aktualnyTyp = typ;

                switch (typ){
                    case 'dodawanie':
                        x = Math.floor(Math.random() * 101);
                        y = Math.floor(Math.random() * 101);
                        wynik = x + y;
                        znak = "+";
                        break;

                    case 'odejmowanie':
                        x = Math.floor(Math.random() * 101);
                        y = Math.floor(Math.random() * 101);
                        wynik = x - y;
                        znak = "-";
                        break;

                    case 'mnozenie':
                        x = Math.floor(Math.random() * 16);
                        y = Math.floor(Math.random() * 16);
                        wynik = x * y;
                        znak = "*";
                        break;

                    case 'dzielenie':
                        x = Math.floor(Math.random() * 16);
                        y = Math.floor(Math.random() * 14)+1;
                        wynik = x/y;
                        znak = "/"
                        break;
                }
                pole.innerHTML = x + znak + y + " = <input type='number' id='wpisane'>" +
                "<button onclick='sprawdz()' class='btn'>Sprawdź</button> " +
                "<button onclick='losuj(\"" +typ +"\")' class='btn'>Losuj</button>";
            }

            document.getElementById("dodawanie").onclick = () => losuj('dodawanie');
            document.getElementById("odejmowanie").onclick = () => losuj('odejmowanie');
            document.getElementById("mnozenie").onclick = () => losuj('mnozenie');
            document.getElementById("dzielenie").onclick = () => losuj('dzielenie');

            function sprawdz() {
                const wpisane = document.getElementById("wpisane").value;

                if (Number(wpisane) === wynik) {
                    alert('Wpisałeś dobry wynik!');
                } 
                else {
                    alert('Wpisałeś zły wynik! Poprawny to: ' + wynik);
                }
                losuj(aktualnyTyp);
                }
