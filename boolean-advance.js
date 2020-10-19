let isAccountLocked = false
let userRole = 'user'

if(isAccountLocked) {
    console.log('Is Account Locked')
} else if (userRole === 'admin') {
    console.log('Welcome Admin')
}
else {
    console.log('Welcome!')
}