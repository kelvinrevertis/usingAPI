const cep = document.getElementById('cep')
const inputForm =(address)=>{
  document.getElementById('rua').value = address.logradouro
  document.getElementById('bairro').value = address.bairro
  document.getElementById('cidade').value = address.localidade
  document.getElementById('estado').value = address.uf

}
const searchCep = async()=>{   
    const valueCep = cep.value
    const url = `https://viacep.com.br/ws/${valueCep}/json/`
    const data = await  fetch(url)
    const address = await data.json()
    inputForm(address)

}

cep.addEventListener('focusout', searchCep)