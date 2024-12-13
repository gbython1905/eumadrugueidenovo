const inputCep = document.querySelector('#inputSearch5');
      const btn = document.querySelector('#btnEnviar');
      const conteudo = document.querySelector('#conteudo');
      const loading = document.querySelector('#loading');

      const buscaCep = async (cep) => {
        loading.style.display = 'block';  // Exibe o carregamento
        const resposta = await fetch(`https://cep.awesomeapi.com.br/json/${cep}`);
        const dados = await resposta.json();
        loading.style.display = 'none'; // Esconde o carregamento
        
        conteudo.innerHTML = ''; // Limpa o conteúdo antes de mostrar a nova informação

        if (dados.address) {
          conteudo.innerHTML = `${dados.address}, ${dados.district}, ${dados.city} - ${dados.state}`;
        } else {
          conteudo.innerHTML = 'CEP não encontrado, tente novamente mais tarde!';
        }
      };

      const cepEncontrado = (e) => {
        e.preventDefault();
        if (inputCep.value === '') {
          conteudo.innerHTML = 'Por favor, preencha o CEP corretamente.';
        } else {
          const cep = inputCep.value.replace('.', '').replace('-', '');
          buscaCep(cep);
        }
      };

      btn.addEventListener('click', cepEncontrado);