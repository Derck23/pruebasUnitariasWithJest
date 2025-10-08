import cryoto from 'crypto';

function hash(messige) {
    const hash = cryoto.createHash('sha256');
    hash.update(messige);
    return hash.digest('hex');
}

module.exports = hash;