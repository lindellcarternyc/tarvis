import { greet } from './greet'

const main = async () => {
  await greet()
}

main()
  .then(() => console.log('Goodbye!'))
  .catch(err => {
    console.error(err)
  })