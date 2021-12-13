const main = async () => {
  console.log('main')
}

main()
  .then(() => console.log('Goodbye!'))
  .catch(err => {
    console.error(err)
  })