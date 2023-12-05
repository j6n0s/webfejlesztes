function sz_csomag(){
    
    const kaja = document.getElementsByName("etterem");
    const u_hossz = document.getElementsByName("utazas_ido");
    const kaland = document.getElementsByName("kalandok");
    const erdek = document.getElementsByName("tevekenysegek");
    let kj = "";
    let u_h = "";
    let kal = "";
    let erd = "";
    let kj_sz = 0;
    let u_h_sz = 0;
    let kel_sz = 0;
    let erd_sz = 0;


    for(i=0; i<3; i++){
        if (kaja[i].checked){
            kj = kaja[i].value;
        }
    }
    
    
    for(i=0; i<3; i++){
        if (u_hossz[i].checked){
            u_h = u_hossz[i].value;
        }
    }

    for(i=0; i<3; i++){
        if (kaland[i].checked){
            kal = kaland[i].value;
        }
    }

    for(i=0; i<3; i++){
        if (erdek[i].checked){
            erd = erdek[i].value;
        }
    }

    if (kj == "jo_ar"){
        kj_sz = 1;
    }else{if(kj == "meg_fiz"){
        kj_sz = 2;
        }else{
            kj_sz = 3;
        }
    }

    if (u_h == "3_nap"){
        u_h_sz = 1;
    }else{if(u_h == "1_het"){
        u_h_sz = 2;
        }else{
            u_h_sz = 3;
        }
    }

    if (kal == "ny_pih"){
        kel_sz = 1;
    }else{if(kal == "m_pih"){
        kel_sz = 2;
        }else{
            kel_sz = 3;
        }
    }

    if (erd == "tortenelem"){
        erd_sz = 1; 
    }else{if(erd == "kult_p"){
        erd_sz = 2;
        }else{
            erd_sz = 3;
        }
    }

    if (kj_sz == 1 & u_h_sz == 1 & kel_sz == 1 & erd_sz == 1){
        document.getElementById("sz_cs_eredmeny").innerHTML = `Őnnek a felszínes szolgáltatás az ajánlott.`;
    }else{if(kj_sz == 2 & u_h_sz == 2 & kel_sz == 2 & erd_sz == 2){
        document.getElementById("sz_cs_eredmeny").innerHTML = `Részleges szolgáltatás az ajánlott.`;
    }else{if(kj_sz == 3 & u_h_sz == 3 & kel_sz == 3 & erd_sz == 3){
        document.getElementById("sz_cs_eredmeny").innerHTML = `A teljeskörű szolgáltatás az ajánlott.`; 
    }else{if(kj_sz >= 2 & u_h_sz >= 2 & kel_sz == 3 & erd_sz == 3){
        document.getElementById("sz_cs_eredmeny").innerHTML = `A teljeskörű szolgáltatás az ajánlott.`; 
    }else{if(kj_sz >= 1 & u_h_sz >= 1 & kel_sz >= 2 & erd_sz >= 2){
        document.getElementById("sz_cs_eredmeny").innerHTML = `Részleges szolgáltatás az ajánlott.`; 
    }else{if(kj_sz >= 1 & u_h_sz >= 2 & kel_sz >= 2 & erd_sz == 1){
        document.getElementById("sz_cs_eredmeny").innerHTML = `Őnnek a felszínes szolgáltatás az ajánlott.`;
    }
    }

    }

    }

    }
    }
    
}

