/*--------------------------------------------------------------------------------------------------*/
/*---------------------------------------MOSTRUÁRIO-------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------*/

function mudar_produto(id){
	document.getElementById('nome_produto').innerHTML = id;
	document.getElementById('Camisetas').style.display = 'none';
	document.getElementById('Calças').style.display = 'none';
	document.getElementById('Kimonos').style.display = 'none';
	document.getElementById('Uniformes').style.display = 'none';
	document.getElementById('Meias').style.display = 'none';
	document.getElementById('Bainhas').style.display = 'none';
	document.getElementById(id).style.display = 'block';
	if(id == 'Meias'){
		document.getElementById('relacao_de_tamanhos').innerHTML = "<p><b>Tamanhos:</b> 30 a 38, 40 a 48, 50, 52;<br><b>Cores:</b> Branco, preto, cinza e grafite;</p>";
	}else if (id == 'Bainhas'){
		document.getElementById('relacao_de_tamanhos').innerHTML = "<p><b>Formatos:</b> Espada, Espadão, Facão, Canivete, Katana;<br><b>Cores:</b> Completamente personalizado;</p>"
	} else{
		document.getElementById('relacao_de_tamanhos').innerHTML = "<p><b>Tamanhos:</b> P, M, G, GG;<br><b>Cores:</b> Branco, preto, amarelo, vermelho, cinza, grafite e azul-marinho;</p>"
	};
};

/*--------------------------------------------------------------------------------------------------*/
/*---------------------------------------BOTÕES DE ROUPA--------------------------------------------*/
/*--------------------------------------------------------------------------------------------------*/

function inflar_camiseta(){
	document.getElementById('camiseta_pequena').style.animationName = 'inflar_camiseta';
	document.getElementById('camiseta_pequena').style.animationDuration = "0.1s";
	document.getElementById('camiseta_pequena').style.zIndex = 10;
	document.getElementById('camiseta_pequena').style.width = "60px";
	document.getElementById('camiseta_pequena').style.marginTop = "15px";
	document.getElementById('camiseta_pequena').style.marginLeft = "756px";
	document.getElementById('moldura_chinesa1').style.animationName = 'inflar_moldura1';
	document.getElementById('moldura_chinesa1').style.animationDuration = "0.1s";
	document.getElementById('moldura_chinesa1').style.zIndex = 11;
	document.getElementById('moldura_chinesa1').style.width = "90px";
	document.getElementById('moldura_chinesa1').style.marginTop = "-5px";
	document.getElementById('moldura_chinesa1').style.marginLeft = "743px";
};

function desinflar_camiseta(){
	document.getElementById('camiseta_pequena').style.animationName = 'desinflar_camiseta';
	document.getElementById('camiseta_pequena').style.animationDuration = "0.1s";
	document.getElementById('camiseta_pequena').style.zIndex = 0;
	document.getElementById('camiseta_pequena').style.width = "50px";
	document.getElementById('camiseta_pequena').style.marginTop = "18px";
	document.getElementById('camiseta_pequena').style.marginLeft = "763px";
	document.getElementById('moldura_chinesa1').style.animationName = 'desinflar_moldura1';
	document.getElementById('moldura_chinesa1').style.animationDuration = "0.1s";
	document.getElementById('moldura_chinesa1').style.zIndex = 1;
	document.getElementById('moldura_chinesa1').style.width = "70px";
	document.getElementById('moldura_chinesa1').style.marginTop = "5px";
	document.getElementById('moldura_chinesa1').style.marginLeft = "753px";
};

function inflar_calca(){
	document.getElementById('calca_pequena').style.animationName = 'inflar_calca';
	document.getElementById('calca_pequena').style.animationDuration = "0.1s";
	document.getElementById('calca_pequena').style.zIndex = 10;
	document.getElementById('calca_pequena').style.width = "54px";
	document.getElementById('calca_pequena').style.marginTop = "77px";
	document.getElementById('calca_pequena').style.marginLeft = "731px";
	document.getElementById('moldura_chinesa2').style.animationName = 'inflar_moldura2';
	document.getElementById('moldura_chinesa2').style.animationDuration = "0.1s";
	document.getElementById('moldura_chinesa2').style.zIndex = 11;
	document.getElementById('moldura_chinesa2').style.width = "90px";
	document.getElementById('moldura_chinesa2').style.marginTop = "60px";
	document.getElementById('moldura_chinesa2').style.marginLeft = "710px";
};

