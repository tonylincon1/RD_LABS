var form = document.getElementById('Página1');
                
    form.addEventListener("submit", function validaCadastro(evt) {
        var nome = document.getElementById('nome_footer');
        var telefone = document.getElementById('Telefone');
        var email = document.getElementById('E-mail');
        var duvida = document.getElementById('duvida_footer');
        var contErro = 0;
     
     
        /* Required */
        function required (tagErro,tagCampo,tagMensagem){
        caixa = document.querySelector(tagErro);
        if(tagCampo.value == "" | tagCampo.value == null){
            caixa.innerHTML = "*Favor preencher: ".concat(tagMensagem);
            caixa.style.display = 'block';
            contErro += 1;
        }else{
            caixa.style.display = 'none';
        }
        }

        /* Email */
        function validemail (tagErro,tagCampo){
            filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            caixa = document.querySelector(tagErro);
            if (filter.test(tagCampo.value)) {
                caixa.style.display = 'none';
            }
            else{
                caixa.innerHTML = "*Email não aceito. Por favor digite um e-mail valido.";
                caixa.style.display = 'block';
                contErro += 1;
            }
            }
        
        required('.msg-nome',nome,"Nome")
        required('.msg-telefone',telefone,"Telefone")
        required('.msg-email',email,"E-mail")
        validemail('.msg-email',email)
        required('.msg-interesse',duvida,"Dúvida")
        
    
    
        if(contErro > 0){
            evt.preventDefault();
            console.log(contErro)
        }
    
        else {
            console.log("dasd")
            form.addEventListener("submit", e => {
                e.preventDefault();
                fetch("https://hook.us1.make.com/lua598vxlxnhvmtm4p2auqvvimg6ldmk", {
                    method : "POST",
                    body: new FormData(document.getElementById("Página1")),
                }).then(
                    response => response.toString()
                ).then((html) => {
                    setTimeout(function() {
                        window.location.href = "duvida_enviada.html";
                    }, 1000);
                })
            });
        }

        },true)