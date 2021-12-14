import { speak } from './speak'

enum TimeOfDay {
  Morning = 'Morning',
  Afternoon = 'Afternoon',
  Evening = 'Evening',
  Night = 'Night'
}

const getTimeOfDay = (hour: number): TimeOfDay => {
  if (hour >= 6 && hour < 12) {
    return TimeOfDay.Morning
  } else if (hour >= 12 && hour < 17) {
    return TimeOfDay.Afternoon
  } else if (hour >= 17 && hour < 20) {
    return TimeOfDay.Evening
  }
  return TimeOfDay.Night
}

const getGreeting = (username: string): string => {
  const timeOfDay = getTimeOfDay(new Date().getHours())
  
  if (timeOfDay === TimeOfDay.Night) {
    return `Hi, ${username}. How may I assist you tonight?`
  }

  return `Good ${timeOfDay}, ${username}. How may I assist you?`
}

export const greet = async () => {
  const greeting = getGreeting('Lindell')
  await speak(greeting)
}