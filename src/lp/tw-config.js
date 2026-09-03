tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        chumbo: {
                            950: '#090b10',
                            900: '#11141d',
                            800: '#1a1f2c',
                            700: '#262d3e'
                        },
                        roxo: {
                            400: '#c084fc',
                            500: '#a855f7',
                            600: '#9333ea',
                            700: '#7e22ce',
                            900: '#3b0764'
                        },
                        neon: {
                            300: '#bef264',
                            400: '#a3e635',
                            500: '#84cc16',
                            yellow: '#ccff00'
                        }
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        heading: ['Montserrat', 'sans-serif'],
                    },
                    boxShadow: {
                        'glow-neon': '0 0 25px -5px rgba(190, 242, 100, 0.4)',
                        'glow-roxo': '0 0 30px -5px rgba(168, 85, 247, 0.5)',
                        '3d': '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.3)',
                    }
                }
            }
        }
    