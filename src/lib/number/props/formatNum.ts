export default function formatNum(num: number) {
  if(num > 9) return num
  return `0${num}`
}