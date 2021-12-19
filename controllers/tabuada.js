const list = (req, res) => {
  const numeros = []
  for (let i = 1; i <= 100; i++) {
    numeros.push(i)
  }
  res.render('tabuada/list', { numeros })

}

const tabuada = (req, res) => {
  const tabNumeros = []
  const { num } = req.params
  for (let i = 0; i <= 100; i++) {
    tabNumeros.push({
      num,
      i,
      resultado: num * i
    })
  }
  res.render('tabuada/tabuada', {
    num: req.params.num,
    tabNumeros
  })
}


module.exports = {
  list,
  tabuada
}