
    var FGEditor = function() {

        let d = document;
        let FGE = this;

        this.init = function() {

            // Create temp area
            let div = d.createElement("div");
            div.style['display']='none';
            div.id="tmp-center";
            d.getElementsByTagName('body')[0].appendChild(div);
            let center = d.getElementById("tmp-center");

            d.querySelectorAll('.FGE-select').forEach(s => {
                s.addEventListener('click' , function() {

                    if(this.tmp == true) return;
                    this.tmp = true;
                    let id = this.attributes['data-id'].value,
                        sv = this.attributes['data-source'].value.split(','),
                        cm = this.attributes['data-command'].value,
                        op = '';

                    for(let i = 0 ; i < sv.length ; i++) {
                        op += "<option value='"+sv[i]+"'>"+sv[i]+"</option>";
                    }

                    this.innerHTML = "<select class='FGE-select' id='"+id+"' onChange='"+cm+"(\""+id+"\")'>"+op+"</select>";

                    FGE.btn_init();

                }, false)
            })
            d.querySelectorAll('.FGE-textarea').forEach(s => {
                s.addEventListener('click', function () {

                    if(this.tmp == true) return;
                    this.tmp = true;
                    let id = this.attributes['data-id'].value,
                        cm = this.attributes['data-command'].value;

                    this.innerHTML = String(this.innerHTML).trim();
                    center.innerHTML += "<div id='FGE-tmp-"+id+"'>"+this.innerHTML+"</div>";
                    this.innerHTML = "<textarea id='"+id+"' rows=4>"+this.innerHTML+"</textarea>"+
                                     "<div><button class='FGE-submit-button' type='button' data-tmp='"+id+"' onclick=\""+cm+"('"+id+"')\">確認</button>"+
                                     "<button class='FGE-cancel-button' data-tmp='"+id+"' type='button' >取消</button></div>";

                    FGE.btn_init();

                }, false)
            })
            d.querySelectorAll('.FGE-input').forEach(s => {
                s.addEventListener('click', function () {
                    
                    if(this.tmp == true) return;
                    this.tmp = true;
                    let id = this.attributes['data-id'].value,
                        cm = this.attributes['data-command'].value,
                        gt = this.attributes['data-type'].value;

                    this.innerHTML = String(this.innerHTML).trim();
                    center.innerHTML += "<div id='FGE-tmp-"+id+"'>"+this.innerHTML+"</div>";
                    this.innerHTML = "<input type='"+gt+"' name='price' id='"+id+
                                     "' value=\""+this.innerHTML+"\" οnkeyup=\"value=value.replace(/[^\d]/g,'')\""+
                                     " οnblur=\"value=value.replace(/[^\d]/g,'')\">"+
                                     "<div><button class='FGE-submit-button' type='button' data-tmp='"+id+"' onclick=\""+cm+"('"+id+"')\">確認</button>"+
                                     "<button class='FGE-cancel-button' data-tmp='"+id+"' type='button' >取消</button></div>";

                    FGE.btn_init();

                }, false);
            });
        }

        this.btn_init = function() {
            
            d.querySelectorAll('select.FGE-select').forEach(s => {
                s.addEventListener('change', function () {
                    let ep = this.parentElement;
                    ep.tmp = false;
                    ep.innerHTML = this.value;
                }, false);
            })

            d.querySelectorAll('button.FGE-submit-button').forEach(s => {
                s.addEventListener('click', function () {
                    let id = this.attributes['data-tmp'].value,
                        el = d.getElementById(id),
                        ep = el.parentElement,
                        et = d.getElementById('FGE-tmp-'+id);
                    ep.innerHTML = el.value;
                    et.remove();
                    setTimeout( () => ep.tmp=false ,100 );
                }, false);
            })

            d.querySelectorAll('button.FGE-cancel-button').forEach(s => {
                s.addEventListener('click', function () {
                    let id = this.attributes['data-tmp'].value;
                    let el = d.getElementById(id);
                    let ep = el.parentElement;
                    let et = d.getElementById('FGE-tmp-'+id);
                    ep.innerHTML = et.innerHTML;
                    et.remove();
                    setTimeout( () => ep.tmp=false ,100 );
                }, false);
            })

        }
    }
