const data = [
  {
    "day": "mon",
    "amount": 17.45
  },
  {
    "day": "tue",
    "amount": 34.91
  },
  {
    "day": "wed",
    "amount": 52.36
  },
  {
    "day": "thu",
    "amount": 31.07
  },
  {
    "day": "fri",
    "amount": 23.39
  },
  {
    "day": "sat",
    "amount": 43.28
  },
  {
    "day": "sun",
    "amount": 25.48
  }
]

const bars = document.querySelectorAll('.bar');
for (var i = 0; i < bars.length; i++) {
  const day = data[i];
  const bar = bars[i];
  bar.setAttribute('data-amount', day.amount)
  let h = day.amount / 100 * 200
  bar.style.setProperty('--h', h + 'px')
  bar.style.setProperty('--d', 500 + 30 * i + 'ms')
}
