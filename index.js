console.log('script start');

setTimeout(() => {
  console.log('setTimeout')
}, 0)

Promise.resolve().then(() => {
  console.log('promise1')
  Promise.resolve().then(() => {
    console.log('promise2')
  })
})

// .then(() => {
//   console.log('promise4')
// }).then(() => {
//   console.log('promise5')
// }).then(() => {
//   console.log('promise6')
// })

// Promise.resolve().then(() => {
//   console.log('promise2')
// }).then(() => {
//   console.log('promise3')
// })

console.log('script end');