function desinflar_calca(){
	document.getElementById('calca_pequena').style.animationName = 'desinflar_calca';
	document.getElementById('calca_pequena').style.animationDuration = "0.1s";
	document.getElementById('calca_pequena').style.zIndex = 0;
	document.getElementById('calca_pequena').style.width = "44px";
	document.getElementById('calca_pequena').style.marginTop = "80px";
	document.getElementById('calca_pequena').style.marginLeft = "733px";
	document.getElementById('moldura_chinesa2').style.animationName = 'desinflar_moldura2';
	document.getElementById('moldura_chinesa2').style.animationDuration = "0.1s";
	document.getElementById('moldura_chinesa2').style.zIndex = 1;
	document.getElementById('moldura_chinesa2').style.width = "70px";
	document.getElementById('moldura_chinesa2').style.marginTop = "70px";
	document.getElementById('moldura_chinesa2').style.marginLeft = "720px";
};

function inflar_kimono(){
	document.getElementById('kimono_pequeno').style.animationName = 'inflar_kimono';
	document.getElementById('kimono_pequeno').style.animationDuration = "0.1s";
	document.getElementById('kimono_pequeno').style.zIndex = 10;
	document.getElementById('kimono_pequeno').style.width = "59px";
	document.getElementById('kimono_pequeno').style.marginTop = "151px";
	document.getElementById('kimono_pequeno').style.marginLeft = "705px";
	document.getElementById('moldura_chinesa3').style.animationName = 'inflar_moldura3';
	document.getElementById('moldura_chinesa3').style.animationDuration = "0.1s";
	document.getElementById('moldura_chinesa3').style.zIndex = 11;
	document.getElementById('moldura_chinesa3').style.width = "90px";
	document.getElementById('moldura_chinesa3').style.marginTop = "130px";
	document.getElementById('moldura_chinesa3').style.marginLeft = "689px";
};

function desinflar_kimono(){
	document.getElementById('kimono_pequeno').style.animationName = 'desinflar_kimono';
	document.getElementById('kimono_pequeno').style.animationDuration = "0.1s";
	document.getElementById('kimono_pequeno').style.zIndex = 0;
	document.getElementById('kimono_pequeno').style.width = "44px";
	document.getElementById('kimono_pequeno').style.marginTop = "154px";
	document.getElementById('kimono_pequeno').style.marginLeft = "712px";
	document.getElementById('moldura_chinesa3').style.animationName = 'desinflar_moldura3';
	document.getElementById('moldura_chinesa3').style.animationDuration = "0.1s";
	document.getElementById('moldura_chinesa3').style.zIndex = 1;
	document.getElementById('moldura_chinesa3').style.width = "70px";
	document.getElementById('moldura_chinesa3').style.marginTop = "140px";
	document.getElementById('moldura_chinesa3').style.marginLeft = "699px";
};

function inflar_uniforme(){
	document.getElementById('uniforme_pequeno').style.animationName = 'inflar_uniforme';
	document.getElementById('uniforme_pequeno').style.animationDuration = "0.1s";
	document.getElementById('uniforme_pequeno').style.zIndex = 10;
	document.getElementById('uniforme_pequeno').style.width = "57px";
	document.getElementById('uniforme_pequeno').style.marginTop = "225px";
	document.getElementById('uniforme_pequeno').style.marginLeft = "704px";
	document.getElementById('moldura_chinesa4').style.animationName = 'inflar_moldura4';
	document.getElementById('moldura_chinesa4').style.animationDuration = "0.1s";
	document.getElementById('moldura_chinesa4').style.zIndex = 11;
	document.getElementById('moldura_chinesa4').style.width = "90px";
	document.getElementById('moldura_chinesa4').style.marginTop = "205px";
	document.getElementById('moldura_chinesa4').style.marginLeft = "686px";
};

function desinflar_uniforme(){
	document.getElementById('uniforme_pequeno').style.animationName = 'desinflar_uniforme';
	document.getElementById('uniforme_pequeno').style.animationDuration = "0.1s";
	document.getElementById('uniforme_pequeno').style.zIndex = 0;
	document.getElementById('uniforme_pequeno').style.width = "44px";
	document.getElementById('uniforme_pequeno').style.marginTop = "228px";
	document.getElementById('uniforme_pequeno').style.marginLeft = "709px";
	document.getElementById('moldura_chinesa4').style.animationName = 'desinflar_moldura4';
	document.getElementById('moldura_chinesa4').style.animationDuration = "0.1s";
	document.getElementById('moldura_chinesa4').style.zIndex = 1;
	document.getElementById('moldura_chinesa4').style.width = "70px";
	document.getElementById('moldura_chinesa4').style.marginTop = "215px";
	document.getElementById('moldura_chinesa4').style.marginLeft = "696px";
};

