import say from 'say'

export const speak = (text: string): Promise<void> => {
  return new Promise((res, rej) => {
    say.speak(text, undefined, undefined, (err) => {
      if (err) rej(err)
      res()
    })
  })
}