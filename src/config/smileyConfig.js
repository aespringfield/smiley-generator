const CONFIG = {
    // features in order that they appear in the smiley (from left to right)
    FEATURE_ORDER: ['hair', 'eyes', 'nose', 'mustache', 'mouth'],
    DEFAULT_FEATURES: [
        {
            name: 'hair',
            allowed: true,
            required: true,
            characterOptions: [
                {
                    character: '~',
                    allowed: true
                },
                {
                    character: '<',
                    allowed: true
                },
                {
                    character: '{',
                    allowed: true
                }
            ]
        },
        {
            name: 'eyes',
            allowed: true,
            required: true,
            characterOptions: [
                {
                    character: ':',
                    allowed: true
                },
                {
                    character: ';',
                    allowed: true
                },
                {
                    character: '8',
                    allowed: true
                }
            ]
        },
        {
            name: 'nose',
            allowed: true,
            required: false,
            characterOptions: [
                {
                    character: '-',
                    allowed: true
                },
                {
                    character: '~',
                    allowed: true
                },
                {
                    character: '^',
                    allowed: true
                }
            ]
        },
        {
            name: 'mustache',
            allowed: false,
            required: false,
            characterOptions: [
                {
                    character: '{',
                    allowed: true
                },
                {
                    character: '|',
                    allowed: true
                }
            ]
        },
        {
            name: 'mouth',
            allowed: true,
            required: true,
            characterOptions: [
                {
                    character: ')',
                    allowed: true
                },
                {
                    character: 'D',
                    allowed: true
                },
                {
                    character: '(',
                    allowed: false
                },
                {
                    character: 'o',
                    allowed: false
                },
                {
                    character: 'P',
                    allowed: false
                },
                {
                    character: '/',
                    allowed: false
                },
                {
                    character: '*',
                    allowed: false
                },
                {
                    character: '[',
                    allowed: false
                },
                {
                    character: ']',
                    allowed: false
                }
            ]
        }
    ]
};

export default CONFIG;