function inflar_meia(){
	document.getElementById('meia_pequena').style.animationName = 'inflar_meia';
	document.getElementById('meia_pequena').style.animationDuration = "0.1s";
	document.getElementById('meia_pequena').style.zIndex = 10;
	document.getElementById('meia_pequena').style.width = "54px";
	document.getElementById('meia_pequena').style.marginTop = "297px";
	document.getElementById('meia_pequena').style.marginLeft = "732px";
	document.getElementById('moldura_chinesa5').style.animationName = 'inflar_moldura5';
	document.getElementById('moldura_chinesa5').style.animationDuration = "0.1s";
	document.getElementById('moldura_chinesa5').style.zIndex = 11;
	document.getElementById('moldura_chinesa5').style.width = "90px";
	document.getElementById('moldura_chinesa5').style.marginTop = "275px";
	document.getElementById('moldura_chinesa5').style.marginLeft = "710px";
};

function desinflar_meia(){
	document.getElementById('meia_pequena').style.animationName = 'desinflar_meia';
	document.getElementById('meia_pequena').style.animationDuration = "0.1s";
	document.getElementById('meia_pequena').style.zIndex = 0;
	document.getElementById('meia_pequena').style.width = "44px";
	document.getElementById('meia_pequena').style.marginTop = "300px";
	document.getElementById('meia_pequena').style.marginLeft = "732px";
	document.getElementById('moldura_chinesa5').style.animationName = 'desinflar_moldura5';
	document.getElementById('moldura_chinesa5').style.animationDuration = "0.1s";
	document.getElementById('moldura_chinesa5').style.zIndex = 1;
	document.getElementById('moldura_chinesa5').style.width = "70px";
	document.getElementById('moldura_chinesa5').style.marginTop = "285px";
	document.getElementById('moldura_chinesa5').style.marginLeft = "720px";
};

function inflar_bainha(){
	document.getElementById('bainha_pequena').style.animationName = 'inflar_bainha';
	document.getElementById('bainha_pequena').style.animationDuration = "0.1s";
	document.getElementById('bainha_pequena').style.zIndex = 10;
	document.getElementById('bainha_pequena').style.width = "57px";
	document.getElementById('bainha_pequena').style.marginTop = "362px";
	document.getElementById('bainha_pequena').style.marginLeft = "762px";
	document.getElementById('moldura_chinesa6').style.animationName = 'inflar_moldura6';
	document.getElementById('moldura_chinesa6').style.animationDuration = "0.1s";
	document.getElementById('moldura_chinesa6').style.zIndex = 11;
	document.getElementById('moldura_chinesa6').style.width = "90px";
	document.getElementById('moldura_chinesa6').style.marginTop = "340px";
	document.getElementById('moldura_chinesa6').style.marginLeft = "745px";
};

function desinflar_bainha(){
	document.getElementById('bainha_pequena').style.animationName = 'desinflar_bainha';
	document.getElementById('bainha_pequena').style.animationDuration = "0.1s";
	document.getElementById('bainha_pequena').style.zIndex = 0;
	document.getElementById('bainha_pequena').style.width = "44px";
	document.getElementById('bainha_pequena').style.marginTop = "365px";
	document.getElementById('bainha_pequena').style.marginLeft = "765px";
	document.getElementById('moldura_chinesa6').style.animationName = 'desinflar_moldura6';
	document.getElementById('moldura_chinesa6').style.animationDuration = "0.1s";
	document.getElementById('moldura_chinesa6').style.zIndex = 1;
	document.getElementById('moldura_chinesa6').style.width = "70px";
	document.getElementById('moldura_chinesa6').style.marginTop = "350px";
	document.getElementById('moldura_chinesa6').style.marginLeft = "755px";
};

/*--------------------------------------------------------------------------------------------------*/
/*------------------------------------------CARRINHO------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------*/

var valor_total = 0;
var preco = 0;

