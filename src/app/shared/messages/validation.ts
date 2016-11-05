import { MessageStaticLoader } from 'ng2-custom-validation/index';

export function messageLoaderFactory() {
    return new MessageStaticLoader({
        'required': 'El :attribute es requerido',
        'minlength': 'El :attribute debe tener al menos :min carácteres.',
        'maxlength': 'El :attribute no puede tener más de :max carácteres.',
        'pattern': 'El formato del campo :attribute es inválido.',
        'customAttributes': {
            'name': 'nombre',
            'password': 'contraseña',
            'email': 'correo electrónico',
            'acronym': 'acrónimo'
        }
    });
}