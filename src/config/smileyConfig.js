const CONFIG = {
    // features in order that they appear in the smiley (from left to right)
    FEATURE_ORDER: ['hair', 'eyes', 'nose', 'mustache', 'mouth'],
    DEFAULT_FEATURES: [
        {
            name: 'hair',
            allowed: true,
            required: true,
            characters: [
                {
                    name: '~',
                    allowed: true
                },
                {
                    name: '<',
                    allowed: true
                },
                {
                    name: '{',
                    allowed: true
                }
            ]
        },
        {
            name: 'eyes',
            allowed: true,
            required: true,
            characters: [
                {
                    name: ':',
                    allowed: true
                },
                {
                    name: ';',
                    allowed: true
                },
                {
                    name: '8',
                    allowed: true
                }
            ]
        },
        {
            name: 'nose',
            allowed: true,
            required: false,
            characters: [
                {
                    name: '-',
                    allowed: true
                },
                {
                    name: '~',
                    allowed: true
                },
                {
                    name: '^',
                    allowed: true
                }
            ]
        },
        {
            name: 'mustache',
            allowed: false,
            required: false,
            characters: [
                {
                    name: '{',
                    allowed: true
                },
                {
                    name: '|',
                    allowed: true
                }
            ]
        },
        {
            name: 'mouth',
            allowed: true,
            required: true,
            characters: [
                {
                    name: ')',
                    allowed: true
                },
                {
                    name: 'D',
                    allowed: true
                },
                {
                    name: '(',
                    allowed: false
                },
                {
                    name: 'o',
                    allowed: false
                },
                {
                    name: 'P',
                    allowed: false
                },
                {
                    name: '/',
                    allowed: false
                },
                {
                    name: '*',
                    allowed: false
                },
                {
                    name: '[',
                    allowed: false
                },
                {
                    name: ']',
                    allowed: false
                }
            ]
        }
    ]
};

export default CONFIG;