controle_produtos = ['Camiseta Polo', 'Camiseta Regata', 'Camiseta Gola-O', 'Camiseta Gola-V', 
					'Calça Jeans', 'Calça Legging', 'Calça Tactel', 'Kimono Kurotomesode', 'Kimono Irotomesode', 
					'Kimono Furisode', 'Kimono Houmongi', 'Kimono Tsukesage', 'Kimono Iromuji', 'Kimono Komon', 
					'Kimono Tomesode', 'Kimono Yukata', 'Uniforme tradicional - Marrom', 'Uniforme tradicional - Azul marinho',
					'Uniforme tradicional - Preto', 'Meia cano baixo', 'Meia cano médio', 'Meia cano alto', 'Bainha de machado', 
					'Bainha de katana', 'Bainha de Nichirin', 'Bainha de shuriken', 'Bainha de canivete', 'Bainha de espadão'
				]


const array_carrinho = [];
const array_quantidade = [];
const array_valor = [];
achou = false;
html_lista_carrinho = "";
const controle_carrinho = [];

function carrinho_nezuko(carrinho){
	carrinho.src = 'Carrinho_Nezuko.png';
};

function carrinho_normal(carrinho){
	carrinho.src = 'Carrinho.png';
};

function selecionou_produto(){
	produto = document.getElementById('produto_selecionado').value;
	document.getElementById('nome_do_produto').innerHTML = '----------- ' + produto +  ' -----------';
	if (produto.includes("Camiseta")){
		preco = 50;
		document.getElementById('produto').innerHTML = "<option selected disabled><optgroup label='Tamanhos de Camiseta'></option><option value='PP'>Tamanho PP</option><option value='P'>Tamanho P</option><option value='M'>Tamanho M</option><option value='G'>Tamanho G</option><option value='GG'>Tamanho GG</option></optgroup>"
		document.getElementById('produto').disabled = false;
		document.getElementById('produto_carrinho').src = "camisetas.jpg";
	} else if (produto.includes('Calça')){
		preco = 70;
		document.getElementById('produto').innerHTML = "<option selected disabled><optgroup label='Tamanhos de Calça'></option><option value='PP'>Tamanho PP</option><option value='P'>Tamanho P</option><option value='M'>Tamanho M</option><option value='G'>Tamanho G</option><option value='GG'>Tamanho GG</option></optgroup>"
		document.getElementById('produto').disabled = false;
		document.getElementById('produto_carrinho').src = "Calças.jpg";
	} else if (produto.includes('Kimono')){
		preco = 200;
		document.getElementById('produto').innerHTML = "<option selected disabled><optgroup label='Tamanhos de Kimono'></option><option value='PP'>Tamanho PP</option><option value='P'>Tamanho P</option><option value='M'>Tamanho M</option><option value='G'>Tamanho G</option><option value='GG'>Tamanho GG</option></optgroup>"
		document.getElementById('produto').disabled = false;
		document.getElementById('produto_carrinho').src = "kimonos.jpeg";
	} else if (produto.includes('Uniforme')){
		preco = 600;
		document.getElementById('produto').innerHTML = "<option selected disabled><optgroup label='Tamanhos de Uniforme'></option><option value='PP'>Tamanho PP</option><option value='P'>Tamanho P</option><option value='M'>Tamanho M</option><option value='G'>Tamanho G</option><option value='GG'>Tamanho GG</option></optgroup>"
		document.getElementById('produto').disabled = false;
		document.getElementById('produto_carrinho').src = "Uniforme.png";
	} else if (produto.includes('Meia')){
		preco = 30;
		document.getElementById('produto').innerHTML = "<option selected disabled><optgroup label='Tamanhos de Meia'></option><option value='40-46'>Meias 40-46</option><option value='32-38'>Meias 32-38</option><option value='24-30'>Meias 24-30</option></optgroup>"
		document.getElementById('produto').disabled = false;
		document.getElementById('produto_carrinho').src = "Meias.jpg";
	} else if (produto.includes('Bainha')){
		preco = 150;
		document.getElementById('produto').disabled = true;
		document.getElementById('produto').innerHTML = "<option selected disabled>-</option>";
		document.getElementById('produto_carrinho').src = "Bainhas.jpg";
		if (produto.includes('machado')){
			document.getElementById('informe_tamanho').innerHTML = "Tamanho: Machado";
		}else if (produto.includes('katana')){
			document.getElementById('informe_tamanho').innerHTML = "Tamanho: Katana";
		}else if (produto.includes('nichirin')){
			document.getElementById('informe_tamanho').innerHTML = "Tamanho: Nichirin";
		}else if (produto.includes('shuriken')){
			document.getElementById('informe_tamanho').innerHTML = "Tamanho: Shuriken";
		}else if (produto.includes('canivete')){
			document.getElementById('informe_tamanho').innerHTML = "Tamanho: Canivete";
		}else if (produto.includes('espadão')){
			document.getElementById('informe_tamanho').innerHTML = "Tamanho: Espadão";
		}
	}else{
		document.getElementById('produto').disabled = true;
		document.getElementById('produto').innerHTML = "<option selected disabled></option>";
		document.getElementById('nome_do_produto').innerHTML = '----------- -----------';
		preco = 0;
		document.getElementById('informe_tamanho').innerHTML = "Tamanho: ";
		document.getElementById('produto_carrinho').src = "";
	};
	document.getElementById('informe_preço').innerHTML = "Preço unitário: R$ " + preco + ",00";
}

