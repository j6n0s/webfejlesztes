function szamol(){
    const cs = document.getElementsByName("csomag");
    const meb = Number(document.getElementById("utazok_sz").value);
    let a = ""
    
    for(i=0; i<3; i++){
        if (cs[i].checked){
            a = cs[i].value;
            }
        }
        
    if (a == "elso"){
        document.getElementById("osszeg").value = 300000 * meb;
    }else{if (a == "masodik"){
        document.getElementById("osszeg").value = 250000 * meb;
    }else{if(a == "harmadik"){
        document.getElementById("osszeg").value = 200000 * meb;
        }else{
            document.getElementById("osszeg").value = 0;
            }
        }
    }
}