const ValidationError = require('../core/exceptions')

const save = user => {
    let {name, username, email, address_id, company_id, phone, website} = user;

    name = name.trim();
    username = username.trim();
    email = email.trim();
    phone = phone.trim();
    website = website.trim();

    // Nombres
    if(name.length === 0 ) {
        throw new ValidationError("Debe contener un name")
    }

    if(username.length === 0 ) {
        throw new ValidationError("Debe contener un username")
    }

    if(email.length === 0 ) {
        throw new ValidationError("Debe contener un email")
    }

    if(phone.length === 0 ) {
        throw new ValidationError("Debe contener un phone")
    }

    if(website.length === 0 ) {
        throw new ValidationError("Debe contener un website")
    }


}

module.exports = {
    save
} 