function selecionou_tamanho(){
	tamanho = document.getElementById('produto').value;
	document.getElementById('informe_tamanho').innerHTML = "Tamanho: " + tamanho
};

function ad_carrinho(){
	
	if (document.getElementById('produto').value != "" && document.getElementById('quantidade').value != "" && document.getElementById('quantidade').value > 0 && document.getElementById('informe_tamanho').innerHTML != "Tamanho: "){

		novo_produto = controle_produtos[controle_produtos.indexOf(produto)]
		confirmado = false;

		controle_produtos.forEach(function(controle){
			if (produto == controle){
				confirmado = true;
			}
		})

		if (confirmado == true){
			array_carrinho.push(document.getElementById('produto_selecionado').value + " ----------- " + document.getElementById('produto').value)
			array_quantidade.push(parseInt(document.getElementById('quantidade').value))
			controle_carrinho.push(novo_produto);
			if (document.getElementById('produto_selecionado').value.includes('Camiseta')){
				array_valor.push(parseInt(document.getElementById('quantidade').value) * 50)
			}else if (document.getElementById('produto_selecionado').value.includes('Calça')){
				array_valor.push(parseInt(document.getElementById('quantidade').value) * 70)
			}else if (document.getElementById('produto_selecionado').value.includes('Kimono')){
				array_valor.push(parseInt(document.getElementById('quantidade').value) * 200)
			}else if (document.getElementById('produto_selecionado').value.includes('Uniforme')){
				array_valor.push(parseInt(document.getElementById('quantidade').value) * 600)
			}else if (document.getElementById('produto_selecionado').value.includes('Meia')){
				array_valor.push(parseInt(document.getElementById('quantidade').value) * 30)
			}else if (document.getElementById('produto_selecionado').value.includes('Bainha')){
				array_valor.push(parseInt(document.getElementById('quantidade').value) * 150)
			}
			if (array_carrinho.length > 6){
				document.getElementById('formulário_de_compra').style.marginBottom = (array_carrinho.length - 6) * 70 + "px";
			}
		}else{
			alert("Erro: Informe todos os dados de produto corretamente")
		};
	}else{
		alert("Erro: Informe todos os dados de produto corretamente")
	}

	array_carrinho.forEach((produto, index) => {
		if (index !== array_carrinho.indexOf(produto)){
			array_carrinho.pop(index);
			array_quantidade[array_carrinho.indexOf(produto)] += parseInt(array_quantidade.pop(index));
			array_valor[array_carrinho.indexOf(produto)] += parseInt(array_valor.pop(index));
			achou = true
		}
	})

	var_soma = 0;

	array_valor.forEach(function(valor){
		var_soma += valor;
	});

	document.getElementById('total').innerHTML = "Total -------------------- R$ " + var_soma + ",00";

	console.log(array_carrinho)
	console.log(array_quantidade)

	array_carrinho.forEach((produto, index) =>{
		html_lista_carrinho += "<li><b class='nome_produto'>" + produto + "</b><b class='tamanho_produto'>" + "</b><br><i class='quantidade_produto'>Quantidade: </i>" + array_quantidade[index] + "<br><i class='quantidade_produto'>Valor: R$" + array_valor[index] + ",00</i></li><br><button class='remover_um_produto' onclick = remover_um_produto('"
		html_lista_carrinho += array_carrinho[index].replaceAll(" ", "").trim();
		html_lista_carrinho += "');>--</button><button class='remover_todos_produtos' onclick=remover_todos_produtos('"  
		html_lista_carrinho += array_carrinho[index].replaceAll(" ", "").trim();
		html_lista_carrinho += "')> X</button>";
	})

	document.getElementById('listinha').innerHTML = html_lista_carrinho;
	
	console.log(html_lista_carrinho)
	html_lista_carrinho = ""
	confirmado = false;
};

