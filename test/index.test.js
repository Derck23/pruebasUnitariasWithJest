const hash = require('../test/testindex');

test('Verificar hash',() => {
    const message = 'Contraseña';
    const hashedMessage = hash(message);
    expect(hashedMessage).toEqual('a389a638dec32538f55b0c8dc5c84f84aad65bcd5aacd5f05d36f30b71271a6b');
});