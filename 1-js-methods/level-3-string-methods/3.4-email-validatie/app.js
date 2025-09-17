console.log('🚀 Opdracht 3.4: Email Validatie');

function valideerEmail(email) {
    const schoonEmail = email.trim();

    
    if (!schoonEmail.includes('@')) {
        return false;
    }

    if (schoonEmail.includes(' ')) {
        return false;
    }

    
    const geldigeEindes = ['.com', '.nl', '.org'];
    const heeftGeldigEinde = geldigeEindes.some(ext => schoonEmail.endsWith(ext));

    if (!heeftGeldigEinde) {
        return false;
    }

    return true;
}


const testEmails = [
    'jan@test.com',
    'marie@voorbeeld.nl',
    'fout@test.be',
    'fout email@test.com'
];

testEmails.forEach(email => {
    console.log(`${email}: ${valideerEmail(email)}`);
});
       