function remover_um_produto(outro_coiso){
	
	array_carrinho.forEach(function(merda){
		if (merda.replaceAll(" ", "").trim() == outro_coiso){
			console.log("Outro Coiso: " + outro_coiso)
			outra_merda = array_carrinho.indexOf(merda)
			console.log( "Outra Merda: " + outra_merda)
		}
	})

	array_quantidade[outra_merda] -= 1;

	console.log("Quantidades: " + array_quantidade)

	if (outro_coiso.includes('Camiseta')){
		array_valor[outra_merda] -= 50;
	}else if (outro_coiso.includes('Calça')){
		array_valor[outra_merda] -= 70;
	}else if (outro_coiso.includes('Kimono')){
		array_valor[outra_merda] -= 200;
	}else if (outro_coiso.includes('Uniforme')){
		array_valor[outra_merda] -= 600;
	}else if (outro_coiso.includes('Meia')){
		array_valor[outra_merda] -= 30;
	}else if (outro_coiso.includes('Bainha')){
		array_valor[outra_merda] -= 150;
	}

	if (array_quantidade[outra_merda] <= 0){
		if (array_carrinho.length > 5){
			document.getElementById('formulário_de_compra').style.marginBottom = (6 - array_carrinho.length) * -70 + "px";
		}
		array_quantidade.splice(outra_merda, 1)
		array_carrinho.splice(outra_merda, 1)
		array_valor.splice(outra_merda, 1)
	}

	var_soma = 0;

	array_valor.forEach(function(valor){
		var_soma += valor;
	});

	document.getElementById('total').innerHTML = "Total -------------------- R$ " + var_soma + ",00";

	array_carrinho.forEach((produto, index) =>{
		html_lista_carrinho += "<li><b class='nome_produto'>" + produto + "</b><b class='tamanho_produto'>" + "</b><br><i class='quantidade_produto'>Quantidade: </i>" + array_quantidade[index] + "<br><i class='quantidade_produto'>Valor: R$" + array_valor[index] + ",00</i></li><br><button class='remover_um_produto' onclick = remover_um_produto('"
		html_lista_carrinho += array_carrinho[index].replaceAll(" ", "").trim();
		html_lista_carrinho += "');>--</button><button class='remover_todos_produtos' onclick=remover_todos_produtos('"  
		html_lista_carrinho += array_carrinho[index].replaceAll(" ", "").trim();
		html_lista_carrinho += "')> X</button>";
	})

	document.getElementById('listinha').innerHTML = html_lista_carrinho;

	html_lista_carrinho = ''

}

function remover_todos_produtos(outro_coiso){
	
	array_carrinho.forEach(function(merda){
		if (merda.replaceAll(" ", "").trim() == outro_coiso){
			console.log("Outro Coiso: " + outro_coiso)
			outra_merda = array_carrinho.indexOf(merda)
			console.log("Outra Merda: " + outra_merda)
		}
	})

	console.log(array_carrinho.length)

	if (array_carrinho.length > 5){
		document.getElementById('formulário_de_compra').style.marginBottom = (6 - array_carrinho.length) * -70 + "px";
	}
	array_quantidade.splice(outra_merda, 1)
	array_carrinho.splice(outra_merda, 1)
	array_valor.splice(outra_merda, 1)

	array_carrinho.forEach((produto, index) =>{
		html_lista_carrinho += "<li><b class='nome_produto'>" + produto + "</b><b class='tamanho_produto'>" + "</b><br><i class='quantidade_produto'>Quantidade: </i>" + array_quantidade[index] + "<br><i class='quantidade_produto'>Valor: R$" + array_valor[index] + ",00</i></li><br><button class='remover_um_produto' onclick = remover_um_produto('"
		html_lista_carrinho += array_carrinho[index].replaceAll(" ", "").trim();
		html_lista_carrinho += "');>--</button><button class='remover_todos_produtos' onclick=remover_todos_produtos('"  
		html_lista_carrinho += array_carrinho[index].replaceAll(" ", "").trim();
		html_lista_carrinho += "')> X</button>";
	})

	document.getElementById('listinha').innerHTML = html_lista_carrinho;

	html_lista_carrinho = ''

	var_soma = 0;

	array_valor.forEach(function(valor){
		var_soma += valor;
	});

	document.getElementById('total').innerHTML = "Total -------------------- R$ " + var_soma + ",00";
}

document.getElementById("a").innerHTML = "Sua compra totalizou em: R$" + localStorage.getItem('Total') + ",00";