
export const name = {
  first: 'Ganesh',
  last: 'Basa',
  get full() { return ( this.first + ' ' + this.last ) }
}

export const email = 'hello@ganeshbasa.click'

export const web = 'ganeshbasa.click'

export const linkedin = {
  user: 'ganeshbasa',
  base: 'https://www.linkedin.com/in',
  get link() { return ( this.base + '/' + this.user ) }
}

export const github = {
  user: 'GaneshBasa',
  base: 'https://github.com',
  get link() { return ( this.base + '/' + this.user ) }
}