function betolt(){
    let v_b = document.getElementById("kerdesek").value;

    if (v_b == "biztositas"){
        document.getElementById("valasz").innerHTML = `<h3>Egészségügyi Biztosítás</h3><p>Az USA-ban az egészségügyi ellátás magas költségekkel járhat, ezért érdemes olyan egészségügyi biztosítást kötni, amely fedezetet nyújt a váratlan betegségek vagy balesetek esetén. Ez magában foglalhatja az orvosi ellátás költségeit, a kórházi kezelést és a sürgősségi ellátást is.</p><h3>Utazási Biztosítás</h3><p>Az utazási biztosítás segíthet abban, hogy fedezetet nyújtson olyan váratlan eseményekre, mint például az utazás lemondása, a poggyász elvesztése vagy késése, valamint a repülőjegyekkel kapcsolatos problémák esetén.</p><h3>Felelősségbiztosítás</h3><p>Ha autót bérelsz az USA-ban, érdemes lehet kiegészítő felelősségbiztosítást kötni. Ez azért fontos, mert az autóbérlési szerződések gyakran csak minimális felelősségbiztosítást tartalmaznak, és egy baleset esetén a károk fedezetének hiánya jelentős anyagi terhet róhat rád.</p><h3>Reptéri Biztosítás</h3><p>Egyes biztosítók kínálnak olyan fedezetet, amely segít abban, hogy ha a repülőd késik, vagy törlik a járatodat, akkor kártalanítást kaphass, és segítsenek a további utazás megszervezésében.</p>`;
    }
    else{
        if (v_b == "lemondas"){
            document.getElementById("valasz").innerHTML = `<h3>Utazás lemondása</h3><p>Leadott és visszaigazolt rendelése után az elkövetkező 48 órában tudja lemondani a rendelését pénzvisszafizetési lehtőséggel.</p><p>Ha eltelt a rendelés utáni 48 óra akkor a visszatérítés nem vehető igénybe és a lefoglalásba került pénzösszeget sehogysem kaphatja vissz a vásárló!!</p>`;
        }
        else{
            if(v_b == "eleres"){
                document.getElementById("valasz").innerHTML = `<h3>Elérhetőségeink</h3><p>Bármikor el tud minket érni ezen a telefonszámon: +36302514756</p><h4>Vagy</h4><p>Facebook oldalunkon: New York utazási iroda fb_csoport</p><h4>vagy</h4><p>Emailben: help_desk@ny.utazasi-iroda.hu</p><p>Ügyfélszolgálatunk a nap 24 órájában üzemel!</p>`;
            }
            else{if (v_b == "v_csomag"){
                document.getElementById("valasz").innerHTML = `
                <form>
                <div id="valasztasok">
                <h4 class="kivetel">Milyen étkezéseken szeretne részvenni?</h4>
                <label>jó árértékarányú<input type="radio" name="etterem" value="jo_ar"></label>
                <label>megfizethető<input type="radio" name="etterem" value="meg_fiz"></label   >
                <label  >luxus éttermek<input type="radio" name="etterem" value="premium"></label >
                <h4 class="kivetel">Milyen hosszúra tervezi az utazását</h4>
                <label>kevesebb mint 3 nap<input type="radio" name="utazas_ido" value="3_nap"></label>
                <label>egy hét<input type="radio" name="utazas_ido" value="1_het"></label>
                <label>több mint egy hét<input type="radio" name="utazas_ido" value="tobb_het"></label>
                <h4 class="kivetel">Szereti-e a kalandokat?</h4>
                <label>Inkább a nyugott pihenés<input type="radio" name="kalandok" value="ny_pih"></label>
                <label>Meghitt utazás kalandokkal<input type="radio" name="kalandok" value="m_pih"></label>
                <label>Kalandos utazás<input type="radio" name="kalandok" value="k_kalandok"></label>
                <h4 class="kivetel">Mi iránt érdeklődik ha elutazik egy távoli országba?</h4>
                <label>A hely történelméről<input type="radio" name="tevekenysegek" value="tortenelem"></label>
                <label>Kultúrális programokról<input type="radio" name="tevekenysegek" value="kult_p"></label>
                <label>Nightclubbok<input type="radio" name="tevekenysegek" value="nightclub"></label>
                <div>
                <input type="button" value="Eredmény" onClick="sz_csomag()">
                <input type="reset" value="Alaphelyzet">
                <h4 class="kivetel" id="sz_cs_eredmeny"></h4>
                </form>
                `;
            }else{
                document.getElementById("valasz").innerHTML = `???`;
                }
            }
        }
    }
}